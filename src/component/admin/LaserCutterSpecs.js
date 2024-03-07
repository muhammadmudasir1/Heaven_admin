import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const LaserCutterSpecs = (props) => {
    const { saveData, oldData, update } = props
    // const [laserPower, setLaserPower] = useState('')
    // const [laserWavelength, setLaserWavelength] = useState('')
    // const [engravingAccuracy, setEngravingAccuaracy] = useState('')
    // const [engravingArea, setEngravingArea] = useState('')
    const [focusingMethod, setFocusingMethod] = useState('')
    // const [airAssistCompressor, setAirAssistCompressor] = useState('')
    const [Interface, setInterface] = useState('')
    const [powerSupplyOutputPower, setPowerSupplyOutputPower] = useState('')
    // const [laserSoftware, setLaserSoftware] = useState('')
    // const [engravingMaterial, setEngravingMaterial] = useState('')
    // const [cuttingMaterial, setCuttingMaterial] = useState('')
    const [airAssist, setAirAssist] = useState('')
    const [workingArea, setWorkingArea] = useState('')
    const [workSurface, setWorkSurface] = useState('')
    const [machineWeight, setMachineWeight] = useState('')
    const [guides, setGuides] = useState('')
    const [laserOpticalOutputPower, setLaserOpticalOutputPower] = useState('')
    const [pinpointAccuracy, setPinpointAccuracy] = useState('')
    const [possibleEngravingMaterials, setPossibleEngravingMaterials] = useState('')
    const [possibleCuttingThicknesses, setPossibleCuttingThicknesses] = useState('')
    const [securityFeatures, setSecurityFeatures] = useState('')
    const [specsId, setSpecsId] = useState(null)
    

    useEffect(() => {
        if (oldData) {
            setAirAssist(oldData.airAssist)
            // setAirAssistCompressor(oldData.airAssistCompressor)
            // setCuttingMaterial(oldData.cuttingMaterial)
            // setEngravingAccuaracy(oldData.engravingAccuracy)
            // setEngravingArea(oldData.engravingArea)
            // setEngravingMaterial(oldData.engravingMaterial)
            setFocusingMethod(oldData.focusingMethod)
            setInterface(oldData.interface)
            // setLaserPower(oldData.laserPower)
            // setLaserSoftware(oldData.laserSoftware)
            // setLaserWavelength(oldData.laserWavelength)
            setPowerSupplyOutputPower(oldData.powerSupplyOutputPower)
            setWorkingArea(oldData.workingArea)
            setMachineWeight(oldData.machineWeight)
            setGuides(oldData.guides)
            setLaserOpticalOutputPower(oldData.laserOpticalOutputPower)
            setPinpointAccuracy(oldData.pinpointAccuracy)
            setPossibleEngravingMaterials(oldData.possibleEngravingMaterials)
            setPossibleCuttingThicknesses(oldData.possibleCuttingThicknesses)
            setSecurityFeatures(oldData.securityFeatures)
            setWorkSurface(oldData.workSurface)
            setSpecsId(oldData.id)
        }

    }, [oldData])


    const { t } = useTranslation()

    const handleSave = () => {
        const data = {
            "interface": Interface,
            // laserPower,
            // laserWavelength,
            // engravingAccuracy,
            // engravingArea,
            focusingMethod,
            // airAssistCompressor,
            airAssist,
            powerSupplyOutputPower,
            // laserSoftware,
            // engravingMaterial,
            // cuttingMaterial,
            workingArea,
            machineWeight,
            guides,
            laserOpticalOutputPower,
            pinpointAccuracy,
            possibleEngravingMaterials,
            possibleCuttingThicknesses,
            securityFeatures,
            workSurface
        }
        saveData(data)

    }

    const handleUpdate = async () => {
        const data = {
            "interface": Interface,
            // laserPower,
            // laserWavelength,
            // engravingAccuracy,
            // engravingArea,
            focusingMethod,
            // airAssistCompressor,
            airAssist,
            powerSupplyOutputPower,
            // laserSoftware,
            // engravingMaterial,
            // cuttingMaterial,
            workingArea,
            machineWeight,
            guides,
            laserOpticalOutputPower,
            pinpointAccuracy,
            possibleEngravingMaterials,
            possibleCuttingThicknesses,
            securityFeatures,
            workSurface
        }
        console.log(data)
        await update(oldData.product, 3, specsId, data)
    }




    return (
        <>
            <div className='rounded-md p-2 mt-4 shadow-lg'>
                <div className='w-full grid grid-cols-3 gap-4 border-b-2 pb-4 border-gray-400'>

                    <section className='flex flex-col'>
                        <label className='text-sm'>{t('workSurface')}</label>
                        <input
                            type="text"
                            placeholder="Type Here"
                            className='border-black border-[1px] rounded-md p-2 mt-1'
                            value={workSurface}
                            onChange={(e) => {
                                setWorkSurface(e.target.value)
                            }}
                        />
                    </section>

                    <section className='flex flex-col'>
                        <label className='text-sm'>{t('machineWeight')}</label>
                        <input
                            type="text"
                            placeholder="Type Here"
                            className='border-black border-[1px] rounded-md p-2 mt-1'
                            value={machineWeight}
                            onChange={(e) => {
                                setMachineWeight(e.target.value)
                            }}
                        />
                    </section>

                    <section className='flex flex-col'>
                        <label className='text-sm'>{t('guides')}</label>
                        <input
                            type="text"
                            placeholder="Type Here"
                            className='border-black border-[1px] rounded-md p-2 mt-1'
                            value={guides}
                            onChange={(e) => {
                                setGuides(e.target.value)
                            }}
                        />
                    </section>

                    <section className='flex flex-col'>
                        <label className='text-sm'>{t('laserOpticalOutputPower')}</label>
                        <input
                            type="text"
                            placeholder="Type Here"
                            className='border-black border-[1px] rounded-md p-2 mt-1'
                            value={laserOpticalOutputPower}
                            onChange={(e) => {
                                setLaserOpticalOutputPower(e.target.value)
                            }}
                        />
                    </section>

                    <section className='flex flex-col'>
                        <label className='text-sm'>{t('pinpointAccuracy')}</label>
                        <input
                            type="text"
                            placeholder="Type Here"
                            className='border-black border-[1px] rounded-md p-2 mt-1'
                            value={pinpointAccuracy}
                            onChange={(e) => {
                                setPinpointAccuracy(e.target.value)
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
                        <label className='text-sm'>Air Assist</label>
                        <input
                            type="text"
                            placeholder="Type Here"
                            className='border-black border-[1px] rounded-md p-2 mt-1'
                            value={airAssist}
                            onChange={(e) => {
                                setAirAssist(e.target.value)
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
                        <label className='text-sm'>{t('possibleEngravingMaterials')}</label>
                        <input
                            type="text"
                            placeholder="Type Here"
                            className='border-black border-[1px] rounded-md p-2 mt-1'
                            value={possibleEngravingMaterials}
                            onChange={(e) => {
                                setPossibleEngravingMaterials(e.target.value)
                            }}
                        />
                    </section>

                    <section className='flex flex-col'>
                        <label className='text-sm'>{t('PossibleCuttingThicknesses')}</label>
                        <input
                            type="text"
                            placeholder="Type Here"
                            className='border-black border-[1px] rounded-md p-2 mt-1'
                            value={possibleCuttingThicknesses}
                            onChange={(e) => {
                                setPossibleCuttingThicknesses(e.target.value)
                            }}
                        />
                    </section>

                    <section className='flex flex-col'>
                        <label className='text-sm'>{t('securityFeatures')}</label>
                        <input
                            type="text"
                            placeholder="Type Here"
                            className='border-black border-[1px] rounded-md p-2 mt-1'
                            value={securityFeatures}
                            onChange={(e) => {
                                setSecurityFeatures(e.target.value)
                            }}
                        />
                    </section>

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