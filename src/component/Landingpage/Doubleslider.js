import React, { useState, useEffect } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Doubleslider = () => {
  const slide = [
    {
      url: 'https://static.wixstatic.com/media/5d104f_67ee508823b24198b6122f43e47d5b08~mv2.jpg/v1/crop/x_66,y_0,w_1852,h_1125/fill/w_443,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg',
      review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      url: 'https://static.wixstatic.com/media/5d104f_67ee508823b24198b6122f43e47d5b08~mv2.jpg/v1/crop/x_66,y_0,w_1852,h_1125/fill/w_443,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg',
      review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      url: 'https://static.wixstatic.com/media/5d104f_67ee508823b24198b6122f43e47d5b08~mv2.jpg/v1/crop/x_66,y_0,w_1852,h_1125/fill/w_443,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg',
      review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      url: 'https://static.wixstatic.com/media/5d104f_67ee508823b24198b6122f43e47d5b08~mv2.jpg/v1/crop/x_66,y_0,w_1852,h_1125/fill/w_443,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg',
      review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      url: 'https://static.wixstatic.com/media/5d104f_67ee508823b24198b6122f43e47d5b08~mv2.jpg/v1/crop/x_66,y_0,w_1852,h_1125/fill/w_443,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg',
      review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

    },
    {
      url: 'https://static.wixstatic.com/media/5d104f_67ee508823b24198b6122f43e47d5b08~mv2.jpg/v1/crop/x_66,y_0,w_1852,h_1125/fill/w_443,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg',
      review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
  ];

  const swiper = useSwiper();

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return (
    <div className='lg:grid lg:grid-cols-8 lg:grid-rows-2 m-8'>
      <>
        <div className='lg:col-span-6 lg:relative my-8'>
        <div class=" flex justify-center items-center">
          <h1 class="text-neutral-800 text-2xl font-normal font-['Avenir']">Latest on SLA printer</h1>
        </div>
          <Swiper
            modules={[Navigation, Scrollbar, A11y]}
            breakpoints={{
              // when window width is >= 640px
              640: {
                width: 640,
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 2,
              },
            }}
            // navigation
            // pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className=''
          >
            {slide.map((slide) => (

              <SwiperSlide key={slide.url} className='py-8 relative'>
                <div className='rounded-lg flex flex-col m-6 bg-white/95' style={{ boxShadow: '-8px 0 15px rgba(0, 0, 0, 0.4), 0 8px 15px rgba(0, 0, 0, 0.4)' }}>
                  <img src={slide.url} alt="" className='h-80 pt-8  w-full' />
                  <h2 className='mx-6 mt-4 mb-2 font-bold'>Lorem, ipsum dolor.</h2>
                  <p className='mx-6 mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi minus officiis delectus minima aut, cupiditate ducimus corrupti ipsum facere illo maxime nulla hic, animi tempora! Optio sequi eius perferendis quis?</p>

                </div>

              </SwiperSlide>
            ))}
            {!isMobile ? (

              <div className='lg:h-5/6  lg:bg-white lg:hover:bg-white/80 lg:duration-300 lg:rounded-lg lg:w-52 lg:absolute lg:top-12 lg:right-0 lg:z-20 lg:flex lg:items-center lg:justify-center' style={{ boxShadow: '-8px 0 15px rgba(255, 255, 255, 0.9), 0 0 15px rgba(255, 255, 255, 0.9), 0 8px 15px rgba(255, 255, 255, 0.9)' }}>
                <IoIosArrowForward size={100} onClick={() => swiper.slideNext()} className='cursor-pointer ' />
              </div>
            ) : (
              ''
            )
            }
          </Swiper>

        </div>
      </>

      <div className='lg:row-span-2 lg:col-span-2 lg:ml-6 lg:bg-white/95' style={{ boxShadow: '-8px 0 15px rgba(0, 0, 0, 0.4), 0 8px 15px rgba(0, 0, 0, 0.4)' }} ></div>
      <>
        <div className='lg:col-span-6 lg:relative my-8'>
        <div class=" flex justify-center items-center">
          <h1 class="text-neutral-800 text-2xl font-normal font-['Avenir']">Latest on FDM Printer</h1>
        </div>
          <Swiper
            modules={[Navigation, Scrollbar, A11y]}
            breakpoints={{
              // when window width is >= 640px
              640: {
                width: 640,
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 2,
              },
            }}
            // navigation
            // pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className=''
          >
            {slide.map((slide) => (

              <SwiperSlide key={slide.url} className='py-8 relative'>
                <div className='rounded-lg flex flex-col m-6 bg-white/95' style={{ boxShadow: '-8px 0 15px rgba(0, 0, 0, 0.4), 0 8px 15px rgba(0, 0, 0, 0.4)' }}>
                  <img src={slide.url} alt="" className='h-80 pt-8 w-full' />
                  <h2 className='mx-6 mt-4 mb-2 font-bold'>Lorem, ipsum dolor.</h2>
                  <p className='mx-6 mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi minus officiis delectus minima aut, cupiditate ducimus corrupti ipsum facere illo maxime nulla hic, animi tempora! Optio sequi eius perferendis quis?</p>
                </div>

              </SwiperSlide>
            ))}
            {!isMobile ? (
              <div className='lg:h-5/6  lg:bg-white lg:hover:bg-white/80 lg:duration-300 lg:rounded-lg lg:w-52 lg:absolute lg:top-12 lg:right-0 lg:z-20 lg:flex lg:items-center lg:justify-center' style={{ boxShadow: '-8px 0 15px rgba(255, 255, 255, 0.9), 0 0 15px rgba(255, 255, 255, 0.9), 0 8px 15px rgba(255, 255, 255, 0.9)' }}>
                <IoIosArrowForward size={100} onClick={() => swiper.slideNext()} className='cursor-pointer ' />
              </div>
            ) : ('')}
          </Swiper>

        </div>
      </>

    </div>
  );
};

export default Doubleslider;
