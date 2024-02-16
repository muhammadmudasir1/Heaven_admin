import React from 'react'
import { useState } from 'react'
import { FaCopy } from "react-icons/fa";
import { useEffect } from 'react';
import { ArrowForwardIos } from '@mui/icons-material';

const SLAPriceCards = () => {

    const [isClicked, setIsClicked] = useState(false);
    const [isClicked1, setIsClicked1] = useState(false);
    const [isClicked2, setIsClicked2] = useState(false);
    const [isClicked3, setIsClicked3] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked)
        setIsOpen(!isOpen)
    }
    const handleClick1 = () => {
        setIsClicked1(!isClicked1)
        setIsOpen(!isOpen)
    }
    const handleClick2 = () => {
        setIsClicked2(!isClicked2)
        setIsOpen(!isOpen)
    }
    const handleClick3 = () => {
        setIsClicked3(!isClicked3)
        setIsOpen(!isOpen)
    }

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

    const cards = [
        {
            title: "Geekbuying",
            detail: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ",
            price: "€400",
            copy: FaCopy,
            coupon_Code: "Coupon code: NNNNW44fgg",
        },
        {
            title: "Best Price",
            detail: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ",
            price: "€400",
            copy: FaCopy,
            coupon_Code: "Coupon code: NNNNW44fgg",
        },
        {
            title: "Amazon",
            detail: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ",
            price: "€400",
            copy: FaCopy,
            coupon_Code: "Coupon code: NNNNW44fgg",
        },
        {
            title: "Creality",
            detail: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ",
            price: "€400",
            copy: FaCopy,
            coupon_Code: "Coupon code: NNNNW44fgg",
        },

    ]

    return (
        <>
            {!isMobile ? (
                <div className='flex flex-col items-center justify-center w-full'>
                    <div className='flex flex-col items-center justify-start w-full pl-8 pr-12'>
                        <div className='flex items-center justify-start w-full '>
                            <button onBlur={(e) => { setIsClicked(false) }} onClick={handleClick} className={`${isClicked ? 'bg-zinc-100 text-sky-600 text-base font-semibold' : 'bg-sky-600 text-white text-base font-black'} flex items-center justify-center text-center w-56 py-4 mr-1 rounded-t-xl `}>Fastest delivery <br /> ab €400</button>
                            <button onBlur={(e) => { setIsClicked1(false) }} onClick={handleClick1} className={`${isClicked1 ? 'bg-zinc-100 text-sky-600 text-base font-semibold' : 'bg-sky-600 text-white text-base font-black'} flex items-center justify-center text-center w-56 py-4 mx-1 rounded-t-xl `}>Beste Preis <br /> ab €350</button>
                            <button onBlur={(e) => { setIsClicked2(false) }} onClick={handleClick2} className={`${isClicked2 ? 'bg-zinc-100 text-sky-600 text-base font-semibold' : 'bg-sky-600 text-white text-base font-black'} flex items-center justify-center text-center w-56 py-4 mx-1 rounded-t-xl  `}>Amazon <br /> ab €400</button>
                            <button onBlur={(e) => { setIsClicked3(false) }} onClick={handleClick3} className={`${isClicked3 ? 'bg-zinc-100 text-sky-600 text-base font-semibold' : 'bg-sky-600 text-white text-base font-black'} flex items-center justify-center text-center w-56 py-4 mx-1 rounded-t-xl  `}>Kundensupport <br /> ab €400</button>
                        </div>
                        <div onClick={handleClick} className='w-full bg-zinc-100 rounded-b-xl rounded-tr-xl'>
                            {isOpen && (
                                <div className='flex items-center'>
                                    <div className='w-3/4 px-8 py-5'>
                                        <h1 className='text-neutral-800 text-3xl font-black py-4'>Geekbuying</h1>
                                        <p className=''>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                            <br />
                                            nonumy eirmod tempor invidunt ut labore et dolore
                                        </p>
                                        <div className='flex items-center gap-2'>
                                            <h1 className='text-neutral-700 text-xl font-bold'>Coupon code: NNNNW44fgg</h1>
                                            <FaCopy />
                                        </div>
                                    </div>
                                    <div className='w-1 h-36 bg-neutral-800' />
                                    <div className='flex flex-col items-center justify-center pl-8 pb-4'>
                                        <h1 className='text-neutral-800 text-3xl font-black py-4'>€400</h1>
                                        <button className='rounded-xl px-8 bg-cyan-500 text-neutral-800 text-base font-black py-4'>Visit 3D Jake</button>
                                    </div>
                                </div>

                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div className=' px-11'>
                    {cards.map((items, index) => {
                        return <div key={index} className='bg-[#F4F4F4] my-2 rounded-xl'>
                            <div className=' flex justify-between'>
                                <div className='bg-[#026CC4] rounded-tl-xl rounded-br-xl px-5 text-white font-semibold'>Fast delivery</div>
                                <div className='flex items-center px-2 mx-2'>
                                    <div>{items.coupon_Code}</div>
                                    <div><FaCopy /></div>
                                </div>
                            </div>
                            <div className='grid grid-cols-6 px-5 py-2'>
                                <div className='col-span-3'>
                                    <h1 className='text-xl font-bold'>{items.title}</h1>
                                    <p className='line-clamp-5'>{items.detail}</p>
                                </div>
                                <div className='col-span-3 items-center justify-center py-2 '>
                                    
                                        <div className='flex items-center justify-center text-2xl font-bold'>
                                            <div className='border-l-2 border-black py-7 pl-6'>
                                            {items.price}
                                            </div>
                                        </div>
                                    <div className='flex items-center justify-center bg-white mt-1 rounded-3xl py-2 px-4'>
                                        <div className='pr-8 '>Go to Website</div>
                                        <div className='flex items-center justify-center rounded-full h-8 w-12 bg-[#026CC4]'>
                                            <ArrowForwardIos fontSize='6px' />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    })}
                </div>
            )}
        </>
    )
}

export default SLAPriceCards
