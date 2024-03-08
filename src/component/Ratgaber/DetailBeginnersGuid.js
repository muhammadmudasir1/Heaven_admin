import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../api/Api';

const DetailBeginnersGuid = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
    const { id } = useParams()
    const [data, setData] = useState("")
    const [isLoading, setIsLoading] = useState(false)
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          setIsLoading(true)
          const result = await Api.get(`/api/beginnersGuid/${id}`)
          setData(result.data[0])
          console.log(result.data[0])
          setIsLoading(false)
        } catch (error) {
          setIsLoading(false)
          console.log(error)
        }
      }
      fetchData()
    }, [])
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 800);
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    if (data) {
  
      return (
        <>
  
          {!isMobile ? (
  
            <div className='pt-9 pb-24 px-4' id="review">
              {isLoading ?
                <div className='py-10 bg-gray-100 w-full h-96 animate-pulse px-4'>
                  <div className='w-full h-12 bg-gray-200 rounded-2xl animate-pulse ' />
                  <div className='w-full mt-8'>
                    <div className='w-full h-6 mt-2 bg-gray-200 rounded-2xl animate-pulse ' />
                    <div className='w-full h-6 mt-2 bg-gray-200 rounded-2xl animate-pulse ' />
                    <div className='w-full h-6 mt-2 bg-gray-200 rounded-2xl animate-pulse ' />
                    <div className='w-full h-6 mt-2 bg-gray-200 rounded-2xl animate-pulse ' />
                    <div className='w-full h-6 mt-2 bg-gray-200 rounded-2xl animate-pulse ' />
                    <div className='w-full h-6 mt-2 bg-gray-200 rounded-2xl animate-pulse ' />
                    <div className='w-full h-6 mt-2 bg-gray-200 rounded-2xl animate-pulse ' />
                    <div className='w-full h-6 mt-2 bg-gray-200 rounded-2xl animate-pulse ' />
                  </div>
                </div>
                :
                <>
                  <div className='hidden' dangerouslySetInnerHTML={{ __html: data.seoKeys }} />
                  <div className='py-10 bg-stone-100 w-full' dangerouslySetInnerHTML={{ __html: data.review }} />
                </>
              }
            </div>
          ) : (
            <div className=' bg-stone-50 mx-4 rounded-xl my-8 px-4 py-3' id="review">
              {isLoading ?
                <div className='py-10 bg-gray-100 w-full h-96 animate-pulse px-4'>
                  <div className='w-full h-12 bg-gray-200 rounded-2xl animate-pulse ' />
                  <div className='w-full mt-8'>
                    <div className='w-full h-6 mt-2 bg-gray-200 rounded-2xl animate-pulse ' />
                    <div className='w-full h-6 mt-2 bg-gray-200 rounded-2xl animate-pulse ' />
                    <div className='w-full h-6 mt-2 bg-gray-200 rounded-2xl animate-pulse ' />
                    <div className='w-full h-6 mt-2 bg-gray-200 rounded-2xl animate-pulse ' />
                    <div className='w-full h-6 mt-2 bg-gray-200 rounded-2xl animate-pulse ' />
                    <div className='w-full h-6 mt-2 bg-gray-200 rounded-2xl animate-pulse ' />
                    <div className='w-full h-6 mt-2 bg-gray-200 rounded-2xl animate-pulse ' />
                    <div className='w-full h-6 mt-2 bg-gray-200 rounded-2xl animate-pulse ' />
                  </div>
                </div>
                :
                <>
                  <div className='hidden' dangerouslySetInnerHTML={{ __html: data.seoKeys }} />
                  <div className='py-10 bg-stone-100 w-full' dangerouslySetInnerHTML={{ __html: data.review }} />
                </>
  
              }
            </div>
          )}
  
        </>
  
      )
    }
}

export default DetailBeginnersGuid
