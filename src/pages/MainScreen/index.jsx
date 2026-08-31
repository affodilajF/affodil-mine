import { useState } from "react";

import ArtCard from "../../components/ArtCard";
import ContactIcon from "../../components/ContactIcon";
import Navbar from "../../components/Navbar";
import UsedTechStack from "../../components/UsedTechStack";
import UniversalCard from "../../components/UniversalCard";
import ProjectModal from "../../components/ProjectModal";

import art2 from "../../assets/art2.webp";
import projectData from "../../assets/newassets/data.json";
import IMAGES from "../../assets/newassets/images";

const CATEGORIES = projectData.categories;

// only projects that already have an image registered in images.js
const PROJECTS = projectData.projects.filter((project) => IMAGES[project.id]);

export default function MainScreen() {
  return <Screen />;
}

const Screen = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [openedProject, setOpenedProject] = useState(null);

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  // no chip selected is the "All" state
  const showingAll = selectedCategories.length === 0;

  const visibleProjects = showingAll
    ? PROJECTS
    : PROJECTS.filter((project) =>
        project.category.some((category) =>
          selectedCategories.includes(category)
        )
      );

  return (
    <div className="bg-bgwhite relative flex flex-col min-h-screen">
      <Navbar />

      {/* clipped so the blur circles cannot stretch the scrollable page past the footer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="circlePosition h-[300px] bg-bgpurple-2 rounded-full absolute top-[-80px] left-[20px] blur-[90px] w-[150px] sm:w-[380px] md:w-[400px]"></div>

      <div className="circlePosition w-[420px] h-[400px] bg-bgpurple-1 rounded-full absolute top-[2px] left-[-200px] blur-[90px]"></div>

      <div className="circlePosition w-[320px] h-[300px] bg-bgpurple-3 rounded-full absolute top-[1000px] right-[0px] blur-[90px] "></div>

      <div className="circlePosition w-[420px] h-[300px] bg-bgpurple-2 rounded-full absolute top-[550px] left-[-200px] blur-[90px]"></div>

      <div className="circlePosition h-[700px]  bg-bgpurple-5 rounded-full absolute top-[1550px] right-[150] blur-[90px] sm:w-[580px] md:w-[820px]"></div>

      <div className="circlePosition w-[520px] h-[600px] bg-bgpurple-1 rounded-full absolute top-[2000px] left-[-300px] blur-[90px]"></div>

      <div className="circlePosition  h-[400px] bg-bgpurple-3 rounded-full absolute top-[1800px] left-[100px] blur-[90px] sm:w-[380px] md:w-[420px]"></div>

        <div className="circlePosition w-[620px] h-[600px] bg-bgpurple-5 rounded-full absolute bottom-[0px] right-[0px] blur-[90px]"></div>
      </div>

      <div id="about" className="px-5 md:px-8 lg:px-14 relative ">
        <div className="about relative">
          <div className="pt-20 ">
            <Name />
          </div>
          <div className="pt-6" data-aos="fade-right" data-aos-duration="1200">
            <a className="text-sm text-purple-1">
              An enthusiastic{" "}
              <span className="font-bold">Software Engineering</span> graduate
              from UGM. <br></br>
              <span className="font-bold text-4xl animate-pulse">
                Software Engineer with a Testing Mindset{" "}
              </span>
              <br></br>
              <br></br>
              I build APIs and services with Go and Python, with a habit of
              testing what I build.
              <br></br>
              Additionally, my expertise in UI/UX design and visual art enhances
              the value of the products I create.
            </a>
          </div>
          <div className="mt-5">
            <ContactIcon />
          </div>
        </div>

        <div
          id="projects"
          className="flex flex-col items-center justify-center h-full pt-16 space-y-4"
          data-aos="zoom-in"
          data-aos-duration="1200"
        >
          <a className="text-md text-center text-purple-5">
            {" "}
            Here is my <span className="font-bold"> projects! </span>
          </a>

          <div className="flex flex-wrap items-center justify-center gap-2 px-4">
            <button
              type="button"
              aria-pressed={showingAll}
              onClick={() => setSelectedCategories([])}
              className={`pr-6 pl-6 pt-2 pb-2 rounded-3xl border border-black-100 font-bold text-sm transition-colors ${
                showingAll
                  ? "text-white-100 bg-purple-3"
                  : "text-purple-1 bg-white-40 hover:bg-white-100 dark:hover:bg-purple-3 dark:hover:text-white-100"
              }`}
            >
              All
            </button>

            {CATEGORIES.map((category) => {
              const isActive = selectedCategories.includes(category);
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => toggleCategory(category)}
                  className={`pr-6 pl-6 pt-2 pb-2 rounded-3xl border border-black-100 font-bold text-sm transition-colors ${
                    isActive
                      ? "text-white-100 bg-purple-3"
                      : "text-purple-1 bg-white-40 hover:bg-white-100 dark:hover:bg-purple-3 dark:hover:text-white-100"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto pt-14">
          {visibleProjects.map((project) => (
            <UniversalCard
              key={project.id}
              title={project.title}
              imagepath={IMAGES[project.id]}
              categories={project.category}
              onClick={() => setOpenedProject(project)}
            />
          ))}
        </div>

        <div className="flex flex-col items-center justify-center h-full pt-14 space-y-4">
          <a className="text-center text-purple-2">
            Besides that coding stuffsssssss,
            <br></br>I also enjoy to make{" "}
            <span className="font-bold">something aesthetics!</span>
            <br></br>Ranging from illustration, digital painting, and 3D
            Modelling.
          </a>
        </div>

        <div className="flex flex-wrap justify-center pt-2">
          <ArtCard imagepath={art2} borderColor="black-100" />
        </div>

        <div
          id="techstack"
          className="flex flex-col items-center justify-center h-full pt-14 space-y-4"
        >
          <div className="text-white-100 bg-orange-1 pr-12 pl-12 pt-2 pb-2 rounded-3xl border border-orange-2 font-bold">
            <p> Technologies I Use </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center h-full pt-14 space-y-4">
          <UsedTechStack />
        </div>

        <div className="pb-10"></div>
      </div>

      <Footer />

      {openedProject ? (
        <ProjectModal
          project={openedProject}
          onClose={() => setOpenedProject(null)}
        />
      ) : null}
    </div>
  );
};

function Footer() {
  return (
    <div className="relative mt-auto flex flex-col items-center bg-bgpurple-1 text-white-100 p-4">
      <a className="text-xs"> affodilaj fadil @2026 </a>
    </div>
  );
}

function Name() {
  return (
    <div
      data-aos="zoom-in"
      className="inline-block bg-white-40 p-4 rounded-2xl border border-white-100  animate-bounce fill-mode-forwards ... "
    >
      <a className="text-4xl font-bold text-purple-6 dark:text-white-100 mb-4">
        Affodilaj Fadil.
      </a>
    </div>
  );
}
