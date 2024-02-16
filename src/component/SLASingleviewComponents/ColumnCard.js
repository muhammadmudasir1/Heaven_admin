import React from 'react'
import { useState, useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const SLAColumnCard = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
    const [swiperInstance, setSwiperInstance] = useState();
    const {t} = useTranslation()
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 800);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const columns = [
        {
            "url": "https://static.wixstatic.com/media/5d104f_67ee508823b24198b6122f43e47d5b08~mv2.jpg/v1/crop/x_66,y_0,w_1852,h_1125/fill/w_443,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg",
            "title": "Anycubic Kobra 2",
            "detail1": `Lorem Ipsum is simply dummy text.`,
            "detail2": "Lorem Ipsum is simply dummy text.",
            "detail3": "Lorem Ipsum is simply dummy text.",
            "detail4": "Lorem Ipsum is simply dummy text.",
            "detail5": "Lorem Ipsum is simply dummy text.",
            "detail6": "Lorem Ipsum is simply dummy text.",
            "detail7": "Lorem Ipsum is simply dummy text.",
            "detail8": "Lorem Ipsum is simply dummy text.",
            "detail9": "Lorem Ipsum is simply dummy text.",
            "detail10": "Lorem Ipsum is simply dummy text.",
            "detail11": "Lorem Ipsum is simply dummy text.",
            "detail12": "Lorem Ipsum is simply dummy text.",

        },
        {
            "url": "https://static.wixstatic.com/media/5d104f_67ee508823b24198b6122f43e47d5b08~mv2.jpg/v1/crop/x_66,y_0,w_1852,h_1125/fill/w_443,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg",
            "title": "Anycubic Kobra 2",
            "detail1": `Lorem Ipsum is simply dummy text.`,
            "detail2": "Lorem Ipsum is simply dummy text.",
            "detail3": "Lorem Ipsum is simply dummy text.",
            "detail4": "Lorem Ipsum is simply dummy text.",
            "detail5": "Lorem Ipsum is simply dummy text.",
            "detail6": "Lorem Ipsum is simply dummy text.",
            "detail7": "Lorem Ipsum is simply dummy text.",
            "detail8": "Lorem Ipsum is simply dummy text.",
            "detail9": "Lorem Ipsum is simply dummy text.",
            "detail10": "Lorem Ipsum is simply dummy text.",
            "detail11": "Lorem Ipsum is simply dummy text.",
            "detail12": "Lorem Ipsum is simply dummy text.",

        },
        {
            "url": "https://static.wixstatic.com/media/5d104f_67ee508823b24198b6122f43e47d5b08~mv2.jpg/v1/crop/x_66,y_0,w_1852,h_1125/fill/w_443,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg",
            "title": "Anycubic Kobra 2",
            "detail1": `Lorem Ipsum is simply dummy text.`,
            "detail2": "Lorem Ipsum is simply dummy text.",
            "detail3": "Lorem Ipsum is simply dummy text.",
            "detail4": "Lorem Ipsum is simply dummy text.",
            "detail5": "Lorem Ipsum is simply dummy text.",
            "detail6": "Lorem Ipsum is simply dummy text.",
            "detail7": "Lorem Ipsum is simply dummy text.",
            "detail8": "Lorem Ipsum is simply dummy text.",
            "detail9": "Lorem Ipsum is simply dummy text.",
            "detail10": "Lorem Ipsum is simply dummy text.",
            "detail11": "Lorem Ipsum is simply dummy text.",
            "detail12": "Lorem Ipsum is simply dummy text.",

        },
        {
            "url": "https://static.wixstatic.com/media/5d104f_67ee508823b24198b6122f43e47d5b08~mv2.jpg/v1/crop/x_66,y_0,w_1852,h_1125/fill/w_443,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg",
            "title": "Anycubic Kobra 2",
            "detail1": `Lorem Ipsum is simply dummy text.`,
            "detail2": "Lorem Ipsum is simply dummy text.",
            "detail3": "Lorem Ipsum is simply dummy text.",
            "detail4": "Lorem Ipsum is simply dummy text.",
            "detail5": "Lorem Ipsum is simply dummy text.",
            "detail6": "Lorem Ipsum is simply dummy text.",
            "detail7": "Lorem Ipsum is simply dummy text.",
            "detail8": "Lorem Ipsum is simply dummy text.",
            "detail9": "Lorem Ipsum is simply dummy text.",
            "detail10": "Lorem Ipsum is simply dummy text.",
            "detail11": "Lorem Ipsum is simply dummy text.",
            "detail12": "Lorem Ipsum is simply dummy text.",

        },
    ]
    const countLengt = columns.length;
    let countForMobile = countLengt / 2;
    countForMobile = Math.ceil(countForMobile)
    const pageNumbers = [];

    for (let i = 1; i <= countForMobile; i++) {
        pageNumbers.push(i);
    }

    const [isBeginning, setIsBeginning] = useState(true)
    const [isEnd, setIsEnd] = useState(false)
    const [isActive, setIsActive]=useState(false)

    const handleSwiper = (swiper) => {
        setIsActive(swiper)
        setSwiperInstance(swiper)
    }
    useEffect(() => {
        if (swiperInstance) {
            console.log("lenght: ")
            console.log("Is Begininig " + swiperInstance.isBeginning)
        }
    }, [swiperInstance])
    // const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <>
            {!isMobile ? (
                <div className='relative mx-5'>
                    <div className=''>
                        <div className={` grid gap-4 ${countLengt === 2 ? 'grid-cols-3' : countLengt === 3 ? 'grid-cols-4' : countLengt === 4 ? 'grid-cols-5' : ''}  px-8`}>
                            <div className=' h-12'></div>
                            {columns.map((items, index) => {
                                return <div key={index}>
                                    <img src={items.url} alt="" />
                                    <div className='flex justify-center items-center py-5 bg-gray-300'>
                                        {items.title}
                                    </div>
                                </div>
                            })}
                        </div>
                        <div>
                            <div className={`grid ${countLengt === 2 ? 'grid-cols-3' : countLengt === 3 ? 'grid-cols-4' : countLengt === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                                <div className='flex items-center'>
                                    <div className=''>{t("Bauraumeinhausung:")}</div>
                                </div>
                                {columns.map((items, index) => {
                                    return <div key={index} className='flex bg-white justify-center items-center'>
                                        <div className='px-7 '>{items.detail1}</div>
                                    </div>
                                })}
                            </div>
                            <div className={`grid ${countLengt === 2 ? 'grid-cols-3' : countLengt === 3 ? 'grid-cols-4' : countLengt === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                                <div className='flex items-center'>
                                    <div className=''>{t('Bauraumeinhausung:')}</div>
                                </div>
                                {columns.map((items, index) => {
                                    return <div key={index} className='flex bg-white justify-center items-center'>
                                        <div className='px-7 '>{items.detail1}</div>
                                    </div>
                                })}
                            </div>
                            <div className={`grid ${countLengt === 2 ? 'grid-cols-3' : countLengt === 3 ? 'grid-cols-4' : countLengt === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                                <div className='flex items-center'>
                                    <div className=''>{t('Bauraumeinhausung:')}</div>
                                </div>
                                {columns.map((items, index) => {
                                    return <div key={index} className='flex bg-white justify-center items-center'>
                                        <div className='px-7 '>{items.detail1}</div>
                                    </div>
                                })}
                            </div>
                            <div className={`grid ${countLengt === 2 ? 'grid-cols-3' : countLengt === 3 ? 'grid-cols-4' : countLengt === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                                <div className='flex items-center'>
                                    <div className=''>{t('Bauraumeinhausung:')}</div>
                                </div>
                                {columns.map((items, index) => {
                                    return <div key={index} className='flex bg-white justify-center items-center'>
                                        <div className='px-7 '>{items.detail1}</div>
                                    </div>
                                })}
                            </div>
                            <div className={`grid ${countLengt === 2 ? 'grid-cols-3' : countLengt === 3 ? 'grid-cols-4' : countLengt === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                                <div className='flex items-center'>
                                    <div className=''>{t('Bauraumeinhausung:')}</div>
                                </div>
                                {columns.map((items, index) => {
                                    return <div key={index} className='flex bg-white justify-center items-center'>
                                        <div className='px-7 '>{items.detail1}</div>
                                    </div>
                                })}
                            </div>
                            <div className={`grid ${countLengt === 2 ? 'grid-cols-3' : countLengt === 3 ? 'grid-cols-4' : countLengt === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`} >
                                <div className='flex items-center'>
                                    <div className=''>{t('Bauraumeinhausung:')}</div>
                                </div>
                                {columns.map((items, index) => {
                                    return <div key={index} className='flex bg-white justify-center items-center'>
                                        <div className='px-7 '>{items.detail1}</div>
                                    </div>
                                })}
                            </div>
                            <div className={`grid ${countLengt === 2 ? 'grid-cols-3' : countLengt === 3 ? 'grid-cols-4' : countLengt === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`} >
                                <div className='flex items-center'>
                                    <div className=''>{t('Bauraumeinhausung:')}</div>
                                </div>
                                {columns.map((items, index) => {
                                    return <div key={index} className='flex bg-white justify-center items-center'>
                                        <div className='px-7 '>{items.detail1}</div>
                                    </div>
                                })}
                            </div>
                            <div className={`grid ${countLengt === 2 ? 'grid-cols-3' : countLengt === 3 ? 'grid-cols-4' : countLengt === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`} >
                                <div className='flex items-center'>
                                    <div className=''>{t('Bauraumeinhausung:')}</div>
                                </div>
                                {columns.map((items, index) => {
                                    return <div key={index} className='flex bg-white justify-center items-center'>
                                        <div className='px-7 '>{items.detail1}</div>
                                    </div>
                                })}
                            </div>
                            <div className={`grid ${countLengt === 2 ? 'grid-cols-3' : countLengt === 3 ? 'grid-cols-4' : countLengt === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`} >
                                <div className='flex items-center'>
                                    <div className=''>{t('Bauraumeinhausung:')}</div>
                                </div>
                                {columns.map((items, index) => {
                                    return <div key={index} className='flex bg-white justify-center items-center'>
                                        <div className='px-7 '>{items.detail1}</div>
                                    </div>
                                })}
                            </div>
                            <div className={`grid ${countLengt === 2 ? 'grid-cols-3' : countLengt === 3 ? 'grid-cols-4' : countLengt === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`} >
                                <div className='flex items-center'>
                                    <div className=''>{t('Bauraumeinhausung:')}</div>
                                </div>
                                {columns.map((items, index) => {
                                    return <div key={index} className='flex bg-white justify-center items-center'>
                                        <div className='px-7 '>{items.detail1}</div>
                                    </div>
                                })}
                            </div>
                            <div className={`grid ${countLengt === 2 ? 'grid-cols-3' : countLengt === 3 ? 'grid-cols-4' : countLengt === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`} >
                                <div className='flex items-center'>
                                    <div className=''>{t('Bauraumeinhausung:')}</div>
                                </div>
                                {columns.map((items, index) => {
                                    return <div key={index} className='flex bg-white justify-center items-center'>
                                        <div className='px-7 '>{items.detail1}</div>
                                    </div>
                                })}
                            </div>
                            <div className={`grid ${countLengt === 2 ? 'grid-cols-3' : countLengt === 3 ? 'grid-cols-4' : countLengt === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`} >
                                <div className='flex items-center'>
                                    <div className='text-[#222222]'>{t('Bauraumeinhausung:')}</div>
                                </div>
                                {columns.map((items, index) => {
                                    return <div key={index} className='flex bg-white justify-center items-center'>
                                        <div className='px-7'>{items.detail1}</div>
                                    </div>
                                })}
                            </div>
                            <div className={`grid ${countLengt === 2 ? 'grid-cols-3' : countLengt === 3 ? 'grid-cols-4' : countLengt === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`} >
                                <div className='flex items-center'>
                                    <div className='text-[#222222]'>{t('Bauraumeinhausung:')}</div>
                                </div>
                                {columns.map((items, index) => {
                                    return <div key={index} className='flex bg-white justify-center items-center'>
                                        <div className='px-7'>{items.detail1}</div>
                                    </div>
                                })}
                            </div>
                            <div className={`grid ${countLengt === 2 ? 'grid-cols-3' : countLengt === 3 ? 'grid-cols-4' : countLengt === 4 ? 'grid-cols-5' : ''} gap-4 h-4`}>

                            </div>
                        </div>
                    </div>
                    <div className={`${countLengt === 2 ? 'grid-cols-3' : countLengt === 3 ? 'grid-cols-4' : countLengt === 4 ? 'grid-cols-5' : ''} w-full gap-4 px-8 grid h-full absolute top-0`}>
                        <div></div>
                        <div className='shadow-lg h-full rounded-b-2xl' />
                        <div className='shadow-lg h-full rounded-b-2xl' />
                        <div className='shadow-lg h-full rounded-b-2xl' />
                        <div className='shadow-lg h-full rounded-b-2xl' />
                    </div>
                </div>
            ) : (
                <div className='mx-2 relative'>
                    <h1 className='flex items-center justify-center text-2xl font-bold py-8'>Product Comparison</h1>
                    <div className='flex items-center justify-end mx-2 mt-8'>
                        {
                            !isBeginning ?
                                <button className="text-3xl hover:text-customBlue text-gray-600"
                                    onClick={(e) => {
                                        swiperInstance.slidePrev()
                                    }}
                                >
                                    <div className='hover:bg-customBlue bg-gray-300 h-8 w-8 rounded-full flex items-center justify-center'>
                                        <FaAngleLeft className='hover:text-white'/>
                                    </div>
                                </button>
                                : <div></div>
                        }
                        <div className='flex items-center'>
                            {
                                columns.map((items,i)=>{
                                    return <div className={`mx-1 ${!isActive ? 'bg-customBlue ':'bg-gray-300 '} h-4 w-4 rounded-full`}></div>
                                })                            
                            }
                        </div>
                        {
                            !isEnd && columns && columns.length > 1 ?
                                <button className="text-3xl hover:text-customBlue text-gray-600"
                                    onClick={(e) => {
                                        swiperInstance.slideNext()
                                    }}
                                >
                                    <div className='hover:bg-customBlue bg-gray-300 h-8 w-8 rounded-full flex items-center justify-center'>
                                        <FaAngleRight className='hover:text-white'/>
                                    </div>
                                </button>
                                : <div />
                        }
                    </div>
                    <div className='relative h-[600px] w-full'>
                        <div className='absolute w-full h-8 '>
                            <div className='h-16 mb-2'></div>
                            <div className='h-8 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center'> {t('Bauraumeinhausung:')}</div>
                            <div className='h-8 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center'> {t('Bauraumeinhausung:')}</div>
                            <div className='h-8 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center'> {t('Bauraumeinhausung:')}</div>
                            <div className='h-8 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center'> {t('Bauraumeinhausung:')}</div>
                            <div className='h-8 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center'> {t('Bauraumeinhausung:')}</div>
                            <div className='h-8 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center'> {t('Bauraumeinhausung:')}</div>
                            <div className='h-8 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center'> {t('Bauraumeinhausung:')}</div>
                            <div className='h-8 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center'> {t('Bauraumeinhausung:')}</div>
                            <div className='h-8 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center'> {t('Bauraumeinhausung:')}</div>
                            <div className='h-8 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center'> {t('Bauraumeinhausung:')}</div>
                            <div className='h-8 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center'> {t('Bauraumeinhausung:')}</div>
                            <div className='h-8 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center'> {t('Bauraumeinhausung:')}</div>
                            <div className='h-8 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center'> {t('Bauraumeinhausung:')}</div>
                            <div className='h-4 mb-2 w-full  rounded-xl'></div>
                        </div>
                        <div className='absolute w-full h-full  grid grid-cols-3 px-2'>
                            <div className=''></div>
                            <div className=' col-span-2 h-full '>
                                <Swiper
                                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                                    spaceBetween={7}
                                    slidesPerView={2}
                                    // navigation
                                    // pagination={{ clickable: true }}
                                    // scrollbar={{ draggable: true }}
                                    onSwiper={(swiper) => handleSwiper(swiper)}
                                    onSlideChange={(swiperCurrent) => {
                                        setIsBeginning(swiperCurrent.isBeginning)
                                        setIsEnd(swiperCurrent.isEnd)
                                        console.log((swiperCurrent))
                                    }}
                                    className=' w-full h-full '
                                >
                                    {columns.map((items, index) => {
                                        return <SwiperSlide>
                                            <div className='bg-white'>
                                                <div className='h-16 mb-2'>
                                                    <img src={items.url} alt="" className='h-full ' />
                                                </div>
                                                <div className='bg-white shadow-lg'>
                                                    <div className='h-8 mb-2 line-clamp-1'>{items.detail1}</div>
                                                    <div className='h-8 mb-2 line-clamp-1'>{items.detail1}</div>
                                                    <div className='h-8 mb-2 line-clamp-1'>{items.detail1}</div>
                                                    <div className='h-8 mb-2 line-clamp-1'>{items.detail1}</div>
                                                    <div className='h-8 mb-2 line-clamp-1'>{items.detail1}</div>
                                                    <div className='h-8 mb-2 line-clamp-1'>{items.detail1}</div>
                                                    <div className='h-8 mb-2 line-clamp-1'>{items.detail1}</div>
                                                    <div className='h-8 mb-2 line-clamp-1'>{items.detail1}</div>
                                                    <div className='h-8 mb-2 line-clamp-1'>{items.detail1}</div>
                                                    <div className='h-8 mb-2 line-clamp-1'>{items.detail1}</div>
                                                    <div className='h-8 mb-2 line-clamp-1'>{items.detail1}</div>
                                                    <div className='h-8 mb-2 line-clamp-1'>{items.detail1}</div>
                                                    <div className='h-8 mb-2 line-clamp-1'>{items.detail1}</div>
                                                    <div className='h-4 mb-2 line-clamp-1'></div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    })}
                                </Swiper>
                            </div>

                        </div>

                    </div>
                </div>
            )}
        </>
    )
}

export default SLAColumnCard
