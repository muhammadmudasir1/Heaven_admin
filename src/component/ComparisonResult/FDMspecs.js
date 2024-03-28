import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next'
import { useState } from 'react';

const FDMSpecs = ({ products }) => {
    const [isSticky, setIsSticky] = useState(false);
    const { t } = useTranslation()
    const fixedTabbar = () => {
        if (window.scrollY > 0) {
          setIsSticky(true)
        } else {
          setIsSticky(false)
        }
      }
      window.addEventListener('scroll', fixedTabbar)

    useEffect(()=>{
        console.log(products)
    },[products])

    return (
        <div className={`py-4 px-8 flex flex-col ${isSticky?"pt-[300px]":""}`}>

            <div className='w-full mb-2'>
                <div className={`w-full border-b-[2px] border-gray-500 py-2  `}>
                    <h2 className='text-2xl font-semibold'>{t('installationSpace')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.FDM && product.FDM.installationSpace}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('installationSpaceEnclouser')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.FDM && product.FDM.installatingSpaceEnclouser}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('frameMaterial')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.FDM && product.FDM.frameMaterial}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('DriveTech')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.FDM && product.FDM.driveTech}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('guides')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.FDM && product.FDM.guides}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('PrintAccuracy')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.FDM && product.FDM.printAccuracy}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>Text</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.FDM && product.FDM.text}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('PrintBedTechnology')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.FDM && product.FDM.printBedTechnology}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('FilamentCompatibility')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.FDM && product.FDM.FilamentCompatibility}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('PrintSpeed')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.FDM && product.FDM.printSpeed}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('RealisticPrintingSpeed')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.FDM && product.FDM.realisticPrintingSpeed}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('maximumAcceleration')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.FDM && product.FDM.maximumAcceleration}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('maximumPressureNozzleTemperature')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.FDM && product.FDM.maximumPressureNozzleTemperature}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('MaximumPrintBedTemperature')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.FDM && product.FDM.maximumPrintBedTemperature}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('MaximumPressureChamberTemperature')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.FDM && product.FDM.maximumPressureChamberTemperature}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('VibrationSuppression')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.FDM && product.FDM.vibrationSuppresion ? "YES" : "NO"}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('AutomaticPrintBedMeasurement')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.FDM && product.FDM.automaticPrintBedMeasurement ? "YES" : "NO"}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('AutomaticZOffsetCalibration')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.FDM && product.FDM.automaticZOffsetCalibration ? "YES" : "NO"}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('LidarScannar')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.FDM && product.FDMliderScannar ? "YES" : "NO"}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('DoorSensor')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.FDM && product.FDM.doorScannar ? "YES" : "NO"}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('AirFilter')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.FDM && product.FDM.airFilter}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('circulationFanPressureRoom')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.FDM && product.FDM.circulationFanPressureRoom ? "YES" : "NO"}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('supportingComponentCooling')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.FDM && product.FDM.supportingComponentCooling ? "YES" : "NO"}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('DataConnection')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.FDM && product.FDM.dataConnection}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('PrintRoomCamera')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.FDM && product.FDM.printRoomCamera}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('LEDLight')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.FDM && product.FDM.LEDLighting ? "YES" : "NO"}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('motherboard')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.FDM && product.FDM.motherboard}</p>
                            )
                        })
                    }
                </div>
            </div>

           

        </div>
    );
};

export default FDMSpecs;
