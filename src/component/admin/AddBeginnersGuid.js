import React from 'react'
import { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { ImCross } from "react-icons/im";
import Api from "../../api/Api"
import { useNavigate, useParams } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import { FaCheck } from "react-icons/fa";
import { useAuth } from '../../context/AuthContext';
import useRefresh from '../../hooks/useRefresh';
import Editor from '../EditorJodit'


const AddBeginnersGuid = () => {
    const { auth, setAuth } = useAuth()
    const refresh = useRefresh()
    const [images, setImages] = useState([])
    const [blog, setBlog] = useState('')
    const [description,setDescription]=useState('')
    const [title, setTitle] = useState('')
    const [isUpdated, setIsUpdated] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [imageFromApi, setImageFromApi] = useState(false)
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const response = await Api.get(`api/BeginnersGuid/${id}`)
                console.log(response.data)
                setTitle(response.data.Title)
                setBlog(response.data.body)
                setDescription(response.data.description)
                if (response.data.image) {
                    setImages([response.data.image])
                    setImageFromApi(true)
                }
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
                console.log(error)
            }
        }
        if (id) {
            // setIsLoading(true)
            fetchData()
            // setIsLoading(false)
        }

    }, [id])

    const onDropImages = useCallback((acceptedFiles) => {
        const NewFiles = acceptedFiles.map(file => {
            return Object.assign(file, {
                preview: URL.createObjectURL(file)
            });
        });
        setImages(prevImages => [...prevImages, ...NewFiles]);
    }, []);

    const { acceptedFiles: acceptedFilesImages,
        getInputProps: getInputPropsImages,
        getRootProps: getRootPropsImages
    } = useDropzone({
        onDrop: onDropImages,
        maxFiles: 1,
        accept: {
            'image/jpeg': [],
            'image/png': [],
            'image/webp': []
        }
    })
    // beginnersguid
    const handleRemoveImage = async () => {
        setImages([])

        if (imageFromApi) {
            const config = {
                headers: {
                    Authorization: `Bearer ${auth.accessToken}`
                }
            }
            try {
                setIsLoading(true)
                await Api.delete(`api/beginnersguid/image/${id}`, config)
                setImageFromApi(false)
                setIsLoading(false)

            } catch (error) {
                console.log(error)
                if (error.response?.status === 403) {
                    const accessToken = await refresh()
                    const config = {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                    try {
                        setIsLoading(true)
                        await Api.delete(`api/news/beginnersguid/${id}`, config)
                        setImageFromApi(false)
                        setIsLoading(false)

                    } catch (error) {
                        console.log(error)
                        setIsLoading(false)
                    }
                }
            }
        }
    }

    const SaveBeginnersGuid = async () => {
        const fd = new FormData()
        if (title && blog) {
            const config = {
                headers: {
                    Authorization: `Bearer ${auth.accessToken}`
                }
            }
            try {
                fd.append("image", images[0])
                fd.append("body", blog)
                fd.append("Title", title)
                fd.append("description",description)
                setIsLoading(true)
                await Api.post('/api/beginnersguid', fd, config)
                setIsLoading(false)
                navigate('/dashboard/beginnersguid')
            } catch (error) {
                console.log(error)
                if (error.response?.status === 403) {
                    const accessToken = await refresh()
                    const config = {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                    try {
                        fd.append("image", images[0])
                        fd.append("body", blog)
                        fd.append("Title", title)
                        fd.append("description",description)
                        setIsLoading(true)
                        await Api.post('/api/beginnersguid', fd,config)
                        setIsLoading(false)
                        navigate('/dashboard/beginnersguid')

                    } catch (error) {
                        console.log(error)
                        setIsLoading(false)
                    }
                }
            }
        }
        else {
            console.log("All title & body first")
        }
    }

    const updateBeginnersGuid = async () => {
        const fd = new FormData()
        if (title && blog) {
            const config = {
                headers: {
                    Authorization: `Bearer ${auth.accessToken}`
                }
            }
            try {
                if (!imageFromApi) {
                    fd.append("image", images[0])
                }
                fd.append("body", blog)
                fd.append("Title", title)
                fd.append("description",description)
                setIsLoading(true)
                await Api.patch(`/api/beginnersGuid/${id}`, fd, config)
                setIsLoading(false)
                setIsUpdated(true)
                setTimeout(() => {
                    setIsUpdated(false)
                }, 5000)
            } catch (error) {
                console.log(error)
                if (error.response?.status === 403) {
                    const accessToken = await refresh()
                    const config = {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                    try {
                        if (!imageFromApi) {
                            fd.append("image", images[0])
                        }
                        fd.append("body", blog)
                        fd.append("Title", title)
                        fd.append("description",description)
                        setIsLoading(true)
                        await Api.patch(`/api/beginnersGuid/${id}`, fd, config)
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
            }
        }
        else {
            console.log("All title & body first")
        }
    }

    return (
        <>
         {
            isLoading &&
            <div className='h-full absolute w-full flex justify-center items-center z-[9999]'>
                <div className='w-full h-full absolute top-0  bg-gray-200 opacity-60' />
                <ClipLoader
                    size={75}
                    loading={isLoading}
                    color={"#026CC4"}
                />

            </div>
        } 
        {
        !isLoading &&
        <div className='h-full flex flex-col p-6 '>
            <div className='flex items-center'>

            <h2 className='text-2xl font-semibold'>Add Tutorial</h2>
            <span className=' mx-10'>
            {/* {
                id?
                <button className='px-4 py-2 bg-customBlue hover:bg-sky-500 rounded-md text-white'>Save</button>
            } */}
            {
                id ?
                    <button
                        className=' px-4 py-2 bg-customBlue hover:bg-sky-500 rounded-md text-white'
                        onClick={(e) => {
                            updateBeginnersGuid()
                        }}
                    >Update</button>
                    :
                    <button
                        className=' px-4 py-2 bg-customBlue hover:bg-sky-500 rounded-md text-white'
                        onClick={(e) => {
                            SaveBeginnersGuid()
                        }}
                    >Save</button>

            }
            </span>
            </div>
            <div className='w-full flex-grow  overflow-y-auto'>

            
            <section className='mt-2'>
                <label>Title: </label>
                <input
                    className='w-full rounded-md p-2 outline-none border-[1px] border-gray-400 '
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                />
            </section>

            <div className='w-full mt-2 flex'>

            <section className='w-1/2 pr-2'>
                <label>Title Image: </label>
                {
                    images && !images.length > 0 &&
                    <div {...getRootPropsImages(
                        {
                            className: `text-center bg-gray-200 h-14 flex items-center justify-center rounded-md mb-2 hover:bg-gray-100 `
                        }
                    )}>
                        <input {...getInputPropsImages()}
                        />
                        <p>Drag or Click to select a Picture  </p>

                    </div>
                }
                {
                    images.length > 0 ?
                        <div className='w-full'>
                            {
                                images?.map((picture, index) => {
                                    return <div className='relative'>

                                        <div
                                            className='w-full h-52 border-gray-400 border-[1px]  p-0.5 rounded-md shadow-sm shadow-gray-400  overflow-y-scroll overflow-x-hidden '
                                        >
                                            {
                                                imageFromApi ?
                                                    <img
                                                        src={`/api/${picture}`}
                                                        key={index}
                                                        className='w-full'
                                                    />
                                                    :
                                                    <img
                                                        src={`${picture.preview}`}
                                                        key={index}
                                                        className='w-full'
                                                    />

                                            }

                                        </div>
                                        <div className='absolute top-2 right-6 bg-customBlue rounded-full hover:bg-sky-500 cursor-pointer'
                                            onClick={(e) => {
                                                handleRemoveImage()
                                            }}
                                        >
                                            <ImCross className='m-2 text-white' />
                                        </div>
                                    </div>
                                })
                            }

                        </div>
                        : null
                }

            </section>
            <section className='w-1/2 pl-2 flex flex-col'>
            <label>Description: </label>
            <textarea 
            placeholder='Enter Discription'
            rows={7}
            className='resize-none  rounded-md outline-none p-3 border-[1px] border-gray-400'
            onChange={(e)=>{
                setDescription(e.target.value)
            }}
            value={description}
            />

            </section>
            </div>

            <section className=' mt-2 h-[480px] overflow-y-auto'>
                <label>Body:</label>
                <div className='w-full bg-red-400 overflow-x-auto'>

                <Editor text={blog} setText={setBlog}/>
                </div>
            </section>

            
            

            {
                isUpdated &&
                <div className='w-full absolute left-0 top-0 flex justify-center items-center bg-green-600 z-[9999]'>
                    <FaCheck className='text-white text-lg' />
                    <p className='p-4 text-white text-lg'>Updated</p>
                </div>
            }
            </div>
        </div>
        }
        </>
    )
}

export default AddBeginnersGuid