import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";
import Cards from "./Cards";

function Freebook() {
  const filterData = list.filter((data) => data.category === "free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // console.log(filterData);
  return (
    <>
      <div className="max-w-screen-2xl container max-auto md:px-20 px-4">
        <h1 className="text-black dark:text-white font-semibold text-xl pb-2 pt-7 ">
          Free Ordered Courses
        </h1>
        <div>
          <p className="text-black dark:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            laborum, recusandae aliquam ipsa, voluptatem blanditiis nisi eveniet
            dicta incidunt dolore porro.
          </p>
        </div>

        <div>
          <Slider {...settings}>
         {filterData.map((item)=>(
           < Cards item={item} key={item.id}/>
         ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
