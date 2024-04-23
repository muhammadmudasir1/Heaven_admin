import React, { useEffect, useState } from 'react'
import Tabbar from '../Landingpage/Tabbar'
import Editor from "../EditorJodit"
import { Helmet } from 'react-helmet'

const BaseView = ({ data, isLoading }) => {
    const [body,setBody]=useState("")
    useEffect(() => {
        if (data.body) {
            
            setBody(data.body)
        }
    }, [])
    return (
        <>
            <Tabbar />
            <div className='pt-9 pb-24 px-8 w-full'>
                {isLoading ?
                    <div className='py-10 bg-gray-100 w-full h-96 animate-pulse px-4'>
                        <div className='w-full h-12 bg-gray-200 rounded-2xl animate-pulse ' />
                        <div className='w-full mt-8'>
                            <div className='w-full h-6 mt-2 bg-gray-200 rounded-2xl animate-pulse ' />
                            <div className='w-full h-6 mt-2 bg-gray-200 rounded-2xl animate-pulse ' />
                            <div className='w-full h-6 mt-2 bg-gray-200 rounded-2xl animate-pulse ' />
                            <div className='w-full h-6 mt-2 bg-gray-200 rounded-2xl animate-pulse ' />
                            <div className='w-full h-6 mt-2 bg-gray-200 rounded-2xl animate-pulse ' />
                            <div className='w-full h-6 mt-2 bg-gray-200 rounded-2xl animate-pulse ' />
                            <div className='w-full h-6 mt-2 bg-gray-200 rounded-2xl animate-pulse ' />
                            <div className='w-full h-6 mt-2 bg-gray-200 rounded-2xl animate-pulse ' />
                        </div>
                    </div>
                    :
                    <>
                        {<>
                            <Helmet>
                                <title>{data.Title}</title>
                                <meta name='description' content={data.description} />
                                <link rel="canonical" href="https://www.3dheaven.de/ratgaber" />
                            </Helmet>
                            <img src={`/api/${data.image}`} className='w-full' />
                            <h1 className=' text-4xl py-2 font-bold'>{data.Title}</h1>
                            {body &&
                            <div className='py-10 px-2 w-full' dangerouslySetInnerHTML={{ __html: body }} />
                            }

                        </>

                        }
                    </>
                }
            </div>

        </>
    )
}

export default BaseView