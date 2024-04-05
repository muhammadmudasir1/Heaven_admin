import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CiStar } from 'react-icons/ci';
import { useParams } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Api from '../../api/Api';
import PriceCards from './PriceCards';
import ProsAndCons from './ProsAndCons';
import SingleReviewPropertyCard from './SingleReviewPropertyCard';
import './SingleReviwStyle.css';
import WarningBannar from './WarningBannar';

const ReviewAndAdd = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
    const { id } = useParams()
    const [images, setImages] = useState([])
    const [discription, setDiscription] = useState("")
    const [productName, setProductName] = useState("")
    const [customerService, setCustomerService] = useState(0)
    const [price, setPrice] = useState(0)
    const [processing, setProcessing] = useState(0)
    const [innovation, setInnovation] = useState(0)
    const [software, setSoftware] = useState(0)
    const [overall, setOverall] = useState(0)
    const [mainImage, setMainImage] = useState("")
    const [specs, setSpecs] = useState({})
    const [productType, setProductType] = useState(0)
    const [isLoading, setIsloading] = useState(false)
    const { t } = useTranslation()

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 800);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsloading(true)
                const result = await Api.get(`/api/products/${id}`)
                const apiImages = result.data.ProductImages.filter((image) => {
                    if (image.role !== 3) {
                        return true
                    }
                    else {
                        return false
                    }
                }).sort((a, b) => {
                    if (a.role > b.role) {
                        return 1
                    }
                    if (a.role < b.role) {
                        return -1
                    }
                    return 0
                })
                setImages(apiImages)
                setMainImage(apiImages[0])
                setDiscription(result.data.discription)
                setProductName(result.data.product_name)
                setCustomerService(result.data.customer_service_rating)
                setPrice(result.data.price_rating)
                setProcessing(result.data.processing_rating)
                setSoftware(result.data.software_rating)
                setInnovation(result.data.software_rating)
                setOverall(result.data.overall_rating)
                setProductType(result.data.productType)
                if (result.data.productType === 1) {
                    setSpecs(result.data.SLA)

                }
                if (result.data.productType === 2) {
                    setSpecs(result.data.FDM)
                }
                if (result.data.productType === 3) {
                    setSpecs(result.data.LeaserCutter)
                }
                if (result.data.productType === 4) {
                    setSpecs(result.data.scanner)
                }
                setIsloading(false)

            } catch (error) {
                setIsloading(false)
                console.log(error)
            }
        }
        fetchData()
    }, [id])

    const switchMainImage = (picture) => {
        setMainImage(picture);
    };
    return (
        <>
            {!isMobile ? (
                <div className='flex-col '>
                    <div className=' w-2/3 p-4'>
                        {
                            productType === 3 &&
                            <WarningBannar />
                        }

                    </div>
                    <div className='w-full' id='alle'>
                        <h1 class="w-full py-8 bg-zinc-100 flex items-center px-20 text-neutral-800 text-[32px] font-semibold">
                            {t("coreData")}</h1>
                    </div>
                    <div className='flex justify-between pr-8'>
                        {
                            isLoading ?
                                <div className='flex-col pl-8'>
                                    <div className='lg:flex pt-4 pb-8 justify-center pr-4  relative w-full'>
                                        <div className='flex items-center lg:flex-col w-[400px]'>
                                            <div className='w-full h-64  rounded-md shadow-md bg-gray-200 animate-pulse'
                                            />
                                            <div className='lg:flex items-center justify-center py-8 animate-pulse ' >
                                                <div className='w-20 h-20 mx-1 rounded-md overflow-hidden  hover:border-[#00CED1] border-4'>
                                                    <div className='w-full h-full ' />
                                                </div>
                                                <div className='w-20 h-20 mx-1 rounded-md overflow-hidden  hover:border-[#00CED1] border-4'>
                                                    <div className='w-full h-full ' />
                                                </div>
                                                <div className='w-20 h-20 mx-1 rounded-md overflow-hidden  hover:border-[#00CED1] border-4'>
                                                    <div className='w-full h-full ' />
                                                </div>

                                            </div>
                                        </div>
                                        <div className=' px-8 w-3/5'>
                                            <h1 className=' py-5 bg-gray-200 rounded-2xl animate-pulse'></h1>
                                            <p className='pb-6'></p>
                                            <div className='flex items-center mb-2 animate-pulse'>

                                                {overall > 0 && [...Array.from({ length: 5 }, (_, index) => index + 1)].map((_, index) => (
                                                    <CiStar
                                                        key={index}
                                                        size={50}
                                                        className=" text-[#00CED1]"
                                                    />
                                                ))}
                                            </div>
                                            <div>
                                                <div className='flex items-center py-1 animate-pulse'>
                                                    <div className='h-2 w-60 relative bg-[#EEEEEE] rounded-lg '>
                                                        <div className={`absolute h-2 bg-[#00CED1] rounded-lg w-3/5 animate-pulse`} />
                                                    </div>
                                                    <h1 className='pl-4 font-light text-sm'>
                                                        {t('price')}
                                                    </h1>
                                                </div>
                                                <div className='flex items-center py-1 animate-pulse'>
                                                    <div className='h-2 w-60 relative bg-[#EEEEEE] rounded-lg '>
                                                        <div className={`absolute h-2 bg-[#00CED1] rounded-lg animate-pulse w-2/5`} />
                                                    </div>
                                                    <h1 className='pl-4 font-light text-sm'>
                                                        {t('processing')}
                                                    </h1>
                                                </div>
                                                <div className='flex items-center py-1 animate-pulse'>
                                                    <div className='h-2 w-60 relative bg-[#EEEEEE] rounded-lg '>
                                                        <div className={`absolute h-2 bg-[#00CED1] rounded-lg w-2/5 animate-pulse`} />
                                                    </div>
                                                    <h1 className='pl-4 font-light text-sm'>
                                                        Innovation
                                                    </h1>
                                                </div>
                                                <div className='flex items-center py-1 animate-pulse'>
                                                    <div className='h-2 w-60 relative bg-[#EEEEEE] rounded-lg '>
                                                        <div className={`absolute h-2 bg-[#00CED1] rounded-lg w-4/5 animate-pulse`} />
                                                    </div>
                                                    <h1 className='pl-4 font-light text-sm'>
                                                        Software
                                                    </h1>
                                                </div>
                                                <div className='flex items-center py-1 animate-pulse'>
                                                    <div className='h-2 w-60 relative bg-[#EEEEEE] rounded-lg '>
                                                        <div className={`absolute h-2 bg-[#00CED1] rounded-lg w-3/5 animate-pulse`} />
                                                    </div>
                                                    <h1 className='pl-4 font-light text-sm'>
                                                        {t('customerSupport')}
                                                    </h1>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full h-[200px] bg-gray-200 animate-pulse' />

                                </div>
                                : <div className='flex-col w-3/4 pl-8'>
                                    <div className='grow lg:flex pt-4 pb-8 justify-center pr-4  relative w-full'>
                                        <div className='flex items-center lg:flex-col w-[400px]'>
                                            <div className='w-full h-64 bg-cover bg-center rounded-md shadow-md'
                                                style={{ backgroundImage: `url(/api/${mainImage && mainImage.path})` }}
                                            />
                                            <div className='w-full py-8 ' >
                                                <Swiper
                                                    spaceBetween={2}
                                                    modules={[A11y,Navigation]}
                                                    navigation
                                                    slidesPerView={5}
                                                    onSlideChange={() => console.log('slide change')}
                                                    onSwiper={(swiper) => console.log(swiper)}
                                                    arr
                                                >
                                                    {images.map((picture) => {
                                                        return <SwiperSlide key={picture.id}>
                                                            <div className='relative w-20 h-20 mx-1 rounded-md overflow-hidden  hover:border-[#00CED1] border-4' onClick={() => switchMainImage(picture)}>
                                                                <div className='w-full h-full bg-cover bg-center'
                                                                    style={{ backgroundImage: `url(/api/${picture.path})` }}
                                                                />
                                                            </div>
                                                        </SwiperSlide>
                                                    })}
                                                </Swiper>
                                            </div>
                                        </div>
                                        <div className=' px-8 grow'>
                                            <h1 className=' text-neutral-800 text-2xl font-semibold py-3 line-clamp-2'>{productName && productName}</h1>
                                            <p className='pb-6'>{discription && discription}</p>
                                            <div className='flex items-center mb-2'>
                                                <h1 className='text-2xl font-semibold pr-2'>{overall}</h1>

                                                {overall > 0 && [...Array.from({ length: overall }, (_, index) => index + 1)].map((_, index) => (
                                                    <CiStar
                                                        key={index}
                                                        size={50}
                                                        className=" text-[#00CED1]"
                                                    />
                                                ))}
                                                {[...Array.from({ length: 5 - overall }, (_, index) => index + 1)].map((_, index) => (
                                                    <CiStar
                                                        key={index}
                                                        size={50}
                                                        className="text-gray-500"
                                                    />
                                                ))}
                                            </div>
                                            <div>
                                                <div className='flex items-center py-1'>
                                                    <div className='h-2 w-60 relative bg-[#EEEEEE] rounded-lg '>
                                                        <div className={`absolute h-2 bg-[#00CED1] rounded-lg ${price === 1 ? "w-1/5" : price === 2 ? "w-2/5" : price === 3 ? "w-3/5" : price === 4 ? "w-4/5" : price === 5 ? "w-full" : ""}`} />
                                                    </div>
                                                    <h1 className='pl-4 font-light text-sm'>
                                                        {t('price')}
                                                    </h1>
                                                </div>
                                                <div className='flex items-center py-1'>
                                                    <div className='h-2 w-60 relative bg-[#EEEEEE] rounded-lg '>
                                                        <div className={`absolute h-2 bg-[#00CED1] rounded-lg ${processing === 1 ? "w-1/5" : processing === 2 ? "w-2/5" : processing === 3 ? "w-3/5" : processing === 4 ? "w-4/5" : processing === 5 ? "w-full" : ""}`} />
                                                    </div>
                                                    <h1 className='pl-4 font-light text-sm'>
                                                        {t('processing')}
                                                    </h1>
                                                </div>
                                                <div className='flex items-center py-1'>
                                                    <div className='h-2 w-60 relative bg-[#EEEEEE] rounded-lg '>
                                                        <div className={`absolute h-2 bg-[#00CED1] rounded-lg ${innovation === 1 ? "w-1/5" : innovation === 2 ? "w-2/5" : innovation === 3 ? "w-3/5" : innovation === 4 ? "w-4/5" : innovation === 5 ? "w-full" : ""}`} />
                                                    </div>
                                                    <h1 className='pl-4 font-light text-sm'>
                                                        Innovation
                                                    </h1>
                                                </div>
                                                <div className='flex items-center py-1'>
                                                    <div className='h-2 w-60 relative bg-[#EEEEEE] rounded-lg '>
                                                        <div className={`absolute h-2 bg-[#00CED1] rounded-lg ${software === 1 ? "w-1/5" : software === 2 ? "w-2/5" : software === 3 ? "w-3/5" : software === 4 ? "w-4/5" : software === 5 ? "w-full" : ""}`} />
                                                    </div>
                                                    <h1 className='pl-4 font-light text-sm'>
                                                        Software
                                                    </h1>
                                                </div>
                                                <div className='flex items-center py-1'>
                                                    <div className='h-2 w-60 relative bg-[#EEEEEE] rounded-lg '>
                                                        <div className={`absolute h-2 bg-[#00CED1] rounded-lg ${customerService === 1 ? "w-1/5" : customerService === 2 ? "w-2/5" : customerService === 3 ? "w-3/5" : customerService === 4 ? "w-4/5" : customerService === 5 ? "w-full" : ""}`} />
                                                    </div>
                                                    <h1 className='pl-4 font-light text-sm'>
                                                        {t('customerSupport')}
                                                    </h1>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <SingleReviewPropertyCard specs={specs} productType={productType} />
                                    <ProsAndCons />
                                    <PriceCards />
                                </div>
                        }
                        <div className=' min-h-[600px] min-w-[200px] lg:bg-white/95' style={{ boxShadow: '-8px 0 15px rgb(203,213,225,0.2), 0 8px 15px rgb(203,213,225,0.2)' }} ></div>
                    </div>
                </div>
            ) : (
                <div className='' id='alle'>
                    {
                        productType === 3 &&
                        <div className='px-4 py-4'>

                            <WarningBannar />
                        </div>
                    }
                    {
                        isLoading ?
                            <>
                                <Swiper
                                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                                    spaceBetween={20}
                                    slidesPerView={1}
                                    pagination={{ clickable: true }}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    onSlideChange={() => console.log('slide change')}
                                    className='h-56 relative'>
                                    {images.map((item, index) => {
                                        return <SwiperSlide className=''>
                                            <div className='w-full px-2'>
                                                <div className='w-full h-56 bg-gray-200 animate-pulse'>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    })}
                                </Swiper>
                                <div className=' px-6 py-8 flex flex-col justify-center items-center'>
                                    <h1 className='h-12 w-full rounded-2xl bg-gray-200 animate-pulse' />

                                    <p className='mt-3 h-4 w-full rounded-2xl bg-gray-200 animate-pulse' />
                                    <p className='mt-1 h-4 w-full rounded-2xl bg-gray-200 animate-pulse' />
                                    <div className='flex items-center py-4'>
                                        {overall > 0 && [...Array.from({ length: 5 }, (_, index) => index + 1)].map((_, index) => (
                                            <CiStar
                                                key={index}
                                                size={30}
                                                className=" text-gray-200 animate-pulse"
                                            />
                                        ))}
                                    </div>
                                    <div>
                                        <div className=''>
                                            <div className='flex items-center py-1 animate-pulse'>
                                                <div className='h-2 w-[57vw] relative bg-[#EEEEEE] rounded-lg animate-pulse'>
                                                    <div className={`absolute h-2 bg-[#00CED1] rounded-lg animate-pulse w-2/3`} />
                                                </div>
                                                <h1 className='pl-4 font-light text-sm'>
                                                    {t('price')}
                                                </h1>
                                            </div>
                                            <div className='flex items-center py-1 animate-pulse'>
                                                <div className='h-2 w-[57vw] relative bg-[#EEEEEE] rounded-lg animate-pulse'>
                                                    <div className={`absolute h-2 bg-[#00CED1] rounded-lg animate-pulse w-4/5`} />
                                                </div>
                                                <h1 className='pl-4 font-light text-sm'>
                                                    {t('processing')}
                                                </h1>
                                            </div>
                                            <div className='flex items-center py-1 animate-pulse'>
                                                <div className='h-2 w-[57vw] relative bg-[#EEEEEE] rounded-lg animate-pulse '>
                                                    <div className={`absolute h-2 bg-[#00CED1] rounded-lg animate-pulse w-3/5`} />
                                                </div>
                                                <h1 className='pl-4 font-light text-sm'>
                                                    Innovation
                                                </h1>
                                            </div>
                                            <div className='flex items-center py-1 animate-pulse'>
                                                <div className='h-2 w-[57vw] relative bg-[#EEEEEE] rounded-lg animate-pulse'>
                                                    <div className={`absolute h-2 bg-[#00CED1] rounded-lg animate-pulse w-4/5`} />
                                                </div>
                                                <h1 className='pl-4 font-light text-sm'>
                                                    Software
                                                </h1>
                                            </div>
                                            <div className='flex items-center py-1 animate-pulse'>
                                                <div className='h-2 w-[57vw] relative bg-[#EEEEEE] rounded-lg animate-pulse'>
                                                    <div className={`absolute h-2 bg-[#00CED1] rounded-lg animate-pulse w-2/5`} />
                                                </div>
                                                <h1 className='pl-4 font-light text-sm'>
                                                    {t('customerSupport')}
                                                </h1>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className='w-full h-48 bg-gray-200 grid grid-cols-2 grid-rows-2 p-5 gap-2 animate-pulse'>
                                    <div className='w-full h-full bg-gray-300 rounded-2xl animate-pulse' />
                                    <div className='w-full h-full bg-gray-300 rounded-2xl animate-pulse' />
                                    <div className='w-full h-full bg-gray-300 rounded-2xl animate-pulse' />
                                    <div className='w-full h-full bg-gray-300 rounded-2xl animate-pulse' />
                                </div>
                            </>
                            : <>
                                <Swiper
                                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                                    spaceBetween={20}
                                    slidesPerView={1}
                                    pagination={{ clickable: true }}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    onSlideChange={() => console.log('slide change')}
                                    className='h-56 relative'>
                                    {images.map((item, index) => {
                                        return <SwiperSlide className=''>
                                            <div className='w-full px-2'>
                                                <div className='w-full h-56 bg-cover bg-center'
                                                    style={{ backgroundImage: `url(/api/${item.path})` }}>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    })}
                                </Swiper>
                                <div className=' px-6 py-8 flex flex-col justify-center items-center'>
                                    <h1 className='py-8 text-neutral-800 text-2xl font-semibold '>{productName && productName}</h1>

                                    <p className='pb-4 text-center'>{discription && discription}</p>
                                    <div className='flex items-center py-4'>
                                        <h1 className='text-xl font-semibold'>{overall}</h1>
                                        {overall > 0 && [...Array.from({ length: overall }, (_, index) => index + 1)].map((_, index) => (
                                            <CiStar
                                                key={index}
                                                size={30}
                                                className=" text-[#00CED1]"
                                            />
                                        ))}
                                        {[...Array.from({ length: 5 - overall }, (_, index) => index + 1)].map((_, index) => (
                                            <CiStar
                                                key={index}
                                                size={30}
                                                className="text-gray-500"
                                            />
                                        ))}
                                    </div>
                                    <div>
                                        <div className=''>
                                            <div className='flex items-center py-1'>
                                                <div className='h-2 w-[57vw] relative bg-[#EEEEEE] rounded-lg '>
                                                    <div className={`absolute h-2 bg-[#00CED1] rounded-lg ${price === 1 ? "w-1/5" : price === 2 ? "w-2/5" : price === 3 ? "w-3/5" : price === 4 ? "w-4/5" : price === 5 ? "w-full" : ""}`} />
                                                </div>
                                                <h1 className='pl-4 font-light text-sm'>
                                                    {t('price')}
                                                </h1>
                                            </div>
                                            <div className='flex items-center py-1'>
                                                <div className='h-2 w-[57vw] relative bg-[#EEEEEE] rounded-lg '>
                                                    <div className={`absolute h-2 bg-[#00CED1] rounded-lg ${processing === 1 ? "w-1/5" : processing === 2 ? "w-2/5" : processing === 3 ? "w-3/5" : processing === 4 ? "w-4/5" : processing === 5 ? "w-full" : ""}`} />
                                                </div>
                                                <h1 className='pl-4 font-light text-sm'>
                                                    {t('processing')}
                                                </h1>
                                            </div>
                                            <div className='flex items-center py-1'>
                                                <div className='h-2 w-[57vw] relative bg-[#EEEEEE] rounded-lg '>
                                                    <div className={`absolute h-2 bg-[#00CED1] rounded-lg ${innovation === 1 ? "w-1/5" : innovation === 2 ? "w-2/5" : innovation === 3 ? "w-3/5" : innovation === 4 ? "w-4/5" : innovation === 5 ? "w-full" : ""}`} />
                                                </div>
                                                <h1 className='pl-4 font-light text-sm'>
                                                    Innovation
                                                </h1>
                                            </div>
                                            <div className='flex items-center py-1'>
                                                <div className='h-2 w-[57vw] relative bg-[#EEEEEE] rounded-lg '>
                                                    <div className={`absolute h-2 bg-[#00CED1] rounded-lg ${software === 1 ? "w-1/5" : software === 2 ? "w-2/5" : software === 3 ? "w-3/5" : software === 4 ? "w-4/5" : software === 5 ? "w-full" : ""}`} />
                                                </div>
                                                <h1 className='pl-4 font-light text-sm'>
                                                    Software
                                                </h1>
                                            </div>
                                            <div className='flex items-center py-1'>
                                                <div className='h-2 w-[57vw] relative bg-[#EEEEEE] rounded-lg '>
                                                    <div className={`absolute h-2 bg-[#00CED1] rounded-lg ${customerService === 1 ? "w-1/5" : customerService === 2 ? "w-2/5" : customerService === 3 ? "w-3/5" : customerService === 4 ? "w-4/5" : customerService === 5 ? "w-full" : ""}`} />
                                                </div>
                                                <h1 className='pl-4 font-light text-sm'>
                                                    {t('customerSupport')}
                                                </h1>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <SingleReviewPropertyCard specs={specs} productType={productType} />
                            </>
                    }

                    <ProsAndCons />
                    <PriceCards />
                </div>
            )}
        </>
    )
}

export default ReviewAndAdd
