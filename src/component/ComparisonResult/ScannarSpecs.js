import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next'
import { useState } from 'react';

const ScannarSpecs = ({ products }) => {
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
                    <h2 className='text-2xl font-semibold'>{t('scaningPrecision')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.scanner && product.scanner.scanningPrecision}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('scanAccuracy')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.scanner && product.scanner.scanAccuracy}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('scaningArea')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.scanner && product.scanner.scanningArea}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('scanningDistance')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.scanner && product.scanner.scanningDistance}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('scanSpeed')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.scanner && product.scanner.scanSpeed}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('objectDimensionHandScan')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.scanner && product.scanner.objectDimension_handScan}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('objectDimensionTurnTable')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.scanner && product.scanner.objectDimension_turnTable}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('lightSource')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.scanner && product.scanner.lightSource}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('camera')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.scanner && product.scanner.camera}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('standardPackage')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.scanner && product.scanner.standardPackage}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('premiumPackage')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.scanner && product.scanner.premiumPackage}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('scanMinimumSize')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.scanner && product.scanner.scanMinimumSize }</p>
                            )
                        })
                    }
                </div>
            </div>  

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('scanMaximumSize')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.scanner && product.scanner.scanMaximumSize }</p>
                            )
                        })
                    }
                </div>
            </div>           

        </div>
    );
};

export default ScannarSpecs;
