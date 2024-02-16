import React, { useEffect } from 'react'
import { MdCancel } from "react-icons/md";

const CouponPopUp = ({offset,Coupon,close}) => {
  useEffect(()=>{
    console.log(offset)
  },[offset])
  return (
    <div className=' w-full h-60 absolute  flex justify-center items-center'
    style={{top:offset-150}}
    >
        <div className='w-3/5 bg-gray-200 h-full rounded-2xl flex flex-col relative'>
            <div className='w-full h-16 px-4 py-4 text-2xl relative'>

            <h2 className='semi-bold'>Coupons</h2>
            </div>
            <div className='flex-grow  grid grid-cols-2 px-4'>
                {
                  Coupon.map((element)=>{
                    return <>
                    
                    <div className='flex justify-center'><p>{element.site}</p></div>
                    <div className='flex justify-center'><p>{element.coupon}</p></div>
                    </>
                  })
                }


            </div>
        <div className='absolute w-6 h-6 top-2 right-2 rounded-full flex justify-center items-center cursor-pointer'>
        <MdCancel className='h-5 w-5 text-customBlue hover:text-sky-500' onClick={(e)=>close()}/>
        </div>

        </div>

    </div>
  )
}

export default CouponPopUp