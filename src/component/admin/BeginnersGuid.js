import plus from "../../imges/plus.svg"
import { Link } from "react-router-dom"
import React, { useEffect, useState } from 'react'
import NewsCard from "./NewsCard"
import Api from "../../api/Api"

const BeginnersGuid = () => {
    const [beginnersGuid,setBeginnersGuid]=useState([])
    useEffect(()=>{
        const fetchData=async ()=>{
            try {
                const response=await Api.get('/api/beginnersGuid')
                // console.log(response)
                setBeginnersGuid(response.data)  
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    },[])


    return (
        <div className='w-full h-full  relative overflow-hidden p-6'>
            <h2 className='w-full text-2xl font-semibold'>Beginners Guid</h2>
            <div className=' w-11/12 h-[80vh] mx-auto mt-3 overflow-x-hidden overflow-y-auto p-2'>
                {beginnersGuid.map((beginnersGuidData)=>{
                    return <NewsCard data={beginnersGuidData}/>
                })

                
                }
                
                {/* <div className='w-full h-[250px] bg-green-400 rounded-md mt-1'>
                </div> */}
            </div>
            <Link to={'/dashboard/addBeginnersGuid'} className=" 2xl:h-16 2xl:w-16 xl:h-12 xl:w-12 bg-customBlue rounded-full flex justify-center items-center fixed bottom-4 right-6">
                <img src={plus} className="2xl:h-6 xl:h-4" />
            </Link>
        </div>
    )
}

export default BeginnersGuid