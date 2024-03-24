import React, { useState } from 'react'
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import manu_profile from '../../imges/manu_profile.png';
import { useTranslation } from 'react-i18next';

const StickyFooter = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const {t}=useTranslation();
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
                        <h1 className='text-neutral-100 text-3xl font-normal  py-4'>Quick links</h1>
                        <div className='grid grid-cols-3 py-4'>
                            <div className='pr-2 '>
                                <NavLink to={'/'} className='text-white text-base'>{t('HomePage')}</NavLink><br />
                                <NavLink to={'/news'} className='text-white text-base'>News</NavLink><br />
                                <Link to={'/ComparisonPage'} className='text-white text-base'>{t('BestDeals')}</Link><br />
                            </div>
                            <div className=' pr-2'>
                                <NavLink to={'/product/sla'} className='text-white text-base'>{t('SLA')}</NavLink><br />
                                <NavLink to={'/product/fdm'} className='text-white text-base'>{t('fdm')}</NavLink><br />
                                <NavLink to={'/product/scanner'} className='text-white text-base'>{t('3DScanner')}</NavLink><br />
                            </div>
                                <NavLink to={'/product/cutter'} className='text-white text-base'>{t('laserCutter')}</NavLink><br />
                        </div>
                    </div>
                    <div className='flex flex-row bg-[#4d6464] py-4 justify-between px-6'>
                        <div className='flex'>
                            <img src={manu_profile} alt="" className='w-20 rounded-full' />
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
                        <div className='w-52 pt-16 h-52 rounded-full bg-center bg-cover' style={{ backgroundImage: `url(${manu_profile})` }} />
                        <h1 className="text-2xl text-white font-normal  py-5">Manuel Strauss</h1>
                        <h1 className="  font-normal font-[Roboto]">3D printer enthusiat</h1>
                        <h1 className=" font-normal font-[Roboto]">abc@email.com</h1>
                    </div>
                    <div className='ml-16 col-span-2'>
                        <h1 className='text-neutral-100 text-5xl font-bold pt-24'>Quick links</h1>
                        <div className='flex py-20'>
                            <div className='pr-40'>
                                <NavLink to={'/'} className={`text-2xl text-white pt-1`}>{t('HomePage')}</NavLink><br />
                                <NavLink to={'/news'} className={`text-2xl text-white pt-1`}>News</NavLink><br />
                                <Link to={'/ComparisonPage'} className={`text-2xl text-white pt-1`}>{t('BestDeals')}</Link><br />
                            </div>
                            <div className='pr-8 '>
                                <NavLink to={'/product/sla'} className={`text-2xl text-white pt-1`}>{t('SLA')}</NavLink><br />
                                <NavLink to={'/product/fdm'} className={`text-2xl text-white pt-1`}>{t('fdm')}</NavLink><br />
                                <NavLink to={'/product/scanner'} className={`text-2xl text-white pt-1`}>{t('3DScanner')}</NavLink><br />
                                <NavLink to={'/product/cutter'} className={`text-2xl text-white pt-1`}>{t('laserCutter')}</NavLink>
                            </div>
                        </div>
                        <h1 className='text-neutral-100 text-4xl font-bold '>Our channels</h1>
                    </div>

                    <div className='flex bottom-0 right-60 absolute gap-x-5 pl-32'>
                        <IoLogoInstagram size={50} className='text-white' />
                        <FaLinkedinIn size={50} className='text-white' />
                        <FaYoutube size={50} className='text-white' />
                    </div>


                </div >
            )}


        </div >
    )
}

export default StickyFooter