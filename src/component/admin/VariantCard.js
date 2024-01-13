import React from 'react'
import { RxCross2 } from "react-icons/rx";

const VariantCard = ({data}) => {
    return (
        <div className=' h-full bg-gray-200 flex items-center rounded-md p-2 relative'>
            <div className='bg-cover bg-center h-full w-1/3 rounded-md'
                style={{ backgroundImage: `url(${data.image})` }}
            >
            </div>
            <div className='grow flex flex-col ml-2 justify-between h-full' >
                <h2>{data.productName}</h2>
                <div className='flex w-full justify-end'>

                    <p >
                    <span className='text-2xl font-bold text-customBlue '>{data.discountedPrice}</span> 
                    <span className='px-1 line-through'>{data.originalPrice}</span>
                    </p>
                </div>
            </div>
            <div className=' absolute top-0 right-0 hover:text-red-500 p-[2px] cursor-pointer bg-customBlue rounded-full text-white hover:bg-sky-500 '>
                <RxCross2/>
            </div>
        </div>
    )
}

export default VariantCard