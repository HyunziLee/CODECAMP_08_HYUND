import * as s from "../../../../../styles/carousel.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MainUI() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      {/* <s.WrapperCarousel> */}
      <s.CarouselContainer>
        <Slider {...settings}>
          <s.ContainerWrapper>
            <s.Image>1</s.Image>
          </s.ContainerWrapper>
          <s.ContainerWrapper>
            <s.Image>2</s.Image>
          </s.ContainerWrapper>
          <s.ContainerWrapper>
            <s.Image>3</s.Image>
          </s.ContainerWrapper>
        </Slider>
      </s.CarouselContainer>
      {/* </s.WrapperCarousel> */}
    </>
  );
}
