import React, { useEffect, useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Api from '../../api/Api';
import list from './list.json';

const PriceFilter = ({ setPrice,price}) => {

    return (
        <div className='flex flex-col items-center justify-between w-full mx-2 lg:relative'>
            <select className='bg-white w-full lg:text-lg py-3 m-1 flex items-center justify-between rounded-md tracking-wider border-4 border-transparent active:border-white duration-500 active:text-white lg:pl-8 lg:pr-2 text-neutral-700 text-2xl font-light font-[Roboto]'
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

        </div>
    );
};

export default PriceFilter;
