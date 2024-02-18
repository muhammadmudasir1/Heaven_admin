import React from 'react'
import Tabbar from '../component/Landingpage/Tabbar'
import RatgaberBanner from './Ratgaber/RatgaberBanner'
import { RateReview } from '@mui/icons-material'
const Ratgaber = () => {
  return (
    <div>
      <Tabbar/>
      <RatgaberBanner/>
      <RateReview/>
    </div>
  )
}

export default Ratgaber
