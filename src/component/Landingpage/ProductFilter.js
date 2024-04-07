import React, { useEffect, useState } from 'react';
import { FaCaretDown,FaCaretUp } from "react-icons/fa";
import Api from '../../api/Api';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';


const ProductElement = ({ element,setSelectedList,selectedList}) => {
  const [selected,setSelected]=useState(selectedList.includes(element.Id))

  useEffect(()=>{
    if(selected){
      setSelectedList((prev)=>{
        return [...prev,element.Id]
      })
    }
    else{
      setSelectedList((prev)=>{
        const temp=prev.filter((ele)=>{
          return ele!=element.Id
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
      <p className='ml-2'>{element.product_name}</p>
    </div>
  )
}




const ProductFilter = ({setFilterProduct,manufacturers,filterProduct}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [productList, setProductList] = useState([])
  const {t}=useTranslation()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Api.post(`/api/products/productList`,{
          manufacturers
        })
        if (Array.isArray(response.data)){
          setProductList(response.data)
        }
        else{
          setProductList([])
        }
        
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [manufacturers])

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex flex-col items-center justify-between w-full mx-2 lg:relative'>
      <button
        onClick={toggleDropdown}
        className='bg-white w-full md:text-lg  md:py-3 py-1 m-1 flex items-center justify-between rounded-md tracking-wider border-4 border-transparent active:border-white  duration-500 active:text-white text-center pl-2 pr-2 md:pl-8 md:pr-2  text-neutral-700 text-lg font-light font-[Roboto]'
      >
        {t('products')}
        {isOpen ? <FaCaretUp /> : <FaCaretDown />}
      </button>
      {isOpen && (
        <div className='flex flex-col md:absolute bg-white w-full top-full z-[10] p-4 h-[30vh] overflow-y-auto'>
          {

          productList.map((product) => {
              return <ProductElement element={product} setSelectedList={setFilterProduct} selectedList={filterProduct}/>
            })
          }

        </div>
      )}
    </div>
  );
};

export default ProductFilter;
