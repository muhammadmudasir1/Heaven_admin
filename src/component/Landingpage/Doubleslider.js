import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Api from "../../api/Api";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/a11y";
import "swiper/css";
import LoadingCard from "../LoadingCard";

const Doubleslider = () => {


  //SLA
  const [swiperInstanceSLA, setSwiperInstanceSLA] = useState(null);
  const [isBeginningSLA, setIsBeginningSLA] = useState(true);
  const [isEndSLA, setIsEndSLA] = useState(false);
  const [SLAproducts, setSLAproducts] = useState([])
  const handleSwiperSLA = (swiper) => {
    setSwiperInstanceSLA(swiper);
  };

  useEffect(() => {
    const SLA = async () => {
      try {

        const response = await Api.get(`api/products/type/1`)
        setSLAproducts(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    SLA()
  }, [])

  ///FDM
  const [swiperInstanceFDM, setSwiperInstanceFDM] = useState(null);
  const [isBeginningFDM, setIsBeginningFDM] = useState(true);
  const [isEndFDM, setIsEndFDM] = useState(false);
  const [FDMproducts, setFDMproducts] = useState([])
  const handleSwiperFDM = (swiper) => {
    setSwiperInstanceFDM(swiper);
  };
  const [isLoader, setIsLoader] = useState(true);
  useEffect(() => {
    const FDM = async () => {
      try {

        const response = await Api.get(`api/products/type/2`)
        setFDMproducts(response.data);
        setIsLoader(false);
      } catch (error) {
        console.log(error)
      }
    }
    FDM()
  }, [])

  const { width } = useWindowDimensions();
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const noOfSlides = width <= 480 ? 1 : width <= 1380 ? 3 : 4;
    setSlidesToShow(noOfSlides);
  }, [width]);

  return (
    <div className="lg:grid lg:grid-cols-8 lg:grid-rows-2 m-8">
      <>
        <div className="lg:col-span-6 lg:relative my-8">
          <div className=" flex justify-center items-center">
            <h1 className="text-neutral-800 text-2xl font-normal">
              Latest on SLA printer
            </h1>
          </div>
          {isLoader ? (<LoadingCard />) : (
            <div className=" relative flex items-center ">
              {width >= 480 && !isBeginningSLA ? (
                <div className="text-6xl text-gray-600 hover:text-customBlue cursor-pointer absolute left-0 z-[999]">
                  <FaAngleLeft
                    onClick={(e) => {
                      swiperInstanceSLA.slidePrev();
                    }}
                  />
                </div>
              ) : null}
              <Swiper
                modules={[A11y, Navigation]}
                spaceBetween={20}
                slidesPerView={SLAproducts.length > slidesToShow ? slidesToShow : SLAproducts.length}
                onSwiper={(swiper) => handleSwiperSLA(swiper)}
                onSlideChange={(swiperCurrent) => {
                  setIsBeginningSLA(swiperCurrent.isBeginning);
                  setIsEndSLA(swiperCurrent.isEnd);
                }}
                className="p-5"
              >
                {SLAproducts.map((SLAproduct, index) => (
                  <SwiperSlide key={SLAproduct} className=" relative my-3">
                    <div
                      className="rounded-xl  flex flex-col items-start  bg-white/95 h-[400px]"
                      style={{
                        boxShadow:
                          "-8px 0 15px rgba(203, 213, 225, 0.5), 0 8px 15px rgba(203, 213, 225, 0.5)",
                      }}
                    >
                      <div className=" w-full h-52 bg-cover bg-center"
                        style={{
                          backgroundImage: `url(/api/${SLAproduct.ProductImages[0].path})`
                        }}
                      />
                      <h2 className="pt-8 px-6 font-bold line-clamp-1">{SLAproduct.product_name}</h2>
                      <p className=" pt-4 px-6 line-clamp-4">
                        {SLAproduct.discription}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              {width >= 480 && (
                <div className=" h-full w-1/12 absolute right-0 z-[99] bg-gradient-to-l from-white to-transparent from-60% " />
              )}
              {width >= 480 && !isEndSLA && SLAproducts.length > slidesToShow ? (
                <div className="text-6xl text-gray-600 hover:text-customBlue cursor-pointer absolute right-0 z-[999]">
                  <FaAngleRight
                    onClick={(e) => {
                      swiperInstanceSLA.slideNext();
                    }}
                  />
                </div>
              ) : null}
            </div>
          )}
        </div>
      </>

      <div
        className="lg:row-span-2 lg:col-span-2 lg:ml-6 lg:bg-white/95"
        style={{
          boxShadow:
            "-8px 0 15px rgb(203 213 225), 0 8px 15px rgb(203 213 225)",
        }}
      ></div>
      <>
        <div className="lg:col-span-6 lg:relative my-8">
          <div class=" flex justify-center items-center">
            <h1 class="text-neutral-800 text-2xl font-normal ">
              Latest on FDM Printer
            </h1>
          </div>
          {isLoader ? (<LoadingCard />) : (
            <div className=" relative flex items-center ">
              {width >= 480 && !isBeginningFDM ? (
                <div className="text-6xl text-gray-600 hover:text-customBlue cursor-pointer absolute left-0 z-[999]">
                  <FaAngleLeft
                    onClick={(e) => {
                      swiperInstanceFDM.slidePrev();
                    }}
                  />
                </div>
              ) : null}
              <Swiper
                modules={[A11y, Navigation]}
                spaceBetween={20}
                slidesPerView={FDMproducts.length > slidesToShow ? slidesToShow : FDMproducts.length}
                onSwiper={(swiper) => handleSwiperFDM(swiper)}
                onSlideChange={(swiperCurrent) => {
                  setIsBeginningFDM(swiperCurrent.isBeginning);
                  setIsEndFDM(swiperCurrent.isEnd);
                }}
                className=" p-5"
              >
                {FDMproducts.map((FDMproduct) => (
                  <SwiperSlide key={FDMproduct} className="relative my-3">
                    <div
                      className="rounded-xl  flex flex-col items-start  bg-white/95 h-[400px]"
                      style={{
                        boxShadow:
                          "-8px 0 15px rgba(203, 213, 225, 0.5), 0 8px 15px rgba(203, 213, 225, 0.5)",
                      }}
                    >
                      <div className=" w-full h-52 bg-cover bg-center"
                        style={{
                          backgroundImage: `url(/api/${FDMproduct.ProductImages[0].path})`
                        }}
                      />
                      <h2 className="pt-8 px-6 font-bold line-clamp-1">{FDMproduct.product_name}</h2>
                      <p className=" pt-4 px-6 line-clamp-4">
                        {FDMproduct.discription}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              {width >= 480 && (
                <div className=" h-full w-1/12 absolute right-0 z-[99] bg-gradient-to-l from-white to-transparent from-60% " />
              )}
              {width >= 480 && !isEndFDM && FDMproducts.length > slidesToShow ? (
                <div className="text-6xl text-gray-600 hover:text-customBlue cursor-pointer absolute right-0 z-[999]">
                  <FaAngleRight
                    onClick={(e) => {
                      swiperInstanceFDM.slideNext();
                    }}
                  />
                </div>
              ) : null}
            </div>
          )}
        </div>
      </>
    </div>
  );
};

export default Doubleslider;
