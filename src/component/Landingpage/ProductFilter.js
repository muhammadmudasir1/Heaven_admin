import React, { useEffect, useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Api from '../../api/Api';


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

  useEffect(() => {
    const fetchData = async () => {
      const response = await Api.post(`/api/products/productList`,{
        manufacturers
      })
      if (Array.isArray(response.data)){
        setProductList(response.data)
      }
      else{
        setProductList([])
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
        className='bg-white w-full lg:text-lg py-3 m-1 flex items-center justify-between rounded-md tracking-wider border-4 border-transparent active:border-white duration-500 active:text-white lg:pl-8 lg:pr-2 text-neutral-700 text-2xl font-light font-[Roboto]'
      >
        All Products
        {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </button>
      {isOpen && (
        <div className='flex flex-col absolute bg-white w-full top-full z-[999] p-4 h-[30vh] overflow-y-auto'>
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
