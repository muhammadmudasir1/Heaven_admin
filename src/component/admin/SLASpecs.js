import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const SLASpecs = (props) => {
    const { saveData } = props
    const [installationSpace, setInstallationSpace] = useState('')
    const [monoscreen, setMonoscreen] = useState('')
    const [pixelResolution, setPixelResolution] = useState('')
    const [XYPixelResolution, setXYPixelResolution] = useState('')
    const [ZAxis, setZAxis] = useState('')
    const [ZAxisResolution,setZAxisResolution] = useState('')
    const [platorm, setPlatform] = useState('')
    const [touchScreen, setTouchScreen] = useState('')
    const [printSpeed, setPrintSpeed] = useState('')
    const [lightTechnology, setLightTechnology] = useState('')
    const [lightDensity, setLightDensity] = useState('')
    const [airPurificationSystem, setAirPurificationSystem] = useState('')
    const [Interface, setInterface] = useState('')
    const [buildSize, setBuildSize] = useState('')

    const handleSave = () => {
        const data = {
            installationSpace,
            monoscreen,
            pixelResolution,
            XYPixelResolution,
            ZAxis,
            ZAxisResolution,
            platorm,
            touchScreen,
            printSpeed,
            lightTechnology,
            lightDensity,
            airPurificationSystem,
            Interface,
            buildSize
        }
        saveData(data)
    }

    const { t } = useTranslation()



    return (
        <>
            <div className='rounded-md p-2 mt-4 shadow-lg'>
                <div className='w-full grid grid-cols-3 gap-4 border-b-2 pb-4 border-gray-400'>

                    <section className='flex flex-col'>
                        <label className='text-sm'>{t('installationSpace')}</label>

                        <input
                        type="text"
                        placeholder="Type Here"
                        className='border-black border-[1px] rounded-md p-2 mt-1'
                        onChange={(e)=>{
                            setInstallationSpace(e.target.value)
                        }}
                        />

                    </section>

                    <section className='flex flex-col'>
                        <label className='text-sm'>Monoscreen</label>
                        
                        <input
                        type="text"
                        placeholder="Type Here"
                        className='border-black border-[1px] rounded-md p-2 mt-1'
                        onChange={(e)=>{
                            setMonoscreen(e.target.value)
                        }}
                        />

                    </section>

                    <section className='flex flex-col'>
                        <label className='text-sm'>{t('pixelResolution')}</label>
                        
                        <input
                        type="text"
                        placeholder="Type Here"
                        className='border-black border-[1px] rounded-md p-2 mt-1'
                        onChange={(e)=>{
                            setPixelResolution(e.target.value)
                        }}
                        />

                    </section>

                    <section className='flex flex-col'>
                        <label className='text-sm'>{t('XYPixelResolution')}</label>
                        
                        <input
                        type="text"
                        placeholder="Type Here"
                        className='border-black border-[1px] rounded-md p-2 mt-1'
                        onChange={(e)=>{
                            setXYPixelResolution(e.target.value)
                        }}
                        />

                    </section>
                    <section className='flex flex-col'>
                        <label className='text-sm'>{t('ZAxis')}</label>
                        
                        <input
                        type="text"
                        placeholder="Type Here"
                        className='border-black border-[1px] rounded-md p-2 mt-1'
                        onChange={(e)=>{
                            setZAxis(e.target.value)
                        }}
                        />

                    </section>
                    <section className='flex flex-col'>
                        <label className='text-sm'>{t('ZAxisResolution')}</label>
                        
                        <input
                        type="text"
                        placeholder="Type Here"
                        className='border-black border-[1px] rounded-md p-2 mt-1'
                        onChange={(e)=>{
                            setZAxisResolution(e.target.value)
                        }}
                        />

                    </section>
                    <section className='flex flex-col'>
                        <label className='text-sm'>Platform</label>

                        <input
                        type="text"
                        placeholder="Type Here"
                        className='border-black border-[1px] rounded-md p-2 mt-1'
                        onChange={(e)=>{
                            setPlatform(e.target.value)
                        }}
                        />

                    </section>
                    <section className='flex flex-col'>
                        <label className='text-sm'>Touchscreen</label>
                        
                        <input
                        type="text"
                        placeholder="Type Here"
                        className='border-black border-[1px] rounded-md p-2 mt-1'
                        onChange={(e)=>{
                            setTouchScreen(e.target.value)
                        }}
                        />

                    </section>
                    <section className='flex flex-col'>
                        <label className='text-sm'>{t('printSpeed')}</label>
                        
                        <input
                        type="text"
                        placeholder="Type Here"
                        className='border-black border-[1px] rounded-md p-2 mt-1'
                        onChange={(e)=>{
                            setPrintSpeed(e.target.value)
                        }}
                        />

                    </section>
                    <section className='flex flex-col'>
                        <label className='text-sm'>{t('lightingTechnology')}</label>
                        
                        <input
                        type="text"
                        placeholder="Type Here"
                        className='border-black border-[1px] rounded-md p-2 mt-1'
                        onChange={(e)=>{
                            setLightTechnology(e.target.value)
                        }}
                        />

                    </section>
                    <section className='flex flex-col'>
                        <label className='text-sm'>{t('lightDensity')}</label>
                        
                        <input
                        type="text"
                        placeholder="Type Here"
                        className='border-black border-[1px] rounded-md p-2 mt-1'
                        onChange={(e)=>{
                            setLightDensity(e.target.value)
                        }}
                        />

                    </section>
                    <section className='flex flex-col'>
                        <label className='text-sm'>{t('airPurificationSystem')}</label>
                        
                        <input
                        type="text"
                        placeholder="Type Here"
                        className='border-black border-[1px] rounded-md p-2 mt-1'
                        onChange={(e)=>{
                            setAirPurificationSystem(e.target.value)
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
                        <label className='text-sm'>Build Size</label>
                        
                        <input
                        type="text"
                        placeholder="Type Here"
                        className='border-black border-[1px] rounded-md p-2 mt-1'
                        onChange={(e)=>{
                            setBuildSize(e.target.value)
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

export default SLASpecs