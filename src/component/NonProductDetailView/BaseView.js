import React, { useEffect, useState } from 'react'
import Tabbar from '../Landingpage/Tabbar'
import NonEditableEditor from '../Editor/NonEditableEditor'
import { Helmet } from 'react-helmet'

const BaseView = ({ data, isLoading }) => {
    const [body,setBody]=useState("")
    useEffect(() => {
        console.log(data)
        if (data.body) {
            const jsonData = JSON.parse(data.body)
            jsonData.root.children.forEach(element => {
                if (element.type = "paragraph") {
                    element.children.forEach((item) => {
                        if (item.type == "image") {
                            const itemWidth = item.width
                            const itemHeight = item.height
                            const newWidth = window.screen.availWidth - 80
                            const ratio = itemWidth / itemHeight
                            const newHeight = newWidth / ratio
                            console.log(ratio)
                            console.log(window.screen.availWidth)
                            item.width = newWidth
                            item.height = newHeight
                        }
                    })
                }
            })
            const strReview = JSON.stringify(jsonData)
            setBody(strReview)
        }
        console.log(data)
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
                            
                            <NonEditableEditor text={body} />
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