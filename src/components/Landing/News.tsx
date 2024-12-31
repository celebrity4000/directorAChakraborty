function News() {
  return (
    <div className="hidden md:flex flex-col w-full min-h-screen bg-cover bg-no-repeat items-end justify-end bg-center">
      <div className="w-full flex  flex-row items-center justify-center py-10">
        <p className="text-8xl font-Inter text-Fire_Engine_Red font-bold text-center">
          news media &nbsp;
        </p>
        <p className="text-8xl font-Inter font-medium text-center">coverage</p>
      </div>

      <div
        className="w-full relative z-0 h-full min-h-[110vh] flex flex-row justify-between items-center"
        style={{
          backgroundImage: `url(https://i.ibb.co/c2SgsZF/rb-2148625295.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute z-10 h-screen top-[20%] left-[20%]">
          <h3 className="text-6xl font-semibold  text-white font-Inter  text-center">
            AWARDS
          </h3>
        </div>
        <div className="flex flex-row items-center justify-between w-full  relative">
          {" "}
          <div className="absolute z-10 h-screen flex flex-wrap justify-center items-center w-full mt-10">
            <img
              className="rounded-3xl absolute w-[35%] h-[55%] bottom-10 left-[13%] z-10"
              src="https://i.ibb.co/Wpn6vmg/Whats-App-Image-2024-12-23-at-7-17-09-PM-1-jpeg.jpg"
              alt="leftImage"
            />
            <img
              className="rounded-3xl absolute w-[35%] h-[60%] top-7 right-36 z-0"
              src="https://i.ibb.co/jGsrJQh/Whats-App-Image-2024-12-23-at-7-17-08-PM-2-jpeg.jpg"
              alt="rightImage"
            />

            <img
              src="https://i.ibb.co/qmXmwfj/rb-26030-1.png"
              alt="tropy"
              className="rounded-3xl absolute bottom-10 z-0 left-[38%] h-[100%]"
            />
          </div>
        </div>
        <div className="absolute bottom-[10%] right-[15%] text-left mt-10 font-semibold text-3xl">
          <p className="font-Inter text-white l">Mithila wins</p>
          <p className="font-Inter text-white">Prestigious</p>
          <p className="font-Inter text-white ">award for 'O Abhagi'</p>
        </div>
      </div>
      <div className="w-full min-h-screen bg-Charcoal flex flex-row justify-center items-center">
        <img
          src="https://i.ibb.co/6Pyc3Vq/award.png"
          className="rounded-2xl"
          alt="award"
        ></img>
      </div>
    </div>
  );
}

export default News;
