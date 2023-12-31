import React, { useEffect, useState } from 'react'
import Api from '../../api/Api'
import ClipLoader from 'react-spinners/ClipLoader';
import { useParams } from 'react-router-dom';



const PurchaseLinkForm = (id) => {
    const [siteType, setSiteType] = useState(1)
    const [link, setLink] = useState("")
    const [loading, setLoading] = useState(false)
    const [originalPrice,setOriginalPrice]=useState('')
    const [discountedPrice,setDiscountedPrice]=useState('')
    const [unit,setUnit]=useState('')
    const [showRetrive,setShowRetrive]=useState(false)
    const [retrivePriceFlag,setRetrivePriceFlag]=useState(false)
    const [title,setTitle]=useState('')
    const [coupon,setCoupon]=useState('')
    const [discription,setDiscription]=useState('')


    const handleAddPurchaseLink=async ()=>{
        try {
            await Api.post("/api/products/addPurchaseLinks",{
                "productId":id,
                "purchaseLink":{
                    siteType,
                    link,
                    originalPrice,
                    discountedPrice,
                    unit,
                    retrivePriceFlag,
                    title,
                    coupon,
                    discription
                }
            })
            
        } catch (error) {
            console.log(error)
        }
    }

    const handleCheckLink = async () => {
        try {
            setLoading(true)
            const result = await Api.post("/api/products/check", { siteType, link })
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

    return (
        <div className=' bg-gray-200 w-4/5 p-4 flex flex-col rounded-2xl shadow-xl relative overflow-hidden'>


            {
                showRetrive?
                <div className='w-full h-full absolute top-0 left-0 flex justify-center items-center'>
                    <div className=' absolute w-full h-full bg-gray-500 opacity-60'>
                    </div>
                    <div
                    className='w-1/2 h-1/2 bg-white rounded-md shadow-lg z-[9999] flex flex-col items-center justify-between p-4'>
                        <h2 className=' font-bold text-2xl'>
                            Retrive Price By the link are</h2>
                        <div className=' w-2/4'>
                            {
                                originalPrice&&
                            <p  className=' text-lg'>Original Price <span className='text-xl text-customBlue'>{originalPrice}{unit}</span></p>
                            }
                            <p className=' text-lg'>Discounted Price <span className='text-xl text-customBlue'>{discountedPrice}{unit}</span></p>

                        </div>
                        <div className='w-full flex justify-center'>
                        <button
                        className='bg-gray-300 py-2 px-4 rounded-md hover:bg-customBlue hover:text-white'
                        onClick={(e)=>{
                            setShowRetrive(false)
                            setDiscountedPrice('')
                            setOriginalPrice('')
                        }}
                        >
                            Cancel
                        </button>
                        <button
                        className='bg-customBlue py-2 px-4 rounded-md hover:bg-sky-500 text-white ml-4'
                        onClick={(e)=>{
                            setShowRetrive(false)
                            setRetrivePriceFlag(true)
                        }}
                        >
                            Done
                        </button>
                        
                        </div>
                    </div>
                </div>
                :null
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
            <section className='p-2 flex items-center'>
                <label className='mr-2'>Site Name:</label>
                <select
                    className='grow px-2 py-1 border-none outline-none border-2 border-gray-400 rounded-sm'
                    value={siteType}
                    onChange={(e) => {
                        setSiteType(e.target.value)
                    }}
                >
                    <option value={1} >Amazon de</option>
                    <option value={2}>Ebay</option>
                    <option value={3}>GeeksBuyingScrap</option>
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

            <section className='p-2 flex items-center'>
                <label className='mr-2'>Site Link:</label>
                <input
                    type='text'
                    className='grow px-2 py-1 outline-none border-2 border-gray-400 rounded-md'
                    value={link}
                    onChange={(e) => {
                        setLink(e.target.value)
                    }}
                />
                <button
                    className='px-2 py-1 bg-customBlue ml-2 text-white hover:bg-blue-500 rounded-md'
                    onClick={(e) => {
                        handleCheckLink()
                    }}
                >Check</button>
            </section>

            {/* <section className='p-2 flex'> */}
                <section className='flex mr-2 items-center p-2'>
                    <label className='mr-2'>Original Price:</label>
                    <input
                    type='text'
                    className='grow px-2 py-1 outline-none border-2 border-gray-400 rounded-md'
                    disabled={retrivePriceFlag}
                    value={originalPrice}
                    onChange={(e)=>{
                        setOriginalPrice(e.target.value)
                    }}
                    />
                </section>
                <section className='flex ml-2 items-center p-2'>
                    <label className='mr-2'>Discounteds Price:</label>
                    <input
                    type='text'
                    className='grow px-2 py-1 outline-none border-2 border-gray-400 rounded-md'
                    disabled={retrivePriceFlag}
                    value={discountedPrice}
                    onChange={(e)=>[
                        setDiscountedPrice(e.target.value)
                    ]}
                    />
                </section>
            {/* </section> */}

            <section className='p-2 flex items-center'>
                <label className='mr-2'>Site Title:</label>
                <input
                type='text'
                className='grow px-2 py-1 outline-none border-2 border-gray-400 rounded-md'
                value={title}
                onChange={(e)=>{
                    setTitle(e.target.value)
                }}
                />
            </section>

            <section className='p-2 flex items-center'>
                <label className='mr-2'>Coupon:</label>
                <input
                type='text'
                className='grow px-2 py-1 outline-none border-2 border-gray-400 rounded-md'
                value={coupon}
                onChange={(e)=>{
                    setCoupon(e.target.value)
                }}
                />
            </section>

            <section className='p-2 flex items-start'>
                <label className='mr-2 mt-4' >Description:</label>
                <textarea type='text'
                    rows={5}
                    className=" resize-none  rounded-md outline-none  p-2 grow border-2 border-gray-400 "
                    value={discription}
                    onChange={(e)=>{
                        setDiscription(e.target.value)
                    }}
                />
            </section>
            <section className='flex justify-end mt-2'>
                <button
                className='px-6 py-2 bg-customBlue text-white hover:bg-blue-500 rounded-md'
                onClick={(e)=>{
                    handleAddPurchaseLink()
                }}
                >Save</button>
            </section>

        </div>
    )
}

export default PurchaseLinkForm