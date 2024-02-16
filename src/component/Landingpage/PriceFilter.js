import React, { useEffect, useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
const PriceFilter = ({ setPrice,price}) => {

    return (
        <div className='flex flex-col items-center justify-between w-full mx-2 relative'>
            <select className='  bg-white w-full md:text-lg  md:py-3 py-1 m-1 flex items-center justify-between rounded-md tracking-wider border-4 border-transparent active:border-white  duration-500 active:text-white  pl-2 pr-2 md:pl-8 md:pr-2  text-neutral-700 text-lg font-light font-[Roboto]'
            value={price}
            onChange={(e)=>{
                setPrice(e.target.value)
            }}
            >
                <option className=' text-gray-500 py-1' value={1}>
                    upto 500 Euro
                </option>
                <option className=' text-gray-500 py-1' value={2}>
                    upto 1000 Euro
                </option>
                <option className=' text-gray-500 py-1' value={3}>
                    upto 1500 Euro
                </option>
                <option className=' text-gray-500 py-1' value={4}>
                    upto 2000 Euro
                </option>
                <option className=' text-gray-500 py-1' value={5}>
                    upto 2500 Euro
                </option>
            </select>

            <div className='absolute right-0 flex items-center h-full pl-2 pr-2 md:pl-8 md:pr-2 mr-1'> <ArrowDropDownIcon/> </div>
        </div>
    );
};

export default PriceFilter;
