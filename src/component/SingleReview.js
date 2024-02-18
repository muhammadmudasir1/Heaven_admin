import React from 'react'
import Tabbar from './Landingpage/Tabbar'
import Banner from './SingleReviewComponents/Banner'
import SingleReviewTabbar from './SingleReviewComponents/SingleReviewTabbar'

const SingleReview = () => {
  return (
    <div>
      <Tabbar />
      <Banner />
      <SingleReviewTabbar />
      {/* <ReviewAndAdd />
      <Emptydiv/>
      <ColumnCard/>
      <Detail/> */}
    </div>
  )
}

export default SingleReview
