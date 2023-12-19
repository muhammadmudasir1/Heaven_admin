import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Api from '../api/Api'
import FDMSpecs from './FDMSpecs'

const AddSpecs = () => {
  const {id}=useParams();
  const [productType,setProductType]=useState(null)
  

  useEffect(()=>{
    const fetchData=async()=>{
      const response=await Api.get(`/api/products/${id}`)
      setProductType(response.data.productType)
    }
    fetchData()
  },[])


  return (
    <div className='w-full h-screen relative t-2 p-6 overflow-y-scroll'>
      <h2 className=' text-2xl font-semibold font-sans'>Add Product Specifications</h2>

      <FDMSpecs/>

      
    </div>
  )
}

export default AddSpecs