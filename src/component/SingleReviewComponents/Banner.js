import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Api from '../../api/Api';

const Banner = () => {
  const { id } = useParams()
  const [title,setTitle]=useState()

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

        <div className='lg:flex lg:items-center lg:justify-center lg:bg-zinc-100 lg:py-4'>
          <h1 className='text-center top-12 left-8 text-neutral-800 text-2xl font-bold  lg:text-neutral-800 lg:text-5xl lg:font-bold lg:pr-44'>{title}</h1>
        </div>
    </>
  )
}

export default Banner
