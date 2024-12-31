function FilmList() {
  const films = [
    {
      title: "Piklur Janala",
    },
    {
      title: "Jah Kala",
    },
    {
      title: "Bonosundari",
    },
    {
      title: "Mallick Bari",
    },
    {
      title: "Nonte Fonte",
    },
    {
      title: "O Abhagi",
    },
  ];
  return (
    <div
      className="text-white min-h-screen flex object-fill items-start justify-center flex-col p-4 md:pl-[10%]"
      style={{
        background: `url("https://i.ibb.co/ZXkywZg/street2-1.png")`,
        backgroundSize: "cover",
        backgroundPosition: "left center",
      }}
    >
      <h1 className="font-Inter font-bold text-4xl md:text-7xl">my films</h1>
      <div className="flex flex-col space-y-5 mt-8 md:mt-16 p-2">
        {films.map((film, index) => (
          <div
            key={index}
            className="flex justify-between items-center w-full "
          >
            <h1 className="font-Inter font-normal text-2xl md:text-4xl hover:underline hover:underline-offset-4">
              {film.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilmList;
