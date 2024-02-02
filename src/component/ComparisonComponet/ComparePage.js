import React from 'react'
import Tabbar from '../Landingpage/Tabbar'
import Filtersearch from '../Landingpage/Filtersearch'
import CompareTabbar from './CompareTabbar'
import CompareScrollandAdd from './CompareScrollandAdd'
import { Outlet } from 'react-router-dom'

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