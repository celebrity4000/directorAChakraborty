import { useEffect } from "react";
import background from "../../assets/Images/img1.png";

function Home() {
  useEffect(() => {
    window.scrollTo(0, window.innerHeight * 0.1);
  }, []);

  return (
    <div
      className="flex flex-col w-full min-h-screen md:min-h-[120vh] bg-cover bg-no-repeat items-end justify-end bg-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col mb-4 md:mb-[3.5%] w-[90%] md:w-[35%] rounded-l-3xl items-start px-6 py-4 md:px-28 md:py-8 text-center bg-Charleston_Green">
        <p className="text-3xl md:text-5xl font-bold text-white font-Montserrat">
          Anirban
        </p>
        <p className="text-3xl md:text-5xl font-bold text-white font-Montserrat">
          Chakraborty
        </p>
      </div>
    </div>
  );
}

export default Home;
