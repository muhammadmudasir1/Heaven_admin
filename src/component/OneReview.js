import React from 'react'
import Tabbar from './Landingpage/Tabbar'
import SingleReview from './SingleReview/3d-heavensimage.png'
import SingleReviewTabbar from './SingleReview/SingleReviewTabbar'
import SingleReviewCard from './SingleReview/SingleReviewCard'
import { useState, useEffect } from 'react'

const OneReview = () => {
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

    return (
        <>
            <Tabbar />
            {isDesktop ? (
                <div className=''>
                    <div class="bg-slate-300 flex items-center justify-between px-32 ">
                        <div class=" text-neutral-800 text-6xl font-bold font-['Avenir']">Im Test Creality <br /> Ender 3 S1</div>
                        <div className=''>
                            <img src={SingleReview} alt="" className='h-80' />
                        </div>
                    </div>
                </div>
            ) : (<div className=''>
                <div class="bg-slate-300 flex items-center justify-center  px-8">
                    <div class=" text-neutral-800 text-xl font-bold font-['Avenir']">Im Test Creality Ender 3 S1</div>
                    <div className='w-screen h-1/3'>
                        <img src={SingleReview} alt="" className=' h-full w-screen' />
                    </div>
                </div>
            </div>)}
            <SingleReviewTabbar />
            <SingleReviewCard />
        </>
    )
}

export default OneReview