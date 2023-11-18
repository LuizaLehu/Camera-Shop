import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import Banner from '../banner/banner';
import { EffectFade } from 'swiper/modules';
import { getPromoProducts } from '../../store/data-process/data-process.selectors';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import { fetchProductAction } from '../../store/api-action';
import './slider.css';

function Slider() {

  const products = useAppSelector(getPromoProducts);
  const { id: cameraId } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (cameraId) {
      dispatch(fetchProductAction(cameraId));
    }
  }, [cameraId, dispatch]);


  return (
    <Swiper
      modules={[Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      effect='fade'
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 3000 }}

    >
      {products?.map((product) => (
        <SwiperSlide key={product.id}>
          <Banner product={product} id={product.id} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
