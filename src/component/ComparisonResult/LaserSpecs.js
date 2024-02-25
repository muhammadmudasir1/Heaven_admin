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
                    <h2 className='text-2xl font-semibold'>{t('diodeLaserOutputPower')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.LeaserCutter && product.LeaserCutter.laserPower}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('laserWavelength')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.LeaserCutter && product.LeaserCutter.laserWavelength}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('engravingAccuracy')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.LeaserCutter && product.LeaserCutter.engravingAccuracy}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('engravingAreaSize')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.LeaserCutter && product.LeaserCutter.engravingArea}</p>
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
                    <h2 className='text-2xl font-semibold'>{t('airAssistCompressor')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.LeaserCutter && product.LeaserCutter.airAssistCompressor}</p>
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
                    <h2 className='text-2xl font-semibold'>Laser Software</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.LeaserCutter && product.LeaserCutter.laserSoftware}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('Engraving Material')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.LeaserCutter && product.LeaserCutter.engravingMaterial}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('Cutting Material')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.LeaserCutter && product.LeaserCutter.cuttingMaterial}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('workingArea')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.LeaserCutter && product.LeaserCutter.workingArea }</p>
                            )
                        })
                    }
                </div>
            </div>           

        </div>
    );
};

export default LaserSpecs;
