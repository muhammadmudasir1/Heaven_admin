import React from 'react'
import Tabbar from './Landingpage/Tabbar'
import Filtersearch from './Landingpage/Filtersearch'
import CompareScrollandAdd from './ComparisonComponet/CompareScrollandAdd'
import { useLocation } from 'react-router-dom'

const ComparisonPage = () => {
    const location=useLocation()
    const queryParams=new URLSearchParams(location.search)
    let manufacturersParams = queryParams.get('manufacturers')
    manufacturersParams = JSON.parse(decodeURIComponent(manufacturersParams))
    let productsParams = queryParams.get('products')
    productsParams = JSON.parse(decodeURIComponent(productsParams))
    let priceParams = queryParams.get('priceQuery')
    priceParams = JSON.parse(decodeURIComponent(priceParams))
    return (
        <>
            <Tabbar />
            <Filtersearch manufacturersParams={manufacturersParams} productsParams={productsParams} priceParams={priceParams}/>
            <CompareScrollandAdd />
        </>
    )
}

export default ComparisonPage