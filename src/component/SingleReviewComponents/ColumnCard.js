import React from 'react'
import { useState, useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { useParams } from 'react-router-dom';
import Api from '../../api/Api';
import useWindowDimensions from '../../hooks/useWindowDimensions'

const FDMVarient = ({ specs }) => {
    console.log("FDM")
    console.log(specs)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
    const { id } = useParams()
    const { t } = useTranslation()
    const [swiperInstance, setSwiperInstance] = useState();
    const [isBeginning, setIsBeginning] = useState(true)
    const [isEnd, setIsEnd] = useState(false)
    const [active, setActive] = useState(0)
    const {width}=useWindowDimensions()

    const handleSwiper = (swiper) => {
        setSwiperInstance(swiper)
    }
    useEffect(() => {
        if (swiperInstance) {
            console.log("lenght: ")
            console.log("Is Begininig " + swiperInstance.isBeginning)
        }
    }, [swiperInstance])

    console.log("FROM FDM")

    return (
        width>600 ?
            <div className='relative mx-5'>
                <div className=''>
                    <div className={` grid gap-4 ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''}  px-8`}>
                        <div className=' h-12'></div>
                        {specs.map((items, index) => {
                            return <div key={index} className='flex justify-center flex-col'>
                                <img src={`/${items.thumbnail}`} alt="" />
                                <div className='flex justify-center items-center bg-gray-300 line-clamp-2 h-16 px-2 py-2 font-semibold text-center'>
                                    {items.product_name}
                                </div>
                            </div>
                        })}
                    </div>
                    <div>
                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t("installationSpace")}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.installationSpace}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('DriveTech')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.driveTech}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('PrintVolume')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.printVolume}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('ZAxisPrintingAccuracy')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.ZAxisPrintingAccuracy}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('PrintingAccuracyXYResolution')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.printingAccuracyXYResolution}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('PrintBedTechnology')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.printBedTechnology}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('FilamentCompatibility')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.filamentCompatibility}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('PrintSpeed')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.printSpeed}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('NozzleTempurature')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.nozzleTempurature}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('PrintBedTemperature')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.printTempurature}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('PressureChamberTempurature')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.pressureChamberTempurature}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('VibrationSuppression')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.vibrationSuppresion ? "YES" : "NO"}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('AutomaticPrintBedMeasurement')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.automaticPrintBedMeasurement ? "YES" : "NO"}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('AutomaticZOffsetCalibration')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.automaticZOffsetCalibration ? "YES" : "NO"}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('LidarScannar')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.liderScannar ? "YES" : "NO"}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('DoorSensor')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.doorScannar ? "YES" : "NO"}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('AirFilter')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.airFilter}</div>
                                </div>
                            })}
                        </div>
                        
                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('circulationFanPressureRoom')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.circulationFanPressureRoom ?"YES":"NO"}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('supportingComponentCooling')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.supportingComponentCooling ?"YES":"NO"}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('DataConnection')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.dataConnection}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('PrintRoomCamera')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.printRoomCamera}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('LEDLight')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.LEDLighting?"YES":"NO"}</div>
                                </div>
                            })}
                        </div>
                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('motherboard')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.motherboard}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center' />
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>

                                </div>
                            })}
                        </div>

                    </div>
                </div>
                <div className={`${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} w-full gap-4 px-8 grid h-full absolute top-0`}>
                    <div></div>
                    {specs.map((item) => {
                        return <div className='shadow-lg h-full rounded-b-2xl' />
                    })}
                </div>
            </div>
            : 
            <div className='mx-2 relative'>
                <h1 className='flex items-center justify-center text-2xl font-bold py-8'>Product Comparison</h1>
                <div className='flex items-center justify-end mx-2  mb-4'>
                    {
                        !isBeginning ?
                            <button className="text-3xl hover:text-customBlue text-gray-600"
                                onClick={(e) => {
                                    swiperInstance.slidePrev()
                                }}
                            >
                                <div className='bg-gray-200 rounded-full flex items-center justify-center p-[2px]'>
                                    <FaAngleLeft className=' text-xl' />
                                </div>
                            </button>
                            : <div></div>
                    }
                    <div className='flex items-center'>
                        {
                            specs.map((items, i) => {
                                return <div className={`mx-1 ${active===i || active+1==i ? 'bg-customBlue ' : 'bg-gray-300 '} h-3 w-3 rounded-full`}></div>
                            })
                        }
                    </div>
                    {
                        !isEnd && specs && specs.length > 1 ?
                            <button className="text-3xl hover:text-customBlue text-gray-600"
                                onClick={(e) => {
                                    swiperInstance.slideNext()
                                }}
                            >
                                <div className='bg-gray-200 rounded-full flex items-center justify-center p-[2px]'>
                                    <FaAngleRight className='text-xl' />
                                </div>
                            </button>
                            : <div />
                    }
                </div>
                <div className='relative h-[1700px] w-full'>
                    <div className='absolute w-full h-8  '>
                        <div className='h-16 mb-2 '></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'> <p className='w-1/3'> {t('installationSpace')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'> <p className='w-1/3'> {t('surfaceArea')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'> <p className='w-1/3'> {t('DriveTech')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'> <p className='w-1/3'> {t('PrintVolume')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'> <p className='w-1/3'> {t('ZAxisPrintingAccuracy')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'> <p className='w-1/3'> {t('PrintingAccuracyXYResolution')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'> <p className='w-1/3'> {t('PrintBedTechnology')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'> <p className='w-1/3'> {t('FilamentCompatibility')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'> <p className='w-1/3'> {t('PrintSpeed')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'> <p className='w-1/3'> {t('NozzleTempurature')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'> <p className='w-1/3'> {t('PrintBedTemperature')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'> <p className='w-1/3'> {t('PressureChamberTempurature')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'> <p className='w-1/3'> {t('VibrationSuppression')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'> <p className='w-1/3'> {t('AutomaticPrintBedMeasurement')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'> <p className='w-1/3'> {t('AutomaticZOffsetCalibration')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'> <p className='w-1/3'> {t('LidarScannar')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'> <p className='w-1/3'> {t('DoorSensor')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'> <p className='w-1/3'> {t('AirFilter')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'> <p className='w-1/3'> {t('circulationFanPressureRoom')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'> <p className='w-1/3'> {t('supportingComponentCooling')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'> <p className='w-1/3'> {t('DataConnection')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'> <p className='w-1/3'> {t('PrintRoomCamera')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'> <p className='w-1/3'> {t('LEDLight')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'> <p className='w-1/3'> {t('motherboard')}</p></div>
                        <div className='h-4 mb-2 w-full  rounded-xl'></div>
                    </div>
                    <div className='absolute w-full h-full  grid grid-cols-3 px-2'>
                        <div className=''></div>
                        <div className=' col-span-2 h-full '>
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={7}
                                slidesPerView={2}
                                onSwiper={(swiper) => handleSwiper(swiper)}
                                onSlideChange={(swiperCurrent) => {
                                    setIsBeginning(swiperCurrent.isBeginning)
                                    setIsEnd(swiperCurrent.isEnd)
                                    setActive((swiperCurrent.activeIndex))
                                }}
                                className=' w-full h-full '
                            >
                                {specs.map((items, index) => {
                                    return <SwiperSlide>
                                        <div className='bg-white'>
                                            <div className='h-16 mb-2'>
                                                <img src={`/${items.thumbnail}`} alt="" className='h-full ' />
                                            </div>
                                            <div className='bg-white shadow-lg'>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.installationSpace}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.surfaceArea}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.driveTech}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.printVolume}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.ZAxisPrintingAccuracy}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.printingAccuracyXYResolution}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.printBedTechnology}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.filamentCompatibility}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.printSpeed}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.nozzleTempurature}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.printTempurature}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.pressureChamberTempurature}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.vibrationSuppresion?"YES":"NO"}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.automaticPrintBedMeasurement?"YES":"NO"}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.automaticZOffsetCalibration?"YES":"NO"}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.liderScannar?"YES":"NO"}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.doorScannar?"YES":"NO"}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.airFilter}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.circulationFanPressureRoom ?"YES":"NO"}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.supportingComponentCooling?"YES":"NO"}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.dataConnection}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.printRoomCamera}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.LEDLighting?"YES":"NO"}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.motherboard}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'></div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                })}
                            </Swiper>
                        </div>

                    </div>

                </div>
            </div>
    )
}
const SLAVarient = ({ specs }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
    const { id } = useParams()
    const { t } = useTranslation()
    const [swiperInstance, setSwiperInstance] = useState();
    const [isBeginning, setIsBeginning] = useState(true)
    const [isEnd, setIsEnd] = useState(false)
    const [active, setActive] = useState(0)
    const {width}=useWindowDimensions()

    const handleSwiper = (swiper) => {
        setSwiperInstance(swiper)
    }
    useEffect(() => {
        if (swiperInstance) {
            console.log("lenght: ")
            console.log("Is Begininig " + swiperInstance.isBeginning)
        }
    }, [swiperInstance])

    return (
        width>600 ?
            <div className='relative mx-5'>
                <div className=''>
                    <div className={` grid gap-4 ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''}  px-8`}>
                        <div className=' h-12'></div>
                        {specs.map((items, index) => {
                            return <div key={index} className='flex justify-center flex-col'>
                                <img src={`/${items.thumbnail}`} alt="" />
                                <div className='flex justify-center items-center bg-gray-300 line-clamp-2 h-16 px-2 py-2 font-semibold text-center'>
                                    {items.product_name}
                                </div>
                            </div>
                        })}
                    </div>
                    <div>
                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t("installationSpace")}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.installationSpace}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>Monoscreen</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.monoscreen}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('pixelResolution')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.pixelResolution}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('XYPixelResolution')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.XYPixelResolution}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('ZAxis')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.ZAxis}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('ZAxisResolution')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.ZAxisResolution}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>Platform</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.platform}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>Touchscreen</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.touchScreen}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('printSpeed')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.printSpeed}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('lightingTechnology')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.lightTechnology}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('lightDensity')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.lightDensity}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('airPurificationSystem')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.airPurificationSystem}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('interface')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.interface}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>Build Size</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.buildSize}</div>
                                </div>
                            })}
                        </div>
                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center' />
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>

                                </div>
                            })}
                        </div>

                    </div>
                </div>
                <div className={`${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} w-full gap-4 px-8 grid h-full absolute top-0`}>
                    <div></div>
                    {specs.map((item) => {
                        return <div className='shadow-lg h-full rounded-b-2xl' />
                    })}
                </div>
            </div>
            : 
            <div className='mx-2 relative'>
                <h1 className='flex items-center justify-center text-2xl font-bold py-8'>Product Comparison</h1>
                <div className='flex items-center justify-end mx-2  mb-4'>
                    {
                        !isBeginning ?
                            <button className="text-3xl hover:text-customBlue text-gray-600"
                                onClick={(e) => {
                                    swiperInstance.slidePrev()
                                }}
                            >
                                <div className='bg-gray-200 rounded-full flex items-center justify-center p-[2px]'>
                                    <FaAngleLeft className=' text-xl' />
                                </div>
                            </button>
                            : <div></div>
                    }
                    <div className='flex items-center'>
                        {
                            specs.map((items, i) => {
                                return <div className={`mx-1 ${active===i || active+1==i ? 'bg-customBlue ' : 'bg-gray-300 '} h-3 w-3 rounded-full`}></div>
                            })
                        }
                    </div>
                    {
                        !isEnd && specs && specs.length > 1 ?
                            <button className="text-3xl hover:text-customBlue text-gray-600"
                                onClick={(e) => {
                                    swiperInstance.slideNext()
                                }}
                            >
                                <div className='bg-gray-200 rounded-full flex items-center justify-center p-[2px]'>
                                    <FaAngleRight className='text-xl' />
                                </div>
                            </button>
                            : <div />
                    }
                </div>
                <div className='relative h-[1000px] w-full'>
                    <div className='absolute w-full h-8 '>
                        <div className='h-16 mb-2'></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('installationSpace')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> Monoscreen</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('XYPixelResolution')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('ZAxis')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('ZAxisResolution')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> Platform</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> Touchscreen</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('printSpeed')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('lightingTechnology')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('lightDensity')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('airPurificationSystem')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('interface')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> Build Size</p></div>
                        <div className='h-4 mb-2 w-full  rounded-xl'></div>
                    </div>
                    <div className='absolute w-full h-full  grid grid-cols-3 px-2'>
                        <div className=''></div>
                        <div className=' col-span-2 h-full '>
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={7}
                                slidesPerView={2}
                                // navigation
                                // pagination={{ clickable: true }}
                                // scrollbar={{ draggable: true }}
                                onSwiper={(swiper) => handleSwiper(swiper)}
                                onSlideChange={(swiperCurrent) => {
                                    setIsBeginning(swiperCurrent.isBeginning)
                                    setIsEnd(swiperCurrent.isEnd)
                                    setActive((swiperCurrent.activeIndex))
                                }}
                                className=' w-full h-full '
                            >
                                {specs.map((items, index) => {
                                    return <SwiperSlide>
                                        <div className='bg-white'>
                                            <div className='h-16 mb-2'>
                                                <img src={`/${items.thumbnail}`} alt="" className='h-full ' />
                                            </div>
                                            <div className='bg-white shadow-lg'>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.installationSpace}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.monoscreen}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.XYPixelResolution}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.ZAxis}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.ZAxisResolution}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.platform}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.touchScreen}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.printSpeed}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.lightTechnology}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.lightDensity}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.airPurificationSystem}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.interface}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.buildSize}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'></div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                })}
                            </Swiper>
                        </div>

                    </div>

                </div>
            </div>
    )
}
const LaserVarient = ({ specs }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
    const { id } = useParams()
    const { t } = useTranslation()
    const [swiperInstance, setSwiperInstance] = useState();
    const [isBeginning, setIsBeginning] = useState(true)
    const [isEnd, setIsEnd] = useState(false)
    const [active, setActive] = useState(0)
    const {width}=useWindowDimensions()

    const handleSwiper = (swiper) => {
        setSwiperInstance(swiper)
    }
    useEffect(() => {
        if (swiperInstance) {
            console.log("lenght: ")
            console.log("Is Begininig " + swiperInstance.isBeginning)
        }
    }, [swiperInstance])

    return (
        width>600 ?
            <div className='relative mx-5'>
                <div className=''>
                    <div className={` grid gap-4 ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''}  px-8`}>
                        <div className=' h-12'></div>
                        {specs.map((items, index) => {
                            return <div key={index} className='flex justify-center flex-col'>
                                <img src={`/${items.thumbnail}`} alt="" />
                                <div className='flex justify-center items-center bg-gray-300 line-clamp-2 h-16 px-2 py-2 font-semibold text-center'>
                                    {items.product_name}
                                </div>
                            </div>
                        })}
                    </div>
                    <div>
                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('diodeLaserOutputPower')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.laserPower}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('laserWavelength')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.laserWavelength}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('engravingAccuracy')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.engravingAccuracy}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('engravingAreaSize')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.engravingArea}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('focusingMethod')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.focusingMethod}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('airAssistCompressor')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.airAssistCompressor}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('interface')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.interface}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('powerSupplyOutputPower')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.powerSupplyOutputPower}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>Laser Software</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.laserSoftware}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('Engraving Material')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.engravingMaterial}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('Cutting Material')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.cuttingMaterial}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('workingArea')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.workingArea}</div>
                                </div>
                            })}
                        </div>

                        
                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center' />
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>

                                </div>
                            })}
                        </div>

                    </div>
                </div>
                <div className={`${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} w-full gap-4 px-8 grid h-full absolute top-0`}>
                    <div></div>
                    {specs.map((item) => {
                        return <div className='shadow-lg h-full rounded-b-2xl' />
                    })}
                </div>
            </div>
            : 
            <div className='mx-2 relative'>
                <h1 className='flex items-center justify-center text-2xl font-bold py-8'>Product Comparison</h1>
                <div className='flex items-center justify-end mx-2  mb-4'>
                    {
                        !isBeginning ?
                            <button className="text-3xl hover:text-customBlue text-gray-600"
                                onClick={(e) => {
                                    swiperInstance.slidePrev()
                                }}
                            >
                                <div className='bg-gray-200 rounded-full flex items-center justify-center p-[2px]'>
                                    <FaAngleLeft className=' text-xl' />
                                </div>
                            </button>
                            : <div></div>
                    }
                    <div className='flex items-center'>
                        {
                            specs.map((items, i) => {
                                return <div className={`mx-1 ${active===i || active+1==i ? 'bg-customBlue ' : 'bg-gray-300 '} h-3 w-3 rounded-full`}></div>
                            })
                        }
                    </div>
                    {
                        !isEnd && specs && specs.length > 1 ?
                            <button className="text-3xl hover:text-customBlue text-gray-600"
                                onClick={(e) => {
                                    swiperInstance.slideNext()
                                }}
                            >
                                <div className='bg-gray-200 rounded-full flex items-center justify-center p-[2px]'>
                                    <FaAngleRight className='text-xl' />
                                </div>
                            </button>
                            : <div />
                    }
                </div>
                <div className='relative h-[1000px] w-full'>
                    <div className='absolute w-full h-8 '>
                        <div className='h-16 mb-2'></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('diodeLaserOutputPower')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('laserWavelength')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('engravingAccuracy')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('engravingAreaSize')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('focusingMethod')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('airAssistCompressor')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('interface')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('powerSupplyOutputPower')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> Laser Software</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('Engraving Material')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('Cutting Material')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('workingArea')}</p></div>
                        <div className='h-4 mb-2 w-full  rounded-xl'></div>
                    </div>
                    <div className='absolute w-full h-full  grid grid-cols-3 px-2'>
                        <div className=''></div>
                        <div className=' col-span-2 h-full '>
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={7}
                                slidesPerView={2}
                                // navigation
                                // pagination={{ clickable: true }}
                                // scrollbar={{ draggable: true }}
                                onSwiper={(swiper) => handleSwiper(swiper)}
                                onSlideChange={(swiperCurrent) => {
                                    setIsBeginning(swiperCurrent.isBeginning)
                                    setIsEnd(swiperCurrent.isEnd)
                                    setActive((swiperCurrent.activeIndex))
                                }}
                                className=' w-full h-full '
                            >
                                {specs.map((items, index) => {
                                    return <SwiperSlide>
                                        <div className='bg-white'>
                                            <div className='h-16 mb-2'>
                                                <img src={`/${items.thumbnail}`} alt="" className='h-full ' />
                                            </div>
                                            <div className='bg-white shadow-lg'>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.laserPower}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.laserWavelength}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.engravingAccuracy}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.engravingArea}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.focusingMethod}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.airAssistCompressor}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.interface}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.powerSupplyOutputPower}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.laserSoftware}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.engravingMaterial}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.cuttingMaterial}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.workingArea}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'></div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                })}
                            </Swiper>
                        </div>

                    </div>

                </div>
            </div>
    )
}
const ScannarVarient = ({ specs }) => {
    const { t } = useTranslation()
    const [swiperInstance, setSwiperInstance] = useState();
    const [isBeginning, setIsBeginning] = useState(true)
    const [isEnd, setIsEnd] = useState(false)
    const [active, setActive] = useState(0)
    const {width}=useWindowDimensions()

    const handleSwiper = (swiper) => {
        setSwiperInstance(swiper)
    }
    useEffect(() => {
        if (swiperInstance) {
            console.log("lenght: ")
            console.log("Is Begininig " + swiperInstance.isBeginning)
        }
    }, [swiperInstance])

    return (
        width>600 ?
            <div className='relative mx-5'>
                <div className=''>
                    <div className={` grid gap-4 ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''}  px-8`}>
                        <div className=' h-12'></div>
                        {specs.map((items, index) => {
                            return <div key={index} className='flex justify-center flex-col'>
                                <img src={`/${items.thumbnail}`} alt="" />
                                <div className='flex justify-center items-center bg-gray-300 line-clamp-2 h-16 px-2 py-2 font-semibold text-center'>
                                    {items.product_name}
                                </div>
                            </div>
                        })}
                    </div>
                    <div>
                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('scaningPrecision')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.scanningPrecision}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('scanAccuracy')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.scanAccuracy}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('scaningArea')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.scanningArea}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('scanningDistance')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.scanningDistance}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('scanSpeed')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.scanSpeed}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('objectDimensionHandScan')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.objectDimension_handScan}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('objectDimensionTurnTable')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.objectDimension_turnTable}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('lightSource')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.lightSource}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('camera')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.camera}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('standardPackage')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.standardPackage}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('premiumPackage')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.premiumPackage}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('scanMinimumSize')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.scanMinimumSize}</div>
                                </div>
                            })}
                        </div>
                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('scanMaximumSize')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.scanMaximumSize}</div>
                                </div>
                            })}
                        </div>

                        
                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center' />
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>

                                </div>
                            })}
                        </div>

                    </div>
                </div>
                <div className={`${specs.length === 1 ? 'grid-cols-2':specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} w-full gap-4 px-8 grid h-full absolute top-0`}>
                    <div></div>
                    {specs.map((item) => {
                        return <div className='shadow-lg h-full rounded-b-2xl' />
                    })}
                </div>
            </div>
            : 
            <div className='mx-2 relative'>
                <h1 className='flex items-center justify-center text-2xl font-bold py-8'>Product Comparison</h1>
                <div className='flex items-center justify-end mx-2  mb-4'>
                    {
                        !isBeginning ?
                            <button className="text-3xl hover:text-customBlue text-gray-600"
                                onClick={(e) => {
                                    swiperInstance.slidePrev()
                                }}
                            >
                                <div className='bg-gray-200 rounded-full flex items-center justify-center p-[2px]'>
                                    <FaAngleLeft className=' text-xl' />
                                </div>
                            </button>
                            : <div></div>
                    }
                    <div className='flex items-center'>
                        {
                            specs.map((items, i) => {
                                return <div className={`mx-1 ${active===i || active+1==i ? 'bg-customBlue ' : 'bg-gray-300 '} h-3 w-3 rounded-full`}></div>
                            })
                        }
                    </div>
                    {
                        !isEnd && specs && specs.length > 1 ?
                            <button className="text-3xl hover:text-customBlue text-gray-600"
                                onClick={(e) => {
                                    swiperInstance.slideNext()
                                }}
                            >
                                <div className='bg-gray-200 rounded-full flex items-center justify-center p-[2px]'>
                                    <FaAngleRight className='text-xl' />
                                </div>
                            </button>
                            : <div />
                    }
                </div>
                <div className='relative h-[1000px] w-full'>
                    <div className='absolute w-full h-8 '>
                        <div className='h-16 mb-2'></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('scaningPrecision')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('scanAccuracy')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('scaningArea')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('scanningDistance')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('scanSpeed')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('objectDimensionHandScan')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('objectDimensionTurnTable')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('lightSource')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('camera')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('standardPackage')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('premiumPackage')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('scanMinimumSize')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('scanMaximumSize')}</p></div>
                        <div className='h-4 mb-2 w-full  rounded-xl'></div>
                    </div>
                    <div className='absolute w-full h-full  grid grid-cols-3 px-2'>
                        <div className=''></div>
                        <div className=' col-span-2 h-full '>
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={7}
                                slidesPerView={2}
                                // navigation
                                // pagination={{ clickable: true }}
                                // scrollbar={{ draggable: true }}
                                onSwiper={(swiper) => handleSwiper(swiper)}
                                onSlideChange={(swiperCurrent) => {
                                    setIsBeginning(swiperCurrent.isBeginning)
                                    setIsEnd(swiperCurrent.isEnd)
                                    setActive((swiperCurrent.activeIndex))
                                }}
                                className=' w-full h-full '
                            >
                                {specs.map((items, index) => {
                                    return <SwiperSlide>
                                        <div className='bg-white'>
                                            <div className='h-16 mb-2'>
                                                <img src={`/${items.thumbnail}`} alt="" className='h-full ' />
                                            </div>
                                            <div className='bg-white shadow-lg'>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.scanningPrecision}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.scanAccuracy}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.scanningArea}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.scanningDistance}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.scanSpeed}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.objectDimension_handScan}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.objectDimension_turnTable}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.lightSource}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.camera}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.standardPackage}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.premiumPackage}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.scanMinimumSize}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.scanMaximumSize}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'></div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                })}
                            </Swiper>
                        </div>

                    </div>

                </div>
            </div>
    )
}


