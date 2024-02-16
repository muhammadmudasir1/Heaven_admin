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

const FDMReviewAndAdd = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 800);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const mobileImageUrl = [
        {

            url: "https://static.wixstatic.com/media/5d104f_67ee508823b24198b6122f43e47d5b08~mv2.jpg/v1/crop/x_66,y_0,w_1852,h_1125/fill/w_443,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg",
        },
        {

            url: "https://static.wixstatic.com/media/5d104f_a809b58f7dd640c09a3263e0f36a3bb5~mv2.jpg/v1/crop/x_144,y_0,w_1856,h_1125/fill/w_448,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg",
        },
        {
            url: "https://static.wixstatic.com/media/5d104f_eac9e31f29b6464f89fa2cf860552b99~mv2.jpg/v1/crop/x_71,y_0,w_1859,h_1125/fill/w_448,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Creality%20Ender-5%20S1-2.jpg",
        },
        {

            url: "https://static.wixstatic.com/media/5d104f_1aa9f52a94d847f0a03803c46f26fa23~mv2.jpg/v1/crop/x_26,y_0,w_2325,h_1407/fill/w_448,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Anycubic%20Vyper%20Gesamtansicht.jpg",
        },
        {

            url: "https://static.wixstatic.com/media/5d104f_942ed39e2eb04f3690ce73118799546d~mv2.jpg/v1/crop/x_42,y_0,w_1115,h_675/fill/w_448,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Creality%20K1.jpg"
        }

    ]

    const names = [
        {

            element: 'Preis',
        },
        {

            element: 'Innovation',
        },
        {

            element: 'Software',
        },
        {

            element: 'Kundenservice',
        },
        {

            element: 'Verarbeitungen'
        }
    ]

    const [mainImage, setMainImage] = useState('https://static.wixstatic.com/media/5d104f_67ee508823b24198b6122f43e47d5b08~mv2.jpg/v1/crop/x_66,y_0,w_1852,h_1125/fill/w_443,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg');

    const imageUrls = [
        "https://static.wixstatic.com/media/5d104f_a809b58f7dd640c09a3263e0f36a3bb5~mv2.jpg/v1/crop/x_144,y_0,w_1856,h_1125/fill/w_448,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg",
        "https://static.wixstatic.com/media/5d104f_eac9e31f29b6464f89fa2cf860552b99~mv2.jpg/v1/crop/x_71,y_0,w_1859,h_1125/fill/w_448,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Creality%20Ender-5%20S1-2.jpg",
        "https://static.wixstatic.com/media/5d104f_1aa9f52a94d847f0a03803c46f26fa23~mv2.jpg/v1/crop/x_26,y_0,w_2325,h_1407/fill/w_448,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Anycubic%20Vyper%20Gesamtansicht.jpg",
        "https://static.wixstatic.com/media/5d104f_942ed39e2eb04f3690ce73118799546d~mv2.jpg/v1/crop/x_42,y_0,w_1115,h_675/fill/w_448,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Creality%20K1.jpg"
    ];

    const switchMainImage = (imageUrl) => {
        setMainImage(imageUrl);
    };
    return (
        <>
            {!isMobile ? (
                <div className='grid-cols-8 grid pr-4'>

                    <div className='col-span-6 '>
                        <div className='lg:flex items-center justify-center pr-4 bg-slate-200 relative w-full'>
                            <div className='flex mt-20 items-center lg:flex-col'>
                                <div className='pl-4 pr-4'>
                                    <img src={mainImage} alt="" />
                                </div>
                                <div className='lg:flex items-center justify-center py-8 ' >
                                    {imageUrls.map((url, index) => (
                                        <div key={index} className='w-20 h-20 mx-1 hover:border-[#00CED1] border-4' onClick={() => switchMainImage(url)}>
                                            <img src={url} alt="" className='w-full h-full' />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className=' lg:px-4 px-8'>
                                <h1 className='py-8 text-neutral-800 text-2xl font-semibold'>Creality Ender 3 S1</h1>
                                <p className='pb-8'>Der Ender 3 S1 ist die dritte Generation des erfolgreichen Creality Ender. <br />
                                    Dieser 3D Drucker ist durch jahrelange Weiterentwicklung erprobt und <br />
                                    bietet zahlreiche Erweiterungsmöglichkeiten.</p>
                                <div className='flex items-center'>
                                    <h1 className='text-xl font-semibold'>4.5</h1>

                                    {[...Array(5)].map((_, index) => (

                                        <CiStar key={index} size={30} className='text-yellow-400' />

                                    ))}
                                </div>
                                <div>
                                    {[...Array(5)].map((_, index2) => (

                                        <div key={index2} className='flex items-center'>

                                            <div className='h-2 w-60 relative bg-[#EEEEEE] rounded-lg '>
                                                <div className='absolute w-40 h-2 bg-[#00CED1]' />
                                            </div>
                                            <h1 key={index2} className='pl-4'>
                                                {names[index2].element}
                                            </h1>
                                        </div>


                                    ))}

                                </div>
                            </div>
                        </div>
                        <SingleReviewPropertyCard />
                        <ProsAndCons />
                        <PriceCards />
                        <FirstImpression />
                    </div>
                    <div className='col-span-2 lg:bg-white/95' style={{ boxShadow: '-8px 0 15px rgb(203 213 225), 0 8px 15px rgb(203 213 225)' }} ></div>
                </div>
            ) : (
                <div className=''>
                    <Swiper 
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={20}
                    slidesPerView={1}
                    // navigation
                    pagination={{ clickable: true}}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                     className='h-56 relative'>
                        {mobileImageUrl.map((items, index) => {
                            return <SwiperSlide className=''>
                                <img key={index} src={items.url} alt="" className='w-full h-56 mx-7 shadow-2xl shadow-[#1E1E1E]/50' />
                            </SwiperSlide>
                        })}
                    </Swiper>
                    <div className=' px-6 py-8 flex flex-col justify-center items-center'>
                        <h1 className='py-8 text-neutral-800 text-2xl font-semibold '>Creality Ender 3 S1</h1>
                        <p className='pb-4 text-center'>Der Ender 3 S1 ist die dritte Generation des erfolgreichen Creality Ender. <br />
                            Dieser 3D Drucker ist durch jahrelange Weiterentwicklung erprobt und <br />
                            bietet zahlreiche Erweiterungsmöglichkeiten.</p>
                        <div className='flex items-center py-4'>
                            <h1 className='text-xl font-semibold'>4.5</h1>

                            {[...Array(5)].map((_, index) => (

                                <CiStar key={index} color={'#00CED1'} size={30} className='text-[#00CED1] ' />

                            ))}
                        </div>
                        <div>
                            {[...Array(5)].map((_, index2) => (

                                <div key={index2} className='flex items-center'>

                                    <div className='h-2 w-60 relative bg-[#EEEEEE] rounded-lg '>
                                        <div className='absolute w-40 h-2 bg-[#00CED1]' />
                                    </div>
                                    <h1 key={index2} className='pl-4'>
                                        {names[index2].element}
                                    </h1>
                                </div>


                            ))}

                        </div>
                    </div>
                    <SingleReviewPropertyCard />
                    <ProsAndCons />
                    <PriceCards />
                    <FirstImpression />
                </div>
            )}
        </>
    )
}

export default FDMReviewAndAdd
