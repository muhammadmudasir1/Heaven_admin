import React, { useEffect, useState } from 'react';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { FaCaretDown,FaCaretUp } from "react-icons/fa";
import { useTranslation } from 'react-i18next';



const PriceFilter = ({setPrice,price}) => {
  const [isOpen, setIsOpen] = useState(false)
  const {t}=useTranslation()

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex flex-col items-center justify-between w-full mx-2 lg:relative'>
      <button
        onClick={toggleDropdown}
        className='bg-white w-full md:text-lg  md:py-3 py-1 m-1 flex items-center justify-between rounded-md tracking-wider border-4 border-transparent active:border-white  duration-500 active:text-white text-center pl-2 pr-2 md:pl-8 md:pr-2  text-neutral-700 text-lg font-light font-[Roboto]'
      >
        {
        price===4?"<1.500,00 Euro"
        :price===3?">1.500,00 Euro"
        :price===2?">1.000,00 Euro"
        :price===1?">800,00 Euro"
        :">500,00 Euro"}
        {isOpen ? <FaCaretUp /> : <FaCaretDown />}
      </button>
      {isOpen && (
        <div className='flex flex-col md:absolute bg-white w-full top-full z-[10] p-4 h-[30vh] overflow-y-auto'>
            <div className='p-2 border-b-[1px] border-gray-300 flex hover:bg-customBlue cursor-pointer hover:text-white'
            onClick={()=>{
                setPrice(0)
                setIsOpen(false)
            }
                // toggleDropdown(0)
            }
            >
            <p className='ml-2'>{'>500,00 Euro'}</p>
            </div>
            <div className='p-2 border-b-[1px] border-gray-300 flex hover:bg-customBlue cursor-pointer hover:text-white'
            onClick={()=>{
                setPrice(1)
                setIsOpen(false)
            }}
            >
            <p className='ml-2'>{'>800,00 Euro'}</p>
            </div>
            <div className='p-2 border-b-[1px] border-gray-300 flex hover:bg-customBlue cursor-pointer hover:text-white'
            onClick={()=>{
                setPrice(2)
                setIsOpen(false)
            }}
            >
            <p className='ml-2'>{'>1.000,00 Euro'}</p>
            </div>
            <div className='p-2 border-b-[1px] border-gray-300 flex hover:bg-customBlue cursor-pointer hover:text-white'
            onClick={()=>{
                setPrice(3)
                setIsOpen(false)
            }}
            >
            <p className='ml-2'>{'>1.500,00 Euro'}</p>
            </div>
            <div className='p-2 border-b-[1px] border-gray-300 flex hover:bg-customBlue cursor-pointer hover:text-white'
            onClick={()=>{
                setPrice(4)
                setIsOpen(false)
            }}
            >
            <p className='ml-2'>{'<1.500,00 Euro'}</p>
            </div>
        </div>
      )}
    </div>
  );
};

export default PriceFilter;
