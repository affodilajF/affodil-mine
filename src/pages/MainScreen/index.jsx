import ContactIcon from "../../components/ContactIcon";

// import { Center, Image, Box } from "@chakra-ui/react";

export default function MainScreen() {
  return (
    <div className="bg-bgwhite">
      <div className="px-5 md:px-8 lg:px-14 relative overflow-hidden ">
        <div className="circlePosition w-[420px] h-[300px] bg-bgpurple-2 rounded-full absolute top-[-80px] left-[20px] blur-[90px]"></div>

        <div className="circlePosition w-[420px] h-[400px] bg-bgpurple-1 rounded-full absolute top-[2px] left-[-200px] blur-[90px]"></div>

        <div className="circlePosition w-[420px] h-[400px] bg-bgpurple-3 rounded-full absolute top-[100px] right-[-200px] blur-[90px]"></div>

        <div className="circlePosition w-[420px] h-[300px] bg-bgpurple-2 rounded-full absolute top-[550px] left-[-200px] blur-[90px]"></div>

        <div className="about relative">
          <div className="pt-20 ">
            <Name />
          </div>
          <div className="pt-6">
            <a className="text-sm text-purple-1">
              An enthusiastic{" "}
              <span className="font-bold">Software Engineering</span>{" "}
              undergraduate student at UGM, deeply passionate about{" "}
              <span className="font-bold">
                mobile and web development.
                <br></br>
              </span>
              I am not limited to just web and mobile; if given the opportunity,
              I am keen to learn and excel in other areas as well.
            </a>
          </div>
          <div className="mt-5">
            <ContactIcon />
          </div>

          <div className="flex flex-col items-center justify-center h-full pt-16 space-y-4">
            <a className="text-md text-center text-purple-5">
              {" "}
              Here is my <span className="font-bold"> projects! </span>
            </a>
            {/* <SectionName
              title="Web Development"
              bgcolor={"white-40"}
              textcolor={"purple-3"}
            /> */}
            <div className="text-purple-1 bg-white-40 pr-12 pl-12 pt-2 pb-2 rounded-3xl border border-black-100 font-bold">
              <p> Web Development </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center pt-2">
            <Card
              deployedlink="https://affodilajf.github.io/static-web-innisfree/"
              title="Innisfree Greentea"
              isDeployed={true}
              imagepath="src\assets\innisfree2.png"
              type="College Project"
              borderColor=" border-white-100"
              description={
                <>
                  Online shopping web. The website has two versions, static web
                  <span className="font-bold"> HTML, CSS, JS </span>
                  and dynamic with
                  <span className="font-bold"> Bootstrap and PHP MySQL </span>
                  also.
                </>
              }
            />

            <Card
              title="KUR Jogja"
              isDeployed={false}
              imagepath="src\assets\api.png"
              type="College Project | On Going"
              borderColor=" border-black-100"
              // deployedlink="https://affodilajf.github.io/static-web-innisfree/"
              description={
                <>
                  As a <span className="font-bold">backend developer</span>, i
                  am tasked to make REST full API for{" "}
                  <span className="font-bold">dashboard statictics</span> and
                  migrate from{" "}
                  <span className="font-bold">laravel 6 to laravel 10.</span>
                </>
              }
            />
          </div>

          <div className="flex flex-col items-center justify-center h-full pt-14 space-y-4">
            <div className="text-white-100 bg-purple-3 pr-12 pl-12 pt-2 pb-2 rounded-3xl border border-black-100 font-bold">
              <p> Mobile Development </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center pt-2">
            <Card
              title="KUR Jogja"
              isDeployed={false}
              imagepath="src\assets\api.png"
              type="College Project | On Going"
              borderColor=" border-black-100"
              description={
                <>
                  As a <span className="font-bold">backend developer</span>, i
                  am tasked to make REST full API for{" "}
                  <span className="font-bold">dashboard statictics</span> and
                  migrate from{" "}
                  <span className="font-bold">laravel 6 to laravel 10.</span>
                </>
              }
            />

            <Card
              title="ChatterBotica"
              isDeployed={false}
              imagepath="src\assets\innisfree2.png"
              type="Personal Project | On Going"
              borderColor=" border-white-100"
              description={
                <>
                  With Text-to-Speech and Speech-to-Text capabilities and
                  powered by the GPT model, it transforms smartphone into a{" "}
                  <span className="font-bold">conversational partner. </span>{" "}
                  Build in Kotlin utilizing Jetpack Compose, Dagger Hilt,
                  Retrofit, MVVM, and Repository Pattern.
                </>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({
  title,
  description,
  isDeployed,
  imagepath,
  type,
  borderColor,
  deployedlink,
}) {
  return (
    <div className="p-2">
      <div
        className={`flex flex-row bg-white-40 p-4 lg:m-4 rounded-2xl border max-w-lg space-around border-${borderColor} transition-all duration-300 ease-in-out hover:scale-105 `}
      >
        <div className="flex flex-col items-center flex-1 p-3">
          <p className="font-bold text-purple-1 text-xl flex-5">{title}</p>
          <p style={{ fontSize: "0.5rem" }} className="text-xs flex-5">
            {type}
          </p>

          <p
            style={{ fontSize: "0.7rem" }}
            className="text-purple-5 text-xs flex-1 text-center pt-3 justify-center lg:items-center"
          >
            {description}
          </p>

          <div className="flex flex-row items-center ">
            {isDeployed ? (
              <a
                href={deployedlink}
                className="bg-purple-4 px-6 py-1  rounded-3xl border border-black-100 font-bold text-purple-1 mr-2 flex items-center justify-center text-xs"
              >
                Click here!
              </a>
            ) : null}

            <div className="inline-block bg-white-40 rounded-full border border-white-100 ">
              <a href="https://github.com/affodilajF">
                <img
                  className="h-8 w-8 p-2"
                  src="src\assets\github-icons.png"
                  alt="GitHub Icon"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center flex-1">
          <img className="h-45 w-45 p-2.5 " src={imagepath} alt="project img" />
        </div>
      </div>
    </div>
  );
}

function Name() {
  return (
    <div>
      <div className="inline-block bg-white-40 p-4 rounded-2xl border border-white-100">
        <a className="text-4xl font-bold text-purple-2 mb-4">
          Affodilaj Fadil.
        </a>
      </div>
    </div>
  );
}
