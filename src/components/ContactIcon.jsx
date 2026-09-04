import githubicon from "../assets/github-icons.webp";
import igicon from "../assets/instagram.webp";
import behanceicon from "../assets/behance.webp";
import linkedinicon from "../assets/linkedin-icons.webp";

const ICONS = {
  linkedin: {
    href: "https://www.linkedin.com/in/fadhila-a-salsabilla/",
    src: linkedinicon,
    alt: "LinkedIn",
  },
  github: {
    href: "https://github.com/affodilajF",
    src: githubicon,
    alt: "GitHub Icon",
  },
  instagram: {
    href: "https://instagram.com/affodilaj",
    src: igicon,
    alt: "Instagram",
  },
  behance: {
    href: "https://www.behance.net/affodilaj",
    src: behanceicon,
    alt: "Behance",
  },
};

export default function ContactIcon({
  icons = ["linkedin", "github", "instagram", "behance"],
  bare = false,
}) {
  return (
    <div
      {...(bare ? {} : { "data-aos": "fade-right", "data-aos-duration": "1200" })}
    >
      {icons.map((key) => {
        const { href, src, alt } = ICONS[key];
        return (
          <div
            key={key}
            className={
              bare
                ? "mr-1 inline-block rounded-full transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
                : "mr-4 inline-block bg-white-40 border border-black-100 rounded-full transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
            }
          >
            <a href={href} target="_blank">
              <img className="h-10 w-10 p-2.5 dark:invert" src={src} alt={alt} />
            </a>
          </div>
        );
      })}
    </div>
  );
}
