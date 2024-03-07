import Tabbar from '../Landingpage/Tabbar'
import CompareScrollandAdd from './CompareScrollandAdd'
import React, { useEffect, useState } from 'react';
import Manufacturers from '../Landingpage/Manufacturers';
import ProductFilter from '../Landingpage/ProductFilter';
import PriceFilter from '../Landingpage/PriceFilter';
import { IoSearch } from 'react-icons/io5';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ComparePage = () => {
    const [priceLimit, setPriceLimit] = useState(5)
    const [filterManufacturer, setFilterManufacturer] = useState([])
    const [filterProduct, setFilterProduct] = useState([])
    const [reload,setReload]=useState(false)
    const location = useLocation()
    const navigate=useNavigate()
    const queryParams = new URLSearchParams(location.search)
    const {t}=useTranslation()

    useEffect(()=>{
        console.log("From Ru")
    },[])

    useEffect(() => {
        let manufacturersParams = queryParams.get('manufacturers')
        manufacturersParams = JSON.parse(decodeURIComponent(manufacturersParams))
        setFilterManufacturer(manufacturersParams)
        let productsParams = queryParams.get('products')
        productsParams = JSON.parse(decodeURIComponent(productsParams))
        setFilterProduct(productsParams)
        let priceParams = queryParams.get('priceQuery')
        priceParams = JSON.parse(decodeURIComponent(priceParams))
        setPriceLimit(priceParams)

    }, [])

    const handleFilter = () => {
        const manufacturersQuery = encodeURIComponent(JSON.stringify(filterManufacturer))
        const productsQuery = encodeURIComponent(JSON.stringify(filterProduct))
        const priceQuery = encodeURIComponent(JSON.stringify(priceLimit))
        const newSearchString = `manufacturers=${manufacturersQuery}&products=${productsQuery}&price=${priceQuery}`;

        const newUrl = `${location.pathname}?${newSearchString}`;
        
        setReload((prev)=>{
            return !prev
        })
        navigate(newUrl, { replace: true });
    }



    return (
        <>
            <Tabbar />
            <div className='w-full bg-slate-100 flex flex-row justify-center p-5 lg:py-10'>
                <div className='lg:w-11/12 w-full m-4 bg-white p-5 flex flex-col items-center rounded-lg '>
                    <div className='w-full flex items-center justify-center'>
                        <h1 className='lg:text-5xl text-2xl pb-8 text-center font-bold font-[Roboto]'>
                        {t("searchFilterHeading")}
                        </h1>
                    </div>
                    <div className='bg-[#026CC4] p-5 flex flex-col lg:flex-row items-center rounded-lg w-full mx-8'>
                        <Manufacturers setFilterManufacturer={setFilterManufacturer} filterManufacturer={filterManufacturer} />
                        <ProductFilter setFilterProduct={setFilterProduct} manufacturers={filterManufacturer} filterProduct={filterProduct} />
                        <PriceFilter setPrice={setPriceLimit} price={priceLimit} />
                        <button className='bg-[#00CED1] text-white lg:mx-2 w-full lg:w-auto px-4 py-2 lg:px-4 lg:py-4 lg:text-lg flex items-center justify-center rounded-md my-1 font-bold tracking-wider border-4 border-transparent active:border-white duration-500 active:text-black cursor-pointer'
                            onClick={(e) => {
                                handleFilter()
                            }}
                        >
                            <IoSearch />
                        </button>
                    </div>
                </div>
            </div>
            <CompareScrollandAdd reload={reload} />
        </>
    )
}

export default ComparePage