import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const CompareTabbar = () => {
    const [productType,setProductType]=useState(1)
    const {t}=useTranslation()

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
                   <p>{t('SLA')}</p>
                </li>
                <li className={`py-3 cursor-pointer px-2 ${productType==2 && "active"}`}
                onClick={(e)=>{
                    setProductType(2)
                }}
                >
                    <p>{t('fdm')}</p>
                </li>
                <li className={`py-3 cursor-pointer px-2 ${productType==3 && "active"}`}
                onClick={(e)=>{
                    setProductType(3)
                }}
                
                >
                    <p>{t('laserCutter')}</p>
                </li>
                <li className={`py-3 cursor-pointer px-2 ${productType==4 && "active"}`}
                onClick={(e)=>{
                    setProductType(4)
                }}
                >
                    <p>{t('3DScanner')}</p>
                </li>
                </div>
            </ul>
        </>
    )
}

export default CompareTabbar