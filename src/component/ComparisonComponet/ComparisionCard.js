import React, { useEffect, useState } from 'react'
import { Checkbox } from "@material-tailwind/react"
import imges from '../../imges/coupon.svg'
import ebay from '../../imges/EBay_logo.png'
import amazon from '../../imges/amazon.png'
import geeksbuying from '../../imges/geeksbuying.png'
import anyCubic from '../../imges/anyCubic.png'
import artillery from '../../imges/artillery.png'
import bambuLab from '../../imges/bambuLab.svg'
// import creality from '../../imges/bambuLab.svg'
import creality from '../../imges/creality.png'
import elegoo from '../../imges/elegoo.png'
import jake from '../../imges/jake.svg'
import ortur from '../../imges/ortur.png'
import qidi from '../../imges/qidi.png'
import revopoint from '../../imges/revopoint.png'
import sculpfun from '../../imges/sculpfun.png'
import tomTop from '../../imges/tomTop.png'
import twotrees from '../../imges/twotrees.png'
import Api from '../../api/Api'
import ClipLoader from 'react-spinners/ClipLoader';
import useWindowDimensions from '../../hooks/useWindowDimensions'
import { FaAnglesDown } from "react-icons/fa6";

const PriceTile = ({ priceData }) => {
    const [price, setPrice] = useState(0)
    const [unit, setUnit] = useState('')
    const [logo, setLogo] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const { width } = useWindowDimensions()

    useEffect(() => {

        switch (priceData.siteType) {
            case 1:
                setLogo(amazon)
                break;
            case 2:
                setLogo(ebay)
                break;
            case 3:
                setLogo(geeksbuying)
                break;
            case 4:
                setLogo(tomTop)
                break;
            case 5:
                setLogo(jake)
                break;
            case 6:
                setLogo(ortur)
                break;
            case 7:
                setLogo(anyCubic)
                break;
            case 8:
                setLogo(artillery)
                break;
            case 9:
                setLogo(bambuLab)
                break;
            case 10:
                setLogo(creality)
                break;
            case 11:
                setLogo(elegoo)
                break;
            case 12:
                setLogo(revopoint)
                break;
            case 13:
                setLogo(sculpfun)
                break;
            case 14:
                setLogo(twotrees)
                break;
            case 15:
                setLogo(qidi)
                break;

        }




        const fetchPrice = async () => {
            setIsLoading(true)
            try {
                const response = await Api.get(`/api/products/price/${priceData.purchaseLinksId}`)
                setPrice(response.data.discountedPrice)
                setUnit(response.data.unit)

            } catch (error) {
                console.log(error)
            }

            setIsLoading(false)
        }
        fetchPrice()
    }, [priceData])
    return (
        <div className='flex border-2 items-center justify-evenly border-blue-500 md:rounded-md rounded-xl py-2 md:h-14 h-10 my-2 w-full p-2 hover:bg-customBlue cursor-pointer group' >
            <div className='md:w-1/2 w-1/3 h-full flex justify-center items-center rounded-xl  p-2 bg-gray-300 '>
                {priceData.siteType==16?
                <p className=' text-xs'>{priceData.siteName}</p>
                :<img src={logo} alt="" className='w-full' />
                }
            </div>
            <div className=' flex justify-center items-center group group-hover:text-white'>
                {isLoading ?
                    <div className='flex flex-col justify-center items-center py-2'>
                        <ClipLoader
                            size={10}
                            loading={isLoading}
                            color={"#026CC4"}
                        />
                    </div>
                    : <h1 className='pl-2 md:text-xl text-lg  font-bold group-hover:text-white '>
                        {/* <span className='text-sm mt-1 font-light'>{unit === '€' && "Euro"}</span> */}
                        {price}
                        <span className='text-sm ml-1 font-light'>{unit === '$' ? "USD" : "Euro"}</span></h1>
                }
            </div>




        </div>
    )
}






