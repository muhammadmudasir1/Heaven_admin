import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const ScannarSpecs = (props) => {
    const {saveData}=props
    const [scanningPrecision,setScanningPrecision]=useState('')
    const [scanAccuracy,setScanAccuracy]=useState('')
    const [scanningArea,setScanningArea]=useState('')
    const [scanningDistance,setScanningDistance]=useState('')
    const [scanSpeed,setScanSpeed]=useState('')
    const [objectDimension_handScan,setObjectDimensionHandScan]=useState('')
    const [objectDimension_turnTable,setObjectDimensionTurnTable]=useState('')
    const [lightSource,setLightSource]=useState('')
    const [camera,setCamera]=useState('')
    const [standardPackage,setStandardPackage]=useState('')
    const [premiumPackage,setPremiumPackage]=useState('')
    const [scanMinimumSize,setScanMinimumSize]=useState('')
    const [scanQuality,setScanQuality]=useState('')
    const [scanMaximumSize,setScanMaximumSize]=useState('')

    const {t}=useTranslation()

    const handleSave=()=>{
        const data={
            scanningPrecision,
            scanAccuracy,
            scanningArea,
            scanningDistance,
            scanSpeed,
            objectDimension_handScan,
            objectDimension_turnTable,
            lightSource,
            camera,
            standardPackage,
            premiumPackage,
            scanMinimumSize,
            scanQuality,
            scanMaximumSize
        }
        saveData(data)

    }


    


    return (
        <>
        <div className='rounded-md p-2 mt-4 shadow-lg'>
            <div className='w-full grid grid-cols-3 gap-4 border-b-2 pb-4 border-gray-400'>

                <section className='flex flex-col'>
                    <label className='text-sm'>{t('scaningPrecision')}</label>

                    <input
                    type="text"
                    placeholder="Type Here"
                    className='border-black border-[1px] rounded-md p-2 mt-1'
                    onChange={(e)=>{
                        setScanningPrecision(e.target.value)
                    }}
                    />

                </section>

                <section className='flex flex-col'>
                    <label className='text-sm'>{t('scanAccuracy')}</label>

                    <input
                    type="text"
                    placeholder="Type Here"
                    className='border-black border-[1px] rounded-md p-2 mt-1'
                    onChange={(e)=>{
                        setScanAccuracy(e.target.value)
                    }}
                    />

                </section>

                <section className='flex flex-col'>
                    <label className='text-sm'>{t('scaningArea')}</label>

                    <input
                    type="text"
                    placeholder="Type Here"
                    className='border-black border-[1px] rounded-md p-2 mt-1'
                    onChange={(e)=>{
                        setScanningArea(e.target.value)
                    }}
                    />

                </section>

                <section className='flex flex-col'>
                    <label className='text-sm'>{t('scanningDistance')}</label>
                    
                    <input
                    type="text"
                    placeholder="Type Here"
                    className='border-black border-[1px] rounded-md p-2 mt-1'
                    onChange={(e)=>{
                        setScanningDistance(e.target.value)
                    }}
                    />

                </section>

                <section className='flex flex-col'>
                    <label className='text-sm'>{t('scanSpeed')}</label>
                    
                    <input
                    type="text"
                    placeholder="Type Here"
                    className='border-black border-[1px] rounded-md p-2 mt-1'
                    onChange={(e)=>{
                        setScanSpeed(e.target.value)
                    }}
                    />

                </section>

                <section className='flex flex-col'>
                    <label className='text-sm'>{t('objectDimensionHandScan')}</label>
                    
                    <input
                    type="text"
                    placeholder="Type Here"
                    className='border-black border-[1px] rounded-md p-2 mt-1'
                    onChange={(e)=>{
                        setObjectDimensionHandScan(e.target.value)
                    }}
                    />

                </section>
                <section className='flex flex-col'>
                    <label className='text-sm'>{t('objectDimensionTurnTable')}</label>

                    <input
                    type="text"
                    placeholder="Type Here"
                    className='border-black border-[1px] rounded-md p-2 mt-1'
                    onChange={(e)=>{
                        setObjectDimensionTurnTable(e.target.value)
                    }}
                    />

                </section>
                <section className='flex flex-col'>
                    <label className='text-sm'>{t('lightSource')}</label>

                    <input
                    type="text"
                    placeholder="Type Here"
                    className='border-black border-[1px] rounded-md p-2 mt-1'
                    onChange={(e)=>{
                        setLightSource(e.target.value)
                    }}
                    />

                </section>
                <section className='flex flex-col'>
                    <label className='text-sm'>{t('camera')}</label>

                    <input 
                    type="text" 
                    placeholder="Type Here" 
                    className='border-black border-[1px] rounded-md p-2 mt-1' 
                    onChange={(e)=>{
                        setCamera(e.target.value)
                    }}
                    />

                </section>
                <section className='flex flex-col'>
                    <label className='text-sm'>{t('standardPackage')}</label>
                    
                    <input 
                    type="text" 
                    placeholder="Type Here" 
                    className='border-black border-[1px] rounded-md p-2 mt-1' 
                    onChange={(e)=>{
                        setStandardPackage(e.target.value)
                    }}
                    />

                </section>

                <section className='flex flex-col'>
                    <label className='text-sm'>{t('premiumPackage')}</label>
                    
                    <input 
                    type="text" 
                    placeholder="Type Here" 
                    className='border-black border-[1px] rounded-md p-2 mt-1' 
                    onChange={(e)=>{
                        setPremiumPackage(e.target.value)
                    }}
                    />

                </section>

                <section className='flex flex-col'>
                    <label className='text-sm'>{t('scanMinimumSize')}</label>
                    
                    <input 
                    type="text" 
                    placeholder="Type Here" 
                    className='border-black border-[1px] rounded-md p-2 mt-1' 
                    onChange={(e)=>{
                        setScanMinimumSize(e.target.value)
                    }}
                    />

                </section>
                
                <section className='flex flex-col'>
                    <label className='text-sm'>{t('scanMaximumSize')}</label>
                    
                    <input 
                    type="text" 
                    placeholder="Type Here" 
                    className='border-black border-[1px] rounded-md p-2 mt-1' 
                    onChange={(e)=>{
                        setScanMaximumSize(e.target.value)
                    }}
                    />

                </section>

                <section className='flex flex-col'>
                    <label className='text-sm'>{t('scanQuality')}</label>
                    
                    <input 
                    type="text" 
                    placeholder="Type Here" 
                    className='border-black border-[1px] rounded-md p-2 mt-1' 
                    onChange={(e)=>{
                        setScanQuality(e.target.value)
                    }}
                    />

                </section>
                
            </div>

            
        </div>

        <div className='w-full flex justify-between mt-8 mb-40'>
      <button className='px-6 py-4 bg-customBlue rounded-lg text-white'>Back</button>
        <button className='px-4 py-4 bg-customBlue rounded-lg text-white'
        onClick={(e)=>{
            handleSave()
        }}
        >Save & Next</button>
      </div>
        </>

    )
}

export default ScannarSpecs