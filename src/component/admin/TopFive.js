import React, { useEffect, useState } from 'react'
import { BsSearch } from "react-icons/bs";
import TopFiveCard from './TopFiveCard'
import Api from '../../api/Api';

const TopFive = () => {
    const [cards, setCards] = useState([])
    useEffect(()=>{
        const fetchData=async ()=>{
            try {
               const response= await Api.get('/api/products/topfive')
               setCards(response.data)
            } catch (error) {
                console.log(error)
            }
                }
            fetchData()
    },[])
    return (
        <div className='w-full h-full relative overflow-hidden px-8'>
            <h2 className='my-5 text-2xl font-semibold'>Top 5 Products</h2>
            <div className='w-full h-[270px] grid grid-cols-5 gap-4'>
                {
                    cards.map((card,index)=>{
                        return <TopFiveCard data={card} key={index} index={index} />
                    })
                }
            </div>
            <div className='w-full flex justify-end p-4'>
                <button className='px-4 py-2 bg-gray-200 text-xl rounded-md hover:bg-customBlue hover:text-white'>Save</button>
            </div>
            <div className='w-full'>
                <h2 className=' text-2xl font-semibold'>Product List</h2>
                <div className='w-full flex justify-center'>
                    <input className=' outline-none p-2 w-1/5 border-gray-300 border-2 rounded-ss-full rounded-es-full' placeholder='Search' />
                    <button className='py-2 bg-customBlue px-6 text-xl rounded-ee-full rounded-se-full text-white hover:bg-sky-500' ><BsSearch /> </button>
                </div>
            </div>
            <div className='w-full h-[300px] bg-orange-400 py-3'>
                <div className='w-full h-[100px] bg-green-400 flex'>
                    
                </div>
            </div>



        </div>
    )
}

export default TopFive