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



const PriceTile = ({ priceData }) => {
    const [price, setPrice] = useState(0)
    const [unit, setUnit] = useState('')
    const [logo, setLogo] = useState()
    const [isLoading, setIsLoading] = useState(false)

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
        <div className='flex  border-2 items-center justify-evenly border-blue-500 rounded-md py-2 h-14 my-2 w-full p-2' >
            <div className='w-1/2 h-full flex justify-center items-center rounded-xl p-2 bg-gray-300'>

            <img src={logo} alt="" className='w-full' />
            </div>
            <div className=' flex justify-center items-center'>
            {isLoading ?
                <div className='flex flex-col justify-center items-center py-2'>
                    <ClipLoader
                        size={10}
                        loading={isLoading}
                        color={"#026CC4"}
                    />
                </div>
                : <h1 className='pl-2 text-xl font-bold '>
                    {/* <span className='text-sm mt-1 font-light'>{unit === '€' && "Euro"}</span> */}
                    {price}
                    <span className='text-sm ml-1 font-light'>{unit === '$' ? "USD" :"Euro"}</span></h1>
            }
            </div>
            



        </div>
    )
}






const ComparisionCard = ({ card, selectedcards, handleCheckboxChange }) => {

    const [isChecked, setIsChecked] = useState(false)
    useEffect(()=>{
        console.log("is Called From CArd")
    })

    return (<div key={card.Id} className='flex items-center justify-between rounded-xl h-[350px] w-full mb-6'
        style={{ boxShadow: '-8px 0 15px rgba(203,213,225,0.5), 0 8px 15px rgba(203,213,225,0.5)' }}>
        <div className=' w-1/3 h-full '>
            <div className={`bg-cover bg-center h-full w-full rounded-l-xl`} style={{ backgroundImage: `url(/${card.ProductImages[0].path})` }} />
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
                    <button className='flex items-center bg-gray-200 my-2 px-4 py-2 rounded-md'>
                        <img src={imges} alt="" />
                        <h1 className='mx-2'>{card.coupon}</h1>
                    </button>
                </div>
                <div className='flex items-center'>
                    <input type='checkbox'
                        checked={isChecked}
                        onChange={() => {
                            handleCheckboxChange(card.Index)
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
                    <h1 className=' font-bold text-xl'>{card.price}</h1>

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
    )
}

export default ComparisionCard