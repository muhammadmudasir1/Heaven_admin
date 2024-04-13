import React from 'react'
import Banner from '../Ratgaber/Banner.png'
import { useState, useEffect } from 'react';
import Api from '../../api/Api';

const RatgaberBanner = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
  const [title, setTitle] = useState(null)
  const [description, setDescription] = useState(null)
  useEffect(() => {
    const getHeader = async () => {
      try {
        const response = await Api.get(`api/setting/tutorialHeader`);
        setTitle(response.data.title)
        setDescription(response.data.description)
      } catch (error) {
        console.log(error);
      }
    };
    getHeader();
  }, []);

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
        <div className='px-16 bg-[#F2F4F3] py-4'>
        <h1 className=' text-3xl font-bold '>{title}</h1>
        <p className=''>{description}</p>
      </div>

      ) : (
        <div className='px-16 bg-[#F2F4F3] py-4'>
        <h1 className=' text-3xl font-bold '>{title}</h1>
        <p className=''>{description}</p>
      </div>
      )}
    </div>
  )
}

export default RatgaberBanner
