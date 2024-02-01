import React, { useEffect, useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Api from '../../api/Api';
import list from './list.json';

const ProductFilter = ({ setType }) => {
  
  return (
    <div className='flex flex-col items-center justify-between w-full mx-2 lg:relative'>
      <select
      className='bg-white w-full lg:text-lg py-3 m-1 flex items-center justify-between rounded-md tracking-wider border-4 border-transparent active:border-white duration-500 active:text-white lg:pl-8 lg:pr-2 text-neutral-700 text-2xl font-light font-[Roboto]'
      onChange={(e)=>{
        setType(e.target.value)
      }}
      >
        <option className=' text-gray-500 py-1'
        value={1}
        >
            SLA PRINT
        </option>
        <option className=' text-gray-500 py-1'
        value={2}
        >
            FDM PRINT
        </option>
        <option className=' text-gray-500 py-1'
        value={3}
        >
            LEASER CUTTER
        </option>
        <option className=' text-gray-500 py-1'
        value={4}
        >
            3D SCANNAR
        </option>
        <option className=' text-gray-500 py-1'
        value={5}
        >
            FILAMENT 
        </option>
      </select>
      
    </div>
  );
};

export default ProductFilter;
