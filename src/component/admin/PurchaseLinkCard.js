import React, { useEffect, useState } from 'react'
import ClipLoader from 'react-spinners/ClipLoader';
import Api from '../../api/Api'
import { useAuth } from '../../context/AuthContext';
import useRefresh from '../../hooks/useRefresh';

const PurchaseLinkCard = ({ data,setUpdateData,remove }) => {
    const purchaselinkId = data?data.purchaseLinksId:null
    const [discountedPrice, setDiscountedPrice] = useState(null)
    const [originalPrice, setOriginalPrice] = useState(null)
    const [unit, setUnit] = useState(null)
    const [loading, setLoading] = useState(false)
    const {auth}=useAuth()
    const refresh=useRefresh()
    useEffect(() => {
        const fetchPrice = async () => {
            setLoading(true)
                try {
                const result = await Api.get(`/api/products/price/${purchaselinkId}`, {
                    headers: {
                        'Cache-Control': 'no-cache',
                    }
                })
                setDiscountedPrice(result.data.discountedPrice)
                setOriginalPrice(result.data.originalPrice)
                setUnit(result.data.unit)
                setLoading(false)
                }catch (error) {
                    setLoading(false)
                    console.log(error)
                }
                }
                if(purchaselinkId){

                    fetchPrice()
                }

        
    }, [])

    const handleEdit=(e)=>{
        const newdata={
        "retrivePriceFlag":data.retrivePriceFlag,
        "purchaseLinkId":purchaselinkId,
        "link":data.link,
        "originalPrice":originalPrice,
        "discountedPrice":discountedPrice,
        "unit":unit,
        "title":data.title,
        "coupon":data.coupon,
        "discription":data.discription,
        "siteType":data.siteType,
        "visitingLink":data.visitingLink,
        "siteName":data.siteName
        }
        setUpdateData(newdata)
        remove(purchaselinkId)
    }

    const handleDelete=async (e)=>{
        const config = {
            headers: {
                Authorization: `Bearer ${auth.accessToken}`
            }
        }
        try {
            await Api.delete(`/api/products/PurchaseLinks/${purchaselinkId}`,config)
            remove(purchaselinkId)
        } catch (error){
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
                    await Api.delete(`/api/products/PurchaseLinks/${purchaselinkId}`,config)
                    remove(purchaselinkId)
                } catch (error) {
                    console.log(error)
                }
            }
        }
    }
    

    const sites = [
        "Amazon",
        "Ebay",
        "GeekBuying",
        "TomTop",
        "3DJake",
        "Ortur",
        "AnyCubic",
        "Artillery3D",
        "BambuLab",
        "Creality",
        "Elegoo",
        "Revopoint",
        "Sculpfun",
        "TwoTrees",
        "QidiTech"]
        if (purchaselinkId===null){
            return null
        }
    return (

        <div className='w-full mt-4 bg-gray-100 shadow-lg px-4 rounded-lg'>
            <div className='py-2 flex justify-between'>
                <p className='border-b-4 border-customBlue'>{data.title}</p>
                <div>
                    <button className='px-4 py-2 bg-customBlue rounded-lg text-white hover:bg-sky-500'
                    onClick={(e)=>{
                        handleEdit(e)
                    }}
                    >
                        Edit</button>
                    <button className='px-4 py-2 bg-red-500 hover:bg-red-400 rounded-lg text-white ml-2'
                    onClick={(e)=>{
                        handleDelete(e)
                    }}
                    >Delete</button>
                </div>
            </div>
            <div className='grid grid-cols-8'>
                <div className=' col-span-6 border-r-2 mb-4'>
                    <h3 className=' text-2xl font-bold'>{data.siteType==16?data.siteName:sites[data.siteType - 1]}</h3>
                    <p>{data.discription}</p>

                    {
                        data.coupon ?
                            <p className='pt-4'>Coupon: <span className='font-bold text-lg'>{data.coupon}</span></p>
                            : null
                    }

                </div>
                <div className='flex flex-col col-span-2 justify-between'>

                    <div className='flex flex-col items-end'>
                        {
                            loading ?
                                <div className='flex justify-center items-center w-full mt-4'>
                                    <ClipLoader
                                        size={50}
                                        loading={loading}
                                        color={"#026CC4"}
                                    />

                                </div>
                                :
                                <>{
                                    originalPrice ?
                                        <p className='text-lg mr-4 line-through'>{originalPrice}{unit}</p>
                                        : null
                                }
                                    <p className='text-3xl font-bold mr-2 text-customBlue'>{discountedPrice}{unit}</p>
                                </>
                        }
                    </div>

                    <div className='w-full flex pl-4 mb-4'>

                        <a href="#"
                        className='mt-4 py-1 grow rounded-lg text-center text-lg text-white bg-customBlue hover:bg-sky-500'
                        onClick={(e)=>{
                            window.open(data.visitingLink,"_blank")
                        }}
                        >
                        Visit</a>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default PurchaseLinkCard