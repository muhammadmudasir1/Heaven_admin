import React from 'react'
import Star from "../../imges/Star.svg"
import { LiaAngleRightSolid,LiaAngleLeftSolid  } from "react-icons/lia";

const TopFiveCard = ({data,index}) => {
    return (
        <div className='flex flex-col h-full justify-between relative bg-gray-100 rounded-lg p-2 shadow-md'>
            <h3 className='w-full flex justify-center text-2xl text-gray-500'>#{index+1}</h3>
            <div className='flex-grow w-full rounded-lg flex flex-col  py-1'>
                <div className='h-2/3 px-4'>
                <div className="bg-cover bg-center h-full  border-2 rounded-md"
                    style={{ backgroundImage: `url(/1703260521335.jpg)` }} />

                </div>
                <p className='flex w-full justify-center'>Lorem Ipsum</p>
                <div className='flex justify-between mt-2'>
                    <img src={Star} className=" 2xl:h-8 h-6 mr-2" />
                    <img src={Star} className=" 2xl:h-8 h-6 mr-2" />
                    <img src={Star} className=" 2xl:h-8 h-6 mr-2" />
                    <img src={Star} className=" 2xl:h-8 h-6 mr-2" />
                    <img src={Star} className=" 2xl:h-8 h-6 mr-2" />
                </div>
            </div>
            {
                index==0?
                <div className=' absolute top-1/2 flex justify-end w-full'>
                <button className='p-2 bg-customBlue rounded-full text-white text-2xl hover:bg-sky-500'><LiaAngleRightSolid/></button>
                </div>
                :index==4?
                <div className=' absolute top-1/2 flex justify-start w-full'>
                <button className='p-2 bg-customBlue rounded-full text-white text-2xl hover:bg-sky-500'><LiaAngleLeftSolid/></button>
                </div>
                :
                <div className=' absolute top-1/2 flex justify-between w-full'>
                <button className='p-2 bg-customBlue rounded-full text-white text-2xl hover:bg-sky-500'><LiaAngleLeftSolid/></button>
                <button className='p-2 bg-customBlue rounded-full text-white text-2xl hover:bg-sky-500'><LiaAngleRightSolid/></button>
                </div>
            }
            
        </div>
    )
}

export default TopFiveCard