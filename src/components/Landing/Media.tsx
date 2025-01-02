import { useEffect, useState } from "react";
import img from "../../assets/Images/img5.png";

function Media() {
  const [device, setDevice] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDevice("mobile");
      } else {
        setDevice("desktop");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center py-6 md:flex-row md:py-10">
        <p className="text-4xl md:text-8xl font-Inter text-Fire_Engine_Red font-bold text-center">
          news media &nbsp;
        </p>
        <p className="text-4xl md:text-8xl font-Inter font-medium text-center">coverage</p>
      </div>
      {
        device === "mobile" && (
          <div className="w-full object-cover">
            <img src={img} alt="Media" />
          </div>
        )
      }
      {
        device === "desktop" && (
          <div>
            <img src={img} alt="Media" className="w-full h-full object-cover" />
          </div>
        )
      }

    </>
  );
}

export default Media;
