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
        <div>
          <div className="flex flex-col">
            <div className="w-full flex flex-col items-center justify-center bg-Eerie_Black">
              <div>
                <p className="text-3xl md:text-6xl font-source-sans font-light text-center text-white">
                  Anirban Chakraborty
                </p>
              </div>
            </div>
          </div>
        </div>
        {movieDetails &&
          movieDetails.map((movie, index) => <Movies key={index} {...movie} />)}
      </div>
    </div>
  );
}
