import React, { useState, useEffect } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, Pagination, A11y } from 'swiper/modules';
import { useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const MaskSlider = () => {
    const slide = [
        {
            url: 'https://static.wixstatic.com/media/5d104f_67ee508823b24198b6122f43e47d5b08~mv2.jpg/v1/crop/x_66,y_0,w_1852,h_1125/fill/w_443,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg',
            review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            top: 'SK-1'
        },
        {
            url: 'https://static.wixstatic.com/media/5d104f_67ee508823b24198b6122f43e47d5b08~mv2.jpg/v1/crop/x_66,y_0,w_1852,h_1125/fill/w_443,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg',
            review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            top: 'SK-2'
        },
        {
            url: 'https://static.wixstatic.com/media/5d104f_67ee508823b24198b6122f43e47d5b08~mv2.jpg/v1/crop/x_66,y_0,w_1852,h_1125/fill/w_443,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg',
            review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            top: 'SK-3'
        },
        {
            url: 'https://static.wixstatic.com/media/5d104f_67ee508823b24198b6122f43e47d5b08~mv2.jpg/v1/crop/x_66,y_0,w_1852,h_1125/fill/w_443,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg',
            review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            top: 'SK-4'
        },
        {
            url: 'https://static.wixstatic.com/media/5d104f_67ee508823b24198b6122f43e47d5b08~mv2.jpg/v1/crop/x_66,y_0,w_1852,h_1125/fill/w_443,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg',
            review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            top: 'SK-5'

        },
        {
            url: 'https://static.wixstatic.com/media/5d104f_67ee508823b24198b6122f43e47d5b08~mv2.jpg/v1/crop/x_66,y_0,w_1852,h_1125/fill/w_443,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg',
            review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            top: 'SK-6'
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

    const colors = [
        {
            mask: 'bg-cyan-500/70'
        },
        {
            mask: 'bg-sky-600/80'
        },
        {
            mask: 'bg-cyan-700/90'
        },
        {
            mask: 'bg-neutral-100/70'
        },
        {
            mask: 'bg-neutral-400/70'
        },
        {
            mask: 'bg-sky-600/70'
        }
    ]

    return (
        <div className='lg:relative'>
            <div className='lg:relative'>
                
                <Swiper
                    modules={[Navigation, Scrollbar, A11y, Pagination]}
                    breakpoints={
                        {
                            // when window width is >= 640px
                            640: {
                                width: 640,
                                slidesPerView: 1,
                                pagination: {
                                    el: '.swiper-pagination',
                                    type: 'bullets',
                                },
                            },
                            // when window width is >= 768px
                            768: {
                                width: 768,
                                slidesPerView: 2,

                            },
                        }
                    }

                    // navigation
                    // pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className=''
                >
                    {slide.map((slide, index) => (

                        <SwiperSlide key={index} className='py-8 relative'>


                            <div className='rounded-lg flex flex-col m-6 bg-white/95 relative' style={{ boxShadow: '-8px 0 15px rgba(0, 0, 0, 0.4), 0 8px 15px rgba(0, 0, 0, 0.4)' }}>
                                <div className="h-[60vh] rounded-lg"
                                    style={{
                                        backgroundImage: `url(${slide.url})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}>
                                    {/* <img src={slide.url} alt="" className='bg-cover' /> */}
                                </div>
                                <div key={index} className={`h-full w-full ${colors[index % colors.length].mask} absolute z-20 rounded-lg top-0 `} />
                                <div key={index} className=' h-full w-full flex items-center justify-center absolute z-30 top-0 text-neutral-100 text-[40px] font-medium font-[Avenir] '>Two Trees <br />{slide.top}</div>

                            </div>



                        </SwiperSlide>

                    ))}
                    {!isMobile ? (
                        <div
                            className='lg:h-5/6 lg:bg-white lg:hover:bg-white/80 lg:duration-300 lg:rounded-lg lg:w-52 lg:absolute lg:top-12 lg:right-0 lg:z-20 lg:flex lg:items-center lg:justify-center cursor-pointer'
                            style={{
                                boxShadow: '-8px 0 15px rgba(255, 255, 255, 0.9), 0 0 15px rgba(255, 255, 255, 0.9), 0 8px 15px rgba(255, 255, 255, 0.9)',
                            }}
                            onClick={() => swiper.slideNext()}
                        >
                            <IoIosArrowForward size={100} />
                        </div>
                    ) : ('')}
                </Swiper>

            </div>
        </div>
    )
}

export default MaskSlider