const ColumnCard = () => {
    const [specs, setSpecs] = useState([])
    const [productType,setProductType]=useState(0)
    const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                let tempSpecs = []
                const result = await Api.get(`/api/products/${id}`)
                console.log(result)
                if (result.data.productType === 1) {
                    setProductType(1)
                    let mainProduct = result.data.SLA
                    const responsImage = await Api.get(`/api/products/getThumbnail/${id}`)
                    
                    mainProduct['thumbnail'] = responsImage.data[0].path
                    mainProduct['product_name'] = result.data.product_name
                    tempSpecs.push(mainProduct)
                    for (let ele of result.data.variants) {
                        const Image = await Api.get(`/api/products/getThumbnail/${ele.Id}`)
                        let eleSLA = ele.SLA
                        eleSLA['thumbnail'] = Image.data[0].path
                        eleSLA['product_name'] = ele.product_name
                        tempSpecs.push(eleSLA)
                    }
                    setSpecs(tempSpecs)
                }

                if (result.data.productType === 3) {
                    setProductType(3)
                    let mainProduct = result.data.LeaserCutter
                    const responsImage = await Api.get(`/api/products/getThumbnail/${id}`)
                    // console.log(responsImage.data[0].path)
                    mainProduct['thumbnail'] = responsImage.data[0].path
                    mainProduct['product_name'] = result.data.product_name
                    tempSpecs.push(mainProduct)
                    for (let ele of result.data.variants) {
                        const Image = await Api.get(`/api/products/getThumbnail/${ele.Id}`)
                        let eleLaser = ele.LeaserCutter
                        eleLaser['thumbnail'] = Image.data[0].path
                        eleLaser['product_name'] = ele.product_name
                        tempSpecs.push(eleLaser)
                    }
                    setSpecs(tempSpecs)
                }

                if (result.data.productType === 2) {
                    setProductType(2)
                    let mainProduct = result.data.FDM
                    const responsImage = await Api.get(`/api/products/getThumbnail/${id}`)
                    mainProduct['thumbnail'] = responsImage.data[0].path
                    mainProduct['product_name'] = result.data.product_name
                    tempSpecs.push(mainProduct)
                    for (let ele of result.data.variants) {
                        const Image = await Api.get(`/api/products/getThumbnail/${ele.Id}`)
                        let eleFDM = ele.FDM
                        eleFDM['thumbnail'] = Image.data[0].path
                        eleFDM['product_name'] = ele.product_name
                        tempSpecs.push(eleFDM)
                    }
                    setSpecs(tempSpecs)
                }

                if (result.data.productType === 4) {
                    setProductType(4)
                    let mainProduct = result.data.scanner
                    const responsImage = await Api.get(`/api/products/getThumbnail/${id}`)
                    mainProduct['thumbnail'] = responsImage.data[0].path
                    mainProduct['product_name'] = result.data.product_name
                    tempSpecs.push(mainProduct)
                    for (let ele of result.data.variants) {
                        const Image = await Api.get(`/api/products/getThumbnail/${ele.Id}`)
                        let eleScannar = ele.scanner
                        eleScannar['thumbnail'] = Image.data[0].path
                        eleScannar['product_name'] = ele.product_name
                        tempSpecs.push(eleScannar)
                    }
                    setSpecs(tempSpecs)
                }

            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [id])
    
    useEffect(() => {
        console.log(specs)
    }, [specs])

    return (
        <div className='w-full mb-12'>
            {
                productType===1 &&
                <SLAVarient specs={specs} />
            }
            {
                productType===2 &&
                <FDMVarient specs={specs} />
            }
            {
                productType===3 &&
                <LaserVarient specs={specs} />
            }
            {
                productType===4 &&
                <ScannarVarient specs={specs} />
            }
            
        </div>
    )
}

export default ColumnCard
