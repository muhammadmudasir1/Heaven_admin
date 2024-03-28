import React from 'react'
import { useState } from 'react'
import { FaCopy } from "react-icons/fa";
import { useEffect, useRef } from 'react';
import { ArrowForwardIos } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import Api from '../../api/Api';
import ClipLoader from 'react-spinners/ClipLoader';



const PriceTitle = ({ purchaseLink, activeCard, setActiveCard, ownIndex }) => {
    const [price, setPrice] = useState(0)
    const [unit, setUnit] = useState("")
    const [isLoading, setIsloading] = useState(false)


    useEffect(() => {
        const fetchPrice = async () => {
            try {
                setIsloading(true)
                const result = await Api.get(`/api/products/Price/${purchaseLink.purchaseLinksId}`)
                setIsloading(false)
                setPrice(result.data.discountedPrice)
                setUnit(result.data.unit)
            } catch (error) {
                console.log(error)
            }
        }
        fetchPrice()
    }, [purchaseLink])

    return (
        <button
            className={`${activeCard === ownIndex ? "bg-gray-100 text-customBlue" : "bg-customBlue text-white"}  text-base font-black flex flex-col items-center justify-center text-center w-full py-1 rounded-t-xl hover:bg-sky-500 hover:text-white`}
            onClick={(e) => {
                setActiveCard(ownIndex)
            }}
        >
            {purchaseLink.title}
            <br />
            <div className='py-2'>
                <ClipLoader
                    size={20}
                    loading={isLoading}
                    color={ownIndex === activeCard ? "#026CC4" : "#ffffff"}
                />
                {
                    !isLoading && <p className='text-2xl font-light'>{price}<span className='px-1'>{unit}</span></p>
                }
            </div>
        </button>
    )
}
const Card = ({ link }) => {
    const couponRef = useRef()
    const [price, setPrice] = useState(0)
    const [originalPrice, setOriginalPrice] = useState(0)
    const [unit, setUnit] = useState("")
    const [isLoading, setIsloading] = useState(false)


    useEffect(() => {
        const fetchPrice = async () => {
            try {
                setIsloading(true)
                const result = await Api.get(`/api/products/Price/${link.purchaseLinksId}`)
                setIsloading(false)
                setPrice(result.data.discountedPrice)
                setOriginalPrice(result.data.originalPrice)
                setUnit(result.data.unit)
            } catch (error) {
                console.log(error)
            }
        }
        fetchPrice()
    }, [link])

    const copyCoupon = () => {
        if (couponRef.current) {
            const copeid = couponRef.current.innerHTML;
            console.log(copeid)
            navigator.clipboard.writeText(copeid);
        }
    };


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
    return (
        <div className='w-full bg-gray-100 rounded-b-xl rounded-tr-xl p-4'>
            <div className='flex items-center'>
                <div className='w-3/4 px-8 py-5'>
                    <h1 className='text-neutral-800 text-3xl font-black py-4'>{sites[link.siteType - 1]}</h1>
                    <p className=''>{link.discription}</p>
                    <div className='flex items-center gap-2'>
                        <h1 className='text-neutral-700 text-xl font-bold'>Coupon code: <span ref={couponRef}>{link.coupon}</span></h1>
                        <FaCopy
                            className='hover:text-customBlue cursor-pointer'
                            onClick={(e) => { copyCoupon() }}
                            title="Copy"
                        />
                    </div>
                </div>
                <div className='w-[2px] h-36 bg-gray-500' />
                <div className='flex flex-col items-center justify-center pl-8 pb-4'>
                    <div className=''>
                        <ClipLoader
                            size={20}
                            loading={isLoading}
                            color={"#026CC4"}
                        />
                        {
                            !isLoading && <div className='flex flex-col items-center'>
                                {
                                    originalPrice &&
                                    <p className='text-neutral-800 text-xl font-light line-through pt-2 pb-1'>{originalPrice} <span className=''>{unit}</span></p>
                                }
                                <p className='text-neutral-800 text-3xl font-black pb-4'>{price}<span className='px-1'>{unit}</span></p>
                            </div>
                        }
                    </div>
                    <button className='rounded-xl px-8 bg-cyan-500 text-neutral-800 text-base font-black py-4'
                        onClick={(e) => {
                            window.open(link.visitingLink, "_blank")
                        }}
                    >Visit {sites[link.siteType - 1]}</button>
                </div>
            </div >
        </div >
    )
}