const ComparisionCard = ({ card, selectedcards, handleCheckboxChange, handleCouponCard }) => {

    const [isChecked, setIsChecked] = useState(false)
    const [purchaselinks, setPurchaseLinks] = useState([])
    const { width } = useWindowDimensions()
    useEffect(() => {
        console.log(card)
        let purchaselink = card.purchaseLinks.map((element) => {
            if (element.coupon) {
                let site = ""
                switch (element.siteType) {
                    case 1:
                        site = "Amazon"
                        break;
                    case 2:
                        site = "Ebay"
                        break;
                    case 3:
                        site = "Geeksbuying"
                        break;
                    case 4:
                        site = "TomTop"
                        break;
                    case 5:
                        site = "3D Jake"
                        break;
                    case 6:
                        site = "Ortur"
                        break;
                    case 7:
                        site = "AnyCubic"
                        break;
                    case 8:
                        site = "Artillery 3D"
                        break;
                    case 9:
                        site = "BambuLab"
                        break;
                    case 10:
                        site = "Creality"
                        break;
                    case 11:
                        site = "Elegoo"
                        break;
                    case 12:
                        site = "Revopoint"
                        break;
                    case 13:
                        site = "Sculpfun"
                        break;
                    case 14:
                        site = "Twotrees"
                        break;
                    case 15:
                        site = "Qidi"
                        break;
                    case 16:
                        site= element.siteName 

                }
                let result = {
                    'site': site,
                    'coupon': element.coupon
                }
                return result
            }
        });
        purchaselink = purchaselink.filter((element) => {
            if (element) {
                return element
            }
        })
        setPurchaseLinks(purchaselink)
    }, [])

    return (
        width > 600 ?
            <div key={card.Id} className='flex items-center justify-between rounded-xl h-[350px] w-full mb-6'
                style={{ boxShadow: '-8px 0 15px rgba(203,213,225,0.5), 0 8px 15px rgba(203,213,225,0.5)' }}>
                <div className=' w-1/3 h-full '>
                    <div className={`bg-cover bg-center h-full w-full rounded-l-xl`} style={{ backgroundImage: `url(/api/${card.ProductImages[0].path})` }} />
                </div>
                <div className='flex items-center w-2/3 h-full pl-6'>
                    <div className=' w-3/5 flex flex-col justify-between h-full py-3'>
                        <div>
                            <h1 className='text-neutral-800 text-2xl font-semibold font-[Roboto] my-3 line-clamp-2'>{card.product_name}</h1>
                            <div className='px-2'>
                                {
                                    card.productType == 1 ?
                                        <ul className=''>
                                            <div className='flex items-center'>
                                                <li className=' text-lg font-bold pr-2 list-disc'>Pixel Resolution: </li>
                                                <li>{card.SLA && card.SLA.pixelResolution}</li>
                                            </div>
                                            <div className='flex items-center'>
                                                <li className=' text-lg font-bold pr-2 list-disc'>XY Pixel Resolution: </li>
                                                <li>{card.SLA && card.SLA.XYPixelResolution}</li>
                                            </div>
                                            <div className='flex items-center'>
                                                <li className=' text-lg font-bold pr-2 list-disc'>Z Axis Resolution: </li>
                                                <li>{card.SLA && card.SLA.ZAxisResolution}</li>
                                            </div>
                                            <div className='flex items-center'>
                                                <li className=' text-lg font-bold pr-2 list-disc'>Light Technology: </li>
                                                <li>{card.SLA && card.SLA.lightTechnology}</li>
                                            </div>
                                        </ul>
                                        : card.productType == 2 ?
                                            <ul className=''>
                                                <div className='flex items-center'>
                                                    <li className=' text-lg font-bold pr-2 list-disc'>Print Volume: </li>
                                                    <li>{card.FDM && card.FDM.printVolume}</li>
                                                </div>
                                                <div className='flex items-center'>
                                                    <li className=' text-lg font-bold pr-2 list-disc'>Print Speed: </li>
                                                    <li>{card.FDM && card.FDM.printSpeed}</li>
                                                </div>
                                                <div className='flex items-center'>
                                                    <li className=' text-lg font-bold pr-2 list-disc'>Filament Compatibility: </li>
                                                    <li>{card.FDM && card.FDM.filamentCompatibility}</li>
                                                </div>
                                                <div className='flex items-center'>
                                                    <li className=' text-lg font-bold pr-2 list-disc'>Printing Accuracy XY Resolution: </li>
                                                    <li>{card.FDM && card.FDM.printingAccuracyXYResolution}</li>
                                                </div>
                                            </ul>
                                            : card.productType == 3 ?
                                                <ul className=''>
                                                    <div className='flex items-center'>
                                                        <li className=' text-lg font-bold pr-2 list-disc'>Laser Power: </li>
                                                        <li>{card.LeaserCutter && card.LeaserCutter.laserPower}</li>
                                                    </div>
                                                    <div className='flex items-center'>
                                                        <li className=' text-lg font-bold pr-2 list-disc'>Laser Wavelength: </li>
                                                        <li>{card.LeaserCutter && card.LeaserCutter.laserWavelength}</li>
                                                    </div>
                                                    <div className='flex items-center'>
                                                        <li className=' text-lg font-bold pr-2 list-disc'>Engraving Accuracy: </li>
                                                        <li>{card.LeaserCutter && card.LeaserCutter.engravingAccuracy}</li>
                                                    </div>
                                                    <div className='flex items-center'>
                                                        <li className=' text-lg font-bold pr-2 list-disc'>Engraving Area: </li>
                                                        <li>{card.LeaserCutter && card.LeaserCutter.engravingArea}</li>
                                                    </div>
                                                </ul>
                                                : card.productType && <ul className=''>
                                                    <div className='flex items-center'>
                                                        <li className=' text-lg font-bold pr-2 list-disc'>Scan Accuracy: </li>
                                                        <li>{card.scanner && card.scanner.scanAccuracy}</li>
                                                    </div>
                                                    <div className='flex items-center'>
                                                        <li className=' text-lg font-bold pr-2 list-disc'> Scanning Distance: </li>
                                                        <li>{card.scanner && card.scanner.scanningDistance}</li>
                                                    </div>
                                                    <div className='flex items-center'>
                                                        <li className=' text-lg font-bold pr-2 list-disc'>Scan Speed: </li>
                                                        <li>{card.scanner && card.scanner.scanSpeed}</li>
                                                    </div>
                                                    <div className='flex items-center'>
                                                        <li className=' text-lg font-bold pr-2 list-disc'>Scan Quality: </li>
                                                        <li>{card.scanner && card.scanner.scanQuality}</li>
                                                    </div>
                                                </ul>
                                }

                            </div>
                            {
                                purchaselinks && purchaselinks.length > 0 &&

                                <button className='flex items-center bg-gray-200 my-2 px-4 py-2 rounded-md'
                                    onClick={(e) => {
                                        handleCouponCard(true, e.currentTarget.offsetTop, purchaselinks)
                                        
                                    }}
                                >
                                    <img src={imges} alt="" />
                                    <h1 className='mx-2'>Coupon</h1>
                                </button>

                            }
                        </div>
                        <div className='flex items-center'>
                            <input type='checkbox'
                                checked={isChecked}
                                onChange={() => {
                                    handleCheckboxChange({
                                        "Id": card.Id,
                                        "image": card.ProductImages[0].path,
                                        "title": card.product_name,
                                        "price": card.price
                                    })
                                    if (selectedcards.length < 4) {
                                        setIsChecked((prev) => {
                                            return !prev
                                        })
                                    }
                                    else {
                                        setIsChecked(false)
                                    }
                                }}
                                className='h-5 w-5 mr-4' />
                            <h1 className=" text-lg font-light">Add to Comparison</h1>
                        </div>
                    </div>
                    <div className=' flex justify-center w-2/5 h-full '>
                        <div className='flex flex-col  items-center justify-around my-7 w-full border-l-[2px] border-gray-300 '>
                            <div className='flex flex-col justify-start items-center h-1/5 '>
                                <p className='text-lg'>Offical Price:</p>
                                <h1 className=' font-bold text-xl'>
                                <span className='font-light'>{card && card.unit == "€" && "Euro"}  </span>
                                    {card && card.price}
                                    <span className='font-light'>  {card && card.unit == "$" && "USD"}</span>
                                </h1>

                            </div>
                            <div className='px-6 w-full'>
                                {card.purchaseLinks.map((link) => {
                                    return <PriceTile
                                        key={link.purchaseLinksId}
                                        priceData={link} />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            : <div className='w-full h-[260px] px-2 mt-4 flex flex-col rounded-xl overflow-hidden'
            style={{
                boxShadow:
                  "-8px 0 15px rgba(203, 213, 225, 0.5), 0 8px 15px rgba(203, 213, 225, 0.5)",
              }}
            >
                <div className='w-full h-10 flex items-center'>
                <input type='checkbox'
                                checked={isChecked}
                                onChange={() => {
                                    handleCheckboxChange({
                                        "Id": card.Id,
                                        "image": card.ProductImages[0].path,
                                        "title": card.product_name,
                                        "price": card.price
                                    })
                                    if (selectedcards.length < 4) {
                                        setIsChecked((prev) => {
                                            return !prev
                                        })
                                    }
                                    else {
                                        setIsChecked(false)
                                    }
                                }}
                                className='h-5 w-5 mr-4 rounded-full' />
                                <h2>Add to Comparison</h2>
                </div>
                <div className='w-full grid grid-cols-8 flex-grow '>
                    <div className='  h-full col-span-3'>
                        <div className={`bg-cover bg-center h-2/3 w-full mt-3`} style={{ backgroundImage: `url(/api/${card.ProductImages[0].path})` }} />
                    </div>
                    <div className=' col-span-5 h-full'>
                        <h2 className='w-full line-clamp-2 pl-2 text-xl' title={card.product_name}>
                            {card.product_name}
                        </h2>
                        <div className='w-2/3 pl-2 mt-2'>
                            {card.purchaseLinks.map((link) => {
                                return <PriceTile
                                    key={link.purchaseLinksId}
                                    priceData={link} />
                            })}
                        </div>
                        <div>
                            {
                                purchaselinks && purchaselinks.length > 0 &&

                                <button className='flex items-center bg-gray-200 my-2 px-2 py-1  rounded-xl ml-2'
                                    onClick={(e) => {
                                        handleCouponCard(true, e.currentTarget.offsetTop, purchaselinks)
                                        console.log("coupon")
                                    }}
                                >
                                    <img src={imges} alt="" className='w-6 md:w-10'/>
                                    <h1 className='mx-2 md:text-base text-small'>Coupon</h1>
                                </button>

                            }
                        </div>
                    </div>
                </div>
                <div className='w-full h-10 flex justify-center items-center'><p className='mx-2 text-xl font-thin text-gray-600'>More Information </p> <FaAnglesDown className='text-gray-600'/> </div>
            </div>
    )
}

export default ComparisionCard