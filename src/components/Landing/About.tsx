import icon from "../../assets/Images/img3.png";
import img from "../../assets/Images/img4.png";

const About = () => {
  const icons = [icon, icon, icon];
  return (
    <div
      className="text-white min-h-screen flex flex-col md:flex-row justify-between pt-20 md:pt-40"
      style={{
        background: `url("https://i.ibb.co/bszFskz/black-chalkboard-background-1-4.png")`,
      }}
    >
      {/* Text Section */}
      <div className="w-full md:w-[47%] text-left px-6 md:px-20 py-8 md:py-16 flex flex-col justify-end">
        <h1 className="text-3xl md:text-5xl font-Krona font-normal mt-6 mb-6">
          About Me
        </h1>
        <p className="text-lg md:text-2xl mt-6 md:mt-16 font-Inter font-normal pr-0 md:pr-8">
          I am a passionate and dedicated film director with a keen eye for
          storytelling and visual aesthetics. With a strong background in
          cinematic arts and years of experience, I strive to create compelling
          narratives that captivate and inspire audiences. My portfolio
          showcases a variety of projects ranging from short films to
          full-length features, commercials, and music videos.
        </p>
        <p className="text-lg md:text-2xl font-medium mt-8 md:mt-10 font-Roboto-Mono text-center md:text-left">
          www.AnirbanChakraborty.com
        </p>

        {/* Icons Section */}
        <div className="flex space-x-4 mt-6 flex-row justify-center md:justify-start items-center">
          {icons.map((iconSrc, index) => (
            <span
              key={index}
              className="w-10 h-10 md:w-12 md:h-12 bg-gray-800 rounded-full flex justify-center items-center"
            >
              <img src={iconSrc} alt={`icon-${index}`} />
            </span>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="flex items-end justify-center md:justify-end w-full md:w-1/2 mt-8 md:mt-0">
        <img
          src={img}
          alt="Profile"
          className="rounded-md grayscale w-[100] md:w-[90%] h-auto"
        />
      </div>
    </div>
  );
};

export default About;
