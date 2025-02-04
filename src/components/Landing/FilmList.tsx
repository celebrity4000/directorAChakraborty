import { Link } from "react-router-dom";

function FilmList() {
  const films = [
    {
      id: "mallik-bari",
      title: "Mallick Bari",
    },
    {
      id: "piklur-janala",
      title: "Piklur Janala",
    },
    {
      id: "Jah-kala",
      title: "Jah Kala",
    },

    {
      id: "nonte-fonte",
      title: "Nonte Fonte",
    },
    {
      id: "o-abhagi",
      title: "O Abhagi",
    },
    {
      id: "khacha",
      title: "Khacha",
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
              <Link to={`/${film.id}`}>{film.title}</Link>
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilmList;
