import goicons from "../assets/golang.png";

// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

export default function InterestingTechStack() {
  // useEffect(() => {
  //   AOS.init({ duration: 1000 });
  // }, []);

  return (
    <div className="mt-8">
      <div className="flex item-center justify-center flex-wrap animate-pulse">
        <img src={goicons} alt="" className="h-16 w-21 p-1 m-3" />
      </div>
    </div>
  );
}
