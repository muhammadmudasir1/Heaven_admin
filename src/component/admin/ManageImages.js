import React, { useState, useCallback, useEffect } from 'react'
import { RxCross2 } from "react-icons/rx";
import { useDropzone } from 'react-dropzone'
import { FaPlus } from 'react-icons/fa6';
import Api from '../../api/Api';
import { useAuth } from '../../context/AuthContext';
import useRefresh from '../../hooks/useRefresh';
import { useNavigate } from 'react-router-dom';

const ManageImages = ({ productId }) => {
    const [images, setImages] = useState([])
    const [addImages, setAddImages] = useState([])
    const [apiCalls,setApiCalls]=useState([])
    const { auth, setAuth } = useAuth()
    const refresh = useRefresh()
    const navigate = useNavigate()


    const getImages = async (id) => {
        try {
            const { data } = await Api.get(`/api/products/getImages/${id}`)
            data.sort((a, b) => {
                if (a.role > b.role) {
                    return 1
                }
                if (a.role < b.role) {
                    return -1
                }
                return 0
            })
            // console.log(data)
            setImages(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getImages(productId)
    }, [productId])


    const removeImage = async (ImageId) => {
        const config = {
            headers: {
                Authorization: `Bearer ${auth.accessToken}`
            }
        }
        try {
            await Api.patch(`/api/products/removeimage/${productId}`, { "imageId": ImageId }, config)
            await getImages(productId)

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
                    await Api.patch(`/api/products/removeimage/${productId}`, { "imageId": ImageId }, config)
                    await getImages(productId)

                } catch (error) {
                    console.log(error)
                }
            }
            else {
                setAuth(null)
                navigate('/login')
            }
        }
    }


    const setToThumbnail = async (ImageId) => {
        const config = {
            headers: {
                Authorization: `Bearer ${auth.accessToken}`
            }
        }
        try {
            await Api.patch(`/api/products/changeThumbnail/${productId}`, { "imageId": ImageId }, config)
            await getImages(productId)
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
                    await Api.patch(`/api/products/changeThumbnail/${productId}`, { "imageId": ImageId }, config)
                    await getImages(productId)

                } catch (error) {
                    console.log(error)
                }
            }
            else {
                setAuth(null)
                navigate('/login')
            }
        }
    }

    const uploadImages = async () => {
        const config = {
            headers: {
                Authorization: `Bearer ${auth.accessToken}`
            }
        }
        try {
            const fd = new FormData()
            addImages.forEach((image, index) => {
                fd.append("images", image)
            })
            await Api.patch(`/api/products/addImages/${productId}`, fd, config)
            setAddImages([])
            await getImages(productId)
            await getImages(productId)
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
                    const fd = new FormData()
                    addImages.forEach((image, index) => {
                        fd.append("images", image)
                    })
                    await Api.patch(`/api/products/addImages/${productId}`, fd, config)
                    setAddImages([])
                    await getImages(productId)

                } catch (error) {
                    console.log(error)
                }
            }
            else {
                setAuth(null)
                navigate('/login')
            }
        }
    }


    const AddToImage = () => {

        const request = {
            "type": "addImage",
            "data": {
                "imageIndex": addImages.length
            }
        }
        setApiCalls((prev) => {
            return [...prev, request]
        })
    }

    const onDropImages = useCallback((acceptedFiles) => {
        const NewFiles = acceptedFiles.map(file => {
            return Object.assign(file, {
                preview: URL.createObjectURL(file)
            });
        });
        setAddImages(prevImages => [...prevImages, ...NewFiles]);
        AddToImage()
    }, [addImages]);


    const { acceptedFiles: acceptedFilesImages,
        getInputProps: getInputPropsImages,
        getRootProps: getRootPropsImages
    } = useDropzone({
        onDrop: onDropImages,
        accept: {
            'image/jpeg': [],
            'image/png': [],
            'image/webp': []
        }
    })

    const handleRemovImageFromAddImage = (index) => {
        setAddImages((prevImages) => {
            const tempOne = prevImages.slice(0, index)
            const tempTwo = prevImages.slice(index + 1)
            return [...tempOne, ...tempTwo]
        })
    }
    const addAltText=async (imageId,altText) =>{
        const config = {
            headers: {
                Authorization: `Bearer ${auth.accessToken}`
            }
        }
        try {
            await Api.patch(`/api/products/addAltText/${imageId}`,{
                "altText":altText
            },config)
            await getImages(productId)
        } catch(error){
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
                    await Api.patch(`/api/products/addAltText/${imageId}`,{
                        "altText":altText
                    },config)
                    await getImages(productId)

                } catch (error) {
                    console.log(error)
                }
            }
            else {
                setAuth(null)
                navigate('/login')
            }
        }
    }



    return (
        <div className='grid grid-cols-3 2xl:grid-cols-4 gap-2 p-3'>

            <div className=''>
                {
                    images.length > 0 &&
                    <div
                        className='bg-cover b-center h-56 2xl:h-64 relative  group flex flex-col-reverse rounded-md overflow-hidden shadow-2xl border-[1px] border-customBlue '
                        style={{ backgroundImage: `url(/api/${images[0].path})` }}>
                        <div className='w-full h-1/6 bg-customBlue text-center p-1 z-[999]'>
                            <p className='text-white'>Thumbnail</p>
                        </div>
                        <button className='hidden group-hover:block bg-gray-400 text-center p-1 z-[999] hover:bg-gray-600 text-white'
                        onClick={(e)=>{
                            const altText=prompt(`Set Alt-Text: ${images[0].altText?"Previous Alt Text is '"+ images[0].altText+"'":""}`)
                            if(altText){
                                addAltText(images[0].id,altText)
                            }
                        }}
                        >Set Alt-Text</button>
                    </div>
                }

            </div>

            <div className=' col-span-2 2xl:col-span-3 '>
                <div className='grid grid-cols-4 2xl:grid-cols-5 gap-2 '>
                    {
                        images.slice(1).map((image, index) => {
                            if (image.role === 2) {
                                return <div className='relative group rounded-md overflow-hidden shadow-md '>
                                    <div
                                        className='bg-cover b-center h-28 2xl:h-32 relative flex flex-col-reverse'
                                        style={{ backgroundImage: `url(/api/${image.path})` }}>
                                        <div className='absolute inset-0 bg-black opacity-0 transition-opacity group-hover:opacity-40'></div>
                                        <div
                                            className='w-full h-1/5 hidden group-hover:block bg-gray-400 text-center p-1 hover:bg-customBlue z-[999] cursor-pointer'
                                            onClick={(e) => {
                                                setToThumbnail(image.id)
                                            }}
                                        >
                                            <p
                                                className='text-black hidden group-hover:flex justify-center items-center hover:text-white h-full text-sm'>Set to Thumbnail</p>
                                        </div>
                                        <RxCross2
                                            className='absolute top-1 right-1 bg-customBlue rounded-full text-white p-[1px] hover:bg-sky-500 hover:text-red-500 cursor-pointer'
                                            onClick={(e) => {
                                                removeImage(image.id)
                                            }}
                                        />
                                            <button className='hidden group-hover:block bg-gray-400 text-center p-1 z-[999] hover:bg-customBlue text-white'
                                            onClick={(e)=>{
                                                const altText=prompt(`Set Alt-Text: ${image.altText?"Previous Alt Text is '"+ image.altText+"'":""}`)
                                                if(altText){
                                                    addAltText(image.id,altText)
                                                }
                                            }}
                                            >Set Alt-Text</button>
                                    </div>
                                </div>
                            }




                        })
                    }

                </div>
            </div>

            <div className=' col-span-3 2xl:col-span-4 grid grid-cols-6 mt-4 gap-2'>
                {
                    addImages.map((image, index) => {
                        return <div className='relative group rounded-md overflow-hidden shadow-md '>
                            <div
                                className='bg-cover b-center h-32 2xl:h-44 relative flex flex-col-reverse'
                                style={{ backgroundImage: `url(${image.preview})` }}
                            >
                                <div className='absolute inset-0 bg-black opacity-0 transition-opacity group-hover:opacity-40'></div>
                                <RxCross2 className='absolute top-1 right-1 bg-customBlue rounded-full text-white p-[1px] hover:bg-sky-500 hover:text-red-500 cursor-pointer'
                                    onClick={(e) => handleRemovImageFromAddImage(index)}
                                />
                            </div>



                        </div>
                    })
                }

                <div className=' '>
                    <div {...getRootPropsImages(
                        {
                            className: "relative group rounded-md overflow-hidden shadow-md "
                        }
                    )}>
                        <input {...getInputPropsImages()}
                        />
                        <div
                            className='h-32 2xl:h-44 relative flex flex-col-reverse border-4 border-customBlue items-center'>
                            <div className='absolute inset-0 bg-black opacity-40 transition-opacity group-hover:opacity-60'></div>
                            <div className='w-full h-1/5 bg-customBlue text-center p-1 z-[999]'>
                                <p className='text-white '>Add Image</p>
                            </div>
                            <FaPlus className=' text-6xl grow text-customBlue z-[999]' />

                        </div>
                    </div>
                </div>

            </div>
            {
                addImages.length > 0 &&
                <div className=' col-span-3 2xl:col-span-4 flex justify-center items-center mt-3'>
                    <button
                        className='bg-customBlue hover:bg-sky-500 text-white px-4 py-2 rounded-md'
                        onClick={(e) => {
                            uploadImages()
                        }}
                    >
                        Upload Image</button>
                </div>
            }
        </div>
    )
}

export default ManageImages