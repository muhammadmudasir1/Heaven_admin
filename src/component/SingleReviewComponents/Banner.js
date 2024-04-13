import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Api from '../../api/Api';

const Banner = () => {
  const { id } = useParams()
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
  const [title,setTitle]=useState()
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const result = await Api.get(`/api/products/${id}`)
            setTitle(result.data.product_title)

        } catch (error) {
            console.log(error)
        }
    }
    fetchData()
}, [id])


 return (
    <>
      {!isMobile ? (

        <div className='flex items-center justify-center bg-zinc-100 py-4'>
          <h1 className='text-neutral-800 text-5xl font-bold pr-44'>{title}</h1>
        </div>

      ) : (
        <>
          <div className='w-full relative '>
            <h1 className='absolute text-start top-12 left-8 text-neutral-800 text-2xl font-bold '>{title}</h1>
          </div>
          
        </>
      )}
    </>
  )
}

export default Banner
