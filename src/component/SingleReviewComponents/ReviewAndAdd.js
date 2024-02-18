import React from 'react'
import { CiStar } from 'react-icons/ci';
import SingleReviewPropertyCard from './SingleReviewPropertyCard';
import ProsAndCons from './ProsAndCons';
import { useEffect } from 'react';
import PriceCards from './PriceCards'
import FirstImpression from './FirstImpression';
import { useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './SingleReviwStyle.css'
import Api from '../../api/Api';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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
                // console.log(apiImages)
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

            } catch (error) {
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
                <div className='grid-cols-8 grid pr-4'>

                    <div className='col-span-6 pl-8'>
                        <div className='lg:flex pt-4 pb-8 justify-center pr-4  relative w-full '>
                            <div className='flex items-center lg:flex-col'>
                                <div className='w-full h-64 bg-cover bg-center rounded-md shadow-md'
                                    style={{ backgroundImage: `url(/${mainImage && mainImage.path})` }}
                                />
                                <div className='lg:flex items-center justify-center py-8 ' >
                                    {images.map((picture) => (
                                        <div key={picture.id} className='w-20 h-20 mx-1 rounded-md overflow-hidden  hover:border-[#00CED1] border-4' onClick={() => switchMainImage(picture)}>
                                            <div className='w-full h-full bg-cover bg-center'
                                                style={{ backgroundImage: `url(/${picture.path})` }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className=' px-8'>
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
                                    {[...Array.from({ length: 5 - overall}, (_, index) => index + 1)].map((_, index) => (
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
                                            Preis
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
                                            Kundenservice
                                        </h1>
                                    </div>
                                    <div className='flex items-center py-1'>
                                        <div className='h-2 w-60 relative bg-[#EEEEEE] rounded-lg '>
                                            <div className={`absolute h-2 bg-[#00CED1] rounded-lg ${processing === 1 ? "w-1/5" : processing === 2 ? "w-2/5" : processing === 3 ? "w-3/5" : processing === 4 ? "w-4/5" : processing === 5 ? "w-full" : ""}`} />
                                        </div>
                                        <h1 className='pl-4 font-light text-sm'>
                                            Verarbeitungen
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <SingleReviewPropertyCard specs={specs} productType={productType} />
                        <ProsAndCons />
                        <PriceCards />
                    </div>
                    <div className='col-span-2 lg:bg-white/95' style={{ boxShadow: '-8px 0 15px rgb(203 213 225), 0 8px 15px rgb(203 213 225)' }} ></div>
                </div>
            ) : (
                <div className=''>
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
                                        style={{ backgroundImage: `url(/${item.path})` }}>
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
                                    {[...Array.from({ length: 5 - overall}, (_, index) => index + 1)].map((_, index) => (
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
                                        Preis
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
                                        Kundenservice
                                    </h1>
                                </div>
                                <div className='flex items-center py-1'>
                                    <div className='h-2 w-[57vw] relative bg-[#EEEEEE] rounded-lg '>
                                        <div className={`absolute h-2 bg-[#00CED1] rounded-lg ${processing === 1 ? "w-1/5" : processing === 2 ? "w-2/5" : processing === 3 ? "w-3/5" : processing === 4 ? "w-4/5" : processing === 5 ? "w-full" : ""}`} />
                                    </div>
                                    <h1 className='pl-4 font-light text-sm'>
                                        Verarbeitungen
                                    </h1>
                                </div>
                            </div>

                        </div>
                    </div>
                    <SingleReviewPropertyCard specs={specs} productType={productType} />
                    <ProsAndCons />
                    <PriceCards />
                </div>
            )}
        </>
    )
}

export default ReviewAndAdd
