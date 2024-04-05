import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Illustration from '../../imges/Illustration.png';

const NewsAndEvent = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 786);
    const { t } = useTranslation()
    const navigate = useNavigate()
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
            {!isMobile ? (

                <div className='flex justify-between items-center bg-[#F5F2F9] my-8 '>
                    <div className='px-8'>
                        <h1 className='text-neutral-800 text-5xl font-bold font-[Roboto] py-8'>{t("newsBannarHeading")}</h1>
                        <button
                            onClick={(e) => {
                                navigate('/news')
                            }}
                            className='text-neutral-800 bg-cyan-500 rounded-xl px-8 py-4 text-2xl font-medium font-[Roboto]'>News & Events</button>
                    </div>
                    <div className='px-8'>
                        <img src={Illustration} alt="" />
                    </div>

                </div>

            ) : (
                <>
                    <div className='flex flex-col items-center justify-center bg-[#F5F2F9]'>
                        <div className='px-8'>
                            <img src={Illustration} alt="" />
                        </div>
                        <div className='px-8 flex flex-col items-center'>
                            <h1 className='text-neutral-800 text-center text-xl font-bold font-[Roboto] py-8 '>{t("newsBannarHeading")}</h1>
                            <button
                                onClick={(e) => {
                                    navigate('/news')
                                }}
                                className='mb-8 text-neutral-800 bg-cyan-500 rounded-xl px-8 py-3 text-2xl font-medium font-[Roboto] w-3/4'>News & Events</button>
                        </div>
                    </div>

                    <div className='flex items-center justify-center py-8'>
                        <div
                            className='flex flex-col items-center justify-center 
                        bg-[#035091] 
                        px-2 
                        w-[280px] 
                        py-16 
                        rounded-xl'
                        >
                            <h1 className='text-2xl font-bold pt-8 px-24 pb-12 text-center'>Subscribe to <br /> NewsLetter </h1>
                            <input type="email" name="" id="" placeholder='Your email address'
                                className='
                            mb-4 mx-2 w-full py-4 
                            border-t-transparent 
                            border-x-transparent 
                            border-b-white 
                            border-b-2 
                            bg-transparent 
                            text-xl text-white font-normal items-center' />
                            <button className='bg-[#00CED1] rounded-2xl py-4 w-full text-lg font-semibold'>Subscribe</button>
                        </div>
                    </div>

                </>
            )}
        </>

    )
}

export default NewsAndEvent