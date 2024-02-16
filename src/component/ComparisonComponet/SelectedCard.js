import React, { useEffect } from 'react'

const SelectedCard = ({data}) => {
    useEffect(()=>{

    },[data])
    return (
        <div key={data.Id} className='flex items-center md:mx-4 md:py-4 mx-1 my-1 bg-white  w-full md:w-1/5'>
            <img src={data.image} alt="" className='md:h-16 h-10' />
            <div className='px-2'>
                <h1 className='text-neutral-800 text-base font-semibold font-[Roboto] line-clamp-2' title={data.title}>{data.title}</h1>
                {/* <h1 className='text-neutral-800 text-sm font-semibold font-[Roboto]'>{data.price}</h1> */}
            </div>
        </div>
    )
}

export default SelectedCard