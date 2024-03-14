import React, { useState } from 'react'
import Illustration from '../../imges/Illustration.png'
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const NewsAndEvent = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 786);
    const {t}=useTranslation()
    const navigate=useNavigate()
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])
    return (
        <>
        {!isMobile ?(
            
            <div className='flex justify-between items-center bg-[#F5F2F9] my-8'>
                <div className='px-8'>
                    <h1 className='text-neutral-800 text-5xl font-bold font-[Roboto] py-8'>{t("newsBannarHeading")}</h1>
                    <button
                    onClick={(e)=>{
                        navigate('/news')
                    }}
                    className='text-neutral-800 bg-cyan-500 rounded-xl px-8 py-4 text-2xl font-medium font-[Roboto]'>News and Events</button>
                </div>
                <div className='px-8'>
                    <img src={Illustration} alt="" />
                </div>
            </div>
        
        ):(
            <div className='flex flex-col items-center justify-center bg-[#F5F2F9] my-4'>
                <div className='px-8'>
                    <img src={Illustration} alt="" />
                </div>
                <div className='px-8'>
                    <h1 className='text-neutral-800 text-center text-xl font-bold font-[Roboto] py-8'>{t("newsBannarHeading")}</h1>
                    <button
                    onClick={(e)=>{
                        navigate('/news')
                    }}
                    className='text-neutral-800 bg-cyan-500 rounded-xl px-8 py-3 text-2xl font-medium font-[Roboto]'>News and Events</button>
                </div>
            </div>
        )}
        </>
        
    )
}

export default NewsAndEvent