import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full h-full  relative overflow-hidden p-6'>
       <h2 className='w-full text-2xl font-semibold'>Newsletter</h2>
       <div className='w-full h-[80vh]'>
        <table className='w-full rounded-lg border-[1px] border-gray-400 mt-4'>
            <tr className='bg-gray-200'>
                <th className='py-2'>Email</th>
                <th className='py-2'>Submit Date</th>
                <th className='py-2'>Button</th>
            </tr>

            <tr>
                <td className='text-center py-1'>Abc@email.com</td>
                <td className='text-center py-1'>23/Mar/2024</td>
                <td className='text-center py-1'><button className='bg-customBlue text-white p-1 hover:bg-sky-500'>Copy</button></td>
            </tr>
        </table>

       </div>
       <div className='flex flex-row-reverse'>

       <button className=' bg-customBlue hover:bg-sky-400 text-white p-1'>Copy All Email</button>
       </div>
    </div>
  )
}

export default NewsLetter