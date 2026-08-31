import htmlicons from "../assets/html.webp";
import cssicons from "../assets/css.webp";
import jsicons from "../assets/js.webp";
import laravelicons from "../assets/laravel.webp";
import pythonicons from "../assets/python.webp";
import javaicons from "../assets/java.webp";

import composeicons from "../assets/jetpack.webp";
import kotlinicons from "../assets/kotlin.webp";
import reacticons from "../assets/react.webp";
import tailwindicons from "../assets/tailwind.webp";

export default function Techstack() {
  return (
    <div className="mt-8">
      <div className="flex item-center justify-center flex-wrap ">
        <img src={htmlicons} alt="" className="h-20 w-20  p-1 m-3" />
        <img src={cssicons} alt="" className="h-20 w-20  p-1 m-3" />
        <img src={jsicons} alt="" className="h-20 w-20  p-1 m-3" />
        <img src={laravelicons} alt="" className="h-20 w-20  p-1 m-3" />
        <img src={pythonicons} alt="" className="h-20 w-20  p-1 m-3" />
      </div>
      <div className="flex item-center justify-center flex-wrap">
        <img src={composeicons} alt="" className="h-20 w-20  p-1 m-3" />
        <img src={kotlinicons} alt="" className="h-20 w-20  p-1 m-3" />
        <img src={reacticons} alt="" className="h-20 w-20  p-1 m-3" />
        <img src={tailwindicons} alt="" className="h-20 w-20  p-1 m-3" />
        <img src={javaicons} alt="" className="h-20 w-30  p-1 m-3" />
      </div>
    </div>
  );
}
