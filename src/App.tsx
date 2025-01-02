import { useEffect } from "react";
import About from "./components/Landing/About";
import FilmList from "./components/Landing/FilmList";
import Home from "./components/Landing/Home";

import Media from "./components/Landing/Media";
import Movies from "./components/Landing/Movies";
import News from "./components/Landing/News";
import Navbar from "./components/Navbar";
import { movieDetails } from "./constants/moviesDetails";
import { useLocation } from "react-router-dom";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const elementId = location.pathname.substring(1); // Remove '/'
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <FilmList />
      <Media />
      <News />
      <div>
        <div className="flex flex-col">
          <div className="bg-Charcoal">
            <div className="flex flex-col md:flex-row items-center justify-center py-2">
              <p className="text-3xl md:text-6xl font-Inter text-Fire_Engine_Red font-extrabold text-center">
                Filmography &nbsp;
              </p>
              <p className="text-3xl md:text-6xl font-Montserrat font-semibold text-center text-white">
                of
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center bg-Eerie_Black">
            <div>
              <p className="text-3xl md:text-6xl font-source-sans font-light text-center text-white">
                Anirban Chakraborty
              </p>
            </div>
          </div>
        </div>
        {movieDetails &&
          movieDetails.map((movie, index) => <Movies key={index} {...movie} />)}
      </div>
    </div>
  );
}
