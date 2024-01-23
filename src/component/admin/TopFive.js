import React from 'react'
import Star from "../../imges/Star.svg"

const TopFive = () => {
    return (
        <div className='w-full h-full bg-red-400 relative overflow-hidden px-8'>
            <h2 className='my-5 text-2xl font-semibold'>Top 5 Products</h2>
            <div className='w-full h-[300px] bg-green-400 grid grid-cols-5 gap-2'>

                <div className='flex flex-col h-full bg-yellow-300 justify-between relative'>
                    <h3 className='w-full flex justify-center text-2xl'>#1</h3>
                    <div className='flex-grow w-full bg-blue-400 rounded-lg flex flex-col px-6 py-1'>
                        <div className="bg-cover bg-center  h-2/3 border-2 rounded-md"
                            style={{ backgroundImage: `url(/1703260521335.jpg)` }} />
                        <p className='flex w-full justify-center'>Lorem Ipsum</p>
                        <div className='flex'>
                        <img src={Star}  className=" h-6 mr-2" />
                        <img src={Star}  className=" h-6 mr-2" />
                        <img src={Star}  className=" h-6 mr-2" />
                        <img src={Star}  className=" h-6 mr-2" />
                        <img src={Star}  className=" h-6 mr-2" />
                        </div>
                    </div>
                    

                </div>

                <div className='flex flex-col h-full bg-yellow-300 justify-between'>
                    <h3 className='w-full flex justify-center text-2xl'>#1</h3>
                    <div className='flex-grow w-full bg-blue-400 rounded-lg flex flex-col px-6 py-1'>
                        <div className="bg-cover bg-center  h-2/3 border-2 rounded-md"
                            style={{ backgroundImage: `url(/1703260521335.jpg)` }} />
                        <p className='flex w-full justify-center'>Lorem Ipsum</p>
                        <div className='flex'>
                        <img src={Star}  className=" h-6 mr-2" />
                        <img src={Star}  className=" h-6 mr-2" />
                        <img src={Star}  className=" h-6 mr-2" />
                        <img src={Star}  className=" h-6 mr-2" />
                        <img src={Star}  className=" h-6 mr-2" />
                        </div>
                    </div>
                    

                </div>

                <div className='flex flex-col h-full bg-yellow-300 justify-between'>
                    <h3 className='w-full flex justify-center text-2xl'>#1</h3>
                    <div className='flex-grow w-full bg-blue-400 rounded-lg flex flex-col px-6 py-1'>
                        <div className="bg-cover bg-center  h-2/3 border-2 rounded-md"
                            style={{ backgroundImage: `url(/1703260521335.jpg)` }} />
                        <p className='flex w-full justify-center'>Lorem Ipsum</p>
                        <div className='flex'>
                        <img src={Star}  className=" h-6 mr-2" />
                        <img src={Star}  className=" h-6 mr-2" />
                        <img src={Star}  className=" h-6 mr-2" />
                        <img src={Star}  className=" h-6 mr-2" />
                        <img src={Star}  className=" h-6 mr-2" />
                        </div>
                    </div>
                    

                </div>

                <div className='flex flex-col h-full bg-yellow-300 justify-between'>
                    <h3 className='w-full flex justify-center text-2xl'>#1</h3>
                    <div className='flex-grow w-full bg-blue-400 rounded-lg flex flex-col px-6 py-1'>
                        <div className="bg-cover bg-center  h-2/3 border-2 rounded-md"
                            style={{ backgroundImage: `url(/1703260521335.jpg)` }} />
                        <p className='flex w-full justify-center'>Lorem Ipsum</p>
                        <div className='flex'>
                        <img src={Star}  className=" h-6 mr-2" />
                        <img src={Star}  className=" h-6 mr-2" />
                        <img src={Star}  className=" h-6 mr-2" />
                        <img src={Star}  className=" h-6 mr-2" />
                        <img src={Star}  className=" h-6 mr-2" />
                        </div>
                    </div>
                    

                </div>

                <div className='flex flex-col h-full bg-yellow-300 justify-between'>
                    <h3 className='w-full flex justify-center text-2xl'>#1</h3>
                    <div className='flex-grow w-full bg-blue-400 rounded-lg flex flex-col px-6 py-1'>
                        <div className="bg-cover bg-center  h-2/3 border-2 rounded-md"
                            style={{ backgroundImage: `url(/1703260521335.jpg)` }} />
                        <p className='flex w-full justify-center'>Lorem Ipsum</p>
                        <div className='flex'>
                        <img src={Star}  className=" h-6 mr-2" />
                        <img src={Star}  className=" h-6 mr-2" />
                        <img src={Star}  className=" h-6 mr-2" />
                        <img src={Star}  className=" h-6 mr-2" />
                        <img src={Star}  className=" h-6 mr-2" />
                        </div>
                    </div>
                    

                </div>

            </div>

        </div>
    )
}

export default TopFive