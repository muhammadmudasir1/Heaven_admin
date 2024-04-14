import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Illustration from '../../imges/Illustration.png';
import LandingPageImage from "../../imges/LandingPageImage.webp"

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
        <div className='flex flex-col lg:flex-row justify-between items-center bg-[#F5F2F9] my-8 '>
            <div className='px-8  py-4 order-2 lg:order-1 flex justify-center flex-col lg:block items-center'>
                <h1 className='text-neutral-800 lg:text-5xl text-xl text-center font-bold font-[Roboto] '>{t("newsBannarHeading")}</h1>
                <button
                    onClick={(e) => {
                        navigate('/news')
                    }}
                    className='text-neutral-800 mt-4 bg-cyan-500 rounded-xl lg:px-6 lg:py-3 px-3 py-2 lg:text-2xl text-xl font-medium font-[Roboto]'>News & Events</button>
            </div>
            <img src={LandingPageImage} className='lg:h-44 h-32 order-1 lg:order-2 mt-3 lg:mt-0' alt="3d-Printer Image" title='3d Printer' />

        </div>

    )
}

export default NewsAndEvent