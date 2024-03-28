import React from 'react'
import { CiStar } from 'react-icons/ci';
import { useEffect } from 'react';
import { useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Api from '../api/Api';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ScopeOfDelivery = () => {

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
    const [isLoading, setIsloading] = useState(false)
    const [isMobile, setIsMobile] = useState(false)


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
                setDiscription(result.data.scope_of_delivery_discription)
                const apiImages = result.data.ProductImages.filter((image) => {
                    if (image.role === 3) {
                        return true
                    }
                    else {
                        return false
                    }
                })
                setMainImage(apiImages[0])
                setImages(apiImages)
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
    useEffect(() => {
        console.log(images)
    }, [images])
    return (
        <>
            {!isMobile ? (
                <div className='grid-cols-8 grid '>
                    <div className=' col-span-8' id='alle'>
                        <h1 class="w-full py-8 bg-zinc-100 flex items-center px-20 text-neutral-800 text-[32px] font-semibold">
                            Lieferumfang</h1>
                    </div>
                    {isLoading ?
                        <div className='col-span-8 pl-8'>
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
                                    <div className=' py-5 bg-gray-200 rounded-2xl animate-pulse'/>
                                    <div className=' py-2 mt-8 bg-gray-200 rounded-2xl animate-pulse'/>
                                    <div className=' py-2 mt-4 bg-gray-200 rounded-2xl animate-pulse'/>
                                    <div className=' py-2 mt-4 bg-gray-200 rounded-2xl animate-pulse'/>
                                    <div className=' py-2 mt-4 bg-gray-200 rounded-2xl animate-pulse'/>
                                </div>
                            </div>
                            <div className='w-full h-[200px] bg-gray-200 animate-pulse' />

                        </div>
                        : <div className='col-span-8 pl-8'>
                            <div className='lg:flex pt-4 pb-8 justify-center pr-4  relative w-full'>
                                {images.length > 0 &&
                                    <div className='flex items-center lg:flex-col w-[400px]'>
                                        <div className='w-full h-64 bg-cover bg-center rounded-md shadow-md'
                                            style={{ backgroundImage: `url(/api/${mainImage && mainImage.path})` }}
                                        />
                                        <div className='lg:flex items-center justify-center py-8 ' >
                                            {images.map((picture) => (
                                                <div key={picture.id} className='w-20 h-20 mx-1 rounded-md overflow-hidden  hover:border-[#00CED1] border-4' onClick={() => switchMainImage(picture)}>
                                                    <div className='w-full h-full bg-cover bg-center'
                                                        style={{ backgroundImage: `url(/api/${picture.path})` }}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                }
                                <div className=' px-8 grow'>
                                    <p>{discription}</p>
                                </div>
                            </div>
                        </div>
                    }
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
                                        style={{ backgroundImage: `url(/api/${item.path})` }}>
                                    </div>
                                </div>
                            </SwiperSlide>
                        })}
                    </Swiper>

                    <div className=' px-6 py-8 flex flex-col justify-center items-center'>
                        <p className='pb-4 text-center'>{discription && discription}</p>
                        <div className='flex items-center py-4'>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ScopeOfDelivery
