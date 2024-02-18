import React, { useState } from 'react'
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const StickyFooter = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1000);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className='bg-customBlue w-full lg:py-8'>
            {isMobile ? (
                <>
                    <div className='px-4 '>
                        <h1 className='text-neutral-100 text-3xl font-normal font-[Avenir] py-4'>Quick links</h1>
                        <div className='flex py-4'>
                            <div className='pr-6'>
                                <a href="">Lorem ipsum dolor sit.</a><br />
                                <a href="">Lorem ipsum dolor sit.</a><br />
                                <a href="">Lorem ipsum dolor sit.</a><br />
                                <a href="">Lorem ipsum dolor sit.</a><br />
                                <a href="">Lorem ipsum dolor sit.</a>
                            </div>
                            <div className=' pr-6'>
                                <a href="">Lorem ipsum dolor sit.</a><br />
                                <a href="">Lorem ipsum dolor sit.</a><br />
                                <a href="">Lorem ipsum dolor sit.</a><br />
                                <a href="">Lorem ipsum dolor sit.</a><br />
                                <a href="">Lorem ipsum dolor sit.</a>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row bg-[#4d6464] py-4 justify-between px-6'>
                        <div className='flex'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwme89cM8YZvHcybGrZl_Obd9U9p5QabozJQ&usqp=CAU" alt="" className='w-20 rounded-full' />
                            <div className='flex items-center justify-center pl-2'>
                                <h1>
                                    Manuel Strauss<br />info@manu-com
                                </h1>
                            </div>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <IoLogoInstagram size={30} />
                            <FaLinkedinIn size={30} />
                            <FaYoutube size={30} />
                        </div>
                    </div>
                </>
            ) : (
                <div className='grid grid-cols-3 gap-x-10 items-center relative'>
                    <div className=' bg-[#00CED1] flex flex-col justify-center items-center w-96 h-full rounded-xl ml-16'>
                        <div className='w-52 pt-16 h-52 rounded-full bg-center bg-cover' style={{ backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwme89cM8YZvHcybGrZl_Obd9U9p5QabozJQ&usqp=CAU')` }} />
                        <h1 className="text-2xl text-white font-normal  py-5">Manuel Strauss</h1>
                        <h1 className="  font-normal font-[Roboto]">3D printer enthusiat</h1>
                        <h1 className=" font-normal font-[Roboto]">abc@email.com</h1>
                    </div>
                    <div className='pl-32'>
                        <h1 className='text-neutral-100 text-5xl font-bold pt-24'>Quick links</h1>
                        <div className='flex py-20'>
                            <div className='pr-40'>
                                <NavLink className={`text-2xl text-white`}>Home</NavLink><br />
                                <NavLink className={`text-2xl text-white`}>News</NavLink><br />
                                <NavLink className={`text-2xl text-white`}>Best Deals</NavLink><br />
                            </div>
                            <div className='pr-8'>
                                <NavLink className={`text-2xl text-white`}>SLA 3D Printer</NavLink><br />
                                <NavLink className={`text-2xl text-white`}>FDM 3D Printer</NavLink><br />
                                <NavLink className={`text-2xl text-white`}>Scanner</NavLink><br />
                                <NavLink className={`text-2xl text-white`}>Laser</NavLink>
                            </div>
                        </div>
                        <h1 className='text-neutral-100 text-5xl font-bold '>Our channels</h1>
                    </div>

                    <div className='flex bottom-0 right-60 absolute gap-x-5 pl-32'>
                        <IoLogoInstagram size={65} className='text-white' />
                        <FaLinkedinIn size={65} className='text-white' />
                        <FaYoutube size={65} className='text-white' />
                    </div>


                </div >
            )}


        </div >
    )
}

export default StickyFooter