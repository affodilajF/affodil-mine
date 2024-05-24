import htmlicons from "../assets/html.png";
import cssicons from "../assets/css.png";
import jsicons from "../assets/js.png";
import laravelicons from "../assets/laravel.png";
import pythonicons from "../assets/python.png";
import javaicons from "../assets/java.png";

import composeicons from "../assets/jetpack.png";
import kotlinicons from "../assets/kotlin.png";
import reacticons from "../assets/react.png";
import tailwindicons from "../assets/tailwind.png";

// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

export default function UsedTechStack() {
  // useEffect(() => {
  //   AOS.init({ duration: 1000 });
  // }, []);

  return (
    <div className="mt-8">
      <div className="flex item-center justify-center flex-wrap animate-spin">
        <img src={htmlicons} alt="" className="h-20 w-20  p-1 m-3" />
        <img src={cssicons} alt="" className="h-20 w-20  p-1 m-3" />
        <img src={jsicons} alt="" className="h-20 w-20  p-1 m-3" />
        <img src={laravelicons} alt="" className="h-20 w-20  p-1 m-3" />
        <img src={pythonicons} alt="" className="h-20 w-20  p-1 m-3" />
        <img src={javaicons} alt="" className="h-20 w-30  p-1 m-3" />
      </div>
      <div className="flex item-center justify-center flex-wrap animate-pulse">
        <img src={composeicons} alt="" className="h-20 w-20  p-1 m-3" />
        <img src={kotlinicons} alt="" className="h-20 w-20  p-1 m-3" />
        <img src={reacticons} alt="" className="h-13 w-20  p-1 m-3" />
        <img src={tailwindicons} alt="" className="h-15 w-20  p-1 m-3" />
      </div>
    </div>
  );
}
