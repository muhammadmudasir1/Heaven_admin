import React, { useState } from 'react';
import Manufacturers from './Manufacturers';
import ProductFilter from './ProductFilter';
import PriceFilter from './PriceFilter';
import { IoSearch } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

const Filtersearch = () => {
  const [productType,setProductType]=useState(1)
  const [priceLimit,setPriceLimit]=useState(1)
  const [filterManufacturer, setFilterManufacturer] = useState([])

  return (
    <div className='w-full bg-slate-100 flex flex-row justify-center p-5 lg:py-10'>
      <div className='lg:w-11/12 w-full m-4 bg-white p-5 flex flex-col items-center rounded-lg '>
        <div className='w-full flex items-center justify-center'>
          <h1 className='lg:text-5xl text-2xl pb-8 text-center font-bold font-[Roboto]'>
            Search for best deals and discounts
          </h1>
        </div>
        <div className='bg-[#026CC4] p-5 flex flex-col lg:flex-row items-center rounded-lg w-full mx-8'>
          <ProductFilter setType={setProductType}/>
          <Manufacturers type={productType} setFilterManufacturer={setFilterManufacturer}/>
          <PriceFilter setPrice={setPriceLimit} price={priceLimit}/>
          <button className='bg-[#00CED1] text-white lg:mx-2 w-full lg:w-auto px-4 py-2 lg:px-4 lg:py-4 lg:text-lg flex items-center justify-center rounded-md my-1 font-bold tracking-wider border-4 border-transparent active:border-white duration-500 active:text-black cursor-pointer'
          onClick={(e)=>{
            console.log({
              productType,
              priceLimit,
              filterManufacturer
            })
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
