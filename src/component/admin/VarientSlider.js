import {useEffect, useState} from 'react';
import VariantCard from './VariantCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation } from 'swiper/modules';
import { FaAngleLeft,FaAngleRight } from 'react-icons/fa6';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import 'swiper/css';


const VarientSlider = ({variants,productId,reload}) => {
    const [swiperInstance, setSwiperInstance] = useState(null)
    const [isBeginning,setIsBeginning]=useState(true)
    const [isEnd,setIsEnd]=useState(false)
    const {width}=useWindowDimensions()
    const [slidesToShow,setSlidesToShow]=useState()
    const handleSwiper = (swiper) => {
        setSwiperInstance(swiper)
    }
    useEffect(()=>{
        setSlidesToShow(width<=1380? 3:4)
    },[width])

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
                slidesPerView={
                    width<=1380? 3:4
                }
                onSwiper={(swiper) => handleSwiper(swiper)}
                onSlideChange={(swiperCurrent)=>{
                    setIsBeginning(swiperCurrent.isBeginning)
                    setIsEnd(swiperCurrent.isEnd)
                }}
                className='h-full grow mx-4'
            >
                {
                    variants && variants.map((variant, index) => {
                        return <SwiperSlide
                            key={index}
                        >
                            <VariantCard id={variant.Id} productId={productId} reload={reload} />

                        </SwiperSlide>
                    })

                }

            </Swiper>
            {
            !isEnd && variants.length>slidesToShow ?
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