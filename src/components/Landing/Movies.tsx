import React from "react";

interface MoviesProps {
  id: string;
  title: string;
  year: number;
  titleBgColor: "Eerie_Black" | "Fire_Engine_Red" | "Forest_Green";
  directors: string[];
  writters?: string[];
  cast: string[];
  mainImage: string;
  galleryImages: string[];
}

const Movies: React.FC<MoviesProps> = ({
  id,
  title,
  titleBgColor,
  year,
  directors,
  writters,
  cast,
  mainImage,
  galleryImages,
}) => {
  return (
    <div id={id} className="flex flex-col">
      <div className="flex flex-col w-full min-h-screen">
        <div
          className={`flex flex-col md:flex-row items-center justify-center pb-10 md:pb-0 pt-20 md:pt-40 bg-${titleBgColor}`}
        >
          <div className="flex w-full md:w-1/2">
            <img src={mainImage} alt="" className="p-4 md:p-10 rounded-xl" />
          </div>
          <div className="flex flex-col w-full md:w-1/2 mt-4 md:mt-0 md:ml-20 px-4 md:px-0">
            <h1 className="text-2xl md:text-3xl font-bold text-white font-Inter">
              {title}
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-white font-Inter mb-4 md:mb-6">
              ({year})
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-white font-Inter">
              Director:
            </h3>
            {directors.map((director, index) => (
              <h3
                key={index}
                className="text-xl md:text-2xl font-semibold text-white font-Inter"
              >
                {director}
              </h3>
            ))}

            {writters && (
              <div className="mt-4 md:mt-6">
                <h3 className="text-xl md:text-2xl font-semibold text-white font-Inter">
                  Writters:
                </h3>
                {writters.map((writter, index) => (
                  <h3
                    key={index}
                    className="text-xl md:text-2xl font-semibold text-white font-Inter"
                  >
                    {writter}
                  </h3>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col bg-white">
          <div className="flex flex-wrap gap-2 items-center justify-center px-4 md:px-10 lg:px-60 py-10">
            {cast.map((actor, index) => (
              <React.Fragment key={index}>
                <h4 className="text-lg md:text-2xl font-Inter font-normal text-center">
                  {actor}
                </h4>
                {index < cast.length - 1 && (
                  <span className="text-lg md:text-2xl font-Inter font-normal text-center">
                    ,
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>

          <div>
            <div className="flex flex-wrap">
              {galleryImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className={`w-full md:w-${index === galleryImages.length - 1 && index % 2 === 0
                    ? "full"
                    : "1/2"
                    }`}
                  alt={`Gallery Image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
