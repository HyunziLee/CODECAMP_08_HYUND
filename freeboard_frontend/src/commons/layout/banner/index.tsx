import styled from "@emotion/styled";
import * as s from "../../../../styles/layout.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <s.Wrapper_banner>
        <Slider {...settings}>
          <div>
            <h3>
              {" "}
              Best
              <p>21</p>
              <p>2</p>
            </h3>
          </div>
          <div>
            <h3>Carousel</h3>
          </div>
          <div>
            <h3>Carousel</h3>
          </div>
        </Slider>
      </s.Wrapper_banner>
    </>
  );
}
