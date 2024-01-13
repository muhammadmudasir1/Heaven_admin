import {useState} from 'react';
import VariantCard from './VariantCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation } from 'swiper/modules';
import { FaAngleLeft,FaAngleRight } from 'react-icons/fa6';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import 'swiper/css';




const variants = [
    {
        "image": "https://fastly.picsum.photos/id/617/600/500.jpg?hmac=kLeIwWMLOXVr68Ki1EzXfUVymAN258kfHqL82dMjAD0",
        "productName": "This is Product One",
        "discountedPrice": "250$",
        "originalPrice": "300$"

    },
    {
        "image": "https://fastly.picsum.photos/id/777/600/500.jpg?hmac=6_5BG8T6N7JUnWZUMERTn1D1CKyQwezh63-pC_yKbzQ",
        "productName": "This is Product Two",
        "discountedPrice": "150$",
        "originalPrice": "170$"
    },
    {
        "image": "https://fastly.picsum.photos/id/48/600/500.jpg?hmac=-dTTZNGkJhfN8kSqynSHhI0ng69NN6OuokdPFnPXAOY",
        "productName": "This is Product Three",
        "discountedPrice": "220$",
        "originalPrice": "250$"
    },
    {
        "image": "https://fastly.picsum.photos/id/458/600/500.jpg?hmac=BM3mJvx1SleTNSO4urcO1Yuo0xpSCeiQe9tm5Y3yCss",
        "productName": "This is Product Four",
        "discountedPrice": "175$",
        "originalPrice": "185$"
    },
    {
        "image": "https://fastly.picsum.photos/id/275/600/500.jpg?hmac=FBlFT-qSlr4yjKwkH6Dxy9LQQTtmMbgbx6vY__PQ9Lc",
        "productName": "This is Product five",
        "discountedPrice": "125$",
        "originalPrice": "150$"
    }


]



const VarientSlider = () => {
    const [swiperInstance, setSwiperInstance] = useState(null)
    const [isBeginning,setIsBeginning]=useState(true)
    const [isEnd,setIsEnd]=useState(false)

    const handleSwiper = (swiper) => {
        setSwiperInstance(swiper)
    }

    return (
        <div
            className='w-full h-full p-4 flex items-center'>
                {
                !isBeginning?
                <div className='text-3xl text-gray-600 hover:text-customBlue cursor-pointer'>
                    <FaAngleLeft
                    onClick={(e) => {
                        swiperInstance.slidePrev()
                    }}
                    />
                </div>:null
                }
            <Swiper
                modules={[A11y, Navigation]}
                spaceBetween={10}
                slidesPerView={4}
                onSwiper={(swiper) => handleSwiper(swiper)}
                onSlideChange={(swiperCurrent)=>{
                    setIsBeginning(swiperCurrent.isBeginning)
                    setIsEnd(swiperCurrent.isEnd)
                }}
                className='h-full grow mx-4'
            >
                {
                    variants.map((variant, index) => {
                        return <SwiperSlide
                            key={index}
                        >
                            <VariantCard data={variant} />

                        </SwiperSlide>
                    })

                }

            </Swiper>
            {
            !isEnd?
            <div className='text-3xl text-gray-600 hover:text-customBlue cursor-pointer'>
                    <FaAngleRight
                    onClick={(e) => {
                        swiperInstance.slideNext()
                    }}
                    />
                </div>
                :null
            }
        </div>
    )
}

export default VarientSlider