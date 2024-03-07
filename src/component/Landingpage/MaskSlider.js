import React, { useState, useEffect } from 'react';
// import { IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useNavigate } from 'react-router-dom';
import Api from "../../api/Api";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/a11y";
import "swiper/css";



const MaskSlider = () => {


  const [swiperInstanceTopfive, setSwiperInstanceTopFive] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [TopFiveProducts, setTopFiveProducts] = useState([])
  const navigate=useNavigate()
  const handleSwiperTopFive = (swiper) => {
    setSwiperInstanceTopFive(swiper);
  }
  const { width } = useWindowDimensions();
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const topfive = async () => {
      try {
        const response = await Api.get(`api/products/TopFive`)
        setTopFiveProducts(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    topfive()
  }, [])
  useEffect(() => {
    const noOfSlides = width <= 480 ? 1 : width <= 1500 ? 4 : 5;
    setSlidesToShow(noOfSlides);
  }, [width]);


  const colors = ['bg-cyan-500/70', 'bg-sky-600/50', 'bg-cyan-700/60', 'bg-neutral-400/60', 'bg-sky-600/70']

  return (
    <div className='lg:relative '>
      <div className='lg:relative'>
        <>
          <div className="lg:col-span-6 lg:relative my-8">
            <div class=" flex justify-center items-center">
              <h1 class="text-neutral-800 text-2xl font-bold" id="topFive">
                Top 5
              </h1>
            </div>
            <div className=" relative flex items-center ">
              {width >= 480 && !isBeginning ? (
                <div className="text-6xl text-gray-600 hover:text-customBlue cursor-pointer absolute left-0 z-[999]">
                  <FaAngleLeft
                    onClick={(e) => {
                      swiperInstanceTopfive.slidePrev();
                    }}
                  />
                </div>
              ) : null}
              <Swiper
                modules={[A11y, Navigation]}
                spaceBetween={24}
                slidesPerView={slidesToShow}
                onSwiper={(swiper) => handleSwiperTopFive(swiper)}
                onSlideChange={(swiperCurrent) => {
                  setIsBeginning(swiperCurrent.isBeginning);
                  setIsEnd(swiperCurrent.isEnd);
                }}
                className="p-5"
              >
                {TopFiveProducts.map((Product, index) => (
                  Product ?
                    <SwiperSlide key={Product.Id} className=" relative my-3">
                      <div
                        className=" rounded-xl overflow-hidden flex flex-col   bg-white h-[400px] cursor-pointer"
                        style={{
                          boxShadow:
                            "-8px 0 15px rgba(203, 213, 225, 0.5), 0 8px 15px rgba(203, 213, 225, 0.5)",
                        }}
                        onClick={(e) => {
                          const name=Product.product_name.replaceAll(' ','-')
                          navigate(`/productreview/${name}/${Product.Id}`);
                        }}
                      >
                        <div className='w-full h-full relative flex flex-col '>
                          <div className=" w-full h-full bg-cover bg-center absolute top-0"
                            style={{
                              backgroundImage: `url(/api/${Product && Product.ProductImages[0].path})`
                            }}
                          />
                          <div className={`w-full h-full absolute top-0 ${colors[index]}`} />
                          <div className='w-full h-1/5 z-[9999] flex justify-center items-center'>

                            <h2 className=' text-4xl text-white font-semibold font-sans'>#{index + 1}</h2>
                          </div>
                          <h2 className='z-[9999] text-3xl text-white font-semibold font-sans text-center flex-grow flex justify-center items-center px-2'>{Product && Product.product_name}</h2>
                        </div>
                      </div>
                    </SwiperSlide>
                    : <SwiperSlide key={index} className=" relative my-3">
                      <div
                        className=" rounded-xl overflow-hidden flex flex-col items-start  bg-white h-[400px]"
                        style={{
                          boxShadow:
                            "-8px 0 15px rgba(203, 213, 225, 0.5), 0 8px 15px rgba(203, 213, 225, 0.5)",
                        }}
                      >
                        <div className='w-full h-full relative flex flex-col justify-center items-center'>
                          <div className=" w-full h-full bg-cover bg-center absolute top-0"
                            style={{
                              backgroundImage: `url(/api/${Product && Product.ProductImages[0].path})`
                            }}
                          />
                          <div className={`w-full h-full absolute top-0 ${colors[index]}`} />
                          <h2 className='z-[9999] text-4xl text-white font-semibold font-sans pb-16'>#{index + 1}</h2>
                          <h2 className='z-[9999] text-4xl text-white font-semibold font-sans'>{Product && Product.product_name}</h2>
                        </div>
                      </div>
                    </SwiperSlide>
                ))}
              </Swiper>
              {width >= 480 && !isEnd && TopFiveProducts.length > slidesToShow && (
                <div className=" h-full w-1/5 absolute right-0 z-[99] bg-gradient-to-l from-white to-transparent from-60% " />
              )}
              {width >= 480 && !isEnd && TopFiveProducts.length > slidesToShow ? (
                <div className="text-6xl text-gray-600 hover:text-customBlue cursor-pointer absolute right-16 z-[999]">
                  <FaAngleRight
                    onClick={(e) => {
                      swiperInstanceTopfive.slideNext();
                    }}
                  />
                </div>
              ) : null}
            </div>
          </div>
        </>

      </div>
    </div>
  )
}


export default MaskSlider

