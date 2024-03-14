import { useState } from 'react';
const PriceFilter = ({ setPrice,price}) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };

    return (
        <div  className='flex flex-col items-center justify-between w-full mx-2 relative cursor-pointer'>
            <select onClick={toggleDropdown} className='  bg-white w-full md:text-lg  md:py-3 py-1 m-1 flex cursor-pointer items-center justify-between rounded-md tracking-wider border-4 border-transparent active:border-white  duration-500 active:text-white  pl-2 pr-2 md:pl-8 md:pr-2  text-neutral-700 text-lg font-light font-[Roboto]'
            value={price}
            onChange={(e)=>{
                setPrice(e.target.value)
            }}
            >
                <option className=' text-gray-500 py-1' value={0}>
                    {'>300,00 Euro'}
                </option>
                <option className='text-gray-500 py-1' value={1}>
                    {'>500,00 Euro'}
                </option>
                <option className=' text-gray-500 py-1' value={2}>
                    {'>800,00 Euro'}
                </option>
                <option className=' text-gray-500 py-1' value={3}>
                    {'>1.000,00 Euro'}
                </option>
                <option className=' text-gray-500 py-1' value={4}>
                    {'>1.500 Euro'}
                </option>
                <option className=' text-gray-500 py-1' value={5}>
                    {'<1.500 Euro'}
                </option>
            </select>

            {/* <div className='absolute right-0 flex items-center h-full pl-2 pr-2 md:pl-8 md:pr-2 mr-1'> {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />} </div> */}
        </div>
    );
};

export default PriceFilter;
