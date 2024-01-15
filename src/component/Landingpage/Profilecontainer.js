import React from 'react'

const Profilecontainer = () => {
    return (
        <div className='bg-[#00CED1] py-12 flex flex-row items-center justify-between '>
            <div className='lg:ml-12 ml-6 flex flex-col justify-start items-start'>
                <h1 className='text-neutral-800 lg:text-6xl text-2xl font-extrabold font-[Avenir]'>
                    Beginner’s guide to buy <br/> the right 3D printer
                </h1>
                <button className='text-neutral-800 bg-white rounded-md flex items-center justify-center lg:px-8 px-4 lg:py-4 py-2 lg:mt-14 mt-4 lg:text-2xl font-medium font-[Avenir]'>
                    Beginner’s guide
                </button>
            </div>
            <div className='relative'>
            <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D" alt="" className='rounded-full lg:w-80 lg:h-80 w-40 h-40 lg:mr-24 mr-2 relative' />
            
            <div className='bg-white rounded-full lg:w-20 lg:h-20 w-10 h-10 absolute  top-0 left-0'/>
            <div className='bg-white rounded-full lg:w-16 lg:h-16 w-8 h-8 absolute  lg:bottom-0 -bottom-4 right-28'/>
            <div className='bg-white rounded-full lg:w-20 lg:h-20 w-10 h-10 absolute top-10 -right-3 lg:right-16 border-cyan-400 border-spacing-10 border-solid'/>
                
            </div>
        </div>
    )
}

export default Profilecontainer