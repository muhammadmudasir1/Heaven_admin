import React from 'react'
import ReviewTabbar from './ReviewpageComponets.js/ReviewTabbar'
import ScrollView from './ReviewpageComponets.js/ScrollView'
import Tabbar from './Landingpage/Tabbar'
import { Outlet } from 'react-router-dom'

const Review = () => {

  return (
    <>
      <Tabbar />
      <div className='bg-zinc-100 w-full h-full flex flex-row items-center justify-between'>
        <div>
          <h1 className='text-neutral-800 lg:text-5xl text-3xl font-normal ml-12 py-20 '> Reviews from our <br /> 3D expert</h1>
        </div>
        <div className='lg:mr-12 mr-2'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZd8IFhFAzVB_AdUsDwZMmRzafOAhzsQ_JlQ&usqp=CAU" alt="" className='lg:w-60 lg:h-60 w-24 h-24 rounded-full ' />
        </div>

      </div>
      {/* <ReviewTabbar /> */}
      <Outlet/>
        {/* <ScrollView /> */}
      
    </>
  )
}

export default Review