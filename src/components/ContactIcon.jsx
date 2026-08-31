import githubicon from "../assets/github-icons.webp";
import igicon from "../assets/instagram.webp";
import behanceicon from "../assets/behance.webp";
import linkedinicon from "../assets/linkedin-icons.webp";

export default function ContactIcon() {
  return (
    <div data-aos="fade-right" data-aos-duration="1200">
      <div className="mr-4 inline-block bg-white-40 rounded-full border border-black-100  transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ...">
        <a
          href="https://www.linkedin.com/in/fadhila-a-salsabilla/"
          target="_blank"
        >
          <img
            target="_blank"
            className="h-10 w-10 p-2.5 dark:invert"
            src={linkedinicon}
            alt="LinkedIn"
          />
        </a>
      </div>
      <div className="mr-4 inline-block bg-white-40 rounded-full border border-black-100 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ... ">
        <a href="https://github.com/affodilajF" target="_blank">
          <img className="h-10 w-10 p-2.5 dark:invert" src={githubicon} alt="GitHub Icon" />
        </a>
      </div>
      <div className="mr-4 inline-block bg-white-40 rounded-full border border-black-100 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ... ">
        <a href="https://instagram.com/affodilaj" target="_blank">
          <img className="h-10 w-10 p-2.5 dark:invert" src={igicon} alt="Instagram" />
        </a>
      </div>
      <div className="mr-4 inline-block bg-white-40 rounded-full border border-black-100 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ... ">
        <a href="https://www.behance.net/affodilaj" target="_blank">
          <img
            className="h-10 w-10 p-2.5 dark:invert"
            src={behanceicon}
            alt="Behance"
          />
        </a>
      </div>
    </div>
  );
}
