import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const FDMSpecs = (props) => {
    const { saveData, oldData, update } = props
    const [installationSpace, setInstallationSpace] = useState('')
    const [driveTech, setDriveTech] = useState('')
    const [installatingSpaceEnclouser, setInstallatingSpaceEnclouser] = useState('')
    const [printBedTechnology, setPrintBedTechnology] = useState('')
    const [filamentCompatibility, setFilamentCompatibility] = useState('')
    const [printSpeed, setPrintSpeed] = useState('')
    const [pressureChamberTempurature, setPressureChamberTempurature] = useState('')
    const [vibrationSuppresion, setVibrationSuppresion] = useState(false)
    const [automaticPrintBedMeasurement, setAutomaticPrintBedMeasurement] = useState(false)
    const [automaticZOffsetCalibration, setAutomaticZOffsetCalibration] = useState(false)
    const [liderScannar, setLidarScannar] = useState(false)
    const [doorScannar, setDoorScannar] = useState(false)
    const [airFilter, setAirFilter] = useState("")
    const [circulationFanPressureRoom, setCirculationFanPressureRoom] = useState(false)
    const [supportingComponentCooling, setSupportingComponentCooling] = useState(false)
    const [display, setDisplay] = useState("")
    const [dataConnection, setDataConnection] = useState("")
    const [motherboard, setMotherboard] = useState("")
    const [printRoomCamera, setPrintCamera] = useState("")
    const [LEDLighting, setLEDLighting] = useState(false)
    const [specsId, setSpecsId] = useState(null)
    const [guides, setGuides] = useState("")
    const [frameMaterial, setFrameMaterial] = useState("")
    const [printAccuracy, setPrintAccuracy] = useState("")
    const [text, setText] = useState("")
    const [realisticPrintingSpeed, setRealisticPrintingSpeed] = useState("")
    const [maximumAcceleration, setMaximumAcceleration] = useState("")
    const [maximumPressureNozzleTemperature, setMaximumPressureNozzleTemperature] = useState("")
    const [maximumPressureChamberTemperature, setMaximumPressureChamberTemperature] = useState("")
    const [maximumPrintBedTemperature, setMaximumPrintBedTemperature] = useState("")
    const { t } = useTranslation()

    useEffect(() => {
        if(oldData){
            setLEDLighting(oldData.LEDLighting)
            setAirFilter(oldData.airFilter)
            setAutomaticPrintBedMeasurement(oldData.automaticPrintBedMeasurement)
            setAutomaticZOffsetCalibration(oldData.automaticZOffsetCalibration)
            setCirculationFanPressureRoom(oldData.circulationFanPressureRoom)
            setDataConnection(oldData.dataConnection)
            setDisplay(oldData.display)
            setDoorScannar(oldData.doorScannar)
            setDriveTech(oldData.driveTech)
            setFilamentCompatibility(oldData.filamentCompatibility)
            setInstallatingSpaceEnclouser(oldData.installatingSpaceEnclouser)
            setInstallationSpace(oldData.installationSpace)
            setLidarScannar(oldData.liderScannar)
            setMotherboard(oldData.motherboard)
            setPressureChamberTempurature(oldData.pressureChamberTempurature)
            setPrintBedTechnology(oldData.printBedTechnology)
            setPrintCamera(oldData.printRoomCamera)
            setPrintSpeed(oldData.printSpeed)
            setSupportingComponentCooling(oldData.supportingComponentCooling)
            setVibrationSuppresion(oldData.vibrationSuppresion)
            setGuides(oldData.guides)
            setFrameMaterial(oldData.frameMaterial)
            setPrintAccuracy(oldData.printAccuracy)
            setText(oldData.text)
            setRealisticPrintingSpeed(oldData.realisticPrintingSpeed)
            setMaximumAcceleration(oldData.maximumAcceleration)
            setMaximumPressureNozzleTemperature(oldData.maximumPressureNozzleTemperature)
            setMaximumPressureChamberTemperature(oldData.maximumPressureChamberTemperature)
            setMaximumPrintBedTemperature(oldData.maximumPrintBedTemperature)
            setSpecsId(oldData.id)

        }
        console.log(oldData)
    }, [oldData])



    const handleSave = () => {
        const data = {
            installationSpace,
            driveTech,
            installatingSpaceEnclouser,
            printBedTechnology,
            filamentCompatibility,
            printSpeed,
            pressureChamberTempurature,
            vibrationSuppresion,
            automaticPrintBedMeasurement,
            automaticZOffsetCalibration,
            liderScannar,
            doorScannar,
            airFilter,
            circulationFanPressureRoom,
            supportingComponentCooling,
            display,
            dataConnection,
            motherboard,
            printRoomCamera,
            LEDLighting,
            guides,
            frameMaterial,
            printAccuracy,
            text,
            realisticPrintingSpeed,
            maximumAcceleration,
            maximumPressureNozzleTemperature,
            maximumPressureChamberTemperature,
            maximumPrintBedTemperature
        }
        saveData(data)
    }

    const handleUpdate = async () => {
        const data = {
            installationSpace,
            driveTech,
            installatingSpaceEnclouser,
            printBedTechnology,
            filamentCompatibility,
            printSpeed,
            pressureChamberTempurature,
            vibrationSuppresion,
            automaticPrintBedMeasurement,
            automaticZOffsetCalibration,
            liderScannar,
            doorScannar,
            airFilter,
            circulationFanPressureRoom,
            supportingComponentCooling,
            display,
            dataConnection,
            motherboard,
            printRoomCamera,
            LEDLighting,
            guides,
            frameMaterial,
            printAccuracy,
            text,
            realisticPrintingSpeed,
            maximumAcceleration,
            maximumPressureNozzleTemperature,
            maximumPressureChamberTemperature,
            maximumPrintBedTemperature
        }
        console.log(data)
        await update(oldData.product, 2, specsId, data)
    }



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
                            value={installationSpace}
                            onChange={(e) => {
                                setInstallationSpace(e.target.value)
                            }}
                        />
                    </section>

                    <section className='flex flex-col'>
                        <label className='text-sm'>{t('installationSpaceEnclouser')}</label>
                        <input
                            type="text"
                            placeholder="Type Here"
                            className='border-black border-[1px] rounded-md p-2 mt-1'
                            value={installatingSpaceEnclouser}
                            onChange={(e) => {
                                setInstallatingSpaceEnclouser(e.target.value)
                            }}
                        />
                    </section>

                    <section className='flex flex-col'>
                        <label className='text-sm'>{t('frameMaterial')}</label>
                        {/* changeApi */}
                        <input
                            type="text"
                            placeholder="Type Here"
                            className='border-black border-[1px] rounded-md p-2 mt-1'
                            value={frameMaterial}
                            onChange={(e) => {
                                setFrameMaterial(e.target.value)
                            }}
                        />
                    </section>

                    <section className='flex flex-col'>
                        <label className='text-sm'>{t('DriveTech')}</label>
                        <input
                            type="text"
                            placeholder="Type Here"
                            className='border-black border-[1px] rounded-md p-2 mt-1'
                            value={driveTech}
                            onChange={(e) => {
                                setDriveTech(e.target.value)
                            }}
                        />
                    </section>
                    <section className='flex flex-col'>
                        <label className='text-sm'>{t('guides')}</label>
                        {/* changeApi */}
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
                        <label className='text-sm'>{t('PrintAccuracy')}</label>
                        {/* changeApi */}
                        <input
                            type="text"
                            placeholder="Type Here"
                            className='border-black border-[1px] rounded-md p-2 mt-1'
                            value={printAccuracy}
                            onChange={(e) => {
                                setPrintAccuracy(e.target.value)
                            }}
                        />
                    </section>
                    

                    <section className='flex flex-col'>
                        <label className='text-sm'>Extras</label>
                        {/* changeApi */}
                        <input
                            type="text"
                            placeholder="Type Here"
                            className='border-black border-[1px] rounded-md p-2 mt-1'
                            value={text}
                            onChange={(e) => {
                                setText(e.target.value)
                            }}
                        />
                    </section>

                    <section className='flex flex-col'>
                        <label className='text-sm'>{t('PrintBedTechnology')}</label>
                        <input
                            type="text"
                            placeholder="Type Here"
                            className='border-black border-[1px] rounded-md p-2 mt-1'
                            value={printBedTechnology}
                            onChange={(e) => {
                                setPrintBedTechnology(e.target.value)
                            }}
                        />
                    </section>

                    <section className='flex flex-col'>
                        <label className='text-sm'>{t('FilamentCompatibility')}</label>
                        <input
                            type="text"
                            placeholder="Type Here"
                            className='border-black border-[1px] rounded-md p-2 mt-1'
                            value={filamentCompatibility}
                            onChange={(e) => {
                                setFilamentCompatibility(e.target.value)
                            }}
                        />
                    </section>

                    <section className='flex flex-col'>
                        <label className='text-sm'>{t('PrintSpeed')}</label>
                        <input
                            type="text"
                            placeholder="Type Here"
                            className='border-black border-[1px] rounded-md p-2 mt-1'
                            value={printSpeed}
                            onChange={(e) => {
                                setPrintSpeed(e.target.value)
                            }}
                        />
                    </section>

                    <section className='flex flex-col'>
                        <label className='text-sm'>{t('RealisticPrintingSpeed')}</label>
                        {/* changeApi */}
                        <input
                            type="text"
                            placeholder="Type Here"
                            className='border-black border-[1px] rounded-md p-2 mt-1'
                            value={realisticPrintingSpeed}
                            onChange={(e) => {
                                setRealisticPrintingSpeed(e.target.value)
                            }}
                        />
                    </section>

                    <section className='flex flex-col'>
                        <label className='text-sm'>{t('maximumAcceleration')}</label>
                        {/* changeApi */}
                        <input
                            type="text"
                            placeholder="Type Here"
                            className='border-black border-[1px] rounded-md p-2 mt-1'
                            value={maximumAcceleration}
                            onChange={(e) => {
                                setMaximumAcceleration(e.target.value)
                            }}
                        />
                    </section>

                    <section className='flex flex-col'>
                        <label className='text-sm'>{t('maximumPressureNozzleTemperature')}</label>
                        {/* changeApi */}
                        <input
                            type="text"
                            placeholder="Type Here"
                            value={pressureChamberTempurature}
                            className='border-black border-[1px] rounded-md p-2 mt-1'
                            onChange={(e) => {
                                setPressureChamberTempurature(e.target.value)
                            }}
                        />
                    </section>

                    <section className='flex flex-col'>
                        <label className='text-sm'>{t('MaximumPrintBedTemperature')}</label>
                        {/* changeApi */}
                        <input
                            type="text"
                            placeholder="Type Here"
                            value={maximumPrintBedTemperature}
                            className='border-black border-[1px] rounded-md p-2 mt-1'
                            onChange={(e) => {
                                setMaximumPrintBedTemperature(e.target.value)
                            }}
                        />
                    </section>

                    <section className='flex flex-col'>
                        <label className='text-sm'>{t('MaximumPressureChamberTemperature')}</label>
                        {/* changeApi */}
                        <input
                            type="text"
                            placeholder="Type Here"
                            value={maximumPressureChamberTemperature}
                            className='border-black border-[1px] rounded-md p-2 mt-1'
                            onChange={(e) => {
                                setMaximumPressureChamberTemperature(e.target.value)
                            }}
                        />
                    </section>



                </div>
                <h3 className='mt-4 text-2xl font-semibold font-sans'>{t('sensors')}</h3>
                <div className='w-full mt-6 border-b-2 pb-4 border-gray-400'>

                    <section className='flex items-center mt-2'>
                        <label className='text-md '>{t('VibrationSuppression')}</label>
                        <input
                            type="checkbox"
                            placeholder="Type Here"
                            className='border-black border-[1px] rounded-md mt-1 ml-2 h-3'
                            checked={vibrationSuppresion}
                            onChange={(e) => {
                                setVibrationSuppresion(e.target.value)
                            }}
                        />
                    </section>

                    <section className='flex items-center mt-2'>
                        <label className='text-md '>{t('AutomaticPrintBedMeasurement')}</label>
                        <input
                            type="checkbox"
                            placeholder="Type Here"
                            className='border-black border-[1px] rounded-md mt-1 ml-2 h-3'
                            checked={automaticPrintBedMeasurement}
                            onChange={(e) => {
                                setAutomaticPrintBedMeasurement(e.target.value)
                            }}
                        />
                    </section>

                    <section className='flex items-center mt-2'>
                        <label className='text-md '>{t('AutomaticZOffsetCalibration')}</label>
                        <input
                            type="checkbox"
                            placeholder="Type Here"
                            className='border-black border-[1px] rounded-md mt-1 ml-2 h-3'
                            checked={automaticZOffsetCalibration}
                            onChange={(e) => {
                                setAutomaticZOffsetCalibration(e.target.value)
                            }}
                        />
                    </section>

                    <section className='flex items-center mt-2'>
                        <label className='text-md '>{t('LidarScannar')}</label>
                        <input
                            type="checkbox"
                            placeholder="Type Here"
                            className='border-black border-[1px] rounded-md mt-1 ml-2 h-3'
                            checked={liderScannar}
                            onChange={(e) => {
                                setLidarScannar(e.target.value)
                            }}
                        />
                    </section>

                    <section className='flex items-center mt-2'>
                        <label className='text-md '>{t('DoorSensor')}</label>
                        <input
                            type="checkbox"
                            placeholder="Type Here"
                            className='border-black border-[1px] rounded-md mt-1 ml-2 h-3'
                            checked={doorScannar}
                            onChange={(e) => {
                                setDoorScannar(e.target.value)
                            }}
                        />
                    </section>


                </div>
                <h3 className='mt-4 text-2xl font-semibold font-sans'>{t('fan')}</h3>
                <div className='w-full grid grid-cols-3 gap-2 mt-6 border-b-2 pb-4 border-gray-400'>
                    <section className='flex flex-col'>
                        <label className='text-sm'>{t('AirFilter')}</label>
                        <input
                            type="text"
                            placeholder="Type Here"
                            className='border-black border-[1px] rounded-md p-2 mt-1'
                            value={airFilter}
                            onChange={(e) => {
                                setAirFilter(e.target.value)
                            }}
                        />
                    </section>
                    <div></div>
                    <div></div>
                    <section className='flex items-center mt-2'>
                        <label className='text-md'>{t('circulationFanPressureRoom')}</label>
                        <input
                            type="checkbox"
                            placeholder="Type Here"
                            className='border-black border-[1px] rounded-md p-2 mt-1 ml-2'
                            checked={circulationFanPressureRoom}
                            onChange={(e) => {
                                setCirculationFanPressureRoom(e.target.value)
                            }}
                        />
                    </section>
                    <div></div>
                    <div></div>
                    <section className='flex items-center mt-2'>
                        <label className='text-md'>{t('supportingComponentCooling')}</label>
                        <input
                            type="checkbox"
                            placeholder="Type Here"
                            className='border-black border-[1px] rounded-md p-2 mt-1 ml-2'
                            checked={supportingComponentCooling}
                            onChange={(e) => {
                                setSupportingComponentCooling(e.target.value)
                            }}
                        />
                    </section>
                </div>

                <h3 className='mt-4 text-2xl font-semibold font-sans'>UI & GPU</h3>
                <div className='w-full grid grid-cols-3 gap-2 mt-6 border-b-2 pb-4 border-gray-400'>
                    <section className='flex flex-col'>
                        <label className='text-sm'>Display</label>
                        <input
                            type="text"
                            placeholder="Type Here"
                            className='border-black border-[1px] rounded-md p-2 mt-1'
                            value={display}
                            onChange={(e) => {
                                setDisplay(e.target.value)
                            }}
                        />
                    </section>

                    <section className='flex flex-col'>
                        <label className='text-sm'>{t('DataConnection')}</label>
                        <input
                            type="text"
                            placeholder="Type Here"
                            className='border-black border-[1px] rounded-md p-2 mt-1'
                            value={dataConnection}
                            onChange={(e) => {
                                setDataConnection(e.target.value)
                            }}
                        />
                    </section>



                </div>
                <h3 className='mt-4 text-2xl font-semibold font-sans'>Add-ons</h3>
                <div className='w-full grid grid-cols-3 gap-2 mt-6 pb-4'>
                    <section className='flex flex-col'>
                        <label className='text-sm'>{t('motherboard')}</label>
                        <input
                            type="text"
                            placeholder="Type Here"
                            className='border-black border-[1px] rounded-md p-2 mt-1'
                            value={motherboard}
                            onChange={(e) => {
                                setMotherboard(e.target.value)
                            }}
                        />
                    </section>

                    <section className='flex flex-col'>
                        <label className='text-sm'>{t('PrintRoomCamera')}</label>
                        <input
                            type="text"
                            placeholder="Type Here"
                            className='border-black border-[1px] rounded-md p-2 mt-1'
                            value={printRoomCamera}
                            onChange={(e) => {
                                setPrintCamera(e.target.value)
                            }}
                        />
                    </section>

                    <section className='flex items-center justify-center'>
                        <label className='text-md'>{t('LEDLight')}</label>
                        <input
                            type="checkbox"
                            placeholder="Type Here"
                            className='border-black border-[1px] rounded-md p-2 mt-1 ml-2'
                            checked={LEDLighting}
                            onChange={(e) => {
                                setLEDLighting(e.target.value)
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

export default FDMSpecs