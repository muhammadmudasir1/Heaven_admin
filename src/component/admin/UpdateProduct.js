import { useState, useEffect } from 'react'
import SingleImageSilider from './SingleImageSilider';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import VarientSlider from './VarientSlider';
import ManageImages from './ManageImages';
import ManageSODImages from './ManageSODImages';
import { RxCross2 } from "react-icons/rx";
import Api from "../../api/Api"
import { useParams, useNavigate } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import { FaCheck } from "react-icons/fa";
import { useAuth } from '../../context/AuthContext';
import useRefresh from '../../hooks/useRefresh';

const UpdateProduct = () => {
    const [productName, setProductName] = useState('')
    const [productTitle, setProductTitle] = useState('')
    const [productNameError, setProductNameError] = useState('')
    const [manufacturer, setManufacturer] = useState('')
    const [manufacturerError, setManufacturerError] = useState('')
    const [productDiscription, setProductDiscription] = useState('')
    const [scopeOfDeliveryDiscription, setScopeOfDeliveryDiscription] = useState('')
    const [priceRating, setPriceRating] = useState(0)
    const [innovationRating, setinnovationRating] = useState(0)
    const [softwareRating, setSoftwareRating] = useState(0)
    const [customerServiceRating, setCustomerServiceRating] = useState(0)
    const [processingRating, setProcessingRating] = useState(0)
    const [price, setPrice] = useState("")
    const [unit, setUnit] = useState("")
    const [productImages, setProductImages] = useState(null)
    const [scopeOfDeliveryImages, setScopeOfDeliveryImages] = useState(null)
    const [manageImages, setManageImages] = useState(false)
    const [manageSODImages, setManageSODImages] = useState(false)
    const [searchValue, setSearchValue] = useState("")
    const [productType, setProductType] = useState()
    const [priceError, setPriceError] = useState(false)
    const [variants, setVariants] = useState([])
    const [variantByApi, setVariantByApi] = useState(null)
    const [includeInBestDeals, setIncludeInBestDeals] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isUpdated, setIsUpdated] = useState(false)
    const { id } = useParams()
    const { auth, setAuth } = useAuth()
    const refresh = useRefresh()
    const naviagate = useNavigate()

    useEffect(() => {
        if (auth && auth.role >= 3) {
            naviagate(`/dashboard/addreview/${id}`)
        }
    }, [auth, id])


    const getProductData = async (id) => {
        try {
            setIsLoading(true)
            const result = await Api.get(`/api/products/${id}`)
            if (!result.data){
                naviagate('/notfound')
            }
            let images = result.data.ProductImages.filter((image) => {
                if (image.role !== 3) {
                    return true
                }
                else {
                    return false
                }
            }).sort((a, b) => {
                if (a.role > b.role) {
                    return 1
                }
                if (a.role < b.role) {
                    return -1
                }
                return 0
            })
            const SODImages = result.data.ProductImages.filter((image) => {
                if (image.role === 3) {
                    return true
                }
                else {
                    return false
                }
            })
            console.log(result.data)
            setProductName(result.data.product_name)
            setProductTitle(result.data.product_title)
            setManufacturer(result.data.manufacturer)
            setProductDiscription(result.data.discription)
            setPriceRating(result.data.price_rating)
            setinnovationRating(result.data.innovation_rating)
            setSoftwareRating(result.data.software_rating)
            setCustomerServiceRating(result.data.customer_service_rating)
            setProcessingRating(result.data.processing_rating)
            setScopeOfDeliveryDiscription(result.data.scope_of_delivery_discription)
            setProductImages(images)
            setProductType(result.data.productType)
            setScopeOfDeliveryImages(SODImages)
            setVariants(result.data.variants)
            setIncludeInBestDeals(result.data.include_in_BestDeals)
            setPrice(result.data.price)
            setUnit(result.data.unit)
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            naviagate('/dashboard/product')
            console.log(error)
        }
    }

    useEffect(() => {
        const search = async () => {
            const response = await Api.post(`api/products/searchbytype/${productType}`,
                { "query": searchValue }
            )
            setVariantByApi(response.data)
        }
        search()
    }, [searchValue])

    useEffect(() => {
        getProductData(id)
    }, [id])

    const handleAddVariants = async (variantId) => {
        const config = {
            headers: {
                Authorization: `Bearer ${auth.accessToken}`
            }
        }
        try {
            await Api.post('/api/products/addVariants', {
                "productId": id,
                "variants": [variantId]
            }, config)
            setSearchValue("")
            await getProductData(id)

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
                    await Api.post('/api/products/addVariants', {
                        "productId": id,
                        "variants": [variantId]
                    }, config)
                    setSearchValue("")
                    await getProductData(id)

                } catch (error) {
                    console.log(error)
                }
            }
            else {
                setAuth(null)
                naviagate('/login')
            }
        }
    }


    const handleSave = async () => {

        if (!productName) {
            setProductNameError("Product Name is Compulsory")
            window.scrollY = 0
            return
        }

        if (!manufacturer) {
            setManufacturerError("Manufacturer is Compulsory")
            return
        }
        document.getElementById('updateProduct').scrollTop = 0
        setIsLoading(true)
        const data = {
            product_name: productName,
            product_title:productTitle,
            manufacturer: manufacturer,
            price_rating: Number(priceRating),
            innovation_rating: Number(innovationRating),
            software_rating: Number(softwareRating),
            customer_service_rating: Number(customerServiceRating),
            processing_rating: Number(processingRating),
            scope_of_delivery_discription: scopeOfDeliveryDiscription,
            include_in_BestDeals: includeInBestDeals,
            discription: productDiscription,
            price: price,
            unit: unit
        }

        const config = {
            headers: {
                Authorization: `Bearer ${auth.accessToken}`
            }
        }
        try {
            await Api.patch(`/api/products/${id}`, data, config)
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
                    await Api.patch(`/api/products/${id}`, data, config)
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
                naviagate('/login')
            }
        }
    }


    useEffect(() => {
        console.log(includeInBestDeals)
    }, [includeInBestDeals])


    return (
        <div id='updateProduct' className={`overflow-x-hidden h-full relative ${manageImages || isLoading ? "overflow-y-hidden" : "overflow-y-scroll"} `}>
            <div className='px-8'>
                <div className='grid grid-cols-5 '>
                    <div className='col-span-2 h-80 2xl:h-[400px] flex flex-col items-center'>

                        <div className='grid grid-cols-7 w-full h-60 2xl:h-80 '>

                            <div className='col-span-7 h-full '>
                                <SingleImageSilider images={productImages} />
                            </div>

                        </div>
                        <div className='w-full h-16 flex justify-center items-center'>
                            <button
                                className='px-4 py-2 mt-2 bg-customBlue rounded-md text-white hover:bg-sky-500'
                                onClick={(e) => {
                                    document.getElementById('updateProduct').scrollTop = 0
                                    setManageImages(true)
                                }
                                }
                            >Manage Images</button>
                        </div>

                    </div>
                    <div className='col-span-3 p-4'>
                        <section className="flex flex-col mb-2">
                            <label className="ml-4">
                                Product Title
                            </label>
                            <input type="text" placeholder="Type Here"
                                className={`h-12 rounded-lg outline-none px-3 border-2 ${productNameError ? "border-red-500" : "border-gray-400"}`}
                                value={productTitle}
                                onChange={(e) => {
                                    setProductTitle(e.target.value)
                                    setProductNameError(false)
                                }}
                            />
                        </section>
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
                        </section>

                        <section className="flex flex-col ">
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
                        <section className="flex justify-center mt-4">

                            <div className='flex grow items-center w-1/3'>
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
                            <div className='flex items-center w-1/3'>
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

                            <div>
                                {
                                    productType != 5 &&
                                    <div className='flex justify-center h-full'>
                                        <label className="ml-4 flex items-center">
                                            Include in Best Deals
                                        </label>
                                        <input type="checkbox"
                                            className="ounded-lg outline-none border-2 border-gray-400 ml-3"
                                            value={includeInBestDeals}
                                            checked={includeInBestDeals}
                                            onChange={(e) => {
                                                setIncludeInBestDeals(e.target.checked)
                                            }
                                            }
                                        />
                                    </div>
                                }

                            </div>

                        </section>

                    </div>
                    {
                    productType!=5 &&
                    <div className='col-span-5 grid grid-cols-8'>
                        <div className='  h-12 flex justify-center items-center my-4 text-2xl border-y-2 col-span-8'>
                            <p className="">Variants</p>
                        </div>
                        <div className='h-40 col-span-6'>
                            <VarientSlider variants={variants} productId={id} reload={getProductData} />
                        </div>
                        <div className='h-40 col-span-2 flex flex-col border-l-2'>
                            <p className=' text-center pb-2'>Add Variants</p>
                            <div className='w-full flex justify-center '>
                                <input
                                    className='rounded-md outline-none px-3 border-2 grow h-12 border-gray-400 ml-6'
                                    placeholder='Type Here'
                                    value={searchValue}
                                    onChange={(e) => {
                                        setSearchValue(e.target.value)
                                    }}
                                />
                            </div>
                            {
                                searchValue && variantByApi && variantByApi.length > 0 &&
                                <ul className='w-full h-full flex-grow overflow-x-hidden overflow-y-scroll'>
                                    {
                                        variantByApi.length > 0 ? variantByApi.map((product) => {
                                            return <li
                                                className='flex m-2 px-1  py-2 mr-2 w-full h-14 items-center justify-between border-gray-300 border-b-2 hover:bg-gray-300 rounded-md'
                                                key={product.Id}
                                            >
                                                <img
                                                    className='bg-white w-12 h-12'
                                                    src={`/api/${product.ProductImages[0].path}`}
                                                />
                                                <p className=' grow overflow-hidden px-2 line-clamp-2' title={product.product_name}>
                                                    {product.product_name}
                                                </p>
                                                <div
                                                    className='px-3 py-1 bg-white hover:bg-customBlue hover:text-white cursor-pointer'
                                                    onClick={(e) => handleAddVariants(product.Id)}

                                                > Add</div>

                                            </li>

                                        }) :
                                            <p className='w-full text-center pt-14'>No Product is found</p>

                                    }

                                </ul>
                            }
                        </div>
                    </div>
                    }

                    <div className='  col-span-5 grid grid-cols-6 gap-4'>
                        <div className='col-span-6 h-12 flex justify-center items-center my-4 text-2xl border-y-2'>
                            <h2>Scope Of Delivery</h2>

                        </div>
                        <div className=' col-span-2'>
                            {
                                scopeOfDeliveryImages && scopeOfDeliveryImages.length > 0 &&
                                <div className=' h-48'>

                                    <SingleImageSilider images={scopeOfDeliveryImages} />
                                </div>
                            }

                            <div className='w-full h-16 flex justify-center items-center'>
                                <button
                                    className='px-4 py-2 mt-2 bg-customBlue rounded-md text-white hover:bg-sky-500'
                                    onClick={(e) => {
                                        document.getElementById('updateProduct').scrollTop = 0
                                        setManageSODImages(true)
                                    }}
                                >Manage Images</button>
                            </div>
                        </div>
                        <div className=' col-span-4'>
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


                    </div>
                    <div className='col-span-5 '>
                        <div className='h-12 flex justify-center items-center my-4 text-2xl border-y-2'>
                            <p className="f">Ratings</p>
                        </div>
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
                                        type='number'
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
                    <div className='col-span-5 h-16 flex flex-row-reverse mt-8'>

                        <button
                            className="w-40 h-12 bg-customBlue text-white hover:bg-sky-500 rounded-md"
                            onClick={(e) => {
                                handleSave()
                            }}
                        >
                            Update
                        </button>

                    </div>

                </div>
            </div>
            {
                (manageImages || manageSODImages) &&

                <div className='w-full h-screen absolute top-0 z-[999] flex justify-center items-center'>
                    <div className='w-3/4  bg-white z-[9999] rounded-md flex flex-col relative -top-8'>
                        <h2 className=' w-full text-center p-4  text-2xl'>Manage Product Images</h2>
                        <div className='w-full grow h-[450px] overflow-auto'>
                            {
                                manageImages &&
                                <ManageImages productId={id} />
                            }
                            {
                                manageSODImages &&
                                <ManageSODImages productId={id} />
                            }


                        </div>
                        <RxCross2 className=' absolute top-0 right-0 m-2 text-xl bg-customBlue rounded-full text-white hover:bg-sky-500 p-[1px]'
                            onClick={(e) => {
                                setManageImages(false)
                                setManageSODImages(false)
                                getProductData(id)
                            }}
                        />

                    </div>
                    <div className='w-full h-screen bg-black opacity-50 absolute' />

                </div>
            }
            {
                isLoading &&
                <div className='w-full h-full absolute top-0 flex justify-center items-center z-[9999]'>
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
                <div className='w-full absolute top-0 flex justify-center items-center bg-green-600 z-[9999]'>
                    <FaCheck className='text-white text-lg' />
                    <p className='p-4 text-white text-lg'>Updated</p>
                </div>
            }


        </div>
    )
}

export default UpdateProduct