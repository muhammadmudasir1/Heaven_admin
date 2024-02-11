import React from 'react'
import Tabbar from './Landingpage/Tabbar'
import Banner from './SingleReviewComponents/Banner'
import SingleReviewTabbar from './SingleReviewComponents/SingleReviewTabbar'
import ReviewAndAdd from './SingleReviewComponents/ReviewAndAdd'
import Emptydiv from './SingleReviewComponents/Emptydiv'
import ColumnCard from './SingleReviewComponents/ColumnCard'
import Detail from './SingleReviewComponents/Detail'
const SingleReview = () => {
  return (
    <div>
      <Tabbar />
      <Banner />
      <SingleReviewTabbar />
      <ReviewAndAdd />
      <Emptydiv/>
      <ColumnCard/>
      <Detail/>
    </div>
  )
}

export default SingleReview
