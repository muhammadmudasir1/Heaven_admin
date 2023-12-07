import {useDropzone} from 'react-dropzone'
import { useCallback, useEffect, useState } from 'react'
import { ImCross } from "react-icons/im";

const AddProduct = () => {
    const [images,setImages]=useState([])
    const [scopeImaages,setScopeImages]=useState([])

    const onDropImages = useCallback((acceptedFiles) => {
        const NewFiles = acceptedFiles.map(file => {
            return Object.assign(file, {
                preview: URL.createObjectURL(file)
            });
        });
        setImages(prevImages => [...prevImages, ...NewFiles]);
    }, []);

    const onDropScopeImages = useCallback((acceptedFiles) => {
        const NewFiles = acceptedFiles.map(file => {
            return Object.assign(file, {
                preview: URL.createObjectURL(file)
            });
        });
        setScopeImages(prevImages => [...prevImages, ...NewFiles]);
    }, []);



    const handleRemoveImages=(index)=>{
        setImages((prevImages)=>{
            const tempOne=prevImages.slice(0,index)
            const tempTwo=prevImages.slice(index+1)
            return [...tempOne,...tempTwo]
        })
    }

    const handleRemoveScopeImages=(index)=>{
        setScopeImages((prevImages)=>{
            const tempOne=prevImages.slice(0,index)
            const tempTwo=prevImages.slice(index+1)
            return [...tempOne,...tempTwo]
        })
    }


    useEffect(()=>{
        console.log(images)
    },[images])

    const {acceptedFiles:acceptedFilesImages,
            getInputProps:getInputPropsImages,
            getRootProps:getRootPropsImages
            }=useDropzone({onDrop:onDropImages,accept: 'image/png, image/jpeg, image/webp'})
    const {acceptedFiles:acceptedFilesScopeImages,
        getInputProps:getInputPropsScopeImages,
        getRootProps:getRootPropsScopeImages
    }=useDropzone({onDrop:onDropScopeImages,accept: 'image/png, image/jpeg, image/webp'})


    return (
        <div className="w-full h-screen p-6 flex flex-col overflow-x-hidden overflow-scroll">

            <form className="">
                <div className="h-12 ">
                    <h1 className=" font-sans font-bold text-2xl">Add Product</h1>
                </div>
                <div className=" w-full  grid grid-cols-2 gap-4 border-b-2 border-gray-400 pb-2">
                    <div className=" p-2">
                        <section className="flex flex-col mb-2">
                            <label className="ml-4">
                                Product Name
                            </label>
                            <input type="text" placeholder="Type Here"
                                className="h-12 rounded-lg outline-none px-3 border-2 border-gray-400" />
                        </section>

                        <section className="flex flex-col mb-2">
                            <label className="ml-4">
                                Manufacturer
                            </label>
                            <input type="text" placeholder="Type Here"
                                className="h-12 rounded-lg outline-none px-3 border-2 border-gray-400" />
                        </section>

                        <section className="flex flex-col ">
                            <label className="ml-4">
                                Product Discription
                            </label>
                            <textarea placeholder="Type Here"
                                rows={5}
                                className=" resize-none  rounded-lg outline-none p-3 border-2 border-gray-400" />
                        </section>
                    </div>

                    <div className="">
                        <div className="mb-2">
                            <section className='flex flex-col'>
                            <label className="ml-4">
                                Images
                            </label>

                                <div {...getRootPropsImages({className:" text-center bg-gray-200 h-14 flex items-center justify-center rounded-md mb-2 hover:bg-gray-100"})}>
                                    <input {...getInputPropsImages()}/>
                                        <p>Drag or Click to select a Picture  </p>

                        </div>
                        <div className=' h-14 w-full  flex justify-center items-center'>
                            {
                                images?.map((picture,index)=>{
                                    return <div
                                    className='h-12 w-12 border-customBlue border-2 bg-white mx-1 hover:opacity-50 p-0.5 rounded-md shadow-sm shadow-gray-400 relative'
                                    >
                                        <ImCross className='h-3 text-xs -right-1 -top-1 absolute text-white bg-customBlue p-0.5 hover:bg-red-500 rounded-full w-3'
                                        onClick={()=>{
                                            handleRemoveImages(index)
                                        }}
                                        />
                                    <img
                                    src={picture.preview}
                                    key={index}
                                    
                                    
                                    />
                                    </div>
                                })
                            }

                        </div>
                            </section>

                        </div>
                        <section className="flex flex-col mb-2">
                            <label className="ml-4">
                                Variants
                            </label>
                            <input type="text" placeholder="Type Here"
                                className="h-12 rounded-lg outline-none px-3 border-2 border-gray-400" />
                        </section>
                        <section className="flex flex-col mb-2">
                            <label className="ml-4">
                                Product Type
                            </label>
                            <select
                                className="h-12 rounded-lg outline-none px-3 border-2 border-gray-400"
                            >
                                <option value={1}>SLA Printers</option>
                                <option value={2}>FDM Printers</option>
                                <option value={3}>3D Scannar</option>
                                <option value={4}>Leaser Cutter</option>
                                <option value={5}>Others</option>
                            </select>
                        </section>
                        <section className="flex justify-center">
                            <label className="ml-4">
                                Include in Best Deals
                            </label>
                            <input type="checkbox"
                                className="ounded-lg outline-none border-2 border-gray-400 ml-3" />
                        </section>
                    </div>



                </div>

                <div className=" h-96 col-span-2 mt-2">
                    <div className="h-12 ">
                        <h1 className=" font-sans font-bold text-2xl">Scope of Delivery</h1>
                    </div>

                    <div className=" w-full  grid grid-cols-2 gap-4 border-b-2 border-gray-400 pb-2">
                        <div>
                            <section className="flex flex-col ">
                                <label className="ml-4">
                                    Discription
                                </label>
                                <textarea placeholder="Type Here"
                                    rows={5}
                                    className=" resize-none  rounded-lg outline-none p-3 border-2 border-gray-400" />
                            </section>
                        </div>
                        <div>
                            <div className="">
                            <section className='flex flex-col'>
                            <label className="ml-4">
                                Delivery Scope Images
                            </label>

                                <div {...getRootPropsScopeImages({className:" text-center bg-gray-200 h-14 flex items-center justify-center rounded-md mb-2 hover:bg-gray-100"})}>
                                    <input {...getInputPropsScopeImages()}/>
                                        <p>Drag or Click to select a Picture  </p>

                        </div>
                        <div className=' h-14 w-full  flex justify-center items-center'>
                            {
                                scopeImaages?.map((picture,index)=>{
                                    return <div
                                    className='h-12 w-12 border-customBlue border-2 bg-white mx-1 hover:opacity-50 p-0.5 rounded-md shadow-sm shadow-gray-400 relative'
                                    >
                                        <ImCross className='h-3 text-xs -right-1 -top-1 absolute text-white bg-customBlue p-0.5 hover:bg-red-500 rounded-full w-3'
                                        onClick={()=>{
                                            handleRemoveScopeImages(index)
                                        }}
                                        />
                                    <img
                                    src={picture.preview}
                                    key={index}
                                    
                                    
                                    />
                                    </div>
                                })
                            }

                        </div>
                            </section>

                            </div>
                        </div>


                    </div>
                    <div >
                        <p className="font-sans font-bold text-2xl mb-4 mt-2">Ratings</p>
                        <div className=" h-36 flex justify-between items-center">
                            <div className="flex flex-col items-center">
                                <div className=" h-28 w-28 rounded-full bg-white border-customBlue border-4 relative flex justify-center items-center">
                                    <input className="h-8 w-8 text-lg rounded-md text-center border-gray-400 border-2 absolute top-4 left-4 outline-none ">
                                    </input>
                                    <div className=" w-0.5 h-5/6 bg-customBlue rotate-45"></div>

                                    <p className="h-6 w-6 text-center text-2xl absolute bottom-5 right-5 ">
                                        5
                                    </p>

                                </div>
                                <p>Price</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className=" h-28 w-28 rounded-full bg-white border-customBlue border-4 relative flex justify-center items-center">
                                    <input className="h-8 w-8 text-lg rounded-md text-center border-gray-400 border-2 absolute top-4 left-4 outline-none ">
                                    </input>
                                    <div className=" w-0.5 h-5/6 bg-customBlue rotate-45"></div>

                                    <p className="h-6 w-6 text-center text-2xl absolute bottom-5 right-5 ">
                                        5
                                    </p>

                                </div>
                                <p>Price</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className=" h-28 w-28 rounded-full bg-white border-customBlue border-4 relative flex justify-center items-center">
                                    <input className="h-8 w-8 text-lg rounded-md text-center border-gray-400 border-2 absolute top-4 left-4 outline-none ">
                                    </input>
                                    <div className=" w-0.5 h-5/6 bg-customBlue rotate-45"></div>

                                    <p className="h-6 w-6 text-center text-2xl absolute bottom-5 right-5 ">
                                        5
                                    </p>

                                </div>
                                <p>Price</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className=" h-28 w-28 rounded-full bg-white border-customBlue border-4 relative flex justify-center items-center">
                                    <input className="h-8 w-8 text-lg rounded-md text-center border-gray-400 border-2 absolute top-4 left-4 outline-none ">
                                    </input>
                                    <div className=" w-0.5 h-5/6 bg-customBlue rotate-45"></div>

                                    <p className="h-6 w-6 text-center text-2xl absolute bottom-5 right-5 ">
                                        5
                                    </p>

                                </div>
                                <p>Price</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className=" h-28 w-28 rounded-full bg-white border-customBlue border-4 relative flex justify-center items-center">
                                    <input className="h-8 w-8 text-lg rounded-md text-center border-gray-400 border-2 absolute top-4 left-4 outline-none ">
                                    </input>
                                    <div className=" w-0.5 h-5/6 bg-customBlue rotate-45"></div>

                                    <p className="h-6 w-6 text-center text-2xl absolute bottom-5 right-5 ">
                                        5
                                    </p>

                                </div>
                                <p>Price</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className=" h-28 w-28 rounded-full bg-white border-customBlue border-4 relative flex justify-center items-center">
                                    <input className="h-8 w-8 text-lg rounded-md text-center border-gray-400 border-2 absolute top-4 left-4 outline-none ">
                                    </input>
                                    <div className=" w-0.5 h-5/6 bg-customBlue rotate-45"></div>

                                    <p className="h-6 w-6 text-center text-2xl absolute bottom-5 right-5 ">
                                        5
                                    </p>

                                </div>
                                <p>Price</p>
                            </div>

                        </div>

                    </div>
                    <div className="h-20 w-full flex justify-between mt-4 ">
                        <button className="w-40 h-12 bg-gray-300 rounded-md">
                            Back
                        </button>
                        <button className="w-40 h-12 bg-gray-300 rounded-md">
                            Save & Next
                        </button>
                    </div>
                </div>
            </form>

        </div>
    )
}
export default AddProduct