import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const SLASpecs = (props) => {
    const { saveData,oldData,update } = props
    const [installationSpace, setInstallationSpace] = useState('')
    const [monoscreen, setMonoscreen] = useState('')
    const [pixelResolution, setPixelResolution] = useState('')
    const [XYPixelResolution, setXYPixelResolution] = useState('')
    const [ZAxis, setZAxis] = useState('')
    const [ZAxisResolution,setZAxisResolution] = useState('')
    const [platform, setPlatform] = useState('')
    const [touchScreen, setTouchScreen] = useState('')
    const [printSpeed, setPrintSpeed] = useState('')
    const [lightTechnology, setLightTechnology] = useState('')
    const [lightDensity, setLightDensity] = useState('')
    const [airPurificationSystem, setAirPurificationSystem] = useState('')
    const [Interface, setInterface] = useState('')
    const [buildSize, setBuildSize] = useState('')
    const [specsId,setSpecsId]=useState(null)

    useEffect(()=>{
        // console.log(oldData)
        if(oldData){
            setXYPixelResolution(oldData.XYPixelResolution)
            setZAxis(oldData.ZAxis)
            setZAxisResolution(oldData.ZAxisResolution)
            setAirPurificationSystem(oldData.airPurificationSystem)
            setBuildSize(oldData.buildSize)
            setInstallationSpace(oldData.installationSpace)
            setInterface(oldData.interface)
            setLightDensity(oldData.lightDensity)
            setLightTechnology(oldData.lightTechnology)
            setMonoscreen(oldData.monoscreen)
            setPixelResolution(oldData.pixelResolution)
            setPlatform(oldData.platform)
            setPrintSpeed(oldData.printSpeed)
            setTouchScreen(oldData.touchScreen)
            setSpecsId(oldData.id)
        }
        console.log(oldData)
    },[oldData])

    useEffect(()=>{
        console.log(specsId)
    },[specsId])

    const handleSave = async () => {
        const data = {
            installationSpace,
            monoscreen,
            pixelResolution,
            XYPixelResolution,
            ZAxis,
            ZAxisResolution,
            platform,
            touchScreen,
            printSpeed,
            lightTechnology,
            lightDensity,
            airPurificationSystem,
            "interface":Interface,
            buildSize
        }
        saveData(data)
    }

    const handleUpdate = async() =>{
        const data = {
            installationSpace,
            monoscreen,
            pixelResolution,
            XYPixelResolution,
            ZAxis,
            ZAxisResolution,
            platform,
            touchScreen,
            printSpeed,
            lightTechnology,
            lightDensity,
            airPurificationSystem,
            "interface":Interface,
            buildSize
        }
        await update(oldData.product, 1, specsId, data)
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
                        value={installationSpace}
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
                        value={monoscreen}
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
                        value={pixelResolution}
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
                        value={XYPixelResolution}
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
                        value={ZAxis}
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
                        value={ZAxisResolution}
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
                        value={platform}
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
                        value={touchScreen}
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
                        value={printSpeed}
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
                        value={lightTechnology}
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
                        value={lightDensity}
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
                        value={airPurificationSystem}
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
                        value={Interface}
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
                        value={buildSize}
                        />

                    </section>
                </div>


            </div>

            <div className='w-full flex flex-row-reverse mt-8 mb-40'>
                {
                    specsId?
                    <button className='px-4 py-4 bg-customBlue rounded-lg text-white'
                    onClick={(e)=>{
                        handleUpdate()
                    }}
                    >Update</button>
                    :
                    <button className='px-4 py-4 bg-customBlue rounded-lg text-white'
                    onClick={(e)=>{
                        handleSave()
                    }}
                    >Save & Next</button>
                }
            </div>
        </>

    )
}

export default SLASpecs