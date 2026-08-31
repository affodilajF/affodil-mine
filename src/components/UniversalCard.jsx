export default function UniversalCard({
  title,
  imagepath,
  categories = [],
  onClick,
}) {
  return (
    <div className="p-2" data-aos="fade-right" data-aos-duration="1200">
      <button
        type="button"
        onClick={onClick}
        className="relative flex flex-col w-full h-full bg-white-40 p-3 rounded-2xl border border-white-100 cursor-pointer transition-all duration-500 ease-in-out hover:scale-110 hover:z-10 hover:shadow-2xl"
      >
        <div className="flex flex-wrap gap-1.5 pb-2">
          {categories.map((category) => (
            <span
              key={category}
              style={{ fontSize: "0.5rem" }}
              className="text-purple-1 bg-white-100 dark:bg-purple-3 dark:text-white-100 px-3 py-0.5 rounded-3xl border border-white-100 font-bold"
            >
              {category}
            </span>
          ))}
        </div>

        <img src={imagepath} alt={title} />
      </button>
    </div>
  );
}
