import React, { useState } from 'react'
import { Checkbox } from "@material-tailwind/react"
import imges from '../../imges/coupon.svg'
import imges1 from '../../imges/EBay_logo.png'

const ComparisionCard = ({card,selectedcards,handleCheckboxChange}) => {

    const [isChecked,setIsChecked]=useState(false)

    return (<div key={card.Index} className='flex items-center justify-between rounded-xl h-[350px] w-full mb-6'
         style={{ boxShadow: '-8px 0 15px rgba(203,213,225,0.5), 0 8px 15px rgba(203,213,225,0.5)' }}>
        <div className=' w-1/3 h-full '>
            <div className={`bg-cover bg-center h-full w-full rounded-l-xl`} style={{ backgroundImage: `url(${card.img})` }} />
        </div>
        <div className='flex items-center grow h-full pl-4'>
            <div className=' w-3/5 flex flex-col justify-between h-full py-3'>
                <div>
                    <h1 className='text-neutral-800 text-2xl font-semibold font-[Roboto] my-3'>{card.title}</h1>
                    <div className='px-2'>
                        <ul className=''>
                            <div className='flex items-center'>
                                <li className=' text-lg font-bold pr-2 list-disc'>Print Volume: </li>
                                <li>{card.volume}</li>
                            </div>
                            <div className='flex items-center'>
                                <li className=' text-lg font-bold pr-2 list-disc'>Print Speed: </li>
                                <li>{card.Speed}</li>
                            </div>
                            <div className='flex items-center'>
                                <li className=' text-lg font-bold pr-2 list-disc'>Filament Compatibility: </li>
                                <li>{card['Filament Compatibility']}</li>
                            </div>
                            <div className='flex items-center'>
                                <li className=' text-lg font-bold pr-2 list-disc'>Printing Accuracy XY Resolution: </li>
                                <li>{card['Printing Accuracy XY Resolution']}</li>
                            </div>
                        </ul>
                    </div>
                    <button className='flex items-center bg-gray-200 my-2 px-4 py-2 rounded-md'>
                        <img src={imges} alt="" />
                        <h1 className='mx-2'>{card.coupon}</h1>
                    </button>
                </div>
                <div className='flex items-center '>
                    <input type='checkbox'
                    checked={isChecked} 
                    onChange={() => {
                        handleCheckboxChange(card.Index)
                        if(selectedcards.length<4){
                            setIsChecked((prev)=>{
                                return !prev
                            })
                        }
                        else{
                            setIsChecked(false)
                        }
                    }}
                    className='h-5 w-5 mr-4' />
                    <h1 class=" text-lg font-light">Add to Comparison</h1>
                </div>
            </div>
            <div className=' flex justify-center w-2/5 h-full'>
                <div className='flex flex-col  items-center justify-center my-7 w-full border-l-[1px] border-black'>
                    <h1 className=' font-bold text-xl'>{card.price}</h1>
                    <h1 className='text-black text-xl font-bold font-[Roboto]'>{card['Offical Price']}</h1>
                    <div className=''>
                        <div className='flex border-2 items-center justify-evenly border-blue-500 rounded-md py-2 px-6 my-2' >
                            <img src={imges1} alt="" className='h-full pr-2' />
                            <h1 className='pl-2 text-lg font-bold'>{card.price}</h1>
                        </div>
                        <div className='flex border-2 items-center justify-evenly border-blue-500 rounded-md py-2 px-6 my-2' >
                            <img src={imges1} alt="" className='h-full pr-2' />
                            <h1 className='pl-2 text-lg font-bold'>{card.price}</h1>
                        </div>
                        <div className='flex border-2 items-center justify-evenly border-blue-500 rounded-md py-2 px-6 my-2' >
                            <img src={imges1} alt="" className='h-full pr-2' />
                            <h1 className='pl-2 text-lg font-bold'>{card.price}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ComparisionCard