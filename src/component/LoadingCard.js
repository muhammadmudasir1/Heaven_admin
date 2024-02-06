import React from 'react'

const LoadingCard = () => {
  return (
    <div className='w-full h-[300px] bg-gray-100 grid grid-cols-3 rounded-xl overflow-hidden animate-pulse shadow-lg mb-5'>
        <div className='w-full h-full p-4 animate-pulse'>
            <div className='w-full h-full bg-gray-300 rounded-lg'></div>
        </div>
        <div className='col-span-2 w-full h-full p-4'>
            <div className='w-full h-1/5 bg-gray-300 rounded-lg'/>
            <div className='w-full h-4/5 py-8 flex flex-col justify-between'>
                <div className='w-full h-8 bg-gray-300 rounded-lg'/>
                <div className='w-full h-8 bg-gray-300 rounded-lg'/>
                <div className='w-full h-8 bg-gray-300 rounded-lg'/>

            </div>

        </div>
        

    </div>
  )
}

export default LoadingCard