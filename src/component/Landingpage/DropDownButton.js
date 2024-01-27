import React, { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import list from './list.json';

const DropDownButton = ({ buttonName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isname] = useState(buttonName);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex flex-col items-center justify-between w-full mx-2 lg:relative'>
      <button
        onBlur={(e)=> {setIsOpen(false)}}
        onClick={toggleDropdown}
        className='bg-white w-full lg:text-lg py-3 m-1 flex items-center justify-between rounded-md tracking-wider border-4 border-transparent active:border-white duration-500 active:text-white lg:pl-8 lg:pr-2 text-neutral-700 text-xl font-light font-[Roboto]'
      >
        {isname}
        {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </button>
      {isOpen && (
        <div
          className='bg w-full rounded-lg flex flex-col place-items-start lg:z-20 top-full mt-2 lg:bottom-0 lg:absolute'
        >
          {isOpen && list.map((item, i) => (
            <div
              key={i}
              className='flex flex-row justify-between w-full px-5 py-2 cursor-pointer bg-white hover:bg-blue-500 rounded-lg'
            >
              <h3 className='font-bold'>{item.city}</h3>
              <h3>{item.emojy}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDownButton;
