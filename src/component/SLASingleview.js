import React from 'react'
import Tabbar from './Landingpage/Tabbar'
import SLABanner from './SLASingleviewComponent/Banner'
import SLASingleReviewTabbar from './SLASingleviewComponent/SingleReviewTabbar'
import SLAReviewAndAdd from './SLASingleviewComponent/ReviewAndAdd'
import SLAEmptydiv from './SLASingleviewComponent/Emptydiv'
import SLAColumnCard from './SLASingleviewComponent/ColumnCard'
import SLADetail from './SLASingleviewComponent/Detail'

const SLASingleview = () => {
  return (
    <div>
      <Tabbar />
      <SLABanner />
      <SLASingleReviewTabbar />
      <SLAReviewAndAdd />
      <SLAEmptydiv/>
      <SLAColumnCard/>
      <SLADetail/>
    </div>
  )
}

export default SLASingleview
