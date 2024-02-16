import React from 'react'
import Tabbar from '../component/Landingpage/Tabbar'
import FDMBanner from './FDMSingleviewComponent/Banner'
import FDMSingleReviewTabbar from './FDMSingleviewComponent/SingleReviewTabbar'
import FDMReviewAndAdd from './FDMSingleviewComponent/ReviewAndAdd'
import FDMEmptydiv from './FDMSingleviewComponent/Emptydiv'
import FDMColumnCard from './FDMSingleviewComponent/ColumnCard'
import FDMDetail from './FDMSingleviewComponent/Detail'

const FDMSingleview = () => {
  return (
    <div>
      <Tabbar />
      <FDMBanner />
      <FDMSingleReviewTabbar />
      <FDMReviewAndAdd />
      <FDMEmptydiv/>
      <FDMColumnCard/>
      <FDMDetail/>
    </div>
  )
}

export default FDMSingleview
