import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as s from '../layout.styles'



export default function LayoutCarousel(){
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  
  return(
    <>
      <s.Carousel_wrapper>
        
          <Slider {...settings}>
            <div>
              <s.Carousel_div>Carousel</s.Carousel_div>
            </div>
            <div>
              <s.Carousel_div>Carousel</s.Carousel_div>
            </div>
            <div>
              <s.Carousel_div>Carousel</s.Carousel_div>
            </div>
          </Slider>
        
          
      </s.Carousel_wrapper>
    </>
  )
}