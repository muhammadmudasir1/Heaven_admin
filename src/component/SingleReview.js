import React from 'react'
import Tabbar from './Landingpage/Tabbar'
import Banner from './SingleReviewComponents/Banner'
import SingleReviewTabbar from './SingleReviewComponents/SingleReviewTabbar'
import ReviewAndAdd from './SingleReviewComponents/ReviewAndAdd'

const SingleReview = () => {
  return (
    <div>
      <Tabbar/>
      <Banner/>
      <SingleReviewTabbar/>
      <ReviewAndAdd/>
    </div>
  )
}

export default SingleReview
