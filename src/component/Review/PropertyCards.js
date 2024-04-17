import React, { useState } from 'react'
import { MdOutlineSpeed } from "react-icons/md";
import { GoCodespaces } from "react-icons/go";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { RiPrinterCloudFill } from "react-icons/ri";
import { useEffect } from 'react';
import { TbWaveSine } from "react-icons/tb";
import { GiLaserPrecision } from "react-icons/gi";
import { SiEnvoyproxy } from "react-icons/si";
import { MdFitScreen } from "react-icons/md";
import useWindowDimensions from '../../hooks/useWindowDimensions';
import engraving from '../../imges/laser.png'
import area from '../../imges/area.png'
import { IoIosQrScanner } from "react-icons/io";
import { RxSpaceBetweenHorizontally } from "react-icons/rx";
import quality from '../../imges/quality.png'

const PropertyCards = ({ specs, productType }) => {
    const {width}=useWindowDimensions()

    return (
        // width>600 ?
            <div className='lg:bg-[#C2DCF0] lg:w-full lg:m-0 m-8 flex flex-col row-span-3 relative'>
                {productType === 1 && specs &&<>
                    <div className='lg:flex grid grid-cols-2 items-center justify-evenly lg:pt-8 lg:pb-4 lg:mb-0 mb-4'>
                        <div className='lg:flex items-center grid grid-col-4 grid-flow-col'>
                            <MdOutlineSpeed size={width>600?60:30} />
                            <div className='px-2 lg:px-4 col-span-3'>
                                <h1 className='font-semibold text-base'>Print Speed</h1>
                                <h3 className='font-extralight'>{specs.printSpeed}</h3>
                            </div>
                        </div>
                        <div className='lg:flex items-center grid grid-col-4 grid-flow-col'>
                            <GiLaserPrecision size={width>600?60:30} />
                            <div className='px-2 lg:px-4 col-span-3'>
                                <h1 className='font-semibold text-base'>Light Technology</h1>
                                <h3 className='font-extralight'>{specs.lightTechnology}</h3>
                            </div>
                        </div>

                    </div>
                    <div className='lg:flex grid grid-cols-2 items-center justify-evenly lg:pt-8 lg:pb-4 lg:mb-0 mb-4'>
                        <div className='lg:flex items-center grid grid-col-4 grid-flow-col'>
                            <SiEnvoyproxy size={width>600?60:30} />
                            <div className='px-2 lg:px-4 col-span-3'>
                                <h1 className='font-semibold text-base'>Z Axis Resolution</h1>
                                <h3 className='font-extralight'>{specs.ZAxisResolution}</h3>
                            </div>
                        </div>

                        <div className='lg:flex items-center grid grid-col-4 grid-flow-col'>
                            <MdFitScreen size={width>600?60:30} />
                            <div className='px-2 lg:px-4 col-span-3'>
                                <h1 className='font-semibold text-base'>Print Speed</h1>
                                <h3 className='font-extralight'>{specs.pixelResolution}</h3>
                            </div>
                        </div>
                    </div>
                </>}
                {productType === 2 && specs && <>
                    <div className='lg:flex grid grid-cols-2 items-center justify-evenly lg:pt-8 lg:pb-4 lg:mb-0 mb-4'>
                        <div className='lg:flex items-center grid grid-col-4 grid-flow-col'>
                            <MdOutlineSpeed size={width>600?60:30} />
                            <div className='px-2 lg:px-4 col-span-3'>
                                <h1 className='font-semibold text-base'>Print Speed</h1>
                                <h3 className='font-extralight'>{specs.printSpeed}</h3>
                            </div>
                        </div>
                        <div className='lg:flex items-center grid grid-col-4 grid-flow-col'>
                            <GoCodespaces size={width>600?60:30} />
                            <div className='px-2 lg:px-4 col-span-3'>
                                <h1 className='font-semibold text-base'>Motherboard</h1>
                                <h3 className='font-extralight'>{specs.motherboard}</h3>
                            </div>
                        </div>

                    </div>
                    <div className='lg:flex grid grid-cols-2 items-center justify-evenly lg:pt-8 lg:pb-4 lg:mb-0 mb-4'>

                        <div className='lg:flex items-center grid grid-col-4 grid-flow-col'>

                            <FaTemperatureThreeQuarters size={width>600?60:30} />

                            <div className='px-2 lg:px-4 col-span-3'>
                                <h1 className='font-semibold text-base'>Print Temperature</h1>
                                <h3 className='font-extralight'>{specs.printTempurature}</h3>
                            </div>
                        </div>

                        <div className='lg:flex items-center grid grid-col-4 grid-flow-col'>

                            <RiPrinterCloudFill size={width>600?60:30} />

                            <div className='px-2 lg:px-4 col-span-3'>
                                <h1 className='font-semibold text-base'>Print Accuracy</h1>
                                <h3 className='font-extralight'>{specs.printingAccuracyXYResolution}</h3>
                            </div>
                        </div>
                    </div>
                </>}
                {productType === 3 && specs && <>
                    <div className='lg:flex grid grid-cols-2 items-center justify-evenly lg:pt-8 lg:pb-4 lg:mb-0 mb-4'>

                        <div className='lg:flex items-center grid grid-col-4 grid-flow-col'>
                            <GiLaserPrecision size={width>600?60:30} />
                            <div className='px-2 lg:px-4 col-span-3'>
                                <h1 className='font-semibold text-base'>Laser Power</h1>
                                <h3 className='font-extralight'>{specs.laserPower}</h3>
                            </div>
                        </div>
                        <div className='lg:flex items-center grid grid-col-4 grid-flow-col'>
                            <TbWaveSine size={width>600?60:30} />
                            <div className='px-2 lg:px-4 col-span-3'>
                                <h1 className='font-semibold text-base'>Laser Wavelength</h1>
                                <h3 className='font-extralight'>{specs.laserWavelength}</h3>
                            </div>
                        </div>

                    </div>
                    <div className='lg:flex grid grid-cols-2 items-center justify-evenly lg:pt-8 lg:pb-4 lg:mb-0 mb-4'>

                        <div className='lg:flex items-center grid grid-col-4 grid-flow-col'>
                            <img src={engraving} className=' lg:w-16 w-8'/>
                            <div className='px-2 lg:px-4 col-span-3'>
                                <h1 className='font-semibold text-base'>Engraving Accuracy</h1>
                                <h3 className='font-extralight'>{specs.engravingAccuracy}</h3>
                            </div>
                        </div>

                        <div className='lg:flex items-center grid grid-col-4 grid-flow-col'>
                            <img src={area} className=' lg:w-14 w-8'/>
                            <div className='px-2 lg:px-4 col-span-3'>
                                <h1 className='font-semibold text-base'>Engraving Area</h1>
                                <h3 className='font-extralight'>{specs.engravingArea}</h3>
                            </div>
                        </div>

                       

                    </div>
                </>}
                {productType === 4 && specs && <>
                    <div className='lg:flex grid grid-cols-2 items-center justify-evenly lg:pt-8 lg:pb-4 lg:mb-0 mb-4'>
                        <div className='lg:flex items-center grid grid-col-4 grid-flow-col'>
                            <IoIosQrScanner size={width>600?60:30} />
                            <div className='px-2 lg:px-4 col-span-3'>
                                <h1 className='font-semibold text-base'>Scan Accuracy</h1>
                                <h3 className='font-extralight'>{specs.scanAccuracy}</h3>
                            </div>
                        </div>
                        <div className='lg:flex items-center grid grid-col-4 grid-flow-col'>
                            <RxSpaceBetweenHorizontally size={width>600?60:30} />
                            <div className='px-2 lg:px-4 col-span-3'>
                                <h1 className='font-semibold text-base'>Scan Distance</h1>
                                <h3 className='font-extralight'>{specs.scanningDistance}</h3>
                            </div>
                        </div>

                    </div>
                    <div className='lg:flex grid grid-cols-2 items-center justify-evenly lg:pt-8 lg:pb-4 lg:mb-0 mb-4'>

                        <div className='lg:flex items-center grid grid-col-4 grid-flow-col'>
                        <MdOutlineSpeed size={width>600?60:30} />
                            <div className='px-2 lg:px-4 col-span-3'>
                                <h1 className='font-semibold text-base'>Scan Speed</h1>
                                <h3 className='font-extralight'>{specs.scanSpeed}</h3>
                            </div>
                        </div>

                        <div className='lg:flex items-center grid grid-col-4 grid-flow-col'>
                            <img src={quality} className=' lg:w-14 w-7'/>
                            <div className='px-2 lg:px-4 col-span-3'>
                                <h1 className='font-semibold text-base'>Scan Quality</h1>
                                <h3 className='font-extralight'>{specs.scanQuality}</h3>
                            </div>
                        </div>

                       

                    </div>
                </>}

            </div>
            // : <div className='grid grid-cols-2 px-6 gap-2'>
            //     {productType === 1 && specs &&<>
            //             <div className='flex items-center justify-center bg-gray-200 rounded-lg'>
            //                 <MdOutlineSpeed size={40} />
            //                 <div className='px-3'>
            //                     <h1 className='font-semibold text-base'>Print Speed</h1>
            //                     <h3 className='font-extralight'>{specs.printSpeed}</h3>
            //                 </div>
            //             </div>
            //             <div className='flex items-center justify-center bg-gray-200 rounded-lg'>
            //                 <GiLaserPrecision size={40} />
            //                 <div className='px-1 '>
            //                     <h1 className='font-semibold text-base'>Light Technology</h1>
            //                     <h3 className='font-extralight'>{specs.lightTechnology}</h3>
            //                 </div>
            //             </div>

            //             <div className='flex items-center justify-center bg-gray-200 rounded-lg'>
            //                 <SiEnvoyproxy size={40} />
            //                 <div className='px-3'>
            //                     <h1 className='font-semibold text-base'>Z Axis Resolution</h1>
            //                     <h3 className='font-extralight'>{specs.ZAxisResolution}</h3>
            //                 </div>
            //             </div>

            //             <div className='flex items-center justify-center bg-gray-200 rounded-lg'>
            //                 <MdFitScreen size={40} />
            //                 <div className='px-3'>
            //                     <h1 className='font-semibold text-base'>Pixel Resolution</h1>
            //                     <h3 className='font-extralight'>{specs.pixelResolution}</h3>
            //                 </div>
            //             </div>
            //     </>}
            //     {productType === 2 && specs &&<>
            //             <div className='flex items-center justify-center bg-gray-200 rounded-lg'>
            //                 <MdOutlineSpeed size={40} />
            //                 <div className='px-3'>
            //                     <h1 className='font-semibold text-base'>Print Speed</h1>
            //                     <h3 className='font-extralight'>{specs.printSpeed}</h3>
            //                 </div>
            //             </div>
            //             <div className='flex items-center justify-center bg-gray-200 rounded-lg'>
            //                 <GoCodespaces size={40} />
            //                 <div className='px-1 '>
            //                     <h1 className='font-semibold text-base'>Motherboard</h1>
            //                     <h3 className='font-extralight'>{specs.motherboard}</h3>
            //                 </div>
            //             </div>

            //             <div className='flex items-center justify-center bg-gray-200 rounded-lg'>
            //                 <FaTemperatureThreeQuarters size={40} />
            //                 <div className='px-3'>
            //                     <h1 className='font-semibold text-base'>Print Tempurature</h1>
            //                     <h3 className='font-extralight'>{specs.printTempurature}</h3>
            //                 </div>
            //             </div>

            //             <div className='flex items-center justify-center bg-gray-200 rounded-lg'>
            //                 <RiPrinterCloudFill size={40} />
            //                 <div className='px-3'>
            //                     <h1 className='font-semibold text-base'>Print Accuracy</h1>
            //                     <h3 className='font-extralight'>{specs.printingAccuracyXYResolution}</h3>
            //                 </div>
            //             </div>
            //     </>}
            //     {productType === 3 && specs &&<>
            //             <div className='flex items-center justify-center bg-gray-200 rounded-lg'>
            //                 <GiLaserPrecision size={40} />
            //                 <div className='px-3'>
            //                     <h1 className='font-semibold text-base'>Laser Power</h1>
            //                     <h3 className='font-extralight'>{specs.laserPower}</h3>
            //                 </div>
            //             </div>
            //             <div className='flex items-center justify-center bg-gray-200 rounded-lg'>
            //                 <TbWaveSine size={40} />
            //                 <div className='px-1 '>
            //                     <h1 className='font-semibold text-base'>Laser Wavelength</h1>
            //                     <h3 className='font-extralight'>{specs.laserWavelength}</h3>
            //                 </div>
            //             </div>

            //             <div className='flex items-center justify-center bg-gray-200 rounded-lg'>
            //                 <FaTemperatureThreeQuarters size={40} />
            //                 <div className='px-3'>
            //                     <h1 className='font-semibold text-base'>Engraving Accuracy</h1>
            //                     <h3 className='font-extralight'>{specs.engravingAccuracy}</h3>
            //                 </div>
            //             </div>

            //             <div className='flex items-center justify-center bg-gray-200 rounded-lg'>
            //                 <RiPrinterCloudFill size={40} />
            //                 <div className='px-3'>
            //                     <h1 className='font-semibold text-base'>Engraving Area</h1>
            //                     <h3 className='font-extralight'>{specs.engravingArea}</h3>
            //                 </div>
            //             </div>
            //     </>}
            //     {productType === 4 && specs &&<>
            //             <div className='flex items-center justify-center bg-gray-200 rounded-lg'>
            //                 <IoIosQrScanner size={40} />
            //                 <div className='px-3'>
            //                     <h1 className='font-semibold text-base'>Scan Accuracy</h1>
            //                     <h3 className='font-extralight'>{specs.scanAccuracy}</h3>
            //                 </div>
            //             </div>
            //             <div className='flex items-center justify-center bg-gray-200 rounded-lg'>
            //                 <RxSpaceBetweenHorizontally size={40} />
            //                 <div className='px-1 '>
            //                     <h1 className='font-semibold text-base'>Scan Distance</h1>
            //                     <h3 className='font-extralight'>{specs.scanningDistance}</h3>
            //                 </div>
            //             </div>

            //             <div className='flex items-center justify-center bg-gray-200 rounded-lg'>
            //                 <MdOutlineSpeed size={40} />
            //                 <div className='px-3'>
            //                     <h1 className='font-semibold text-base'>Scan Speed</h1>
            //                     <h3 className='font-extralight'>{specs.scanSpeed}</h3>
            //                 </div>
            //             </div>

            //             <div className='flex items-center justify-center bg-gray-200 rounded-lg'>
            //             <img src={quality} className=' w-10'/>
            //                 <div className='px-3'>
            //                     <h1 className='font-semibold text-base'>Scan Quality</h1>
            //                     <h3 className='font-extralight'>{specs.scanQuality}</h3>
            //                 </div>
            //             </div>
            //     </>}


            // </div>
    )

}

export default PropertyCards
