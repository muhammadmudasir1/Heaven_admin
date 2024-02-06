import React, { useEffect, useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Api from '../../api/Api';

const ManufacturerElement = ({ element,setSelectedList,selectedList}) => {
  const [selected,setSelected]=useState(selectedList.includes(element))

  useEffect(()=>{
    if(selected){
      setSelectedList((prev)=>{
        return [...prev,element]
      })
    }
    else{
      setSelectedList((prev)=>{
        const temp=prev.filter((ele)=>{
          return ele!=element
        })
        return temp
      })
    }
  },[selected])

  return (
    <div className='p-2 border-b-[1px] border-gray-300 flex'>
      <input type='checkbox' checked={selected}
      onChange={(e)=>{
        setSelected(e.target.checked)
      }}
      />
      <p className='ml-2'>{element}</p>
    </div>
  )
}




const Manufacturers = ({setFilterManufacturer,filterManufacturer}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [manufacturerList, setManufacturerList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await Api.get(`/api/products/manufacturerList/0`)
      setManufacturerList(response.data)
    }
    fetchData()
  }, [])

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex flex-col items-center justify-between w-full mx-2 lg:relative'>
      <button
        onClick={toggleDropdown}
        className='bg-white w-full lg:text-lg py-3 m-1 flex items-center justify-between rounded-md tracking-wider border-4 border-transparent active:border-white duration-500 active:text-white lg:pl-8 lg:pr-2 text-neutral-700 text-2xl font-light font-[Roboto]'
      >
        Manufacturers
        {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </button>
      {isOpen && (
        <div className='flex flex-col absolute bg-white w-full top-full z-[999] p-4 h-[30vh] overflow-y-auto'>
          {

            manufacturerList.map((manufacturer,index) => {
              return <ManufacturerElement 
              key={index}
              element={manufacturer.manufacturer} setSelectedList={setFilterManufacturer} selectedList={filterManufacturer} />
            })
          }

        </div>
      )}
    </div>
  );
};

export default Manufacturers;
