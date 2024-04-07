import React, { useEffect, useState } from 'react';
import { FaCaretDown,FaCaretUp } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
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
  const {t}=useTranslation()
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Api.get(`/api/products/manufacturerList/0`)
        setManufacturerList(response.data)
      } catch (error) {
        console.log(error)
      }
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
        className='bg-white w-full md:text-lg  md:py-3 py-1 m-1 flex items-center justify-between rounded-md tracking-wider border-4 border-transparent active:border-white  duration-500 active:text-white text-center pl-2 pr-2 md:pl-8 md:pr-2  text-neutral-700 text-lg font-light font-[Roboto]'
      >
        {t("Manufacturer")}
        {isOpen ? <FaCaretUp /> : <FaCaretDown />}
      </button>
      {isOpen && (

        <div className='flex flex-col md:absolute bg-white w-full top-full z-[10] p-4 h-[30vh] overflow-y-auto'>
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
