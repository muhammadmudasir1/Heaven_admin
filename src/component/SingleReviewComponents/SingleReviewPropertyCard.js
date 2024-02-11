import React, { useState } from 'react'
import { MdOutlineSpeed } from "react-icons/md";
import { GoCodespaces } from "react-icons/go";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { RiPrinterCloudFill } from "react-icons/ri";
import { useEffect } from 'react';
import speed from './Speed.png'
import Bauraum from  './Bauraum.png'
import nozzle from  './printer_d_nozzle_outline_icon.png'
import temperature from  './temperature-bounding box.png'

const SingleReviewPropertyCard = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const cards=[
        {
            img: speed,
            title: "Speed",
            property: "150 m/s",
        },
        {
            img: Bauraum,
            title: "Speed",
            property: "150 m/s",
        },
        {
            img: nozzle,
            title: "Speed",
            property: "150 m/s",
        },
        {
            img: temperature,
            title: "Speed",
            property: "150 m/s",
        },
    ]
  return (
    <>
                {
                    isDesktop ? (
                        <div className='bg-[#C2DCF0] w-full flex flex-col row-span-3 relative'>
                            <div className='flex items-center justify-evenly pt-8 pb-4'>
                                <div className='flex items-center'>
                                    <MdOutlineSpeed size={80} />
                                    <div className='px-4'>
                                        <h1 className='font-semibold text-lg'>Geschwindigkeit</h1>
                                        <h3 className='font-extralight'>150 mm/s</h3>
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <GoCodespaces size={80} />
                                    <div className='px-4'>
                                        <h1 className='font-semibold text-lg'>Geschwindigkeit</h1>
                                        <h3 className='font-extralight'>150 mm/s</h3>
                                    </div>
                                </div>

                            </div>
                            <div className='flex items-center justify-evenly pb-8 pt-4'>
                                <div className='flex items-center'>
                                    <FaTemperatureThreeQuarters size={80} />
                                    <div className='px-4'>
                                        <h1 className='font-semibold text-lg'>Geschwindigkeit</h1>
                                        <h3 className='font-extralight'>150 mm/s</h3>
                                    </div>
                                </div>

                                <div className='flex items-center'>
                                    <RiPrinterCloudFill size={80} />
                                    <div className='px-4'>
                                        <h1 className='font-semibold text-lg'>Geschwindigkeit</h1>
                                        <h3 className='font-extralight'>150 mm/s</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='grid grid-cols-6 px-6 gap-2'>
                            <div className='col-span-3 '>
                                {cards.map((items,index)=>{
                                    return <div key={index} className='flex items-center bg-[#EEEEEE] py-4 px-3 my-2'>
                                    <img src={items.img} alt="" className='h-7'/>
                                    <div className='px-4'>
                                        <h1 className='font-semibold text-lg'>{items.title}</h1>
                                        <h3 className='font-extralight'>{items.property}</h3>
                                    </div>
                                </div>
                                })}
                            </div>
                            <div className='col-span-3 '>
                                {cards.map((items,index)=>{
                                    return <div key={index} className='flex items-center bg-[#EEEEEE] py-4 px-3 my-2'>
                                    <img src={items.img} alt="" className='h-7'/>
                                    <div className='px-4'>
                                        <h1 className='font-semibold text-lg'>{items.title}</h1>
                                        <h3 className='font-extralight'>{items.property}</h3>
                                    </div>
                                </div>
                                })}
                            </div>
                        </div>
                    )
                }

            </>
  )
}

export default SingleReviewPropertyCard