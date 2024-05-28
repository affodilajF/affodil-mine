export default function CardCard() {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1200"
      className="p-2 md:animate-bounce"
    >
      <div
        className={`p-20 flex flex-col  bg-white-40 lg:m-4 rounded-2xl border max-w-lg space-around border-white-100 transition-all duration-300 ease-in-out hover:scale-105 `}
      >
        <p className="text-xs flex-5">This section is </p>
        <p className="flex-5 text-2xl"> Should be the project </p>

        <p className=" flex-10 text-3xl font-bold italic text-purple-5 flex-1 text-center pt-3 justify-center lg:items-center max-w-[16rem] mx-auto">
          {" "}
          I'm working with YOU!! ^_^
        </p>
      </div>
    </div>
  );
}
