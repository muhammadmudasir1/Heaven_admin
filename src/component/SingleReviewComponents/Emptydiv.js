import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../api/Api';

const Emptydiv = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
  const {id}=useParams()
  const [data,setData]=useState("")
  useEffect(()=>{
    const fetchData=async()=>{
      try {
        const result=await Api.get(`/api/products/review/${id}`)
        setData(result.data[0])
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  },[])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  if (data){

    return (
      <>
      
        {!isMobile  ? (
  
          <div className='pt-9 pb-24 px-4 '>
            <div className='py-10 bg-stone-100 w-full' dangerouslySetInnerHTML={{ __html: data.review }} />
            
            </div>
        ) : (
  
          <div className=' bg-stone-50 mx-4 rounded-xl my-8 px-4 py-3'>
            <div className='py-10 bg-stone-100 w-full' dangerouslySetInnerHTML={{ __html: data.review }} />
          </div>
        )}
  
      </>
  
    )
  }
}

export default Emptydiv
