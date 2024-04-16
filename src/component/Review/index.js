import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { A11y, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CiStar } from 'react-icons/ci';
import Api from '../../api/Api'
import useWindowDimensions from '../../hooks/useWindowDimensions';
import Tabbar from '../Landingpage/Tabbar';
import ReviewTabbar from './SingleReviewTabbar';
import WarningBannar from './WarningBannar';
import PropertyCards from './PropertyCards';

import 'swiper/css';
import 'swiper/css/navigation';

const SingleReview = () => {
    const { width } = useWindowDimensions()
    const { id, productNameURL } = useParams()

    const [title, setTitle] = useState()
    const [discription, setDiscription] = useState("")
    const [productName, setProductName] = useState("")
    const [customerService, setCustomerService] = useState(0)
    const [images, setImages] = useState([])
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
        const fetchData = async () => {
            try {
                setIsloading(true)
                const result = await Api.get(`/api/products/${id}`)
                console.log(result.data)
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
                setTitle(result.data.product_title)
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
        <div className=' w-screen overflow-hidden'>
            <Helmet>
                <title>{title}</title>
                <meta name='description' content={discription} />
                <link rel="canonical" href={`https://www.3dheaven.de/${productNameURL}/${id}`} />
            </Helmet>
            {width > 600 && <Tabbar />}
            <div className=' lg:flex lg:items-center lg:justify-center lg:bg-zinc-100 lg:py-4'>
                <h1 className='text-center top-12 left-8 text-neutral-800 text-2xl font-bold
          lg:text-neutral-800 lg:text-5xl lg:font-bold lg:pr-44 py-4 lg:py-2'>{title}</h1>
            </div>
            <ReviewTabbar />
            <div className='flex-col '>
                {/* <div className=' lg:w-2/3 p-4'> */}
                    {
                        productType === 3 &&
                        <WarningBannar />
                    }

                {/* </div> */}
                <div className='w-full' id='alle'>
                    <h1 class="hidden w-full py-8 bg-zinc-100 lg:flex items-center px-20 text-neutral-800 text-[32px] font-semibold">
                        {t("coreData")}</h1>
                </div>
                <div className='flex justify-between lg:pr-8 pr-0'>
                    {
                        isLoading ?
                            <div className='lg:flex flex-col lg:pl-8 w-full px-4 lg:px-0'>
                                <div className='lg:flex pt-4 pb-8 justify-center lg:pr-4  relative w-full'>
                                    <div className='lg:flex items-center lg:flex-col lg:w-[400px]'>
                                        <div className='w-full h-64  rounded-md shadow-md bg-gray-200 animate-pulse'
                                        />
                                        <div className='lg:flex hidden items-center justify-center py-8 animate-pulse ' >
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
                                    <div className=' lg:px-8 lg:w-3/5 w-full'>
                                        <h1 className='lg:block hidden py-5 bg-gray-200 rounded-2xl animate-pulse'></h1>
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
                            : <div className='w-full lg:px-8'>
                                <div className='w-full lg:flex'>
                                    <div className=' lg:w-4/12 h-full'>

                                        <div
                                            className="lg:block hidden w-full h-64 bg-cover bg-center rounded-md shadow-md"
                                        >
                                            <img className="object-cover h-full w-full"
                                                src={mainImage && `/api/${mainImage.path}`}
                                                alt={mainImage.altText}
                                                title={mainImage.altText}
                                            />
                                        </div>

                                        <div className='w-full lg:py-8 py-2' >
                                            <Swiper
                                                spaceBetween={1}
                                                modules={[A11y, Navigation]}
                                                // width && navigation
                                                navigation={width>600?true:false}
                                                slidesPerView={width>600?4:1}
                                                onSwiper={(swiper) => console.log(swiper)}
                                                arr
                                            >
                                                {images.map((picture) => {
                                                    return <SwiperSlide key={picture.id}>
                                                        <div className='relative lg:w-20 lg:h-20 w-full lg:mx-1 lg:rounded-md overflow-hidden  hover:border-[#00CED1] lg:border-4' onClick={() => switchMainImage(picture)}>
                                                            <div
                                                                className="w-full h-full"
                                                            >
                                                                <img className=" object-cover h-full w-full"
                                                                    src={`/api/${picture.path}`}
                                                                    alt={picture.altText}
                                                                    title={picture.altText}
                                                                />
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                })}
                                            </Swiper>
                                        </div>
                                    </div>
                                    <div className='w-full lg:w-8/12 lg:h-full lg:pl-4 px-8'>
                                        <h1 className=' text-neutral-800 lg:text-2xl text-xl text-center font-semibold lg:py-3 py-2'>{productName && productName}</h1>
                                        <p className='lg:text-left text-center'>{discription && discription}</p>
                                        <div className='flex items-center mb-2 lg:justify-start justify-center lg:my-0 my-2'>
                                            <h1 className='text-2xl font-semibold pr-2'>{overall}</h1>

                                            {overall > 0 && [...Array.from({ length: overall }, (_, index) => index + 1)].map((_, index) => (
                                                <CiStar
                                                    key={index}
                                                    size={width>600? 50:40}
                                                    className=" text-[#00CED1]"
                                                />
                                            ))}
                                            {[...Array.from({ length: 5 - overall }, (_, index) => index + 1)].map((_, index) => (
                                                <CiStar
                                                    key={index}
                                                    size={width>600? 50:40}
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
                                <PropertyCards specs={specs} productType={productType} />
                                {/* <ProsAndCons />
                                <PriceCards /> */}
                            </div>

                    }
                    <div className='lg:block hidden min-h-[600px] min-w-[200px] lg:bg-white/95' style={{ boxShadow: '-8px 0 15px rgb(203,213,225,0.2), 0 8px 15px rgb(203,213,225,0.2)' }} ></div>
                </div>
            </div>
        </div>
        // <></>
    )
}

export default SingleReview
