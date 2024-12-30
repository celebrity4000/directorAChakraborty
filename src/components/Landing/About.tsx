import icon from "../../assets/Images/img3.png";
import img from "../../assets/Images/img4.png";
const About = () => {
  const icons = [icon, icon, icon];
  return (
    <div
      className="text-white md:min-h-screen flex flex-col-reverse md:flex-row justify-between pt-40"
      style={{
        background: `url("https://i.ibb.co/bszFskz/black-chalkboard-background-1-4.png")`,
      }}
    >
      {/* Text Section */}
      <div className="w-full md:w-[47%] text-left px-20 py-16 flex flex-col justify-end">
        <h1 className="text-5xl font-Krona font-normal mt-6 mb-6">About Me</h1>
        <p className="text-2xl mt-24 font-Inter font-normal pr-8 text">
          I am a passionate and dedicated film director with a keen eye for
          storytelling and visual aesthetics. With a strong background in
          cinematic arts and years of experience, I strive to create compelling
          narratives that captivate and inspire audiences. My portfolio
          showcases a variety of projects ranging from short films to
          full-length features, commercials, and music videos.
        </p>
        <p className="text-2xl font-medium mt-16 font-Roboto-Mono text-center items-center">
          www.AnirbanChakraborty.com
        </p>

        {/* Icons Section */}
        <div className="flex space-x-4 mt-6 flex-row justify-center items-center">
          {icons.map((iconSrc, index) => (
            <span
              key={index}
              className="w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center"
            >
              <img src={iconSrc} alt={`icon-${index}`} />
            </span>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="flex items-end justify-end w-full md:w-1/2">
        <img
          src={img}
          alt="Profile"
          className="rounded-md grayscale w-[95%] h-auto"
        />
      </div>
    </div>
  );
};

export default About;
