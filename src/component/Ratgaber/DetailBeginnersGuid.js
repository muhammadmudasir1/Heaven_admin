import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../api/Api';
import Tabbar from '../Landingpage/Tabbar';

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
        setData(result.data)
        console.log(result.data)
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

    return (
      <>
        <Tabbar/>

        {!isMobile ? (
          <div className='pt-9 pb-24 px-4 w-full'>
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
                <img src={`/api/${data.image}`} className='w-full'/>
                <div className='py-10 bg-stone-100 w-full' dangerouslySetInnerHTML={{ __html: data.body }} />
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
                <img src={`/api/${data.image}`} className='w-full'/>
                <div className='py-10 bg-stone-100 w-full' dangerouslySetInnerHTML={{ __html: data.body }} />
              </>

            }
          </div>
        )}

      </>

    )
  }

export default DetailBeginnersGuid
