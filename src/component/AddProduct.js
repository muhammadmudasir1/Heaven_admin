import { useDropzone } from 'react-dropzone'
import { useCallback, useEffect, useState } from 'react'
import { ImCross } from "react-icons/im";
import Api from "../api/Api"

const AddProduct = () => {
    const [images, setImages] = useState([])
    const [scopeImaages, setScopeImages] = useState([])
    const [productType, setProductType] = useState(null)
    const [isSearchActive, setIsSearchActive] = useState(false)
    const [variantSearch, setVariantSearch] = useState(null)
    const [variantByApi, setVariantByApi] = useState(null)
    const [variants, setVariants] = useState([])
    const [productName,setProductName]=useState('')
    const [manufacturer,setManufacturer]=useState('')
    const [productDiscription,setProductDiscription]=useState('')
    const [scopeOfDeliveryDiscription,setScopeOfDeliveryDiscription]=useState('')
    const [priceRating,setPriceRating]=useState(0)
    const [innovationRating,setinnovationRating]=useState(0)
    const [softwareRating,setSoftwareRating]=useState(0)
    const [customerServiceRating,setCustomerServiceRating]=useState(0)
    const [processingRating,setProcessingRating]=useState(0)


    useEffect(() => {
        const search = async () => {
            const response = await Api.post(`api/products/searchbytype/${productType}`,
                { "query": variantSearch }
            )
            setVariantByApi(response.data)


        }
        search()



    }, [variantSearch])

    useEffect(() => {
        console.log(productType)
    }, [productType])

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



    const handleRemoveImages = (index) => {
        setImages((prevImages) => {
            const tempOne = prevImages.slice(0, index)
            const tempTwo = prevImages.slice(index + 1)
            return [...tempOne, ...tempTwo]
        })
    }

    const handleRemoveScopeImages = (index) => {
        setScopeImages((prevImages) => {
            const tempOne = prevImages.slice(0, index)
            const tempTwo = prevImages.slice(index + 1)
            return [...tempOne, ...tempTwo]
        })
    }
    const handleAddVariant = (product) => {
        setVariants((prev) => {
            return [...prev, product]
        })
        setVariantSearch('')
    }
    const handleRemoveVariant=(index)=>{
        setVariants((prev)=>{
            const tempOne=prev.slice(0,index)
            const tempTwo=prev.slice(index+1)
            return [...tempOne,...tempTwo]
        })
    }


    const { acceptedFiles: acceptedFilesImages,
        getInputProps: getInputPropsImages,
        getRootProps: getRootPropsImages
    } = useDropzone({ onDrop: onDropImages, accept: 'image/png, image/jpeg, image/webp'})
    const { acceptedFiles: acceptedFilesScopeImages,
        getInputProps: getInputPropsScopeImages,
        getRootProps: getRootPropsScopeImages
    } = useDropzone({ onDrop: onDropScopeImages, accept: 'image/png, image/jpeg, image/webp' })

    const handleAddProductForm=async(e)=>{
        e.preventDefault()
        
    }



    return (
        <div className="w-full h-screen p-6 flex flex-col overflow-x-hidden overflow-scroll">

            <form encType='multipart/form-data' onSubmit={handleAddProductForm}>
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
                                className="h-12 rounded-lg outline-none px-3 border-2 border-gray-400"
                                required
                                value={productName}
                                onChange={(e)=>{setProductName(e.target.value)}}
                                />
                        </section>

                        <section className="flex flex-col mb-2">
                            <label className="ml-4">
                                Manufacturer
                            </label>
                            <input type="text" placeholder="Type Here"
                                className="h-12 rounded-lg outline-none px-3 border-2 border-gray-400"
                                required
                                value={manufacturer}
                                onChange={(e)=>{setManufacturer(e.target.value)}}
                                />
                        </section>

                        <section className="flex flex-col ">
                            <label className="ml-4">
                                Product Discription
                            </label>
                            <textarea placeholder="Type Here"
                                required
                                rows={5}
                                className=" resize-none  rounded-lg outline-none p-3 border-2 border-gray-400"
                                value={productDiscription}
                                onChange={(e)=>setProductDiscription(e.target.value)}
                                />
                        </section>
                    </div>

                    <div className="">
                        <div className="mb-2">
                            <section className='flex flex-col'>
                                <label className="ml-4">
                                    Images
                                </label>

                                <div {...getRootPropsImages({ className: " text-center bg-gray-200 h-14 flex items-center justify-center rounded-md mb-2 hover:bg-gray-100" })}>
                                    <input {...getInputPropsImages()} 
                                    />
                                    <p>Drag or Click to select a Picture  </p>

                                </div>
                                {
                                    images.length > 0 ?
                                        <div className=' h-14 w-full  flex justify-center items-center'>
                                            {
                                                images?.map((picture, index) => {
                                                    return <div
                                                        className='h-12 w-12 border-customBlue border-2 bg-white mx-1 hover:opacity-50 p-0.5 rounded-md shadow-sm shadow-gray-400 relative'
                                                    >
                                                        <ImCross className='h-3 text-xs -right-1 -top-1 absolute text-white bg-customBlue p-0.5 hover:bg-red-500 rounded-full w-3'
                                                            onClick={() => {
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
                                        : null
                                }

                            </section>

                        </div>



                        <section className="flex flex-col mb-2">
                            <label className="ml-4">
                                Product Type
                            </label>
                            <select
                                className="h-12 rounded-lg outline-none px-3 border-2 border-gray-400"
                                value={productType}
                                onChange={
                                    (e) => {
                                        if (e.target.value == 0) {
                                            setProductType(null)
                                        }
                                        else {

                                            setProductType(e.target.value)
                                        }
                                    }}
                            >
                                <option value={0}>Select Prouduct Type</option>
                                <option value={1}>SLA Printers</option>
                                <option value={2}>FDM Printers</option>
                                <option value={3}>3D Scannar</option>
                                <option value={4}>Leaser Cutter</option>
                                <option value={5}>Others</option>
                            </select>
                        </section>
                        {
                            !(productType == 5) ?
                                <section className="flex flex-col mb-2 relative">
                                    <label className="ml-4">
                                        Variants
                                    </label>
                                    {
                                        productType ?
                                            <>
                                                <input type="text" placeholder="Type Here"
                                                    className="h-12 rounded-lg outline-none px-3 border-2 border-gray-400"
                                                    onFocus={(e) => setIsSearchActive(true)}
                                                    onBlur={(e) => {
                                                        setTimeout(() => {
                                                            setIsSearchActive(false)
                                                        }, 200)
                                                    }}
                                                    value={variantSearch}
                                                    onChange={(e) => (setVariantSearch(e.target.value))}
                                                />
                                                {
                                                    isSearchActive && variantSearch ?
                                                        <div className=' h-44 w-full bg-gray-200 absolute top-20  overflow-x-hidden overflow-y-scroll rounded-md'>
                                                            {
                                                                variantByApi.length > 0 ? variantByApi.map((product) => {
                                                                    return <section
                                                                        className='flex m-2 px-1  py-2 mr-2 w-full h-14 items-center justify-between border-gray-300 border-b-2 hover:bg-gray-300 rounded-md'
                                                                        key={product.Id}
                                                                    >
                                                                        <img
                                                                            className='bg-white w-12 h-12'
                                                                            src={`/${product.thumbnail}`}
                                                                        />
                                                                        <p className=' grow overflow-hidden px-2'>
                                                                            {product.product_name}
                                                                        </p>
                                                                        <div
                                                                            className='px-3 py-1 bg-white hover:bg-customBlue hover:text-white '
                                                                            onClick={(e) => {
                                                                                handleAddVariant(product)
                                                                            }}

                                                                        > Add</div>

                                                                    </section>

                                                                }) :
                                                                    <p className='w-full text-center pt-14'>No Product is found</p>

                                                            }

                                                        </div> : null
                                                }
                                                {
                                                    variants.length > 0 ?
                                                        <div className='flex my-2'>
                                                            {variants.map((product,index) => {
                                                                return <p key={index} className=' bg-customBlue text-white px-2  py-1 mx-1 rounded-2xl flex items-center '>
                                                                    <span className='truncate max-w-[150px]'>{product.product_name}</span>
                                                                    <span className='text-white text-xs ml-2 p-2 hover:cursor-pointer'
                                                                    onClick={(e)=>{
                                                                        console.log("from remove variants")
                                                                        handleRemoveVariant(index)}}
                                                                    >x</span></p>
                                                            })}
                                                        </div>
                                                        : null
                                                }

                                            </>


                                            :
                                            <p className=" text-gray-500 italic">Please Select Product Type </p>
                                    }
                                </section>
                                : null

                        }


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
                                    className=" resize-none  rounded-lg outline-none p-3 border-2 border-gray-400" 
                                    value={productDiscription}
                                    onChange={(e)=>{
                                        setProductDiscription(e.target.value)
                                    }}
                                    />
                            </section>
                        </div>
                        <div>
                            <div className="">
                                <section className='flex flex-col'>
                                    <label className="ml-4">
                                        Delivery Scope Images
                                    </label>

                                    <div {...getRootPropsScopeImages({ className: " text-center bg-gray-200 h-14 flex items-center justify-center rounded-md mb-2 hover:bg-gray-100" })}>
                                        <input {...getInputPropsScopeImages()} />
                                        <p>Drag or Click to select a Picture  </p>

                                    </div>
                                    <div className=' h-14 w-full  flex justify-center items-center'>
                                        {
                                            scopeImaages?.map((picture, index) => {
                                                return <div
                                                    className='h-12 w-12 border-customBlue border-2 bg-white mx-1 hover:opacity-50 p-0.5 rounded-md shadow-sm shadow-gray-400 relative'
                                                >
                                                    <ImCross className='h-3 text-xs -right-1 -top-1 absolute text-white bg-customBlue p-0.5 hover:bg-red-500 rounded-full w-3'
                                                        onClick={() => {
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
                                    <input 
                                    type='text'
                                    className="h-8 w-8 text-lg rounded-md text-center border-gray-400 border-2 absolute top-4 left-4 outline-none "
                                    value={priceRating}
                                    onChange={(e)=>{
                                        if(e.target.value>5){
                                            setPriceRating(5)
                                        }
                                        else if(e.target.value<0){
                                            setPriceRating(0)
                                        }
                                        else{
                                            setPriceRating(e.target.value)
                                        }
                                        
                                    }}
                                    />
                                    <div className=" w-0.5 h-5/6 bg-customBlue rotate-45"></div>

                                    <p className="h-6 w-6 text-center text-2xl absolute bottom-5 right-5 ">
                                        5
                                    </p>

                                </div>
                                <p>Price</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className=" h-28 w-28 rounded-full bg-white border-customBlue border-4 relative flex justify-center items-center">
                                    <input
                                    className="h-8 w-8 text-lg rounded-md text-center border-gray-400 border-2 absolute top-4 left-4 outline-none "
                                    value={innovationRating}
                                    onChange={(e)=>{
                                        if(e.target.value>5){
                                            setinnovationRating(5)
                                        }
                                        else if(e.target.value<0){
                                            setinnovationRating(0)
                                        }
                                        else{
                                            setinnovationRating(e.target.value)
                                        }
                                        
                                    }}
                                    
                                    
                                    />
                                    
                                    <div className=" w-0.5 h-5/6 bg-customBlue rotate-45"></div>

                                    <p className="h-6 w-6 text-center text-2xl absolute bottom-5 right-5 ">
                                        5
                                    </p>

                                </div>
                                <p>Innovation</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className=" h-28 w-28 rounded-full bg-white border-customBlue border-4 relative flex justify-center items-center">
                                    <input className="h-8 w-8 text-lg rounded-md text-center border-gray-400 border-2 absolute top-4 left-4 outline-none "
                                    value={softwareRating}
                                    onChange={(e)=>{
                                        if(e.target.value>5){
                                            setSoftwareRating(5)
                                        }
                                        else if(e.target.value<0){
                                            setSoftwareRating(0)
                                        }
                                        else{
                                            setSoftwareRating(e.target.value)
                                        }
                                        
                                    }}
                                    />
                                    
                                    <div className=" w-0.5 h-5/6 bg-customBlue rotate-45"></div>

                                    <p className="h-6 w-6 text-center text-2xl absolute bottom-5 right-5 ">
                                        5
                                    </p>

                                </div>
                                <p>Software</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className=" h-28 w-28 rounded-full bg-white border-customBlue border-4 relative flex justify-center items-center">
                                    <input className="h-8 w-8 text-lg rounded-md text-center border-gray-400 border-2 absolute top-4 left-4 outline-none "
                                    value={customerServiceRating}
                                    onChange={(e)=>{
                                        if(e.target.value>5){
                                            setCustomerServiceRating(5)
                                        }
                                        else if(e.target.value<0){
                                            setCustomerServiceRating(0)
                                        }
                                        else{
                                            setCustomerServiceRating(e.target.value)
                                        }
                                        
                                    }}
                                    />
                                    
                                    <div className=" w-0.5 h-5/6 bg-customBlue rotate-45"></div>

                                    <p className="h-6 w-6 text-center text-2xl absolute bottom-5 right-5 ">
                                        5
                                    </p>

                                </div>
                                <p>Customer Service</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className=" h-28 w-28 rounded-full bg-white border-customBlue border-4 relative flex justify-center items-center">
                                    <input className="h-8 w-8 text-lg rounded-md text-center border-gray-400 border-2 absolute top-4 left-4 outline-none "
                                    value={processingRating}
                                    onChange={(e)=>{
                                        if(e.target.value>5){
                                            setProcessingRating(5)
                                        }
                                        else if(e.target.value<0){
                                            setProcessingRating(0)
                                        }
                                        else{
                                            setProcessingRating(e.target.value)
                                        }
                                        
                                    }}
                                    />
                                    <div className=" w-0.5 h-5/6 bg-customBlue rotate-45"></div>

                                    <p className="h-6 w-6 text-center text-2xl absolute bottom-5 right-5 ">
                                        5
                                    </p>

                                </div>
                                <p>Processing Rating</p>
                            </div>
                            

                        </div>

                    </div>
                    <div className="h-20 w-full flex justify-between mt-4 ">
                        <div className="w-40 h-12 bg-gray-300 rounded-md">
                            Back
                        </div>
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