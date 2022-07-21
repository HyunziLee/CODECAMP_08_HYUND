// import React from "react";
import Slider from "react-slick";
import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const Wrapper = styled.div`
    height: 400px;
    width: 400px;
    background: skyblue;
  `;
  const Image = styled.img`
    height: 100px;
    width: 100px;
    margin: auto;
    margin-top: 100px;
  `;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Wrapper>
        <Slider {...settings}>
          <div>
            <Image src="/img/1.jpeg" />
          </div>
          <div>
            <Image src="/img/2.jpeg" />
          </div>
          <div>
            <Image src="/img/3.png" />
          </div>
        </Slider>
      </Wrapper>
    </>
  );
}
