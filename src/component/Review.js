import React from 'react'
import ReviewTabbar from './ReviewpageComponets.js/ReviewTabbar'
import ScrollView from './ReviewpageComponets.js/ScrollView'
import Tabbar from './Landingpage/Tabbar'
import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Review = () => {

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

  return (

    <>
      {!isMobile ? (
        <>

          <Tabbar />
          <div className='bg-zinc-100 w-full h-full flex flex-row items-center justify-between'>
            <div>
              <h1 className='text-neutral-800 lg:text-5xl text-3xl font-normal ml-12 py-20 '> Reviews from our <br /> 3D expert</h1>
            </div>
            <div className='lg:mr-12 mr-2'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZd8IFhFAzVB_AdUsDwZMmRzafOAhzsQ_JlQ&usqp=CAU" alt="" className='lg:w-60 lg:h-60 w-24 h-24 rounded-full ' />
            </div>

          </div>
          {/* <ReviewTabbar /> */}
          <Outlet />
          {/* <ScrollView /> */}
        </>
      ) : (
        <>
          <div className='flex flex-col items-center justify-center h-80 bg-zinc-100 w-full'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZd8IFhFAzVB_AdUsDwZMmRzafOAhzsQ_JlQ&usqp=CAU" alt="" className='lg:w-60 lg:h-60 w-36 h-36 rounded-full ' />
            <h1 className='text-neutral-800 lg:text-5xl text-2xl mt-6 font-bold text-center'> Reviews from our <br /> 3D expert</h1>
          </div>
          {/* <ReviewTabbar/> */}
          <Outlet />
          {/* <ScrollView/> */}
        </>
      )}

    </>
  )
}

export default Review