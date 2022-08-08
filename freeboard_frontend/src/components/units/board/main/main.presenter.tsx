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
      <s.WrapperCarousel>
        <s.CarouselContainer>
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
        </s.CarouselContainer>
      </s.WrapperCarousel>
    </>
  );
}
