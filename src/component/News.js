import React from 'react'
import NewsBanner from './NewsComponents/NewsBanner'
import Tabbar from '../component/Landingpage/Tabbar'
import AddAndNews from './NewsComponents/AddAndNews'

const News = () => {
  return (
    <div>
        <Tabbar/>
        <NewsBanner/>
        <AddAndNews/>
    </div>
  )
}

export default News
