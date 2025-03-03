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
    const { t } = useTranslation()
    const [swiperInstance, setSwiperInstance] = useState();
    const [isBeginning, setIsBeginning] = useState(true)
    const [isEnd, setIsEnd] = useState(false)
    const [active, setActive] = useState(0)
    const { width } = useWindowDimensions()

    const handleSwiper = (swiper) => {
        setSwiperInstance(swiper)
    }

    return (
        width > 600 ?
            <div className='relative mx-5'>
                <div className=''>
                    {
                        specs.length > 1 &&
                        <div className={` grid gap-4 ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''}  px-8`}>
                            <div className=' h-12'></div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex justify-center flex-col'>
                                    <img src={`/api/${items.thumbnail}`} alt="" />
                                    <div className='flex justify-center items-center bg-gray-300 line-clamp-2 h-16 px-2 py-2 font-semibold text-center'>
                                        {items.product_name}
                                    </div>
                                </div>
                            })}
                        </div>
                    }
                    <div>
                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t("installationSpace")}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.installationSpace}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('installationSpaceEnclouser')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.installatingSpaceEnclouser}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('frameMaterial')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.frameMaterial}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('DriveTech')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.driveTech}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('guides')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.guides}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('PrintAccuracy')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.printAccuracy}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>Text</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.text}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('PrintBedTechnology')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.printBedTechnology}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('FilamentCompatibility')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.filamentCompatibility}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('PrintSpeed')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.printSpeed}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('RealisticPrintingSpeed')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.realisticPrintingSpeed}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('maximumAcceleration')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.maximumAcceleration}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('maximumPressureNozzleTemperature')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.maximumPressureNozzleTemperature}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('MaximumPrintBedTemperature')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.maximumPrintBedTemperature}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('MaximumPressureChamberTemperature')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.maximumPressureChamberTemperature}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('VibrationSuppression')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.vibrationSuppresion ? "YES" : "NO"}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('AutomaticPrintBedMeasurement')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.automaticPrintBedMeasurement ? "YES" : "NO"}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('AutomaticZOffsetCalibration')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.automaticZOffsetCalibration ? "YES" : "NO"}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('LidarScannar')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.liderScannar ? "YES" : "NO"}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('DoorSensor')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.doorScannar ? "YES" : "NO"}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('AirFilter')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.airFilter}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('circulationFanPressureRoom')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.circulationFanPressureRoom ? "YES" : "NO"}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('supportingComponentCooling')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.supportingComponentCooling ? "YES" : "NO"}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('DataConnection')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.dataConnection}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('PrintRoomCamera')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.printRoomCamera}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('LEDLight')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.LEDLighting ? "YES" : "NO"}</div>
                                </div>
                            })}
                        </div>
                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('motherboard')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.motherboard}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center' />
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>

                                </div>
                            })}
                        </div>

                    </div>
                </div>
                <div className={`${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} w-full gap-4 px-8 grid h-full absolute top-0`}>
                    <div></div>
                    {specs.map((item,index) => {
                        return <div key = {index} className='shadow-lg h-full rounded-b-2xl' />
                    })}
                </div>
            </div>
            :
            <div className='mx-2 relative'>
                <h1 className='flex items-center justify-center lg:text-2xl text-xl font-bold lg:py-8 py-4'>Product Comparison</h1>
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
                            specs.length > 1 && specs.map((items, i) => {
                                return <div className={`mx-1 ${active === i ? 'bg-customBlue ' : 'bg-gray-300 '} h-3 w-3 rounded-full`}></div>
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
                <div className='relative h-[1800px] w-full'>
                    <div className='absolute w-full h-8  '>
                        {
                            specs.length > 1 &&
                            <div className='h-16 mb-2 '></div>
                        }
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'> <p className='w-1/3'> {t('installationSpace')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'> <p className='w-1/3'> {t('installationSpaceEnclouser')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'> <p className='w-1/3'> {t('frameMaterial')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'> <p className='w-1/3'> {t('DriveTech')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'> <p className='w-1/3'> {t('guides')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'> <p className='w-1/3'> {t('PrintAccuracy')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'> <p className='w-1/3'> Text</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'> <p className='w-1/3'> {t('PrintBedTechnology')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'> <p className='w-1/3'> {t('FilamentCompatibility')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'> <p className='w-1/3'> {t('PrintSpeed')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'> <p className='w-1/3'> {t('RealisticPrintingSpeed')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'> <p className='w-1/3'> {t('maximumAcceleration')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'> <p className='w-1/3'> {t('maximumPressureNozzleTemperature')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'> <p className='w-1/3'> {t('MaximumPrintBedTemperature')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'> <p className='w-1/3'> {t('MaximumPressureChamberTemperature')}</p></div>
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
                    <div className={`absolute w-full h-full px-2 grid grid-cols-2`}>
                        <div className=''></div>
                        <div className={`h-full`}>
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={7}
                                slidesPerView={1}
                                onSwiper={(swiper) => handleSwiper(swiper)}
                                onSlideChange={(swiperCurrent) => {
                                    setIsBeginning(swiperCurrent.isBeginning)
                                    setIsEnd(swiperCurrent.isEnd)
                                    setActive((swiperCurrent.activeIndex))
                                }}
                                className=' w-full h-full '
                            >
                                {specs.map((items, index) => {
                                    return <SwiperSlide key={index}>
                                        <div className='bg-white'>
                                            {
                                                specs.length > 1 &&
                                                <div className='h-16 mb-2'>
                                                    <img src={`/api/${items.thumbnail}`} alt="" className='h-full w-full' />
                                                </div>
                                            }
                                            <div className='bg-white shadow-lg'>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.installationSpace}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.installatingSpaceEnclouser}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.frameMaterial}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.driveTech}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.guides}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.printAccuracy}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.text}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.printBedTechnology}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.filamentCompatibility}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.printSpeed}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.realisticPrintingSpeed}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.maximumAcceleration}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.maximumPressureNozzleTemperature}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.maximumPrintBedTemperature}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.maximumPressureChamberTemperature}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.vibrationSuppresion ? "YES" : "NO"}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.automaticPrintBedMeasurement ? "YES" : "NO"}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.automaticZOffsetCalibration ? "YES" : "NO"}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.liderScannar ? "YES" : "NO"}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.doorScannar ? "YES" : "NO"}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.airFilter}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.circulationFanPressureRoom ? "YES" : "NO"}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.supportingComponentCooling ? "YES" : "NO"}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.dataConnection}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.printRoomCamera}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.LEDLighting ? "YES" : "NO"}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.motherboard}</div>
                                                <div className='h-4 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'></div>
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
    const { t } = useTranslation()
    const [swiperInstance, setSwiperInstance] = useState();
    const [isBeginning, setIsBeginning] = useState(true)
    const [isEnd, setIsEnd] = useState(false)
    const [active, setActive] = useState(0)
    const { width } = useWindowDimensions()

    const handleSwiper = (swiper) => {
        setSwiperInstance(swiper)
    }

    return (
        width > 600 ?
            <div className='relative mx-5'>
                <div className=''>
                    {
                        specs.length > 1 &&
                        <div className={` grid gap-4 ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''}  px-8`}>
                            <div className=' h-12'></div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex justify-center flex-col'>
                                    <img src={`/api/${items.thumbnail}`} alt="" />
                                    <div className='flex justify-center items-center bg-gray-300 line-clamp-2 h-16 px-2 py-2 font-semibold text-center'>
                                        {items.product_name}
                                    </div>
                                </div>
                            })}
                        </div>
                    }
                    <div>
                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t("installationSpace")}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.installationSpace}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>Monoscreen</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.monoscreen}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('ZAxis')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.ZAxis}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('XYPixelResolution')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.XYPixelResolution}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('ZAxisResolution')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.ZAxisResolution}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('printingPlatform')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.platform}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t("userInterface")}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.userInterface}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('printSpeed')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.printSpeed}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('lightingTechnology')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.lightTechnology}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('lightDensity')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.lightDensity}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('airPurificationSystem')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.airPurificationSystem}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('interface')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.interface}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>Extras</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.extras}</div>
                                </div>
                            })}
                        </div>

                    </div>
                </div>
                <div className={`${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} w-full gap-4 px-8 grid h-full absolute top-0`}>
                    <div></div>
                    {specs.map((item,index) => {
                        return <div key ={index} className='shadow-lg h-full rounded-b-2xl' />
                    })}
                </div>
            </div>
            :
            // <></>
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
                            specs.length > 1 && specs.map((items, i) => {
                                return <div className={`mx-1 ${active === i ? 'bg-customBlue ' : 'bg-gray-300 '} h-3 w-3 rounded-full`}></div>
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
                        {
                            specs.length > 1 &&
                            <div className='h-16 mb-2'></div>

                        }
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('installationSpace')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> Monoscreen</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('ZAxis')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('XYPixelResolution')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('ZAxisResolution')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('printingPlatform')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t("userInterface")}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('printSpeed')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('lightingTechnology')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('lightDensity')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('airPurificationSystem')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('interface')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> Extras</p></div>
                        <div className='h-4 mb-2 w-full  rounded-xl'></div>
                    </div>
                    <div className={`absolute w-full h-full  grid px-2 grid-cols-2`}>
                        <div className=''></div>
                        <div className={`h-full`}>
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={7}
                                slidesPerView={1}
                                onSwiper={(swiper) => handleSwiper(swiper)}
                                onSlideChange={(swiperCurrent) => {
                                    setIsBeginning(swiperCurrent.isBeginning)
                                    setIsEnd(swiperCurrent.isEnd)
                                    setActive((swiperCurrent.activeIndex))
                                }}
                                className=' w-full h-full '
                            >
                                {specs.map((items, index) => {
                                    return <SwiperSlide key={index}>
                                        <div className='bg-white'>
                                            {
                                                specs.length > 1 &&
                                                <div className='mb-2 h-16'>
                                                    <img src={`/api/${items.thumbnail}`} alt="" className=' w-full h-full ' />
                                                </div>
                                            }
                                            <div className='bg-white shadow-lg'>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.installationSpace}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.monoscreen}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.ZAxis}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.XYPixelResolution}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.ZAxisResolution}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.platform}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.userInterface}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.printSpeed}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.lightTechnology}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.lightDensity}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.airPurificationSystem}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.interface}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.extras}</div>
                                                <div className='h-4 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'></div>
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
    const { width } = useWindowDimensions()

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
        width > 600 ?
            <div className='relative mx-5'>
                <div className=''>
                    {specs.length > 1 &&
                        <div className={` grid gap-4 ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''}  px-8`}>
                            <div className=' h-12'></div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex justify-center flex-col'>
                                    <img src={`/api/${items.thumbnail}`} alt="" />
                                    <div className='flex justify-center items-center bg-gray-300 line-clamp-2 h-16 px-2 py-2 font-semibold text-center'>
                                        {items.product_name}
                                    </div>
                                </div>
                            })}
                        </div>
                    }
                    <div>
                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('workSurface')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.workSurface}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('machineWeight')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.machineWeight}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('guides')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.guides}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('laserOpticalOutputPower')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.laserOpticalOutputPower}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('pinpointAccuracy')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.pinpointAccuracy}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('focusingMethod')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.focusingMethod}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>Air Assist</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.airAssist}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('powerSupplyOutputPower')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.powerSupplyOutputPower}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('interface')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.interface}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('possibleEngravingMaterials')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.possibleEngravingMaterials}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('PossibleCuttingThicknesses')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.possibleCuttingThicknesses}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('securityFeatures')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.securityFeatures}</div>
                                </div>
                            })}
                        </div>


                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center' />
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>

                                </div>
                            })}
                        </div>

                    </div>
                </div>
                <div className={`${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} w-full gap-4 px-8 grid h-full absolute top-0`}>
                    <div></div>
                    {specs.map((item,index) => {
                        return <div key ={index} className='shadow-lg h-full rounded-b-2xl' />
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
                            specs.length > 1 &&
                            specs.map((items, i) => {
                                return <div className={`mx-1 ${active === i ? 'bg-customBlue ' : 'bg-gray-300 '} h-3 w-3 rounded-full`}></div>
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
                <div className='relative h-[850px] w-full'>
                    <div className='absolute w-full h-8 '>
                        {
                            specs.length > 1 &&
                            <div className='h-16 mb-2'></div>
                        }
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('workSurface')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('machineWeight')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('guides')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('laserOpticalOutputPower')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('pinpointAccuracy')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('focusingMethod')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> Air Assist</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('powerSupplyOutputPower')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('interface')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('possibleEngravingMaterials')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('PossibleCuttingThicknesses')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('securityFeatures')}</p></div>
                        <div className='h-4 mb-2 w-full  rounded-xl'></div>
                    </div>
                    <div className={`absolute w-full h-full  px-2 grid grid-cols-2`}>
                        <div className=''></div>
                        <div className={`h-full`}>
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={7}
                                slidesPerView={1}
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
                                            {
                                                specs.length > 1 &&
                                                <div className='h-16 mb-2'>
                                                    <img src={`/api/${items.thumbnail}`} alt="" className='h-full w-full' />
                                                </div>
                                            }
                                            <div className='bg-white shadow-lg'>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.workSurface}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.machineWeight}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.guides}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.laserOpticalOutputPower}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.pinpointAccuracy}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.focusingMethod}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.airAssist}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.powerSupplyOutputPower}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.interface}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.possibleEngravingMaterials}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.possibleCuttingThicknesses}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.securityFeatures}</div>
                                                <div className='h-4 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'></div>
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
    const { width } = useWindowDimensions()

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
        width > 600 ?
            <div className='relative mx-5'>
                <div className=''>
                    {
                        specs.length > 1 &&
                        <div className={` grid gap-4 ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''}  px-8`}>
                            <div className=' h-12'></div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex justify-center flex-col'>
                                    <img src={`/api/${items.thumbnail}`} alt="" />
                                    <div className='flex justify-center items-center bg-gray-300 line-clamp-2 h-16 px-2 py-2 font-semibold text-center'>
                                        {items.product_name}
                                    </div>
                                </div>
                            })}
                        </div>
                    }
                    <div>
                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('scaningPrecision')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.scanningPrecision}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('scanAccuracy')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.scanAccuracy}</div>
                                </div>
                            })}
                        </div>
                         <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('workspaceScanWindow')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.workspaceScanWindow}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('scanSpeed')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.scanSpeed}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('imageCaptureRate')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.imageCaptureRate}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('minimumObjectSize_handScan')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.minimumObjectSize_handScan}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('minimumObjectSize_turnTable')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.minimumObjectSize_turnTable}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('camera')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.camera}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('lightSource')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.lightSource}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('portableBattery')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.portableBattery}</div>
                                </div>
                            })}
                        </div>

                        <div className={`grid ${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} gap-4 bg-gray-300 rounded-full overflow-hidden px-8 my-2`}>
                            <div className='flex items-center'>
                                <div className=''>{t('accesories')}</div>
                            </div>
                            {specs.map((items, index) => {
                                return <div key={index} className='flex bg-white justify-center items-center py-2 '>
                                    <div className=' '>{items.accesories}</div>
                                </div>
                            })}
                        </div>



                    </div>
                </div>
                <div className={`${specs.length === 1 ? 'grid-cols-2' : specs.length === 2 ? 'grid-cols-3' : specs.length === 3 ? 'grid-cols-4' : specs.length === 4 ? 'grid-cols-5' : ''} w-full gap-4 px-8 grid h-full absolute top-0`}>
                    <div></div>
                    {specs.map((item,index) => {
                        return <div key= {index} className='shadow-lg h-full rounded-b-2xl' />
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
                        {specs.length > 1 &&
                            specs.map((items, i) => {
                                return <div className={`mx-1 ${active === i ? 'bg-customBlue ' : 'bg-gray-300 '} h-3 w-3 rounded-full`}></div>
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
                <div className='relative h-[750px] w-full'>
                    <div className='absolute w-full h-8 '>
                        {
                            specs.length > 1 &&
                            <div className='h-16 mb-2'></div>
                        }
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('scaningPrecision')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('scanAccuracy')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('workspaceScanWindow')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('scanSpeed')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('imageCaptureRate')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('minimumObjectSize_handScan')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('minimumObjectSize_turnTable')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('camera')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('lightSource')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('portableBattery')}</p></div>
                        <div className='h-14 mb-2 w-full bg-gray-300 rounded-xl px-2 flex items-center text-sm'><p className='w-1/3'> {t('accesories')}</p></div>
                        <div className='h-4 mb-2 w-full  rounded-xl'></div>
                    </div>
                    <div className={`absolute w-full h-full px-2 grid grid-cols-2`}>
                        <div className=''></div>
                        <div className={` h-full`}>
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={7}
                                slidesPerView={1}
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
                                            {
                                                specs.length > 1 &&
                                                <div className='h-16 mb-2'>
                                                    <img src={`/api/${items.thumbnail}`} alt="" className='h-full w-full ' />
                                                </div>
                                            }
                                            <div className='bg-white shadow-lg'>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.scanningPrecision}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.scanAccuracy}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.workspaceScanWindow}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.scanSpeed}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.imageCaptureRate}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.minimumObjectSize_handScan}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.minimumObjectSize_turnTable}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.camera}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.lightSource}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.portableBattery}</div>
                                                <div className='h-14 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'>{items.accesories}</div>
                                                <div className='h-4 mb-2 line-clamp-2 text-sm flex justify-center items-center text-center'></div>
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


const SpecsComparision = () => {
    const [specs, setSpecs] = useState([])
    const [productType, setProductType] = useState(0)
    const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                let tempSpecs = []
                const result = await Api.get(`/api/products/${id}`)
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

    return (
        <div className='w-full mb-12' id='specs'>
            {
                productType === 1 && specs && specs.length > 0 &&
                <SLAVarient specs={specs} />
            }
            {
                productType === 2 && specs && specs.length > 0 &&
                <FDMVarient specs={specs} />
            }
            {
                productType === 3 && specs && specs.length > 0 &&
                <LaserVarient specs={specs} />
            }
            {
                productType === 4 && specs && specs.length > 0 &&
                <ScannarVarient specs={specs} />
            }

        </div>
    )
}

export default SpecsComparision
