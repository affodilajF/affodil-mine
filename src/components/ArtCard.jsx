export default function ArtCard({ imagepath, borderColor }) {
    return (
      <div className="p-2 ">
        <div
          className={`flex flex-row  bg-white-40 p-3.5 lg:m-4 rounded-2xl border max-w-lg space-around border-${borderColor} transition-all duration-300 ease-in-out hover:scale-105 `}
        >
          <div className="flex items-center justify-center flex-1">
            <img className="h-45 w-45 p-2.5 " src={imagepath} alt="project img" />
          </div>
        </div>
      </div>
    );
  }