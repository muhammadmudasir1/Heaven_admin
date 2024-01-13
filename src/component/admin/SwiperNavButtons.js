import { React } from 'react';
import { useSwiper } from 'swiper/react';

const SwiperNavButtons = ()=>{
  const swiper = useSwiper();

  return (
    <button 
    className='bg-red-500 absolute top-0 right-0'
    onClick={() => swiper.slideNext()}>Slide to the next slide</button>
  );
}
export default SwiperNavButtons