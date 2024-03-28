import React, { useEffect, useState } from 'react';
import Manufacturers from './Manufacturers';
import ProductFilter from './ProductFilter';
import PriceFilter from './PriceFilter';
import PriceFilterTemp from './PriceFilterTemp'
import { IoSearch } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Filtersearch = ({manufacturersParams,productsParams,priceParams}) => {
  const [priceLimit,setPriceLimit]=useState(5)
  const [filterManufacturer, setFilterManufacturer] = useState([])
  const [filterProduct,setFilterProduct]=useState([])
  const navigate=useNavigate()
  const { t } = useTranslation();
  
  useEffect(()=>{
    if(Array.isArray(manufacturersParams)){
      setFilterManufacturer(manufacturersParams)
    }
    if(Array.isArray(productsParams)){
      setFilterProduct(productsParams)
    }
    if(priceParams){
      setPriceLimit(priceParams)
    }

  },[manufacturersParams,productsParams,priceParams])

  const handleFilter=()=>{
    const manufacturersQuery=encodeURIComponent(JSON.stringify(filterManufacturer))
    const productsQuery=encodeURIComponent(JSON.stringify(filterProduct))
    const priceQuery=encodeURIComponent(JSON.stringify(priceLimit))
    navigate(`/ComparisonPage?manufacturers=${manufacturersQuery}&products=${productsQuery}&priceQuery=${priceQuery}`)

  }

  return (
    <div className='w-full bg-slate-100 flex flex-row justify-center p-5 lg:py-10'>
      <div className='lg:w-11/12 w-full m-4 bg-white p-5 flex flex-col items-center rounded-lg '>
        <div className='w-full flex items-center justify-center'>
          <h1 className='lg:text-5xl text-2xl pb-8 text-center font-bold font-[Roboto]'>
            {t("searchFilterHeading")}
          </h1>
        </div>
        <div className='bg-[#026CC4] p-5 flex flex-col lg:flex-row items-center rounded-lg w-full mx-8'>
          <Manufacturers  setFilterManufacturer={setFilterManufacturer} filterManufacturer={filterManufacturer}/>
          <ProductFilter setFilterProduct={setFilterProduct} manufacturers={filterManufacturer} filterProduct={filterProduct}/>
          <PriceFilter setPrice={setPriceLimit} price={priceLimit}/>
          <button className='bg-[#00CED1] text-white lg:mx-2 w-full lg:w-auto px-4 py-2 lg:px-4 lg:py-4 lg:text-lg flex items-center justify-center rounded-md my-1 font-bold tracking-wider border-4 border-transparent active:border-white duration-500 active:text-black cursor-pointer'
          onClick={(e)=>{
            handleFilter()
          }}
          >
            <IoSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filtersearch;
