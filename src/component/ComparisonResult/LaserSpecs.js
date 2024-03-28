import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next'
import { useState } from 'react';

const LaserSpecs = ({ products }) => {
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
                    <h2 className='text-2xl font-semibold'>{t('workSurface')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.LeaserCutter && product.LeaserCutter.workSurface}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('machineWeight')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.LeaserCutter && product.LeaserCutter.machineWeight}</p>
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
                                <p className='text-lg w-full text-center'>{product.LeaserCutter && product.LeaserCutter.guides}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('laserOpticalOutputPower')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.LeaserCutter && product.LeaserCutter.laserOpticalOutputPower}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('pinpointAccuracy')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.LeaserCutter && product.LeaserCutter.pinpointAccuracy}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('focusingMethod')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.LeaserCutter && product.LeaserCutter.focusingMethod}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>Air Assist</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.LeaserCutter && product.LeaserCutter.airAssist}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('powerSupplyOutputPower')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.LeaserCutter && product.LeaserCutter.powerSupplyOutputPower}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('interface')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.LeaserCutter && product.LeaserCutter.interface}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('possibleEngravingMaterials')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.LeaserCutter && product.LeaserCutter.possibleEngravingMaterials}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('PossibleCuttingThicknesses')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.LeaserCutter && product.LeaserCutter.possibleCuttingThicknesses}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('securityFeatures')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.LeaserCutter && product.LeaserCutter.securityFeatures }</p>
                            )
                        })
                    }
                </div>
            </div>           

        </div>
    );
};

export default LaserSpecs;
