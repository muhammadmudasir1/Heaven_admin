import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const LaserCutterSpecs = (props) => {
    const { saveData, oldData, update } = props
    const [laserPower, setLaserPower] = useState('')
    const [laserWavelength, setLaserWavelength] = useState('')
    const [engravingAccuracy, setEngravingAccuaracy] = useState('')
    const [engravingArea, setEngravingArea] = useState('')
    const [focusingMethod, setFocusingMethod] = useState('')
    const [airAssistCompressor, setAirAssistCompressor] = useState('')
    const [Interface, setInterface] = useState('')
    const [powerSupplyOutputPower, setPowerSupplyOutputPower] = useState('')
    const [laserSoftware, setLaserSoftware] = useState('')
    const [engravingMaterial, setEngravingMaterial] = useState('')
    const [cuttingMaterial, setCuttingMaterial] = useState('')
    const [airAssist, setAirAssist] = useState('')
    const [workingArea, setWorkingArea] = useState('')
    const [specsId, setSpecsId] = useState(null)

    useEffect(() => {
        if (oldData) {
            setAirAssist(oldData.airAssist)
            setAirAssistCompressor(oldData.airAssistCompressor)
            setCuttingMaterial(oldData.cuttingMaterial)
            setEngravingAccuaracy(oldData.engravingAccuracy)
            setEngravingArea(oldData.engravingArea)
            setEngravingMaterial(oldData.engravingMaterial)
            setFocusingMethod(oldData.focusingMethod)
            setInterface(oldData.interface)
            setLaserPower(oldData.laserPower)
            setLaserSoftware(oldData.laserSoftware)
            setLaserWavelength(oldData.laserWavelength)
            setPowerSupplyOutputPower(oldData.powerSupplyOutputPower)
            setWorkingArea(oldData.workingArea)
            setSpecsId(oldData.id)
        }

    }, [oldData])


    const { t } = useTranslation()

    const handleSave = () => {
        const data = {
            "interface": Interface,
            laserPower,
            laserWavelength,
            engravingAccuracy,
            engravingArea,
            focusingMethod,
            airAssistCompressor,
            powerSupplyOutputPower,
            laserSoftware,
            engravingMaterial,
            cuttingMaterial,
            workingArea,
        }
        saveData(data)

    }

    const handleUpdate = async () => {
        const data = {
            "interface": Interface,
            laserPower,
            laserWavelength,
            engravingAccuracy,
            engravingArea,
            focusingMethod,
            airAssistCompressor,
            powerSupplyOutputPower,
            laserSoftware,
            engravingMaterial,
            cuttingMaterial,
            workingArea,
        }
        console.log(data)
        await update(oldData.product, 3, specsId, data)
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
                            value={laserPower}
                            onChange={(e) => {
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
                            value={laserWavelength}
                            onChange={(e) => {
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
                            value={engravingAccuracy}
                            onChange={(e) => {
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
                            value={engravingArea}
                            onChange={(e) => {
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
                            value={focusingMethod}
                            onChange={(e) => {
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
                            value={airAssistCompressor}
                            onChange={(e) => {
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
                            value={Interface}
                            onChange={(e) => {
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
                            value={powerSupplyOutputPower}
                            onChange={(e) => {
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
                            value={laserSoftware}
                            onChange={(e) => {
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
                            value={engravingMaterial}
                            onChange={(e) => {
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
                            value={cuttingMaterial}
                            onChange={(e) => {
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
                            value={workingArea}
                            onChange={(e) => {
                                setWorkingArea(e.target.value)
                            }}
                        />
                    </section>



                    {/* <section className='flex flex-col'>
                    <label className='text-sm'>Air Assist</label>
                    <input
                    type="text"
                    placeholder="Type Here"
                    className='border-black border-[1px] rounded-md p-2 mt-1'
                    onChange={(e)=>{
                        setAirAssist(e.target.value)
                    }}
                    />
                </section> */}

                </div>


            </div>

            <div className='w-full flex flex-row-reverse mt-8 mb-40'>
            {
                    specsId ?
                        <button className='px-4 py-4 bg-customBlue rounded-lg text-white'
                            onClick={(e) => {
                                handleUpdate()
                            }}
                        >Update</button>
                        :
                        <button className='px-4 py-4 bg-customBlue rounded-lg text-white'
                            onClick={(e) => {
                                handleSave()
                            }}
                        >Save & Next</button>
                }
            </div>
        </>

    )
}

export default LaserCutterSpecs