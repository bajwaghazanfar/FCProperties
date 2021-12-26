import React, { Component } from "react";
import Slider from "react-slick";
import {
  SlideshowImg,
  SectionContainer,
  Section,
  SectionDescription,
  SectionImg,
  CenterAlignWrp,
  ServiceTitle,
  H3,
} from "../AboutUsComponents";

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
    autoplay: true,
    autoplaySpeed: 10000,

    className: "slides",
  };
  console.log(data);

  return (
    <Slider {...settings}>
      {data != null ? (
        data.map((map, index) => (
          <div style={{ height: "auto" }}>
            <CenterAlignWrp>
              <ServiceTitle fontSize="50px">Our History...</ServiceTitle>
              <H3 color="#979A9A">
                First Choice Online Properties Ltd aim to provide exceptional
                customer service whilst helping our customers get the best deal
              </H3>
            </CenterAlignWrp>
            <SectionContainer style={{ backgroundColor: "#1B2631" }}>
              <Section>
                <div>
                  <ServiceTitle fontSize="50px">{map.header}</ServiceTitle>
                  <SectionDescription style={{ color: "white" }}>
                    {map.description}
                  </SectionDescription>
                </div>
                {window.innerWidth > 780 ? (
                  <SlideshowImg src={`${map.image}`} width="100vw" />
                ) : (
                  <p></p>
                )}
              </Section>
            </SectionContainer>
          </div>
        ))
      ) : (
        <div></div>
      )}
    </Slider>
  );
};
export default SlideShowComponent;
