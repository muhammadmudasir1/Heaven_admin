import React from 'react'
import NewsBanner from './NewsComponents/NewsBanner'
import Tabbar from './Landingpage/Tabbar'
import AddAndNews from './NewsComponents/AddAndNews'

const NewsView = () => {
  return (
    <div>
        <Tabbar/>
        <NewsBanner/>
        <AddAndNews/>
    </div>
  )
}

export default NewsView
