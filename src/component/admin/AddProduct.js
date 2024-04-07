import { useDropzone } from 'react-dropzone'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useProductContext } from '../../context/CurrentProductContext';
import ClipLoader from 'react-spinners/ClipLoader';
import { ImCross } from "react-icons/im";
import { MdCancel } from "react-icons/md";
import Api from "../../api/Api"
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import useRefresh from '../../hooks/useRefresh';

const AddProduct = () => {
    const [images, setImages] = useState([])
    const [scopeImaages, setScopeImages] = useState([])
    const [productType, setProductType] = useState(null)
    const [isSearchActive, setIsSearchActive] = useState(false)
    const [variantSearch, setVariantSearch] = useState(null)
    const [variantByApi, setVariantByApi] = useState(null)
    const [variants, setVariants] = useState([])
    const [productName, setProductName] = useState('')
    const [productTitle, setProductTitle] = useState('')
    const [manufacturer, setManufacturer] = useState('')
    const [productDiscription, setProductDiscription] = useState('')
    const [scopeOfDeliveryDiscription, setScopeOfDeliveryDiscription] = useState('')
    const [price, setPrice] = useState("")
    const [unit, setUnit] = useState("€")
    const [priceError, setPriceError] = useState("")
    const [priceRating, setPriceRating] = useState(0)
    const [innovationRating, setinnovationRating] = useState(0)
    const [softwareRating, setSoftwareRating] = useState(0)
    const [customerServiceRating, setCustomerServiceRating] = useState(0)
    const [processingRating, setProcessingRating] = useState(0)
    const [nullImageError, setNullImageError] = useState(false)
    const [isThumbnail, setIsThumbnail] = useState(false)
    const [thumbnail, setThumbnail] = useState(0)
    const [includeInBestDeals, setIncludeInBestDeals] = useState(false)
    const { populateProduct } = useProductContext()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    const { auth, setAuth } = useAuth()
    const refresh = useRefresh()


    // states for Error Handling
    const [productTypeError, setProductTypeError] = useState(false)
    const [productTitleError, setProductTitleError] = useState(false)
    const [productNameError, setProductNameError] = useState('')
    const [manufacturerError, setManufacturerError] = useState('')

    useEffect(() => {
        if (auth && auth.role >= 3) {
            console.log("from Access")
            navigate('/dashboard/product')
        }
    }, [auth])


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
        if (images.length > 0 && nullImageError) {
            setNullImageError(false)
        }
    }, [images])

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
    const handleRemoveVariant = (index) => {
        setVariants((prev) => {
            const tempOne = prev.slice(0, index)
            const tempTwo = prev.slice(index + 1)
            return [...tempOne, ...tempTwo]
        })
    }


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
    const { acceptedFiles: acceptedFilesScopeImages,
        getInputProps: getInputPropsScopeImages,
        getRootProps: getRootPropsScopeImages
    } = useDropzone({
        onDrop: onDropScopeImages,
        accept: {
            'image/jpeg': [],
            'image/png': [],
            'image/webp': []
        }
    })


    const saveProduct = async (e) => {
        document.getElementById('addproduct').scrollTop = 0
        setLoading(true)
        const fd = new FormData()
        if (images[thumbnail].altText) {
            let extension = images[thumbnail].type.split("/").pop()
            const newFile = new File([images[thumbnail]], images[thumbnail].altText + "." + extension, { type: images[thumbnail].type });
            fd.append("thumbnail", newFile)
        }
        else {
            // console.log(images[thumbnail].type)
            let extension = images[thumbnail].type.split("/").pop()
            // console.log(extension)
            const newFile = new File([images[thumbnail]], productName + "." + extension, { type: images[thumbnail].type });
            fd.append("thumbnail", newFile)

        }

        images.forEach((image, index) => {
            if (index !== thumbnail) {
                if (image.altText) {
                    let extension = image.type.split("/").pop()
                    const newFile = new File([image], image.altText + "." + extension, { type: image.type });
                    fd.append("images", newFile)
                }
                else {
                    // console.log(images[thumbnail].type)
                    let extension = image.type.split("/").pop()
                    // console.log(extension)
                    const newFile = new File([image], productName + "." + extension, { type: image.type });
                    fd.append("images", newFile)

                }
            }
        })

        scopeImaages.forEach((image) => {
            if (image.altText) {
                let extension = image.type.split("/").pop()
                const newFile = new File([image], image.altText + "." + extension, { type: image.type });
                fd.append("sdImages", newFile)
            }
            else {
                // console.log(images[thumbnail].type)
                let extension = image.type.split("/").pop()
                // console.log(extension)
                const newFile = new File([image], productName + "." + extension, { type: image.type });
                fd.append("sdImages", newFile)

            }
            // fd.append('sdImages', image) 
        })
        variants.forEach((variant, index) => {
            fd.append('variants', variant.Id)
        })

        fd.append('product_name', productName)
        fd.append('product_title', productTitle)
        fd.append('manufacturer', manufacturer)
        fd.append('price_rating', priceRating)
        fd.append('innovation_rating', innovationRating)
        fd.append('software_rating', softwareRating)
        fd.append('customer_service_rating', customerServiceRating)
        fd.append('processing_rating', processingRating)
        fd.append('scope_of_delivery_discription', scopeOfDeliveryDiscription)
        fd.append('include_in_BestDeals', includeInBestDeals)
        fd.append('productType', productType)
        fd.append('discription', productDiscription)
        fd.append('price', price)
        fd.append('unit', unit)

        const config = {
            headers: {
                Authorization: `Bearer ${auth.accessToken}`
            }
        }
        try {
            console.log(fd.getAll('images'))
            const response = await Api.post('/api/products/', fd, config)
            populateProduct(response.data)
            setLoading(false)
            if (productType != 5) {
                navigate(`/dashboard/updateproduct/${response.data}`, { replace: true })
                navigate(`/dashboard/addSpecs/${response.data}`)
            }
            else {
                navigate('/dashboard/product')
            }


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
                    const response = await Api.post('/api/products/', fd, config)
                    populateProduct(response.data)
                    setLoading(false)
                    if (productType != 5) {
                        navigate(`/dashboard/updateproduct/${response.data}`, { replace: true })
                        navigate(`/dashboard/addSpecs/${response.data}`)
                    }
                    else {
                        navigate('/dashboard/product')
                    }


                } catch (error) {
                    console.log(error)
                    setError("Saving Product is Failed")
                    setLoading(false)
                }
            } else {
                setError("Saving Product is Failed")
                setLoading(false)
            }
        }





    }
    const processForm = async (e) => {
        if (!productName || !manufacturer || !productType || images.length < 1 || !price || !productTitle) {
            !productName && setProductNameError(true)
            !manufacturer && setManufacturerError(true)
            !productType && setProductTypeError(true)
            !price && setPriceError(true)
            !productTitle && setProductTitleError(true)
            images.length < 1 && setNullImageError(true)
            document.getElementById('addproduct').scrollTop = 0
            console.log(images.length < 1)
            return
        }
        else {
            if (images.length > 1) {
                document.getElementById('addproduct').scrollTop = 0
                setIsThumbnail(true)
            }
            else {
                setThumbnail(0)
                await saveProduct()
            }
        }
    }

    const addAltText = (imageIndex, altText) => {
        setImages((prev) => {
            // newData=[]
            const newData = prev.map((prevImageData, index) => {
                if (index === imageIndex) {
                    prevImageData['altText'] = altText
                    console.log(prevImageData)
                }
                return prevImageData
                // return [...newData,prevImageData]

            })
            return newData
        })
    }
    const addAltTextToSDImages = (imageIndex, altText) => {
        setScopeImages((prev) => {
            // newData=[]
            const newData = prev.map((prevImageData, index) => {
                if (index === imageIndex) {
                    prevImageData['altText'] = altText
                    console.log(prevImageData)
                }
                return prevImageData
                // return [...newData,prevImageData]

            })
            return newData
        })
    }

    useEffect(() => {
        console.log(images)
    }, [images])


    return (
        <div id='addproduct'
            className={` w-full h-full p-6 flex flex-col overflow-x-hidden
        ${isThumbnail || error || loading ? " overflow-y-hidden" : ""}`}>

            <div>
                <div className=" w-full  grid grid-cols-2 ">
                    <div className=" col-span-2 px-2">
                        <section className="flex flex-col ">
                            <label className="ml-4">
                                Product Title:
                            </label>
                            <input type="text" placeholder="Type Here"
                                className={`h-12 rounded-lg outline-none px-3 border-2 ${productTitleError ? "border-red-500" : "border-gray-400"}`}
                                value={productTitle}
                                onChange={(e) => {
                                    setProductTitle(e.target.value)
                                    setProductTitleError(false)
                                }}
                            />
                            {productNameError ? <p className='text-red-500 text-sm'>Product Title is Compulsory</p> : null}

                        </section>
                    </div>
                </div>

                <div className=" w-full  grid grid-cols-2 gap-4 border-b-2 border-gray-400 pb-2">
                    <div className=" p-2">
                        <section className="flex flex-col mb-2">
                            <label className="ml-4">
                                Product Name
                            </label>
                            <input type="text" placeholder="Type Here"
                                className={`h-12 rounded-lg outline-none px-3 border-2 ${productNameError ? "border-red-500" : "border-gray-400"}`}
                                value={productName}
                                onChange={(e) => {
                                    setProductName(e.target.value)
                                    setProductNameError(false)
                                }}
                            />
                            {productNameError ? <p className='text-red-500 text-sm'>Product Name is Compulsory</p> : null}

                        </section>

                        <section className="flex flex-col mb-2">
                            <label className="ml-4">
                                Manufacturer
                            </label>
                            <input type="text" placeholder="Type Here"
                                className={`h-12 rounded-lg outline-none px-3 border-2 ${manufacturerError ? "border-red-500" : "border-gray-400"}`}
                                value={manufacturer}
                                onChange={(e) => {
                                    setManufacturer(e.target.value)
                                    setManufacturerError(false)
                                }}
                            />
                            {manufacturerError ? <p className=' text-sm text-red-500'>Manufacturer is Compulsory</p> : null}
                        </section>
                        <section className="flex flex-col mt-4">
                            <div className='flex'>
                                <div className='flex grow items-center'>
                                    <label className="mr-2">Official Price</label>
                                    <input type="text" placeholder="Type Here"
                                        className={`h-12 rounded-lg outline-none px-3 border-2 w-1/2 ${priceError ? "border-red-500" : "border-gray-400"}`}
                                        value={price}
                                        onChange={(e) => {
                                            setPrice(e.target.value)
                                            setPriceError(false)
                                        }}
                                    />
                                </div>
                                <div className='flex w-1/2 items-center'>
                                    <p className="mx-2">Price Unit</p>
                                    <select
                                        className={`h-12 rounded-lg outline-none px-3 border-2   border-gray-400`}
                                        value={unit}
                                        onChange={
                                            (e) => {
                                                setUnit(e.target.value)
                                            }}
                                    >
                                        <option value={"€"}>Euro (€)</option>
                                        <option value={"$"}>USD ($)</option>
                                    </select>
                                </div>
                            </div>
                            {priceError ? <p className='text-red-500 text-sm'>Official Price is Compulsory</p> : null}
                        </section>

                        <section className="flex flex-col mt-4">
                            <label className="ml-4">
                                Product Discription
                            </label>
                            <textarea placeholder="Type Here"
                                rows={5}
                                className={" resize-none  rounded-lg outline-none p-3 border-2 border-gray-400"}
                                value={productDiscription}
                                onChange={(e) => setProductDiscription(e.target.value)}
                            />
                        </section>
                    </div>

                    <div className="">
                        <div className="mb-2">
                            <section className='flex flex-col'>
                                <label className="ml-4">
                                    Images
                                </label>

                                <div {...getRootPropsImages(
                                    {
                                        className: `text-center bg-gray-200 h-14 flex items-center justify-center rounded-md mb-2 hover:bg-gray-100 ${nullImageError ? " border-red-500 border-2" : null} `
                                    }
                                )}>
                                    <input {...getInputPropsImages()}
                                    />
                                    <p>Drag or Click to select a Picture  </p>


                                </div>

                                {
                                    nullImageError ?
                                        <p className=' text-red-500'>Please select at least One Image</p>
                                        : null
                                }

                                {
                                    images.length > 0 ?
                                        <div className=' h-14 w-full  flex justify-center items-center mb-10'>
                                            {
                                                images?.map((picture, index) => {
                                                    return <div
                                                        className='h-12 w-12 border-customBlue border-2 bg-white mx-1 p-0.5 rounded-md shadow-sm shadow-gray-400 relative'
                                                    >
                                                        <ImCross className='h-3 text-xs -right-1 -top-1 absolute text-white bg-customBlue p-0.5 hover:bg-red-500 rounded-full w-3'
                                                            onClick={() => {
                                                                handleRemoveImages(index)
                                                            }}
                                                        />
                                                        <button
                                                            onClick={(e) => {
                                                                const altText = prompt(`Enter Alt text: ${picture && picture.altText ? "Previous Alt-text is '" + picture.altText + "'" : ""}`)
                                                                if (altText) {
                                                                    addAltText(index, altText)
                                                                }
                                                            }}
                                                            className='absolute text-xs bg-customBlue/50 -bottom-10'>Set<br /> Alt-text</button>
                                                        <img
                                                            src={picture.preview}
                                                            key={index}
                                                            className='hover:opacity-50'

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
                                className={`h-12 rounded-lg outline-none px-3 border-2  ${productTypeError ? "border-red-500" : "border-gray-400"}`}
                                value={productType}
                                onChange={
                                    (e) => {
                                        if (e.target.value == 0) {
                                            setProductType(null)
                                        }
                                        else {

                                            setProductType(e.target.value)
                                            setProductTypeError(false)
                                        }
                                    }}
                            >
                                <option value={0}>Select Prouduct Type</option>
                                <option value={1}>SLA Printers</option>
                                <option value={2}>FDM Printers</option>
                                <option value={3}>Leaser Cutter</option>
                                <option value={4}>3D Scannar</option>
                                <option value={5}>Filament</option>
                            </select>
                            {productTypeError ? <p className='text-red-500 text-sm'>Product Type is Compulsory</p> : null}
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
                                                                            src={`/${product.ProductImages[0].path}`}
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
                                                            {variants.map((product, index) => {
                                                                return <p key={index} className=' bg-customBlue text-white px-2  py-1 mx-1 rounded-2xl flex items-center '>
                                                                    <span className='truncate max-w-[150px]'>{product.product_name}</span>
                                                                    <span className='text-white text-xs ml-2 p-2 hover:cursor-pointer'
                                                                        onClick={(e) => {
                                                                            console.log("from remove variants")
                                                                            handleRemoveVariant(index)
                                                                        }}
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

                        {
                            productType != 5 &&
                            <section className="flex justify-center">
                                <label className="ml-4">
                                    Include in Best Deals
                                </label>
                                <input type="checkbox"
                                    className="ounded-lg outline-none border-2 border-gray-400 ml-3"
                                    checked={includeInBestDeals}
                                    onChange={(e) => {
                                        setIncludeInBestDeals(e.target.checked)
                                    }}
                                />
                            </section>
                        }
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
                                    value={scopeOfDeliveryDiscription}
                                    onChange={(e) => {
                                        setScopeOfDeliveryDiscription(e.target.value)
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
                                                    <button
                                                        onClick={(e) => {
                                                            const altText = prompt(`Enter Alt text: ${picture && picture.altText ? "Previous Alt-text is '" + picture.altText + "'" : ""}`)
                                                            if (altText) {
                                                                addAltTextToSDImages(index, altText)
                                                            }
                                                        }}
                                                        className='absolute text-xs bg-customBlue/50 -bottom-10'>Set<br /> Alt-text</button>
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
                                        onChange={(e) => {
                                            if (e.target.value > 5) {
                                                setPriceRating(5)
                                            }
                                            else if (e.target.value < 0) {
                                                setPriceRating(0)
                                            }
                                            else {
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
                                        onChange={(e) => {
                                            if (e.target.value > 5) {
                                                setinnovationRating(5)
                                            }
                                            else if (e.target.value < 0) {
                                                setinnovationRating(0)
                                            }
                                            else {
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
                                        onChange={(e) => {
                                            if (e.target.value > 5) {
                                                setSoftwareRating(5)
                                            }
                                            else if (e.target.value < 0) {
                                                setSoftwareRating(0)
                                            }
                                            else {
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
                                        onChange={(e) => {
                                            if (e.target.value > 5) {
                                                setCustomerServiceRating(5)
                                            }
                                            else if (e.target.value < 0) {
                                                setCustomerServiceRating(0)
                                            }
                                            else {
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
                                        onChange={(e) => {
                                            if (e.target.value > 5) {
                                                setProcessingRating(5)
                                            }
                                            else if (e.target.value < 0) {
                                                setProcessingRating(0)
                                            }
                                            else {
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
                    <div className="h-20 w-full flex justify-end mt-4 ">
                        <button className="w-40 h-12 bg-gray-300 rounded-md"
                            onClick={(e) => {
                                processForm(e)
                            }}
                        >
                            Save & Next
                        </button>
                    </div>
                </div>
            </div>
            {
                isThumbnail ?
                    <div className='top-0 left-0  absolute w-full h-full flex justify-center items-center'>
                        <div className=' absolute w-full h-full bg-black opacity-60'>
                        </div>
                        <div className=' w-1/2  bg-white z-[9999] rounded-lg flex flex-col  items-center p-4'>

                            <p className='text-xl font-semibold text-customBlue'>
                                Select a Thumbnail
                            </p>
                            <div className='grid grid-cols-4 gap-2 mt-4'>
                                {
                                    images.map((picture, index) => {
                                        return <div className=' bg-customBlue'>
                                            <img className={`${thumbnail === index ? "mix-blend-screen border-customBlue border-2 " : " "}   hover:mix-blend-overlay w-32 h-32`} src={picture.preview}
                                                onClick={(e) => setThumbnail(index)}
                                            />
                                        </div>



                                    })
                                }

                            </div>
                            <div>

                                <button
                                    className="text-white hover:bg-blue-500 bg-customBlue mt-6 px-4 py-2 rounded-lg"
                                    onClick={async (e) => {
                                        setIsThumbnail(false)
                                        await saveProduct()
                                    }}

                                >
                                    Done</button>
                            </div>
                        </div>


                    </div>
                    : null
            }
            {
                loading ?
                    <div className='top-0 left-0  absolute w-full h-full flex justify-center items-center'>
                        <div className=' absolute w-full h-full bg-gray-500 opacity-60'>
                        </div>
                        <ClipLoader
                            size={75}
                            loading={loading}
                            color={"#026CC4"}
                        />
                    </div> :
                    null
            }

            {
                error ?
                    <div className='top-0 left-0  absolute w-full h-screen flex justify-center items-center'>
                        <div className=' absolute w-full h-full bg-gray-500 opacity-60'>

                        </div>
                        <div className=' absolute w-1/2 h-32 bg-white rounded-md z-[9999] flex justify-center items-center'>
                            <MdCancel className=' absolute top-2 right-2 hover:text-red-500'
                                onClick={(e) => setError(null)}
                            />
                            <p>{error}</p>
                        </div>
                    </div> :
                    null
            }







        </div>
    )
}
export default AddProduct