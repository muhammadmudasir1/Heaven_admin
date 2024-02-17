import React from 'react'
import Banner from '../NewsComponents/Banner.png'

const NewsBanner = () => {
  return (
    <div>
      <div className='flex items-center justify-between px-28 bg-[#D6E9FC] py-3'>
        <div className=''>
          <h1 className='text-3xl font-bold'>Latest News & Events</h1> 
          <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/>
            eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className='bg-center bg-cover h-56 w-72' style={{ backgroundImage: `url(${Banner})` }} />
      </div>
    </div>
  )
}

export default NewsBanner
