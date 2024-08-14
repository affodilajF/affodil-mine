import ArtCard from "../../components/ArtCard";
import CardCard from "../../components/CardCard";
import ContactIcon from "../../components/ContactIcon";
import HorizontalCard from "../../components/HorizontalCard";
import InterestingTechStack from "../../components/InterestingTechStack";
import Navbar from "../../components/Navbar";
import UsedTechStack from "../../components/UsedTechStack";
import VerticalCard from "../../components/VerticalCard";

import api from "../../assets/api.png";
import botica from "../../assets/botica.png";
import fitcal from "../../assets/fitcal.png";
import innisfree from "../../assets/innisfree2.png";
import hotel from "../../assets/hotelapp.png";
import art1 from "../../assets/art1.png";
import art2 from "../../assets/art2.png";
import data from "../../assets/data.png";
//haha

export default function MainScreen() {
  return <Screen />;
}

const Screen = () => {
  const scrollToDiv = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-bgwhite relative">
      <Navbar scrollToDiv={scrollToDiv} />

      <div className="circlePosition h-[300px] bg-bgpurple-2 rounded-full absolute top-[-80px] left-[20px] blur-[90px] w-[150px] sm:w-[380px] md:w-[400px]"></div>

      <div className="circlePosition w-[420px] h-[400px] bg-bgpurple-1 rounded-full absolute top-[2px] left-[-200px] blur-[90px]"></div>

      <div className="circlePosition w-[320px] h-[300px] bg-bgpurple-3 rounded-full absolute top-[1000px] right-[0px] blur-[90px] "></div>

      <div className="circlePosition w-[420px] h-[300px] bg-bgpurple-2 rounded-full absolute top-[550px] left-[-200px] blur-[90px]"></div>

      <div className="circlePosition h-[700px]  bg-bgpurple-5 rounded-full absolute top-[1550px] right-[150] blur-[90px] sm:w-[580px] md:w-[820px]"></div>

      <div className="circlePosition w-[520px] h-[600px] bg-bgpurple-1 rounded-full absolute top-[2000px] left-[-300px] blur-[90px]"></div>

      <div className="circlePosition  h-[400px] bg-bgpurple-3 rounded-full absolute top-[1800px] left-[100px] blur-[90px] sm:w-[380px] md:w-[420px]"></div>

      <div className="circlePosition w-[620px] h-[600px] bg-bgpurple-5 rounded-full absolute bottom-[0px] right-[0px] blur-[90px]"></div>

      <div id="about" className="px-5 md:px-8 lg:px-14 relative ">
        <div className="about relative">
          <div className="pt-20 ">
            <Name />
          </div>
          <div className="pt-6" data-aos="fade-right" data-aos-duration="1200">
            <a className="text-sm text-purple-1">
              An enthusiastic{" "}
              <span className="font-bold">Software Engineering</span>{" "}
              undergraduate student at UGM, deeply passionate about <br></br>
              <span className="font-bold text-4xl animate-pulse">
                mobile and web development,{" "}
              </span>
              <br></br>
              mainly using Kotlin (android), Laravel (backend), and ReactJS
              (frontend).
              <br></br>
              Additionally, my expertise in UI/UX design and visual art enhances
              the value of the products I create.
              <br></br>
              <br></br>
              Yet, as a growing interest in{" "}
              <span className="italic font-semibold"> Data Science </span>, my
              thirst for knowledge extends beyond these realms. I am driven to
              explore diverse domains and eager to seize new opportunities.
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
          <div className="text-purple-1 bg-white-40 pr-12 pl-12 pt-2 pb-2 rounded-3xl border border-black-100 font-bold">
            <p> Web Development </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center pt-2">
          <HorizontalCard
            deployedlink="https://affodilajf.github.io/static-web-innisfree/"
            title="Innisfree"
            isDeployed={true}
            imagepath={innisfree}
            type="College Project"
            borderColor=" border-white-100"
            isGithub={true}
            githubLink="https://github.com/affodilajF/static-web-innisfree/"
            animation="fade-right"
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

          <HorizontalCard
            title="KUR Jogja"
            isDeployed={false}
            imagepath={api}
            type="College Project | On Going"
            borderColor=" border-black-100"
            animation="fade-right"
            // deployedlink="https://affodilajf.github.io/static-web-innisfree/"
            description={
              <>
                As a <span className="font-bold">backend developer</span>, i am
                tasked to make REST full API for{" "}
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
          <VerticalCard
            githubLink="https://github.com/affodilajF/HotelBooking-App"
            title="HotelBook-Ku"
            isDeployed={false}
            imagepath={hotel}
            type="Personal Project | On Going"
            borderColor=" border-black-100"
            animation="fade-right"
            description={
              <>
                Is a sleek and intuitive{" "}
                <span className="font-bold">React Native UI </span> designed to
                effortlessly streamline the hotel booking experience, offering
                seamless navigation and visually appealing interfaces.
              </>
            }
          />

          <VerticalCard
            githubLink="https://github.com/affodilajF/ChatterBotica-Android"
            figmalink="https://www.figma.com/proto/ASncFchcEv1AJdl38jAsaq/Untitled?node-id=1-216&t=urH0LPrZWi1L8Gye-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A216"
            title="ChatterBotica"
            animation="fade-up"
            isDeployed={false}
            imagepath={botica}
            type="Personal Project | On Going"
            borderColor=" border-white-100"
            description={
              <>
                With Text-to-Speech and Speech-to-Text capabilities and powered
                by the GPT model, it transforms smartphone into a{" "}
                <span className="font-bold">conversational partner. </span>
                It also supports features such as image scanning & text extraction from images (using ML Kit), and PDF generation.{" "}
                <br></br> <br></br>
                Build in <span className="font-bold">
                  Kotlin
                </span> utilizing{" "}
                <span className="font-bold">
                  Jetpack Compose, Dagger Hilt, Retrofit, MVVM, and Repository
                  Pattern.{" "}
                </span>
              </>
            }
          />
          <CardCard />

          <VerticalCard
            githubLink="https://github.com/affodilajF/FitCal-AplikasiCalorieTracker_UAS"
            animation="zoom-in-down"
            title="FitCal"
            isDeployed={false}
            imagepath={fitcal}
            type="College Project"
            borderColor=" border-white-100"
            description={
              <>
                Streamlined Android app that simplifies calorie tracking.
                Crafted with <span className="font-bold">Kotlin</span>,
                utilizing{" "}
                <span className="font-bold">
                  Firebase Auth, Realtime DB, Room DB, Shared Preferences, and
                  Notification.
                </span>{" "}
                <br></br>
                <br></br>
              </>
            }
          />
        </div>

        <div className="flex flex-col items-center justify-center h-full pt-14 space-y-4">
          <div className="text-purple-1 bg-white-40 pr-12 pl-12 pt-2 pb-2 rounded-3xl border border-black-100 font-bold">
            <p> Data </p>
          </div>
        </div>

        <div className="flex justify-center">
          <HorizontalCard
            title="Prediction of Medical Insurance Charges using Multiple Linear Regression Model"
            // isDeployed={false}
            imagepath={data}
            type="College Project"
            borderColor=" border-black-100"
            animation="zoom-in-down"
            isDeployed={true}
            deployedlink="https://www.canva.com/design/DAGG-BL1mwo/OhKKMN9zV7ytaaOUaI3mbg/view?utm_content=DAGG-BL1mwo&utm_campaign=designshare&utm_medium=link&utm_source=editor"
            description={
              <>
                Linear Regression Model for Medical Insurance Charges using
                Python.
              </>
            }
          />
        </div>

        <div className="flex flex-col items-center justify-center h-full pt-14 space-y-4">
          <a className="text-center text-purple-2">
            Besides that coding stuffsssssss,
            <br></br>I also enjoy to make{" "}
            <span className="font-bold">something aesthetics!</span>
            <br></br>Ranging from UI/UX design, illustration, digital painting,
            and 3D Modelling.
          </a>
        </div>

        <div className="flex flex-wrap justify-center pt-2">
          <ArtCard imagepath={art1} borderColor={"white-100"} />
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

        <div className="flex flex-col items-center justify-center h-full pt-14 space-y-4">
          <div className="text-orange-1 bg-white-40 pr-12 pl-12 pt-2 pb-2 rounded-3xl border border-orange-2 font-bold">
            <p> Technologies I'm Interested </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center h-full pb-10 space-y-4">
          <InterestingTechStack />
        </div>
      </div>

      <Footer />
    </div>
  );
};

function Footer() {
  return (
    <div className="flex flex-col items-center bg-bgpurple-1 text-white-100 p-4">
      <a className="text-xs pb-2"> affodilaj fadil @2024 </a>
      <a style={{ fontSize: "0.5rem" }} className="text-purple-5">
        {" "}
        Built Using React JS
      </a>
    </div>
  );
}

function Name() {
  return (
    <div
      data-aos="zoom-in"
      className="inline-block bg-white-40 p-4 rounded-2xl border border-white-100  animate-bounce fill-mode-forwards ... "
    >
      <a className="text-4xl font-bold text-purple-6 mb-4">Affodilaj Fadil.</a>
    </div>
  );
}
