import React from "react";
import portfolioImage1 from "../assets/portfolioImage.png";
import portfolioImage2 from "../assets/portfolioImageNext.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: portfolioImage1,
    },
    {
      id: 2,
      src: portfolioImage2,
    },
    {
      id: 3,
      src: portfolioImage2,
    },
    {
      id: 4,
      src: portfolioImage1,
    },
    {
      id: 5,
      src: portfolioImage2,
    },
    {
      id: 6,
      src: portfolioImage1,
    },
  ];

  return (
    <div
      name="portfolio"
      className=" bg-gradient-to-b from-black to-gray-700 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fugit
            dolorem sequi incidunt aspernatur facilis, non sed molestias
            reprehenderit deserunt eveniet eligendi odio error ea nisi, corporis
            sapiente quod est.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-16 sm:px-0">
          {
          portfolios.map(({ id, src }) => (
                <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
                <img
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                    <button className=" w-1/2 px py-3 m-4 duration-200">
                    Live
                    </button>
                    <button className=" w-1/2 px py-3 m-4 duration-200">
                    Code
                    </button>
                </div>
                </div>
          ))
          }
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
