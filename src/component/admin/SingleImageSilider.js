import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { Swiper, SwiperSlide} from 'swiper/react';
import {A11y} from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import 'swiper/css';
import { useEffect, useState } from "react";

const SingleImageSilider = ({ images }) => {

    const [swiperInstance, setSwiperInstance] = useState(null)
    const [isBeginning,setIsBeginning]=useState(true)
    const [isEnd,setIsEnd]=useState(false)
    const handleSwiper = (swiper) => {
        setSwiperInstance(swiper)
    }
    useEffect(() => {
        if (swiperInstance) {

            console.log("Is Begininig " + swiperInstance.isBeginning)
        }
    }, [swiperInstance])

    return (
        <div className="h-full relative">
            <Swiper
                modules={[A11y]}
                spaceBetween={50}
                slidesPerView={1}
                onSwiper={(swiper) => handleSwiper(swiper)}
                className="h-full"
                onSlideChange={(swiperCurrent)=>{
                    setIsBeginning(swiperCurrent.isBeginning)
                    setIsEnd(swiperCurrent.isEnd)
                }}
            >
                {
                    images &&
                    images.map((image, index) => {
                        return <SwiperSlide
                            key={index}
                        >
                            <div className='w-full h-full flex justify-center items-center'>
                                <div className="bg-cover bg-center 2xl:w-[480px] 2xl:h-[270px] w-[320px] h-[180px] border-2 rounded-md"
                                    style={{ backgroundImage: `url(/api/${image.path})` }}

                                >
                                </div>
                            </div>
                        </SwiperSlide>
                    })

                }


            </Swiper>
            <div className=" w-full absolute top-1/2 z-[999] flex justify-between"
            >
                {
                    !isBeginning?
                        <button className="text-3xl hover:text-customBlue text-gray-600"
                            onClick={(e) => {
                                swiperInstance.slidePrev()
                            }}
                        >
                            <FaAngleLeft />
                        </button>
                        : <div/>
                }

                {
                !isEnd && images && images.length>1?
                <button className="text-3xl hover:text-customBlue text-gray-600"
                    onClick={(e) => {
                        swiperInstance.slideNext()
                    }}
                >
                    <FaAngleRight />
                </button>
                :<div/>
                }

            </div>
        </div>
    )
}

export default SingleImageSilider