import React, { useEffect } from 'react'

const SelectedCard = ({data}) => {
    useEffect(()=>{

    },[data])
    return (
        <div key={data.Id} className='flex items-center mx-4 py-4 bg-white w-1/5'>
            <img src={data.image} alt="" className='h-16' />
            <div className='px-2'>
                <h1 className='text-neutral-800 text-base font-semibold font-[Roboto] line-clamp-2' title={data.title}>{data.title}</h1>
                {/* <h1 className='text-neutral-800 text-sm font-semibold font-[Roboto]'>{data.price}</h1> */}
            </div>
        </div>
    )
}

export default SelectedCard