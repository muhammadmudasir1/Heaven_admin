import React from 'react'

const ProductLinkCard = () => {
  return (
    <div className=' bg-gray-200 w-4/5 p-4 flex flex-col rounded-2xl shadow-xl'>

            <section className='p-2 flex items-center'>
                <label className='mr-2'>Site Name:</label>
                <select className='grow px-2 py-1 border-none outline-none border-2 border-gray-400 rounded-sm'>
                    <option>ACMER</option>
                    <option>Anycubic</option>
                    <option>Artillery3D</option>
                    <option>Atomstack</option>
                    <option>Bambu Lab</option>
                    <option>3DJake/ Creality</option>
                    <option>Elegoo</option>
                    <option>Lerdge </option>
                    <option>Revopoint </option>
                    <option>Sculpfun</option>
                    <option>Snapmaker</option>
                    <option>Ortur</option>
                    <option>Two Trees</option>
                    <option>Qidi Tech</option>
                    <option>xTool</option>
                </select>
            </section>

            <section className='p-2 flex items-center'>
                <label className='mr-2'>Site Link:</label>
                <input type='text' className='grow px-2 py-1 outline-none border-2 border-gray-400 rounded-md'/>
                <button className='px-2 py-1 bg-customBlue ml-2 text-white hover:bg-blue-500 rounded-md'>Check</button>
            </section>

            <section className='p-2 flex'>
                <section className='w-1/2 flex mr-2 items-center'>
                    <label className='mr-2'>Original Price:</label>
                    <input type='text' className='grow px-2 py-1 outline-none border-2 border-gray-400 rounded-md'/>
                </section>
                <section className='w-1/2 flex ml-2 items-center'>
                    <label className='mr-2'>Discounteds Price:</label>
                    <input type='text' className='grow px-2 py-1 outline-none border-2 border-gray-400 rounded-md'/>
                </section>
            </section>

            <section className='p-2 flex items-center'>
                <label className='mr-2'>Site Title:</label>
                <input type='text' className='grow px-2 py-1 outline-none border-2 border-gray-400 rounded-md' />
            </section>

            <section className='p-2 flex items-center'>
                <label className='mr-2'>Coupon:</label>
                <input type='text' className='grow px-2 py-1 outline-none border-2 border-gray-400 rounded-md' />
            </section>

            <section className='p-2 flex items-start'>
                <label className='mr-2 mt-4' >Description:</label>
                <textarea type='text'
                rows={5}
                className=" resize-none  rounded-md outline-none  p-2 grow border-2 border-gray-400 "
                />
            </section>
            <section className='flex justify-end mt-2'>
                <button className='px-6 py-2 bg-customBlue text-white hover:bg-blue-500 rounded-md'>Save</button>
            </section>

        </div>
  )
}

export default ProductLinkCard