const MobileCard = ({ link }) => {
    const couponRef = useRef()
    const [price, setPrice] = useState(0)
    const [originalPrice, setOriginalPrice] = useState(0)
    const [unit, setUnit] = useState("")
    const [isLoading, setIsloading] = useState(false)


    useEffect(() => {
        const fetchPrice = async () => {
            setIsloading(true)
            const result = await Api.get(`/api/products/Price/${link.purchaseLinksId}`)
            setPrice(result.data.discountedPrice)
            setOriginalPrice(result.data.originalPrice)
            setUnit(result.data.unit)
            setIsloading(false)
        }
        fetchPrice()
    }, [link])

    const copyCoupon = () => {
        if (couponRef.current) {
            const copeid = couponRef.current.innerHTML;
            console.log(copeid)
            navigator.clipboard.writeText(copeid);
        }
    };

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
    return (
        <div className='bg-[#F4F4F4] my-2 rounded-xl'>
            <div className=' flex justify-between'>
                <div className='bg-[#026CC4] rounded-tl-xl rounded-br-xl px-5 text-white font-semibold'>{link.title}</div>
                <div className='flex items-center p-2 mx-2'>
                    <div>{link.coupon}</div>
                    <div className='px-2'><FaCopy onClick={(e) => copyCoupon()} /></div>
                </div>
            </div>
            <div className='grid grid-cols-6 px-5 py-2'>
                <div className='col-span-3'>
                    <h1 className='text-xl font-bold'>{sites[link.siteType - 1]}</h1>
                    <p className='line-clamp-6'>
                        {link.discription}
                    </p>
                </div>
                <div className='col-span-3 items-center justify-center py-2 '>

                    <div className=' h-3/5 flex items-center justify-center text-2xl font-bold'>
                        <div className='h-full border-l-[2px] border-black py-7 pl-6'>
                            <div className=''>
                                <ClipLoader
                                    size={20}
                                    loading={isLoading}
                                    color={"#026CC4"}
                                />
                                {
                                    !isLoading && <div className='flex flex-col items-center'>
                                        {
                                            originalPrice &&
                                            <p className='text-neutral-800 text-xl font-light line-through pt-2 pb-1'>{originalPrice} <span className=''>{unit}</span></p>
                                        }
                                        <p className='text-neutral-800 text-3xl font-black pb-4'>{price}<span className='px-1'>{unit}</span></p>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center bg-white mt-1 rounded-3xl py-2 px-4'
                        onClick={(e) => {
                            window.open(link.visitingLink, "_blank")
                        }}
                    >
                        <div className=''>Go to Website</div>
                        <div className='flex items-center justify-center rounded-full h-10 w-10 bg-[#026CC4]'>
                            <ArrowForwardIos fontSize='6px' className='text-white' />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}


const PriceCards = () => {
    const [active, setActive] = useState(0)
    const { id } = useParams()
    const [purchaseLinks, setPurchaseLinsks] = useState([])
    const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 800);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const result = await Api(`/api/products/PurchaseLinks/${id}`)
                setPurchaseLinsks(result.data)
                console.log(result.data)
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
                console.log(error)
            }
        }
        fetchData()
    }, [id])

    return (
        <>
            {!isMobile ?

                <div className='flex flex-col items-center justify-center w-full' id='purchaselinks'>
                    {
                        isLoading ?
                            <div className='flex flex-col items-center justify-start w-full pl-8 pr-12'>
                                <div className='grid grid-cols-4 w-full gap-2 '>
                                    <div className='w-full h-20 bg-gray-100 rounded-t-xl animate-pulse'></div>
                                </div>
                                <div className='w-full h-[200px] bg-gray-100 grid grid-cols-4 gap-4 p-4 animate-pulse'>
                                    <div className=' col-span-3 h-full animate-pulse'>
                                        <div className='w-full h-12 bg-gray-200 rounded-2xl' />
                                        <div className='w-full mt-4'>

                                            <div className='w-full h-5 mt-1 bg-gray-200 rounded-2xl animate-pulse' />
                                            <div className='w-full h-5 mt-1 bg-gray-200 rounded-2xl animate-pulse' />
                                            <div className='w-full h-5 mt-1 bg-gray-200 rounded-2xl animate-pulse' />
                                            <div className='w-full h-5 mt-1 bg-gray-200 rounded-2xl animate-pulse' />
                                        </div>
                                    </div>
                                    <div className=' flex flex-col justify-between'>
                                        <div className='w-full h-12 bg-gray-200 animate-pulse rounded-2xl' />
                                        
                                        <div className='w-full '>
                                            <div className='w-full h-8 bg-gray-200 animate-pulse rounded-2xl' />
                                            <div className='w-full h-8 mt-2 bg-gray-200 animate-pulse rounded-2xl' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className='flex flex-col items-center justify-start w-full pl-8 pr-12'>
                                <div className='grid grid-cols-4 w-full gap-2 '>
                                    {
                                        purchaseLinks.map((link, index) => {
                                            return <PriceTitle purchaseLink={link} ownIndex={index} activeCard={active} setActiveCard={setActive} />

                                        })
                                    }
                                </div>
                                {
                                    purchaseLinks.length > 0 &&
                                    <Card link={purchaseLinks[active]} />
                                }
                            </div>
                    }
                </div>
                :
                <div className=' px-11' id='purchaselinks'>
                    {
                        isLoading?
                        <div className='w-full h-[300px] bg-gray-200 rounded-xl p-4 animate-pulse'>
                            <div className='w-full h-8 rounded-2xl bg-gray-300 animate-pulse'/>
                            <div className='w-full h-4 mt-6 rounded-2xl bg-gray-300 animate-pulse'/>
                            <div className='w-full h-4 mt-2 rounded-2xl bg-gray-300 animate-pulse'/>
                            <div className='w-full h-4 mt-2 rounded-2xl bg-gray-300 animate-pulse'/>
                            <div className='w-full h-4 mt-2 rounded-2xl bg-gray-300 animate-pulse'/>
                            <div className='w-full h-24 mt-2 rounded-2xl bg-gray-300 animate-pulse'/>
                        </div>
                        :
                        <>
                        {purchaseLinks.map((item, index) => {
                            return <MobileCard link={item} />
                        })}
                        </>
                    }
                </div>
            }
        </>
    )
}

export default PriceCards
