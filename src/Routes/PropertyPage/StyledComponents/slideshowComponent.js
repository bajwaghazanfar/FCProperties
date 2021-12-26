import React, { Component } from "react";
import Slider from "react-slick";
import {
  ImagesContainer,
  SlideshowContainer,
  SlideshowDot,
  SlideshowDotWrapper,
  SlideshowImg,
} from "./PropertyComponents";

const SlideShowComponent = ({ data }) => {
  const settings = {
    // customPaging: function (i) {
    // return <SlideshowDot src={data[i].image} style={{ width: "40px" }} />;
    //},
    infinite: true,
    dotsClass: "slick-dots slick-thumb",
    fade: true,
    dots: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slides",
  };
  console.log(data);

  return (
    <Slider {...settings}>
      {data != null ? (
        data.map((map, index) => <SlideshowImg src={map.image} />)
      ) : (
        <div></div>
      )}
    </Slider>
  );
};
export default SlideShowComponent;
