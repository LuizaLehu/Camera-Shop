import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import Banner from '../banner/banner';
import { EffectFade } from 'swiper/modules';


function Slider() {


  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      effect='fade'
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 3000 }}

    >
      <SwiperSlide>
        <Banner />
      </SwiperSlide>
      <SwiperSlide>
        <Banner />
      </SwiperSlide>
      <SwiperSlide>
        <Banner />
      </SwiperSlide>
      <SwiperSlide>
        <Banner />
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
