import { useEffect, useRef, useState } from "react";

import IMAGES from "../assets/newassets/images";
import GALLERIES from "../assets/newassets/galleries";
import githubicon from "../assets/github-icons.webp";

// turns **marked** stretches of a JSON string into bold text
function RichText({ children }) {
  if (!children) return null;

  return children.split(/\*\*(.+?)\*\*/g).map((part, index) =>
    index % 2 ? (
      <span key={index} className="font-bold text-purple-2">
        {part}
      </span>
    ) : (
      part
    )
  );
}

export default function ProjectModal({ project, onClose }) {
  // the cover plus any extra diagrams, the first one shown large
  const shots = project
    ? [
        { src: IMAGES[project.id], label: project.title },
        ...(GALLERIES[project.id] ?? []),
      ]
    : [];
  const [activeShot, setActiveShot] = useState(0);
  const trackRef = useRef(null);

  // the first shot sets the frame; every other one is contained inside it
  const coverSrc = shots[0]?.src ?? null;
  const [cover, setCover] = useState({ src: null, ratio: null });
  const frameRatio = cover.src === coverSrc ? cover.ratio : null;

  const measureCover = (node) => {
    if (!node?.complete || !node.naturalHeight) return;

    const ratio = node.naturalWidth / node.naturalHeight;
    // bail out when unchanged, otherwise the ref callback would loop
    setCover((prev) =>
      prev.src === coverSrc && prev.ratio === ratio
        ? prev
        : { src: coverSrc, ratio }
    );
  };

  // the scroll position is the source of truth; the index just follows it
  const handleScroll = (event) => {
    const { scrollLeft, clientWidth } = event.currentTarget;
    setActiveShot(Math.round(scrollLeft / clientWidth));
  };

  const goToShot = (index) => {
    const track = trackRef.current;
    if (!track) return;

    const clamped = Math.max(0, Math.min(index, shots.length - 1));
    track.scrollTo({ left: clamped * track.clientWidth, behavior: "smooth" });
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;

      // read the position off the track so this stays independent of render state
      const track = trackRef.current;
      if (!track) return;

      const current = Math.round(track.scrollLeft / track.clientWidth);
      const next = event.key === "ArrowRight" ? current + 1 : current - 1;
      const clamped = Math.max(0, Math.min(next, track.children.length - 1));
      track.scrollTo({ left: clamped * track.clientWidth, behavior: "smooth" });
    };

    // keep the page behind the overlay from scrolling
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-start justify-center bg-black-50 backdrop-blur-sm p-4 overflow-y-auto"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="relative bg-panel w-full max-w-3xl my-8 rounded-2xl border border-white-100 p-6 md:p-10"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-5 text-purple-1 text-2xl font-bold leading-none hover:text-purple-5"
        >
          &times;
        </button>

        {/* swipe on touch, arrow keys on desktop; the frame follows the first shot */}
        <div
          ref={trackRef}
          onScroll={handleScroll}
          style={{ aspectRatio: frameRatio ?? 16 / 9 }}
          className="flex w-full max-h-[75vh] snap-x snap-mandatory overflow-x-auto rounded-xl border border-white-100 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {shots.map((shot, index) => (
            <img
              key={shot.src}
              ref={index === 0 ? measureCover : undefined}
              onLoad={index === 0 ? (event) => measureCover(event.currentTarget) : undefined}
              className="h-full w-full shrink-0 snap-center object-contain"
              src={shot.src}
              alt={shot.label}
            />
          ))}
        </div>

        {shots.length > 1 ? (
          <>
            {/* dots on phones, where swiping already does the navigating */}
            <div className="flex justify-center gap-2 pt-3 md:hidden">
              {shots.map((shot, index) => (
                <button
                  key={shot.src}
                  type="button"
                  onClick={() => goToShot(index)}
                  title={shot.label}
                  aria-label={shot.label}
                  aria-pressed={index === activeShot}
                  className={`h-2 rounded-full transition-all ${
                    index === activeShot
                      ? "w-6 bg-purple-3"
                      : "w-2 bg-purple-5 opacity-40"
                  }`}
                />
              ))}
            </div>

            <div className="hidden md:flex flex-wrap gap-3 pt-3">
              {shots.map((shot, index) => (
                <button
                  key={shot.src}
                  type="button"
                  onClick={() => goToShot(index)}
                  title={shot.label}
                  aria-label={shot.label}
                  aria-pressed={index === activeShot}
                  className={`w-24 rounded-lg overflow-hidden border-2 transition-opacity ${
                    index === activeShot
                      ? "border-purple-3"
                      : "border-white-100 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img className="w-full" src={shot.src} alt="" />
                </button>
              ))}
            </div>
          </>
        ) : null}

        <h2 className="font-bold text-purple-1 text-2xl lg:text-3xl pt-6">
          {project.title}
        </h2>
        {project.type ? (
          <p className="text-purple-5 text-sm pt-1">{project.type}</p>
        ) : null}

        {project.about ? (
          <p className="text-purple-5 text-sm pt-3 leading-relaxed whitespace-pre-line">
            <RichText>{project.about}</RichText>
          </p>
        ) : null}

        {project.role ? (
          <p className="text-purple-1 text-sm font-bold pt-3">
            Role: <span className="font-normal">{project.role}</span>
          </p>
        ) : null}

        {project.teamSize ? (
          <p className="text-purple-1 text-sm font-bold pt-1">
            Team Size: <span className="font-normal">{project.teamSize}</span>
          </p>
        ) : null}

        {project.timeline ? (
          <p className="text-purple-1 text-sm font-bold pt-1">
            Timeline: <span className="font-normal">{project.timeline}</span>
          </p>
        ) : null}

        <div className="flex flex-wrap gap-2 pt-4">
          {project.techstack.map((tech) => (
            <span
              key={tech}
              className="text-purple-1 bg-white-40 px-4 py-1 rounded-3xl border border-white-100 text-xs font-bold"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.description ? (
          <p className="text-purple-5 text-sm pt-6 leading-relaxed whitespace-pre-line">
            <RichText>{project.description}</RichText>
          </p>
        ) : null}

        {project.overview ? (
          <>
            <h3 className="font-bold text-purple-1 text-lg pt-6">
              Project Overview
            </h3>
            <p className="text-purple-5 text-sm pt-2 leading-relaxed whitespace-pre-line">
              <RichText>{project.overview}</RichText>
            </p>
          </>
        ) : null}

        {project.architecture ? (
          <>
            <h3 className="font-bold text-purple-1 text-lg pt-6">
              System Architecture
            </h3>
            <p className="text-purple-5 text-sm pt-2 leading-relaxed whitespace-pre-line">
              <RichText>{project.architecture}</RichText>
            </p>
          </>
        ) : null}

        {project.scope?.length ? (
          <>
            <h3 className="font-bold text-purple-1 text-lg pt-6">
              Scope of Work
            </h3>
            <ul className="pt-2 space-y-2">
              {project.scope.map((item) => (
                <li
                  key={item}
                  className="text-purple-5 text-sm leading-relaxed flex gap-2"
                >
                  <span aria-hidden="true">&bull;</span>
                  <span>
                    <RichText>{item}</RichText>
                  </span>
                </li>
              ))}
            </ul>
          </>
        ) : null}

        {project.features?.length ? (
          <>
            <h3 className="font-bold text-purple-1 text-lg pt-6">Features</h3>
            <ul className="pt-2 space-y-2">
              {project.features.map((feature) => (
                <li
                  key={feature.text}
                  className="text-purple-5 text-sm leading-relaxed flex gap-2"
                >
                  <span aria-hidden="true">&bull;</span>
                  <span>
                    <RichText>{feature.text}</RichText>
                    {feature.link ? (
                      <>
                        {" "}
                        <a
                          target="_blank"
                          href={feature.link}
                          className="text-purple-3 font-bold underline break-all"
                        >
                          {feature.link}
                        </a>
                      </>
                    ) : null}
                  </span>
                </li>
              ))}
            </ul>
          </>
        ) : null}

        <div className="flex flex-wrap gap-3 pt-6">
          {project.seeMoreLink ? (
            <a
              target="_blank"
              href={project.seeMoreLink}
              className="inline-flex bg-purple-4 px-6 py-2 rounded-2xl border border-black-100 font-bold text-purple-1 text-sm transition-colors hover:bg-purple-3 hover:text-white-100"
            >
              Visit project
            </a>
          ) : null}

          {project.githubLink ? (
            <a
              target="_blank"
              href={project.githubLink}
              className="inline-flex items-center gap-2 bg-white-40 px-6 py-2 rounded-2xl border border-black-100 font-bold text-purple-1 text-sm transition-colors hover:bg-purple-3 hover:text-white-100"
            >
              <img className="h-4 w-4 dark:invert" src={githubicon} alt="" />
              View on GitHub
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
