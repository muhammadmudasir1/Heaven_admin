import React, { useState } from 'react'
import { MdOutlineSpeed } from "react-icons/md";
import { GoCodespaces } from "react-icons/go";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { RiPrinterCloudFill } from "react-icons/ri";
import { useEffect } from 'react';
import speed from './Speed.png'
import Bauraum from './Bauraum.png'
import nozzle from './printer_d_nozzle_outline_icon.png'
import temperature from './temperature-bounding box.png'
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

const SingleReviewPropertyCard = ({ specs, productType }) => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
    const {width}=useWindowDimensions()

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        console.log(specs)
    }, [specs])

    return (
        width>600 ?
            <div className='bg-[#C2DCF0] w-full flex flex-col row-span-3 relative'>
                {productType === 1 && specs &&<>
                    <div className='flex items-center justify-evenly pt-8 pb-4'>
                        <div className='flex items-center'>
                            <MdOutlineSpeed size={60} />
                            <div className='px-4'>
                                <h1 className='font-semibold text-base'>Print Speed</h1>
                                <h3 className='font-extralight'>{specs.printSpeed}</h3>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <GiLaserPrecision size={60} />
                            <div className='px-4'>
                                <h1 className='font-semibold text-base'>Light Technology</h1>
                                <h3 className='font-extralight'>{specs.lightTechnology}</h3>
                            </div>
                        </div>

                    </div>
                    <div className='flex items-center justify-evenly pb-8 pt-4'>
                        <div className='flex items-center'>
                            <SiEnvoyproxy size={60} />
                            <div className='px-4'>
                                <h1 className='font-semibold text-base'>Z Axis Resolution</h1>
                                <h3 className='font-extralight'>{specs.ZAxisResolution}</h3>
                            </div>
                        </div>

                        <div className='flex items-center'>
                            <MdFitScreen size={60} />
                            <div className='px-4'>
                                <h1 className='font-semibold text-base'>Print Speed</h1>
                                <h3 className='font-extralight'>{specs.pixelResolution}</h3>
                            </div>
                        </div>
                    </div>
                </>}
                {productType === 2 && specs && <>
                    <div className='flex items-center justify-evenly pt-8 pb-4'>
                        <div className='flex items-center'>
                            <MdOutlineSpeed size={60} />
                            <div className='px-4'>
                                <h1 className='font-semibold text-base'>Print Speed</h1>
                                <h3 className='font-extralight'>{specs.printSpeed}</h3>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <GoCodespaces size={60} />
                            <div className='px-4'>
                                <h1 className='font-semibold text-base'>Motherboard</h1>
                                <h3 className='font-extralight'>{specs.motherboard}</h3>
                            </div>
                        </div>

                    </div>
                    <div className='flex items-center justify-evenly pb-8 pt-4'>
                        <div className='flex items-center'>
                            <FaTemperatureThreeQuarters size={60} />
                            <div className='px-4'>
                                <h1 className='font-semibold text-base'>Print Temperature</h1>
                                <h3 className='font-extralight'>{specs.printTempurature}</h3>
                            </div>
                        </div>

                        <div className='flex items-center'>
                            <RiPrinterCloudFill size={60} />
                            <div className='px-4'>
                                <h1 className='font-semibold text-base'>Print Accuracy</h1>
                                <h3 className='font-extralight'>{specs.printingAccuracyXYResolution}</h3>
                            </div>
                        </div>
                    </div>
                </>}
                {productType === 3 && specs && <>
                    <div className='flex items-center justify-evenly pt-8 pb-4'>
                        <div className='flex items-center'>
                            <GiLaserPrecision size={60} />
                            <div className='px-4'>
                                <h1 className='font-semibold text-base'>Laser Power</h1>
                                <h3 className='font-extralight'>{specs.laserPower}</h3>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <TbWaveSine size={60} />
                            <div className='px-4'>
                                <h1 className='font-semibold text-base'>Laser Wavelength</h1>
                                <h3 className='font-extralight'>{specs.laserWavelength}</h3>
                            </div>
                        </div>

                    </div>
                    <div className='flex items-center justify-evenly pb-8 pt-4'>

                        <div className='flex items-center'>
                            <img src={engraving} className=' w-16'/>
                            <div className='px-4'>
                                <h1 className='font-semibold text-base'>Engraving Accuracy</h1>
                                <h3 className='font-extralight'>{specs.engravingAccuracy}</h3>
                            </div>
                        </div>

                        <div className='flex items-center'>
                            <img src={area} className=' w-14'/>
                            <div className='px-4'>
                                <h1 className='font-semibold text-base'>Engraving Area</h1>
                                <h3 className='font-extralight'>{specs.engravingArea}</h3>
                            </div>
                        </div>

                       

                    </div>
                </>}
                {productType === 4 && specs && <>
                    <div className='flex items-center justify-evenly pt-8 pb-4'>
                        <div className='flex items-center'>
                            <IoIosQrScanner size={60} />
                            <div className='px-4'>
                                <h1 className='font-semibold text-base'>Scan Accuracy</h1>
                                <h3 className='font-extralight'>{specs.scanAccuracy}</h3>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <RxSpaceBetweenHorizontally size={60} />
                            <div className='px-4'>
                                <h1 className='font-semibold text-base'>Scan Distance</h1>
                                <h3 className='font-extralight'>{specs.scanningDistance}</h3>
                            </div>
                        </div>

                    </div>
                    <div className='flex items-center justify-evenly pb-8 pt-4'>

                        <div className='flex items-center'>
                        <MdOutlineSpeed size={60} />
                            <div className='px-4'>
                                <h1 className='font-semibold text-base'>Scan Speed</h1>
                                <h3 className='font-extralight'>{specs.scanSpeed}</h3>
                            </div>
                        </div>

                        <div className='flex items-center'>
                            <img src={quality} className=' w-14'/>
                            <div className='px-4'>
                                <h1 className='font-semibold text-base'>Scan Quality</h1>
                                <h3 className='font-extralight'>{specs.scanQuality}</h3>
                            </div>
                        </div>

                       

                    </div>
                </>}

            </div>
            : <div className='grid grid-cols-2 px-6 gap-2'>
                {productType === 1 && specs &&<>
                        <div className='flex items-center justify-center bg-gray-200 rounded-lg'>
                            <MdOutlineSpeed size={40} />
                            <div className='px-3'>
                                <h1 className='font-semibold text-base'>Print Speed</h1>
                                <h3 className='font-extralight'>{specs.printSpeed}</h3>
                            </div>
                        </div>
                        <div className='flex items-center justify-center bg-gray-200 rounded-lg'>
                            <GiLaserPrecision size={40} />
                            <div className='px-1 '>
                                <h1 className='font-semibold text-base'>Light Technology</h1>
                                <h3 className='font-extralight'>{specs.lightTechnology}</h3>
                            </div>
                        </div>

                        <div className='flex items-center justify-center bg-gray-200 rounded-lg'>
                            <SiEnvoyproxy size={40} />
                            <div className='px-3'>
                                <h1 className='font-semibold text-base'>Z Axis Resolution</h1>
                                <h3 className='font-extralight'>{specs.ZAxisResolution}</h3>
                            </div>
                        </div>

                        <div className='flex items-center justify-center bg-gray-200 rounded-lg'>
                            <MdFitScreen size={40} />
                            <div className='px-3'>
                                <h1 className='font-semibold text-base'>Pixel Resolution</h1>
                                <h3 className='font-extralight'>{specs.pixelResolution}</h3>
                            </div>
                        </div>
                </>}
                {productType === 2 && specs &&<>
                        <div className='flex items-center justify-center bg-gray-200 rounded-lg'>
                            <MdOutlineSpeed size={40} />
                            <div className='px-3'>
                                <h1 className='font-semibold text-base'>Print Speed</h1>
                                <h3 className='font-extralight'>{specs.printSpeed}</h3>
                            </div>
                        </div>
                        <div className='flex items-center justify-center bg-gray-200 rounded-lg'>
                            <GoCodespaces size={40} />
                            <div className='px-1 '>
                                <h1 className='font-semibold text-base'>Motherboard</h1>
                                <h3 className='font-extralight'>{specs.motherboard}</h3>
                            </div>
                        </div>

                        <div className='flex items-center justify-center bg-gray-200 rounded-lg'>
                            <FaTemperatureThreeQuarters size={40} />
                            <div className='px-3'>
                                <h1 className='font-semibold text-base'>Print Tempurature</h1>
                                <h3 className='font-extralight'>{specs.printTempurature}</h3>
                            </div>
                        </div>

                        <div className='flex items-center justify-center bg-gray-200 rounded-lg'>
                            <RiPrinterCloudFill size={40} />
                            <div className='px-3'>
                                <h1 className='font-semibold text-base'>Print Accuracy</h1>
                                <h3 className='font-extralight'>{specs.printingAccuracyXYResolution}</h3>
                            </div>
                        </div>
                </>}
                {productType === 3 && specs &&<>
                        <div className='flex items-center justify-center bg-gray-200 rounded-lg'>
                            <GiLaserPrecision size={40} />
                            <div className='px-3'>
                                <h1 className='font-semibold text-base'>Laser Power</h1>
                                <h3 className='font-extralight'>{specs.laserPower}</h3>
                            </div>
                        </div>
                        <div className='flex items-center justify-center bg-gray-200 rounded-lg'>
                            <TbWaveSine size={40} />
                            <div className='px-1 '>
                                <h1 className='font-semibold text-base'>Laser Wavelength</h1>
                                <h3 className='font-extralight'>{specs.laserWavelength}</h3>
                            </div>
                        </div>

                        <div className='flex items-center justify-center bg-gray-200 rounded-lg'>
                            <FaTemperatureThreeQuarters size={40} />
                            <div className='px-3'>
                                <h1 className='font-semibold text-base'>Engraving Accuracy</h1>
                                <h3 className='font-extralight'>{specs.engravingAccuracy}</h3>
                            </div>
                        </div>

                        <div className='flex items-center justify-center bg-gray-200 rounded-lg'>
                            <RiPrinterCloudFill size={40} />
                            <div className='px-3'>
                                <h1 className='font-semibold text-base'>Engraving Area</h1>
                                <h3 className='font-extralight'>{specs.engravingArea}</h3>
                            </div>
                        </div>
                </>}
                {productType === 4 && specs &&<>
                        <div className='flex items-center justify-center bg-gray-200 rounded-lg'>
                            <IoIosQrScanner size={40} />
                            <div className='px-3'>
                                <h1 className='font-semibold text-base'>Scan Accuracy</h1>
                                <h3 className='font-extralight'>{specs.scanAccuracy}</h3>
                            </div>
                        </div>
                        <div className='flex items-center justify-center bg-gray-200 rounded-lg'>
                            <RxSpaceBetweenHorizontally size={40} />
                            <div className='px-1 '>
                                <h1 className='font-semibold text-base'>Scan Distance</h1>
                                <h3 className='font-extralight'>{specs.scanningDistance}</h3>
                            </div>
                        </div>

                        <div className='flex items-center justify-center bg-gray-200 rounded-lg'>
                            <MdOutlineSpeed size={40} />
                            <div className='px-3'>
                                <h1 className='font-semibold text-base'>Scan Speed</h1>
                                <h3 className='font-extralight'>{specs.scanSpeed}</h3>
                            </div>
                        </div>

                        <div className='flex items-center justify-center bg-gray-200 rounded-lg'>
                        <img src={quality} className=' w-10'/>
                            <div className='px-3'>
                                <h1 className='font-semibold text-base'>Scan Quality</h1>
                                <h3 className='font-extralight'>{specs.scanQuality}</h3>
                            </div>
                        </div>
                </>}


            </div>
    )

}

export default SingleReviewPropertyCard
