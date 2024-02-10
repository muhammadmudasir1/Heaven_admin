import React, { useEffect, useState } from 'react'
import Api from '../../api/Api'
import ClipLoader from 'react-spinners/ClipLoader';
import checkIcon from "../../imges/Check.png"
import { useAuth } from '../../context/AuthContext';
import useRefresh from '../../hooks/useRefresh';
import { useNavigate } from 'react-router-dom';

const PurchaseLinkForm = ({ id, reRender, updateData, setUpdateData, returnToList }) => {
    const [siteType, setSiteType] = useState(1)
    const [link, setLink] = useState("")
    const [loading, setLoading] = useState(false)
    const [originalPrice, setOriginalPrice] = useState('')
    const [discountedPrice, setDiscountedPrice] = useState('')
    const [unit, setUnit] = useState('')
    const [showRetrive, setShowRetrive] = useState(false)
    const [retrivePriceFlag, setRetrivePriceFlag] = useState(false)
    const [title, setTitle] = useState('')
    const [coupon, setCoupon] = useState('')
    const [discription, setDiscription] = useState('')
    const [visitingLink, setVisitingLink] = useState('')
    const [purchaseLinkId, setPurchaseLinkId] = useState(null)
    const [editData, setEditData] = useState(null)
    const { auth, setAuth } = useAuth()
    const refresh = useRefresh()
    const navigate = useNavigate()

    const setData = (data) => {
        setPurchaseLinkId(data.purchaseLinkId)
        setSiteType(data.siteType)
        setLink(data.link)
        setOriginalPrice(data.originalPrice)
        setDiscountedPrice(data.discountedPrice)
        setUnit(data.unit)
        setTitle(data.title)
        setCoupon(data.coupon)
        setDiscription(data.discription)
        setVisitingLink(data.visitingLink)
        setTimeout(() => {
            setRetrivePriceFlag(data.retrivePriceFlag)

        }, 200)
        setEditData({
            "coupon": data.coupon,
            "discription": data.discription,
            "link": data.link,
            "purchaseLinksId": data.purchaseLinkId,
            "retrivePriceFlag": data.retrivePriceFlag,
            "siteType": data.siteType,
            "title": data.title,
            "visitingLink": data.visitingLink
        })
    }

    useEffect(() => {
        if (updateData) {
            if (purchaseLinkId) {
                returnToList(editData)
            }
            setData(updateData)
            console.log(updateData)

            setUpdateData(null)

        }
    }, [updateData])

    useEffect(() => {
        retrivePriceFlag &&
            setRetrivePriceFlag(false)
    }, [link])

    const handleAddPurchaseLink = async () => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${auth.accessToken}`,
            },
        }
        try {
            await Api.post("/api/products/addPurchaseLinks", {
                "productId": id,
                "purchaseLink": {
                    purchaseLinkId,
                    siteType,
                    link,
                    originalPrice,
                    discountedPrice,
                    unit,
                    retrivePriceFlag,
                    title,
                    coupon,
                    discription,
                    visitingLink
                }
            }, config)
            setSiteType(1)
            setLink("")
            setVisitingLink("")
            setOriginalPrice("")
            setDiscountedPrice("")
            setUnit("")
            setRetrivePriceFlag(false)
            setTitle("")
            setCoupon("")
            setDiscription("")
            reRender()
            setEditData(null)

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
                    await Api.post("/api/products/addPurchaseLinks", {
                        "productId": id,
                        "purchaseLink": {
                            purchaseLinkId,
                            siteType,
                            link,
                            originalPrice,
                            discountedPrice,
                            unit,
                            retrivePriceFlag,
                            title,
                            coupon,
                            discription,
                            visitingLink
                        }
                    }, config)

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

    const handleCheckLink = async () => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${auth.accessToken}`,
            },
        }
        try {
            setLoading(true)
            const result = await Api.post("/api/products/check", { siteType, link }, config)
            console.log(result.data)
            setDiscountedPrice(result.data.discountedPrice)
            setOriginalPrice(result.data.regularPrice)
            setUnit(result.data.unit)
            setLoading(false)
            setShowRetrive(true)
        } catch (error) {
            if (error.response?.status === 403) {
                const accessToken = refresh()
                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
                try {
                    setLoading(true)
                    const result = await Api.post("/api/products/check", { siteType, link }, config)
                    console.log(result.data)
                    setDiscountedPrice(result.data.discountedPrice)
                    setOriginalPrice(result.data.regularPrice)
                    setUnit(result.data.unit)
                    setLoading(false)
                    setShowRetrive(true)

                } catch (error) {
                    setLoading(false)
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
        <div className=' bg-gray-200 w-4/5 p-4 flex flex-col rounded-2xl shadow-xl relative overflow-hidden'>


            {
                showRetrive ?
                    <div className='w-full h-full absolute top-0 left-0 flex justify-center items-center'>
                        <div className=' absolute w-full h-full bg-gray-500 opacity-60'>
                        </div>
                        <div
                            className='w-1/2 h-1/2 bg-white rounded-md shadow-lg z-[9999] flex flex-col items-center justify-between p-4'>
                            <h2 className=' font-bold text-2xl'>
                                Retrive Price By the link are</h2>
                            <div className=' w-2/4'>
                                {
                                    originalPrice &&
                                    <p className=' text-lg'>Original Price <span className='text-xl text-customBlue'>{originalPrice}{unit}</span></p>
                                }
                                <p className=' text-lg'>Discounted Price <span className='text-xl text-customBlue'>{discountedPrice}{unit}</span></p>

                            </div>
                            <div className='w-full flex justify-center'>
                                <button
                                    className='bg-gray-300 py-2 px-4 rounded-md hover:bg-customBlue hover:text-white'
                                    onClick={(e) => {
                                        setShowRetrive(false)
                                        setDiscountedPrice('')
                                        setOriginalPrice('')
                                    }}
                                >
                                    Cancel
                                </button>
                                <button
                                    className='bg-customBlue py-2 px-4 rounded-md hover:bg-sky-500 text-white ml-4'
                                    onClick={(e) => {
                                        setShowRetrive(false)
                                        setRetrivePriceFlag(true)
                                    }}
                                >
                                    Done
                                </button>

                            </div>
                        </div>
                    </div>
                    : null
            }
            {
                loading ?
                    <div className='w-full h-full absolute top-0 left-0 flex justify-center items-center'>
                        <div className=' absolute w-full h-full bg-gray-200 opacity-60'>
                        </div>
                        <ClipLoader
                            size={75}
                            loading={loading}
                            color={"#026CC4"}
                        />
                    </div> : null

            }
            <section className='p-0 2xl:p-2  flex items-start flex-col 2xl:flex-row 2xl:items-center '>
                <label className='mr-2 pl-1 pt-1 2xl:w-1/5 2xl:p-0 text-sm 2xl:text-base'>Site Name:</label>
                <select
                    className='px-2 py-1 border-none outline-none border-2 border-gray-400 rounded-sm w-full grow-0 2xl:grow '
                    value={siteType}
                    onChange={(e) => {
                        setSiteType(e.target.value)
                    }}
                >
                    <option value={1} >Amazon de</option>
                    <option value={2}>Ebay de</option>
                    <option value={3}>GeeksBuying</option>
                    <option value={4}>TomTop</option>
                    <option value={5}>3DJake</option>
                    <option value={6}>Ortur</option>
                    <option value={7}>AnyCubic</option>
                    <option value={8}>Artillery3D</option>
                    <option value={9}>BambuLab</option>
                    <option value={10}>Creality </option>
                    <option value={11}>Elegoo</option>
                    <option value={12}>Revopoint</option>
                    <option value={13}>Sculpfun</option>
                    <option value={14}>Two Trees</option>
                    <option value={15}>Qidi Tech</option>
                </select>
            </section>

            <section className='p-0 2xl:p-2  flex items-start flex-col 2xl:flex-row 2xl:items-center '>
                <label className='mr-2 pl-1 pt-1 2xl:w-1/5 2xl:p-0 text-sm 2xl:text-base'>Site Link:</label>
                <div className='w-full flex '>
                    <input
                        type='text'
                        className='grow px-2 py-1 outline-none border-2 border-gray-400 rounded-md'
                        value={link}
                        onChange={(e) => {
                            setLink(e.target.value)
                        }}
                    />

                    {
                        retrivePriceFlag ?
                            <img src={checkIcon} className=' w-5 mx-2' />
                            :
                            <button
                                className='px-2 py-1 bg-customBlue ml-2 text-white hover:bg-blue-500 rounded-md'
                                onClick={(e) => {
                                    handleCheckLink()
                                }}
                            >Check</button>
                    }
                </div>


            </section>
            <section className='p-0 2xl:p-2 flex items-start flex-col 2xl:flex-row 2xl:items-center w-full'>
                <label className='mr-2 pl-1 pt-1 2xl:w-1/5 2xl:p-0 text-sm 2xl:text-base'>Visiting Link:</label>
                <input
                    type='text'
                    className='px-2 py-1  outline-none border-2 border-gray-400 rounded-md w-full grow-0 2xl:grow'
                    value={visitingLink}
                    onChange={(e) => {
                        setVisitingLink(e.target.value)
                    }}
                />
            </section>
            <div className='grid grid-flow-col gap-2 2xl:block'>
                <section className='p-0 2xl:p-2  flex items-start flex-col 2xl:flex-row 2xl:items-center '>
                    <label className='mr-2 pl-1 pt-1 2xl:w-2/6 2xl:p-0 text-sm 2xl:text-base'>Original Price:</label>
                    <input
                        type='text'
                        className='px-2 py-1  outline-none border-2 border-gray-400 rounded-md w-full grow-0 2xl:grow'
                        disabled={retrivePriceFlag}
                        value={originalPrice}
                        onChange={(e) => {
                            setOriginalPrice(e.target.value)
                        }}
                    />
                </section>

                <section className='p-0 2xl:p-2  flex items-start flex-col 2xl:flex-row 2xl:items-center'>
                    <label className='mr-2 pl-1 pt-1 2xl:w-2/6 2xl:p-0 text-sm 2xl:text-base'>Discounteds Price:</label>
                    <input
                        type='text'
                        className='px-2 py-1  outline-none border-2 border-gray-400 rounded-md w-full grow-0 2xl:grow'
                        disabled={retrivePriceFlag}
                        value={discountedPrice}
                        onChange={(e) => [
                            setDiscountedPrice(e.target.value)
                        ]}
                    />
                </section>
            </div>


            <section className='p-0 2xl:p-2 flex items-start flex-col 2xl:flex-row 2xl:items-center'>
                <label className='mr-2 pl-1 pt-1 2xl:w-1/5 2xl:p-0 text-sm 2xl:text-base'>Site Title:</label>
                <input
                    type='text'
                    className='px-2 py-1  outline-none border-2 border-gray-400 rounded-md w-full grow-0 2xl:grow'
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                />
            </section>

            <section className='p-0 2xl:p-2  flex items-start flex-col 2xl:flex-row 2xl:items-center'>
                <label className='mr-2 pl-1 pt-1 2xl:w-1/5 2xl:p-0 text-sm 2xl:text-base'>Coupon:</label>
                <input
                    type='text'
                    className='px-2 py-1  outline-none border-2 border-gray-400 rounded-md w-full grow-0 2xl:grow'
                    value={coupon}
                    onChange={(e) => {
                        setCoupon(e.target.value)
                    }}
                />
            </section>

            <section className='p-0 2xl:p-2  flex items-start flex-col 2xl:flex-row 2xl:items-center '>
                <label className='mr-2 pl-1 pt-1 2xl:w-1/5 2xl:p-0 text-sm 2xl:text-base' >Description:</label>
                <textarea type='text'
                    rows={2}
                    className=" resize-none px-2 py-1  outline-none border-2 border-gray-400 rounded-md w-full grow-0 2xl:grow "
                    value={discription}
                    onChange={(e) => {
                        setDiscription(e.target.value)
                    }}
                />
            </section>
            <section className='flex justify-end mt-2'>
                <button
                    className='px-6 py-2 bg-customBlue text-white hover:bg-blue-500 rounded-md'
                    onClick={(e) => {
                        handleAddPurchaseLink()
                    }}
                >Save</button>
            </section>

        </div>
    )
}

export default PurchaseLinkForm