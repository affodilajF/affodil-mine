// import "./Navbar.css";

import { Link } from "react-router-dom";
import menuicon from "../assets/menuicon.png";

const Navbar = ({ scrollToDiv }) => {
  return (
    <div className="navbar backdrop-blur-sm bg-bgpurple-4 px-4 md:px-8 lg:px-16 sticky top-0 z-10 border-b  border-purple-3">
      <div className="md:navbar-center md:navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn-ghost lg:hidden">
            <div className="pr-2">
              <img src={menuicon} alt="" className="h-7 w-7" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={() => scrollToDiv("about")}>
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                About
              </Link>
            </li>
            <li onClick={() => scrollToDiv("projects")}>
              <Link
                to="/projects"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Projects
              </Link>
            </li>{" "}
            <li onClick={() => scrollToDiv("techstack")}>
              <Link
                to="/technologies"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Technologies
              </Link>
            </li>
          </ul>
        </div>
        <a className="sm:text-lg text-xs text-white-100">
          {" "}
          Affodil | Mobile | Web{" "}
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1  text-white-100">
          <li
            onClick={() => scrollToDiv("about")}
            className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ... "
          >
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              About
            </Link>
          </li>
          <li
            onClick={() => scrollToDiv("projects")}
            className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ... "
          >
            <Link
              to="/projects"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Projects
            </Link>
          </li>{" "}
          <li
            onClick={() => scrollToDiv("techstack")}
            className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ... "
          >
            <Link
              to="/techstack"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Technologies
            </Link>
          </li>
        </ul>
      </div>
    </div>
    // --------------
    // <div className="px-4 md:px-8 lg:px-16">
    // <div className="navbar bg-base-100 px-4 md:px-8 lg:px-16 sticky top-0 z-10">
    //   <div className="navbar-start">
    //     <div className="dropdown">
    //       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h8m-8 6h16"
    //           />
    //         </svg>
    //       </div>
    //       <ul
    //         tabIndex={0}
    //         className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
    //       >
    //         <li>
    //           <Link
    //             to="/about"
    //             style={{ textDecoration: "none", color: "inherit" }}
    //           >
    //             About
    //           </Link>
    //         </li>
    //         <li>
    // <Link
    //   to="/about"
    //   style={{ textDecoration: "none", color: "inherit" }}
    // >
    //   Projects
    // </Link>
    //         </li>
    //         <li>
    //           <Link
    //             to="/about"
    //             style={{ textDecoration: "none", color: "inherit" }}
    //           >
    //             Tech Stacks
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //     <a className=" text-xl font-bold"> </a>
    //   </div>
    //   <div className="navbar-end hidden lg:flex">
    //     <ul className="menu menu-horizontal px-1">
    //       <li>
    //         <Link
    //           to="/about"
    //           style={{ textDecoration: "none", color: "inherit" }}
    //         >
    //           About
    //         </Link>
    //       </li>
    //       <li>
    //         <Link
    //           to="/about"
    //           style={{ textDecoration: "none", color: "inherit" }}
    //         >
    //           Projects
    //         </Link>
    //       </li>
    //       <li>
    //         <Link
    //           to="/about"
    //           style={{ textDecoration: "none", color: "inherit" }}
    //         >
    //           Tech Stacks
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
};

export default Navbar;
