import * as s from "./main.styles";

import { Mousewheel, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

export default function MainUI() {
  return (
    <s.Wrapper>
      <s.CustonSwiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <s.CustonSwiperSlide>
          <s.Img src="/img/main1.jpg" color="#B6D2D6"/>
        </s.CustonSwiperSlide>
        <s.CustonSwiperSlide>
        <s.Img src="/img/main2.jpg" color="#fff"/>
        </s.CustonSwiperSlide>
        
      </s.CustonSwiper>
    </s.Wrapper>
  );
}
