import React from 'react'
import Tabbar from '../Landingpage/Tabbar'
import Filtersearch from '../Landingpage/Filtersearch'
import CompareTabbar from './CompareTabbar'
import CompareScrollandAdd from './CompareScrollandAdd'

const ComparePage = () => {
    return (
        <>
            
            <Tabbar />
            <Filtersearch />
            <CompareTabbar/>
            <CompareScrollandAdd/>
        </>
    )
}

export default ComparePage