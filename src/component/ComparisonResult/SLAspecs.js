import React from 'react';
import { useTranslation } from 'react-i18next'
import { useState } from 'react';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const SLAspecs = ({ products }) => {
    const [isSticky, setIsSticky] = useState(false);
    const {width}=useWindowDimensions
    const { t } = useTranslation()
    const fixedTabbar = () => {
        if (window.scrollY > 0) {
          setIsSticky(true)
        } else {
          setIsSticky(false)
        }
      }
      window.addEventListener('scroll', fixedTabbar)

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
                                <p className='text-lg w-full text-center'>{product.SLA && product.SLA.installationSpace}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>Monoscreen</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.SLA && product.SLA.monoscreen}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('ZAxis')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.SLA && product.SLA.ZAxis}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('XYPixelResolution')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.SLA && product.SLA.XYPixelResolution}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('ZAxisResolution')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.SLA && product.SLA.ZAxisResolution}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('ZAxisResolution')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.SLA && product.SLA.ZAxisResolution}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('printingPlatform')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.SLA && product.SLA.platform}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t("userInterface")}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.SLA && product.SLA.userInterface}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('printSpeed')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.SLA && product.SLA.printSpeed}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('lightingTechnology')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.SLA && product.SLA.lightTechnology}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('lightDensity')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.SLA && product.SLA.lightDensity}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>{t('airPurificationSystem')}</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.SLA && product.SLA.airPurificationSystem}</p>
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
                                <p className='text-lg w-full text-center'>{product.SLA && product.SLA.interface}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-full mb-2'>
                <div className='w-full border-b-[2px] border-gray-500 py-2'>
                    <h2 className='text-2xl font-semibold'>Extras</h2>
                </div>
                <div className={`w-full p-2 grid grid-cols-4`}>
                    {
                        products.map((product) => {
                            return (
                                <p className='text-lg w-full text-center'>{product.SLA && product.SLA.extras}</p>
                            )
                        })
                    }
                </div>
            </div>

           

        </div>
    );
};

export default SLAspecs;
