import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const LaserCutterSpecs = (props) => {
    const {saveData}=props
    const [laserPower,setLaserPower]=useState('')
    const [laserWavelenght,setLaserWavelength]=useState('')
    const [engravingAccuracy,setEngravingAccuaracy]=useState('')
    const [engravingArea,setEngravingArea]=useState('')
    const [focusingMethod,setFocusingMethod]=useState('')
    const [airAssistCompressor,setAirAssistCompressor]=useState('')
    const [Interface,setInterface]=useState('')
    const [powerSupplyOutputPower,setPowerSupplyOutputPower]=useState('')
    const [laserSoftware,setLaserSoftware]=useState('')
    const [engravingMaterial,setEngravingMaterial]=useState('')
    const [cuttingMaterial,setCuttingMaterial]=useState('')
    const [airAssist,setAirAssist]=useState('')
    const [workingArea,setWorkingArea]=useState('')



    const {t}=useTranslation()

    const handleSave=()=>{
        const data={
            "interface":Interface,
            laserPower,
            laserWavelenght,
            engravingAccuracy,
            engravingArea,
            focusingMethod,
            airAssistCompressor,
            powerSupplyOutputPower,
            laserSoftware,
            engravingMaterial,
            cuttingMaterial,
            airAssist,
            workingArea,
        }
        saveData(data)

    }
    


    return (
        <>
        <div className='rounded-md p-2 mt-4 shadow-lg'>
            <div className='w-full grid grid-cols-3 gap-4 border-b-2 pb-4 border-gray-400'>

                <section className='flex flex-col'>
                    <label className='text-sm'>{t('diodeLaserOutputPower')}</label>
                    <input 
                    type="text"
                    placeholder="Type Here"
                    className='border-black border-[1px] rounded-md p-2 mt-1'
                    onChange={(e)=>{
                        setLaserPower(e.target.value)
                    }}
                    />
                </section>

                <section className='flex flex-col'>
                    <label className='text-sm'>{t('laserWavelength')}</label>
                    <input
                    type="text"
                    placeholder="Type Here"
                    className='border-black border-[1px] rounded-md p-2 mt-1'
                    onChange={(e)=>{
                        setLaserWavelength(e.target.value)
                    }}
                    />
                </section>

                <section className='flex flex-col'>
                    <label className='text-sm'>{t('engravingAccuracy')}</label>
                    <input
                    type="text"
                    placeholder="Type Here"
                    className='border-black border-[1px] rounded-md p-2 mt-1'
                    onChange={(e)=>{
                        setEngravingAccuaracy(e.target.value)
                    }}
                    />
                </section>

                <section className='flex flex-col'>
                    <label className='text-sm'>{t('engravingAreaSize')}</label>
                    <input
                    type="text"
                    placeholder="Type Here"
                    className='border-black border-[1px] rounded-md p-2 mt-1'
                    onChange={(e)=>{
                        setEngravingArea(e.target.value)
                    }}
                    />
                </section>

                <section className='flex flex-col'>
                    <label className='text-sm'>{t('focusingMethod')}</label>
                    <input
                    type="text"
                    placeholder="Type Here"
                    className='border-black border-[1px] rounded-md p-2 mt-1'
                    onChange={(e)=>{
                        setFocusingMethod(e.target.value)
                    }}
                    />
                </section>

                <section className='flex flex-col'>
                    <label className='text-sm'>{t('airAssistCompressor')}</label>
                    <input
                    type="text"
                    placeholder="Type Here"
                    className='border-black border-[1px] rounded-md p-2 mt-1'
                    onChange={(e)=>{
                        setAirAssistCompressor(e.target.value)
                    }}
                    />
                </section>

                <section className='flex flex-col'>
                    <label className='text-sm'>{t('interface')}</label>
                    <input
                    type="text"
                    placeholder="Type Here"
                    className='border-black border-[1px] rounded-md p-2 mt-1'
                    onChange={(e)=>{
                        setInterface(e.target.value)
                    }}
                    />
                </section>

                <section className='flex flex-col'>
                    <label className='text-sm'>{t('powerSupplyOutputPower')}</label>
                    <input
                    type="text"
                    placeholder="Type Here"
                    className='border-black border-[1px] rounded-md p-2 mt-1'
                    onChange={(e)=>{
                        setPowerSupplyOutputPower(e.target.value)
                    }}
                    />
                </section>

                <section className='flex flex-col'>
                    <label className='text-sm'>Laser Software</label>
                    <input
                    type="text"
                    placeholder="Type Here"
                    className='border-black border-[1px] rounded-md p-2 mt-1'
                    onChange={(e)=>{
                        setLaserSoftware(e.target.value)
                    }}
                    />
                </section>

                <section className='flex flex-col'>
                    <label className='text-sm'>{t('Engraving Material')}</label>
                    <input
                    type="text"
                    placeholder="Type Here"
                    className='border-black border-[1px] rounded-md p-2 mt-1'
                    onChange={(e)=>{
                        setEngravingMaterial(e.target.value)
                    }}
                    />
                </section>

                <section className='flex flex-col'>
                    <label className='text-sm'>{t('Cutting Material')}</label>
                    <input
                    type="text"
                    placeholder="Type Here"
                    className='border-black border-[1px] rounded-md p-2 mt-1'
                    onChange={(e)=>{
                        setCuttingMaterial(e.target.value)
                    }}
                    />
                </section>

                <section className='flex flex-col'>
                    <label className='text-sm'>{t('workingArea')}</label>
                    <input
                    type="text"
                    placeholder="Type Here"
                    className='border-black border-[1px] rounded-md p-2 mt-1'
                    onChange={(e)=>{
                        setWorkingArea(e.target.value)
                    }}
                    />
                </section>

                <section className='flex flex-col'>
                    <label className='text-sm'>{t('workingArea')}</label>
                    <input
                    type="text"
                    placeholder="Type Here"
                    className='border-black border-[1px] rounded-md p-2 mt-1'
                    onChange={(e)=>{
                        setAirAssist(e.target.value)
                    }}
                    />
                </section>

                <section className='flex flex-col'>
                    <label className='text-sm'>Air Assist</label>
                    <input
                    type="text"
                    placeholder="Type Here"
                    className='border-black border-[1px] rounded-md p-2 mt-1'
                    onChange={(e)=>{
                        setAirAssist(e.target.value)
                    }}
                    />
                </section>
                
            </div>

            
        </div>

        <div className='w-full flex justify-between mt-8 mb-40'>
      <button className='px-6 py-4 bg-customBlue rounded-lg text-white'>Back</button>
        <button
        className='px-4 py-4 bg-customBlue rounded-lg text-white'
        onClick={(e)=>{
            handleSave()
        }}
        >Save & Next</button>
      </div>
        </>

    )
}

export default LaserCutterSpecs