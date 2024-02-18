import React, { useEffect, useState } from 'react'
import Star from "../../imges/Star.svg"
import GrayStar from "../../imges/grayStar.svg"
import { LiaAngleRightSolid, LiaAngleLeftSolid } from "react-icons/lia";

const TopFiveCard = ({ data, index, up, down }) => {
    const [yellowStar, setYellowStar] = useState([]);
    const [grayStar, setGrayStar] = useState([]);
    const [thumbnail, setThumbnail] = useState("");

    useEffect(() => {
        if (data){

            setYellowStar(Array.from({ length: data.overall_rating }, (_, index) => index + 1));
            setGrayStar(Array.from({ length: 5 - data.overall_rating }, (_, index) => index + 1));
        }
    }, [data]);

    useEffect(() => {
        if (data && data.ProductImages && data.ProductImages.length > 0) {
            setThumbnail(data.ProductImages[0].path);
        }
    }, [data]);

    return (
        <div className='flex flex-col h-full justify-between relative bg-gray-100 rounded-lg p-2 shadow-md'>
        {
            data?
            <>
            
            <h3 className='w-full flex justify-center text-2xl text-gray-500'>#{index + 1}</h3>
            <div className='flex-grow w-full rounded-lg flex flex-col  py-1'>
                <div className='h-2/3 px-4'>
                    <div className="bg-cover bg-center h-full  border-2 rounded-md"
                        style={{ backgroundImage: `url(/api/${thumbnail})` }} />

                </div>
                <p className='flex w-full justify-center'>{data.product_name}</p>
                <div className='flex justify-between mt-2'>
                    {
                        yellowStar && yellowStar.map((ele, index) => {
                            return <img src={Star} key={index} className="2xl:h-8 h-6 mr-2" />
                        })
                    }
                    {
                        grayStar && grayStar.map((ele, index) => {
                            return <img src={GrayStar} key={index} className="2xl:h-8 h-6 mr-2" />
                        })
                    }
                </div>
            </div>
            
            {
            index == 0 ?
                <div className=' absolute top-1/2 flex justify-end w-full'>
                        <button className='p-2 bg-customBlue rounded-full text-white text-2xl hover:bg-sky-500'
                            onClick={(e) => {
                                down(index)
                            }}
                        ><LiaAngleRightSolid /></button>
                </div>
            : index == 4 ?
                <div className=' absolute top-1/2 flex justify-start w-full'>
                            <button className='p-2 bg-customBlue rounded-full text-white text-2xl hover:bg-sky-500'
                                onClick={(e) => {
                                    up(index)
                                }}
                            ><LiaAngleLeftSolid /></button>
                </div>
            :<div className=' absolute top-1/2 flex justify-between w-full'>
                            <button className='p-2 bg-customBlue rounded-full text-white text-2xl hover:bg-sky-500'
                                onClick={(e) => {
                                    up(index)
                                }}><LiaAngleLeftSolid /></button>
                            <button className='p-2 bg-customBlue rounded-full text-white text-2xl hover:bg-sky-500'
                                onClick={(e) => {
                                    down(index)
                                }}
                            ><LiaAngleRightSolid /></button>
                </div>
            }
            </>
            :
            <h3>Product Is not Define</h3>

        }   
        </div>
    )
}

export default TopFiveCard