import React, { useState, useRef} from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import SearchIcon from '@mui/icons-material/Search';
import list from './list.json';

const Filtersearch = () => {
  const [isOpen, setIsOpen] = useState(Array(3).fill(false));
  const searchButtonRef = useRef(null);

  const toggleDropdown = (index) => {
    const newOpenStates = [...isOpen];
    newOpenStates[index] = !newOpenStates[index];
    setIsOpen(newOpenStates);
  };

  return (
    <div className='w-full bg-slate-100 flex flex-row justify-center p-5 lg:py-10'>

      <div className='lg:w-11/12 w-full m-4 bg-white p-5 flex flex-col items-center rounded-lg '>
        <div className='w-full flex items-center justify-center'>
          <h1 className='lg:text-5xl text-2xl pb-8 text-center font-bold font-[Roboto]'>
            Search for best deals and discounts
          </h1>
        </div>
        <div className='bg-[#026CC4] p-5 flex flex-col lg:flex-row items-center rounded-lg w-full'>
          {list.map((_item, index) => (
            <div className='flex flex-col items-center justify-between w-full mx-2'>
            <>
              <button
                ref={searchButtonRef}
                onClick={() => toggleDropdown(index)}
                className='bg-white w-full lg:text-lg py-2 m-1 flex items-center justify-between rounded-md font-bold text-xl tracking-wider border-4 border-transparent active:border-white duration-500 active:text-white '
              >
                Dropdown
                {isOpen[index] ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
              </button>
              {isOpen[index] && (
                <div
                  className='bg-[#00CED1] w-full rounded-lg flex flex-col place-items-start lg:z-20 top-full mt-2 lg:top-0'
                >
                  {list.map((item, i) => (
                    <div
                      key={i}
                      className='flex flex-row justify-between w-full px-5 py-2 cursor-pointer hover:bg-blue-500 rounded-lg'
                    >
                      <h3 className='font-bold'>{item.city}</h3>
                      <h3>{item.emojy}</h3>
                    </div>
                  ))}
                </div>
              )}
            </>
            </div>
          ))}
          <div className='bg-[#00CED1] lg:mx-2 w-full lg:w-auto px-4 py-2 lg:px-4 lg:py-2 lg:text-lg flex items-center justify-center rounded-md my-1 font-bold tracking-wider border-4 border-transparent active:border-white duration-500 active:text-black cursor-pointer'>
            <SearchIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filtersearch;
