import React from 'react'
import { useNavigate } from 'react-router-dom'

const BeginnersGuidCard = ({ data }) => {
    const navigate=useNavigate()
    return (
        <div className='w-full h-[250px] rounded-md  grid grid-cols-4 gap-3 overflow-hidden bg-gray-200 shadow-md p-2 mb-2'>
            <div className='w-full h-full  bg-cover bg-center'
                style={{ backgroundImage: `url(/${data.image})` }}
            />
            <div className=' col-span-3 h-full flex flex-col justify-between'>
                <h3 className='w-full text-2xl py-2'>{data.Title}</h3>
                <div className='w-full  line-clamp-6 py-1  h-3/5 overflow-hidden'
                    dangerouslySetInnerHTML={{ __html: data.body }}
                />
                <div className='w-full flex justify-end'>
                    <button
                    className='px-4 py-2 bg-gray-200 rounded-md mr-1 hover:bg-customBlue hover:text-white'
                    onClick={(e)=>{
                        navigate(`/dashboard/updatebeginnersguid/${data.guidId}`)
                    }}
                    >Edit</button>
                    <button className='px-4 py-2 bg-gray-200 rounded-md ml-1 hover:bg-red-500 hover:text-white'>Delete</button>
                </div>
            </div>

        </div>
    )
}

export default BeginnersGuidCard