import About from "./components/Landing/About";
import FilmList from "./components/Landing/FilmList";
import Home from "./components/Landing/Home";
import Media from "./components/Landing/Media";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <FilmList />
      <Media />
    </div>
  );
}
