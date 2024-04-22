import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../api/Api';
// const NoneEditableEditor = React.lazy(() => import('../Editor/NonEditableEditor'));
// import NoneEditableEditor from '../Editor/NonEditableEditor'

const ReviewText = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
    const { id } = useParams()
    const [data, setData] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [review, setReview] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const result = await Api.get(`/api/products/review/${id}`)
                if (result.data[0] && result.data[0].review) {
                    setReview(result.data[0].review)
                }
                setData(result.data[0])
                setIsLoading(false)
                console.log("abc")
            } catch (error) {
                setIsLoading(false)
                console.log(error)
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 800);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    if (data) {

        return (
            <>

                <div className='pt-9 lg:pb-24 pb-4 px-4' id="review">
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
                            <div className='hidden' dangerouslySetInnerHTML={{ __html: data.seoKeys }} />
                            <div className='py-10 px-2 w-full' dangerouslySetInnerHTML={{ __html: review }} />
                        </>
                    }
                </div>


            </>

        )
    }
}

export default ReviewText
