import React from 'react'
import { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { ImCross } from "react-icons/im";
import TextEditor from "./TextEditor"
import Api from "../../api/Api"
import { useNavigate, useParams } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import { FaCheck } from "react-icons/fa";


const AddNews = () => {
    const [images, setImages] = useState([])
    const [blog, setBlog] = useState('')
    const [title, setTitle] = useState('')
    const [isUpdated, setIsUpdated] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [imageFromApi, setImageFromApi] = useState(false)
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Api.get(`api/news/${id}`)
                setTitle(response.data.Title)
                setBlog(response.data.body)
                if (response.data.image) {
                    setImages([response.data.image])
                    setImageFromApi(true)
                }
            } catch (error) {
                console.log(error)
            }
        }
        if (id) {
            setIsLoading(true)
            fetchData()
            setIsLoading(false)
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

    const handleRemoveImage = async () => {
        setImages([])

        if (imageFromApi) {
            try {
                setIsLoading(true)
                await Api.delete(`api/news/image/${id}`)
                setImageFromApi(false)
                setIsLoading(false)

            } catch (error) {
                console.log(error)
            }
        }
    }

    const SaveNews = async () => {
        const fd = new FormData()
        if (title && blog) {

            try {
                fd.append("image", images[0])
                fd.append("body", blog)
                fd.append("Title", title)
                // console.log(fd)
                setIsLoading(true)
                await Api.post('/api/news', fd)
                setIsLoading(false)
                navigate('/dashboard/news')
            } catch (error) {
                console.log(error)
                setIsLoading(false)
            }
        }
        else {
            console.log("All title & body first")
        }
    }

    const updateNews = async () => {
        const fd = new FormData()
        if (title && blog) {
            try {
                if (!imageFromApi) {
                    fd.append("image", images[0])
                }
                fd.append("body", blog)
                fd.append("Title", title)
                setIsLoading(true)
                await Api.patch(`/api/news/${id}`, fd)
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
            console.log("All title & body first")
        }
    }





    return (
        <div className='w-full h-full  overflow-hidden p-6 relative'>
            <h2 className='w-full text-2xl font-semibold'>Add News</h2>
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


            <section className='mt-2'>
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
                                            className='w-full h-32 border-gray-400 border-[1px]  p-0.5 rounded-md shadow-sm shadow-gray-400  overflow-y-scroll overflow-x-hidden '
                                        >
                                            {
                                                imageFromApi ?
                                                    <img
                                                        src={`/${picture}`}
                                                        key={index}
                                                        className='w-full'
                                                    />
                                                    :
                                                    <img
                                                        src={picture.preview}
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
            <section className='w-full mt-2 h-[250px] overflow-y-auto'>
                <label>Body:</label>
                <TextEditor text={blog} setText={setBlog} className="h-full" />
            </section>

            <div className='w-full flex justify-end pt-2'>
                {
                    id ?
                        <button
                            className=' bg-customBlue px-4 py-2 text-white hover:bg-sky-400 rounded-md'
                            onClick={(e) => {
                                updateNews()
                            }}
                        >Update</button>
                        :
                        <button
                            className=' bg-customBlue px-4 py-2 text-white hover:bg-sky-400 rounded-md'
                            onClick={(e) => {
                                SaveNews()
                            }}
                        >Save</button>

                }
            </div>
            {
                isLoading&&
                <div className='w-full h-full absolute left-0 top-0 flex justify-center items-center z-[9999]'>
                    <div className='w-full h-full absolute top-0  bg-gray-200 opacity-60' />
                <ClipLoader
                size={75}
                loading={isLoading}
                color={"#026CC4"}
                />

                </div>   
            }

            {
                isUpdated &&
                <div className='w-full absolute left-0 top-0 flex justify-center items-center bg-green-600 z-[9999]'>
                    <FaCheck className='text-white text-lg' />
                    <p className='p-4 text-white text-lg'>Updated</p>
                </div>
            }
        </div>
    )
}

export default AddNews