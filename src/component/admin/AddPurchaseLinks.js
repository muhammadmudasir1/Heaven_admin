import React from 'react'
import ProductLinkCard from './ProductLinkCard'

const AddPurchaseLinks = () => {
  return (
    <div className='w-full h-screen relative t-2 p-6 overflow-y-scroll '>
        <h2 className='text-2xl font-semibold font-sans'>Add Purchase Links</h2>
        <div className='w-full mt-4 flex flex-col  items-center'>
            <ProductLinkCard/>

        </div>
    
    </div>
  )
}

export default AddPurchaseLinks