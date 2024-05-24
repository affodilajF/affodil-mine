
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


export default function Techstack() {

  return (
    <div className="mt-8">
      <div className="flex item-center justify-center flex-wrap ">
        <img src={htmlicons} alt="" className="h-20 w-20  p-1 m-3" />
        <img src={cssicons} alt="" className="h-20 w-20  p-1 m-3" />
        <img src={jsicons} alt="" className="h-20 w-20  p-1 m-3" />
        <img src={laravelicons} alt="" className="h-20 w-20  p-1 m-3" />
        <img src={pythonicons} alt="" className="h-20 w-20  p-1 m-3" />
        <img src={javaicons} alt="" className="h-20 w-30  p-1 m-3" />
      </div>
      <div className="flex item-center justify-center flex-wrap">
        <img src={composeicons} alt="" className="h-20 w-20  p-1 m-3" />
        <img src={kotlinicons} alt="" className="h-20 w-20  p-1 m-3" />
        <img src={reacticons} alt="" className="h-20 w-20  p-1 m-3" />
        <img src={tailwindicons} alt="" className="h-20 w-20  p-1 m-3" />
      </div>
    </div>
  );
}




