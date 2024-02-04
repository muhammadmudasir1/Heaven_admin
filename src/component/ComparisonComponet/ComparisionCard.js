import React, { useState } from 'react'
import { Checkbox } from "@material-tailwind/react"
import imges from '../../imges/coupon.svg'
import imges1 from '../../imges/EBay_logo.png'

const ComparisionCard = ({ card, selectedcards, handleCheckboxChange }) => {

    const [isChecked, setIsChecked] = useState(false)

    return (<div key={card.Id} className='flex items-center justify-between rounded-xl h-[350px] w-full mb-6'
        style={{ boxShadow: '-8px 0 15px rgba(203,213,225,0.5), 0 8px 15px rgba(203,213,225,0.5)' }}>
        <div className=' w-1/3 h-full '>
            <div className={`bg-cover bg-center h-full w-full rounded-l-xl`} style={{ backgroundImage: `url(/${card.ProductImages[0].path})` }} />
        </div>
        <div className='flex items-center grow h-full pl-6'>
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
                    <h1 class=" text-lg font-light">Add to Comparison</h1>
                </div>
            </div>
            <div className=' flex justify-center w-2/5 h-full'>
                <div className='flex flex-col  items-center justify-center my-7 w-full border-l-[2px] border-gray-300'>
                    <h1 className=' font-bold text-xl'>{card.price}</h1>
                    <h1 className='text-black text-xl font-bold font-[Roboto]'>{card['Offical Price']}</h1>
                    <div className=''>
                        <div className='flex border-2 items-center justify-evenly border-blue-500 rounded-md py-2 px-6 my-2' >
                            <img src={imges1} alt="" className='h-full pr-2' />
                            <h1 className='pl-2 text-lg font-bold'>{card.price}</h1>
                        </div>
                        <div className='flex border-2 items-center justify-evenly border-blue-500 rounded-md py-2 px-6 my-2' >
                            <img src={imges1} alt="" className='h-full pr-2' />
                            <h1 className='pl-2 text-lg font-bold'>{card.price}</h1>
                        </div>
                        <div className='flex border-2 items-center justify-evenly border-blue-500 rounded-md py-2 px-6 my-2' >
                            <img src={imges1} alt="" className='h-full pr-2' />
                            <h1 className='pl-2 text-lg font-bold'>{card.price}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ComparisionCard