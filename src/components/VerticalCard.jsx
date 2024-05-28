import githubicon from "../assets/github-icons.png";
export default function VerticalCard({
  title,
  description,
  isDeployed,
  imagepath,
  type,
  borderColor,
  deployedlink,
  githubLink,
  isFigma,
  figmalink,
  animation
}) {
  return (
    <div className="p-2" data-aos={animation} data-aos-duration="1200">
      <div
        className={` flex flex-col  bg-white-40 p-4 lg:m-4 rounded-2xl border max-w-lg space-around border-${borderColor} transition-all duration-300 ease-in-out hover:scale-105 `}
      >
        <div className="flex flex-col items-center flex-1 p-3">
          <p className="font-bold text-purple-1 text-lg lg:text-xl flex-5">
            {title}
          </p>
          <p style={{ fontSize: "0.5rem" }} className="text-xs flex-5">
            {type}
          </p>

          <div className="flex flex-row items-center pt-3 ">
            {isDeployed ? (
              <a
                href={deployedlink}
                className="bg-purple-4 px-6 py-1  rounded-3xl border border-black-100 font-bold text-purple-1 mr-2 flex items-center justify-center text-xs"
              >
                Click here!
              </a>
            ) : null}

            <div className="mr-2 inline-block bg-white-40 rounded-full border border-white-100 ">
              <a href={githubLink}>
                <img
                  className="h-8 w-8 p-2"
                  src={githubicon}
                  alt="GitHub Icon"
                />
              </a>
            </div>

            {isFigma ? (
              <div className="inline-block bg-white-40 rounded-full border border-white-100 ">
                <a href={figmalink}>
                  <img
                    className="h-8 w-8 p-2"
                    src="src\assets\figmaoutline.png"
                    alt="GitHub Icon"
                  />
                </a>
              </div>
            ) : null}
          </div>

          <p
            style={{ fontSize: "0.7rem" }}
            className="text-purple-5 text-xs flex-1 text-center pt-3 justify-center lg:items-center max-w-[16rem] mx-auto"
          >
            {description}
          </p>
        </div>

        <div className="flex items-center justify-center flex-1">
          <img className="h-50 w-44" src={imagepath} alt="project img" />
        </div>
      </div>
    </div>
  );
}
