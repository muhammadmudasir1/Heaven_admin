import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const CompareTabbar = () => {
    const [productType,setProductType]=useState(1)


    return (
        <>
            <ul className='flex pmb-5 items-center justify-center bg-red-400 '>
                <div 
                className='flex w-3/4 bg-yellow-500 justify-around text-xl h-full'>

                <li className={`py-3 cursor-pointer px-2 ${productType==1 && "active"}`}
                onClick={(e)=>{
                    setProductType(1)
                }}
                >
                   <p>SLA Printer</p>
                </li>
                <li className={`py-3 cursor-pointer px-2 ${productType==2 && "active"}`}
                onClick={(e)=>{
                    setProductType(2)
                }}
                >
                    <p>FDM Printer</p>
                </li>
                <li className={`py-3 cursor-pointer px-2 ${productType==3 && "active"}`}
                onClick={(e)=>{
                    setProductType(3)
                }}
                >
                    <p>Laser Cutter</p>
                </li>
                <li className={`py-3 cursor-pointer px-2 ${productType==4 && "active"}`}
                onClick={(e)=>{
                    setProductType(4)
                }}
                >
                    <p>3D Scannar</p>
                </li>
                </div>
            </ul>
        </>
    )
}

export default CompareTabbar