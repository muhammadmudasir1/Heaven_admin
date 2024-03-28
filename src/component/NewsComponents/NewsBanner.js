import React from 'react'
import Banner from '../NewsComponents/Banner.png'
import { useState, useEffect } from 'react';

const NewsBanner = () => {
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

    <div>
      {!isMobile ? (
        <div className='flex items-center justify-between px-28 bg-[#D6E9FC] py-3'>
          <div className=''>
            <h1 className='text-3xl font-bold'>Latest News & Events</h1>
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
              eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className='bg-center bg-cover h-56 w-72' style={{ backgroundImage: `url(${Banner})` }} />
        </div>

      ) : (
        <div className='flex flex-col items-center justify-between bg-[#F2F4F3] py-3'>
          <div className='bg-center bg-cover h-44 w-52' style={{ backgroundImage: `url(${Banner})` }} />
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-xl font-bold'>Latest News & Events</h1>
            <p className='px-9 text-center pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default NewsBanner
