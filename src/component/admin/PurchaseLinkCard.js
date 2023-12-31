import React from 'react'

const PurchaseLinkCard = ({data}) => {
    const sites=[
    "Amazon",
    "Ebay",
    "GeeksBuying",
    "TomTop",
    "3DJake",
    "Ortur",
    "AnyCubic",
    "Artillery3D",
    "BambuLab",
    "Creality",
    "Elegoo",
    "Revopoint",
    "Sculpfun",
    "TwoTrees",
    "QidiTech"]
    return (
        
        <div className='w-full  bg-gray-100 shadow-lg px-4 rounded-lg'>
            <div className='py-2 flex justify-between'>
                <p className='border-b-4 border-customBlue'>{data.title}</p>
                <div>
                    <button className='px-4 py-2 bg-customBlue rounded-lg text-white hover:bg-sky-500'>Edit</button>
                    <button className='px-4 py-2 bg-red-500 hover:bg-red-400 rounded-lg text-white ml-2'>Delete</button>
                </div>
            </div>
            <div className='grid grid-cols-7'>
                <div className=' col-span-6 border-r-2 mb-4'>
                    <h3 className=' text-2xl font-bold'>{sites[data.siteType-1]}</h3>
                    <p>{data.discription}</p>

                    {
                        data.coupon?
                        <p className='pt-4'>Coupon: <span className='font-bold text-lg'>{data.coupon}</span></p>
                        :null
                    }

                </div>
                <div className='flex flex-col justify-between'>

                    <div className='flex flex-col items-end'>
                        <p className='text-lg mr-4 line-through'>100 $</p>
                        <p className='text-3xl font-bold mr-2 text-customBlue'>200$</p>
                    </div>

                    <div className='w-full flex pl-4 mb-4'>

                        <a href={data.link} className='mt-4 py-1 grow rounded-lg text-center text-lg text-white bg-customBlue hover:bg-sky-500'>
                            Visit</a>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default PurchaseLinkCard