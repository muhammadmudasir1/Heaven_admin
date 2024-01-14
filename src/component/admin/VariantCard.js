import React, { useEffect, useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import Api from '../../api/Api';
import { useNavigate } from 'react-router-dom';

const VariantCard = ({id,productId,reload}) => {
    const navigate=useNavigate()
    const [thumbnail,setThumbnail]=useState('')
    const [productName,setProductName]=useState('')
    const [price,setPrice]=useState('')
    const [unit,setUnit]=useState('')
    const getProductData=async (id)=>{
        try {
            const result = await Api.get(`/api/products/${id}`)
            result.data.ProductImages.forEach(image => {
                if (image.role ===1){
                    setThumbnail(image)
                    setPrice(result.data.price)
                    setUnit(result.data.unit)
                }
            });
            setProductName(result.data.product_name)
            console.log(result.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        console.log(id)
        getProductData(id)
    },[id])
    
    const handleDelete=async ()=>{
        try {
            await Api.patch('/api/products/removeVariant',{
                "productId":productId,
                "variantId":id
            })
            await reload(productId)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='h-full relative flex'>
        <div className=' bg-gray-200 grow flex  items-center rounded-md p-2 my-4'
        onClick={(e)=>{
            navigate(`/dashboard/updateproduct/${id}`)
        }}
        >
            <div className='bg-cover bg-center h-full w-1/3 rounded-md'
                style={{ backgroundImage: `url(/${thumbnail.path})` }}
            >
            </div>
            <div className='grow flex flex-col ml-2 justify-between h-full' >
                <h2>{productName}</h2>
                <div className='flex w-full justify-end'>

                    <p >
                    <span className='text-2xl font-bold text-customBlue '>{price}</span> 
                    <span className='px-1 line-through'>{unit}</span>
                    </p>
                </div>
            </div>
           
        </div>
        <div 
            className='absolute z-[9999] top-2 right-0 p-[2px] cursor-pointer bg-customBlue rounded-full text-white hover:bg-sky-500'
            onClick={(e)=>{
                handleDelete()
            }}
            >
                <RxCross2/>
            </div>
        </div>
    )
}

export default VariantCard