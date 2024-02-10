import React, { useEffect } from 'react';
import { useState } from 'react';
import TextEditor from './TextEditor';
import ListEditor from './ListEditor';
import Api from '../../api/Api';
import { useNavigate, useParams } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import { FaCheck } from "react-icons/fa";
import { useAuth } from '../../context/AuthContext';
import useRefresh from '../../hooks/useRefresh';



const AddReview = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [pros, setPros] = useState('')
    const [cons, setCons] = useState('')
    const [review, setReview] = useState('')
    const [seoKeys,setSeoKeys]=useState('')
    const [reviewId, setReviewId] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isUpdated, setIsUpdated] = useState(false)
    const { auth, setAuth } = useAuth()
    const refresh = useRefresh()

    useEffect(() => {
        try {
            const fetchData = async () => {
                const response = await Api.get(`/api/products/review/${id}`)
                if (response.data[0]) {
                    setPros(response.data[0].pros)
                    setCons(response.data[0].cons)
                    setReview(response.data[0].review)
                    setReviewId(response.data[0].id)
                    setSeoKeys(response.data[0].seoKeys)
                }
            }
            fetchData()
        } catch (error) {
            console.log(error)
        }
    }, [])



    const handleSave = async () => {
        const config = {
            headers: {
                Authorization: `Bearer ${auth.accessToken}`
            }
        }

        try {
            const data = { pros, cons, review,seoKeys }
            setIsLoading(true)
            await Api.post(`/api/products/review/${id}`, data, config)
            setIsLoading(false)
            navigate('/dashboard/product')

        } catch (error) {
            console.log(error)
            if (error.response?.status === 403) {
                const accessToken = refresh()
                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
                try {
                    const data = { pros, cons, review, seoKeys }
                    setIsLoading(true)
                    await Api.post(`/api/products/review/${id}`, data, config)
                    setIsLoading(false)
                    navigate('/dashboard/product')


                } catch (error) {
                    console.log(error)
                    setIsLoading(false)
                }
            }
            else {
                setAuth(null)
                navigate('/login')
            }
        }
    }

    const handleUpdate = async () => {
        const config = {
            headers: {
                Authorization: `Bearer ${auth.accessToken}`
            }
        }

        try {
            const data = { pros, cons, review, seoKeys }
            setIsLoading(true)
            await Api.patch(`/api/products/review/${id}`, data, config)
            setIsLoading(false)
            setIsUpdated(true)
            setTimeout(() => {
                setIsUpdated(false)
            }, 5000)
        } catch (error) {
            console.log(error)
            if (error.response?.status === 403) {
                const accessToken = refresh()
                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
                try {
                    const data = { pros, cons, review, seoKeys }
                    setIsLoading(true)
                    await Api.patch(`/api/products/review/${id}`, data, config)
                    setIsLoading(false)
                    setIsUpdated(true)
                    setTimeout(() => {
                        setIsUpdated(false)
                    }, 5000)
                } catch (error) {
                    console.log(error)
                    setIsLoading(false)
                }
            }
            else {
                setAuth(null)
                navigate('/login')
            }
        }
    }



    return (
        <div className=' w-full h-screen relative'>
            <div className='w-full h-4/5 overflow-x-hidden overflow-y-auto px-4'>

                <div className='w-full grid grid-cols-3 gap-2'>
                    <div className='py-2 flex flex-col h-full'>
                        <h2 className='w-full mb-2'>Pros:</h2>
                        <div className='w-full h-40 mb-6 '>
                            <ListEditor text={pros} setText={setPros} />
                        </div>

                    </div>
                    <div className='py-2 flex flex-col h-full'>
                        <h2 className='w-full mb-2'>Cons:</h2>
                        <div className='w-full h-40 mb-6 '>
                            <ListEditor text={cons} setText={setCons} />
                        </div>

                    </div>
                    <div className='py-2 flex flex-col h-full'>
                        <h2 className='w-full mb-2'>SEO Keys:</h2>
                        <div className='w-full h-40 mb-6 '>
                            <textarea 
                            className='w-full h-full overflow-y-auto p-2 resize-none outline-none border-[1px] border-gray-300'
                            value={seoKeys}
                            onChange={(e)=>{
                                setSeoKeys(e.target.value)
                            }}
                            />
                        </div>

                    </div>

                </div>
                <div className='mt-5 '>
                    <TextEditor text={review} setText={setReview} />
                </div>

            </div>
            <div className='flex w-full justify-end px-8 mt-2'>
                {
                    reviewId ?
                        <button className='px-4 py-2 bg-customBlue hover:bg-sky-500 text-white rounded-md'
                            onClick={(e) => {
                                handleUpdate()
                            }}
                        >
                            Update
                        </button>
                        :
                        <button className='px-4 py-2 bg-customBlue hover:bg-sky-500 text-white rounded-md'
                            onClick={(e) => {
                                handleSave()
                            }}
                        >
                            Save
                        </button>

                }
            </div>
            {
                isLoading &&
                <div className='w-full h-full absolute top-0  flex justify-center items-center z-[9999]'>
                    <div className='w-full h-full absolute top-0 left-0 bg-gray-200 opacity-60' />
                    <ClipLoader
                        size={75}
                        loading={isLoading}
                        color={"#026CC4"}
                    />

                </div>
            }
            {
                isUpdated &&
                <div className='w-full absolute top-0 flex justify-center items-center bg-green-600 z-[9999]'>
                    <FaCheck className='text-white text-lg' />
                    <p className='p-4 text-white text-lg'>Updated</p>
                </div>
            }
        </div>

    )
}

export default AddReview