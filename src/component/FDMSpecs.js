import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const FDMSpecs = (props) => {
    const {saveData}=props
    const [installationSpace,setInstallationSpace]=useState('')
    const [surfaceArea,setSurfaceArea]=useState('')
    const [driveTech,setDriveTech]=useState('')
    const [installatingSpaceEnclouser,setInstallatingSpaceEnclouser]=useState('')
    const [printVolume,setPrintVolume]=useState('')
    const [ZAxisPrintingAccuracy,setZAxisPrintingAccuracy]=useState('')
    const [printingAccuracyXYResolution,setPrintingAccuracyXYResolution]=useState('')
    const [printBedTechnology,setPrintBedTechnology]=useState('')
    const [filamentCompatibility,setFilamentCompatibility]=useState('')
    const [printSpeed,setPrintSpeed]=useState('')
    const [nozzleTempurature,setNozzleTempurature]=useState('')
    const [printTempurature,setPrintTempurature]=useState('')
    const [pressureChamberTempurature,setPressureChamberTempurature]=useState('')
    const [vibrationSuppresion,setVibrationSuppresion]=useState(false)
    const [automaticPrintBedMeasurement,setAutomaticPrintBedMeasurement]=useState(false)
    const [automaticZOffsetCalibration,setAutomaticZOffsetCalibration]=useState(false)
    const [liderScannar,setLidarScannar]=useState(false)
    const [doorScannar,setDoorScannar]=useState(false)
    const [airFilter,setAirFilter]=useState("")
    const [circulationFanPressureRoom,setCirculationFanPressureRoom]=useState(false)
    const [supportingComponentCooling,setSupportingComponentCooling]=useState(false)
    const [display,setDisplay]=useState("")
    const [dataConnection,setDataConnection]=useState("")
    const [motherboard,setMotherboard]=useState("")
    const [printRoomCamera,setPrintCamera]=useState("")
    const [LEDLighting,setLEDLighting]=useState(false)

    const {t}=useTranslation()

    const handleSave=()=>{
        const data={
            installationSpace,
            surfaceArea,
            driveTech,
            installatingSpaceEnclouser,
            printVolume,
            ZAxisPrintingAccuracy,
            printingAccuracyXYResolution,
            printBedTechnology,
            filamentCompatibility,
            printSpeed,
            nozzleTempurature,
            printTempurature,
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
            LEDLighting
        }
        saveData(data)
    }
    


    return (
        <>
        <div className='rounded-md p-2 mt-4 shadow-lg'>
            <div className='w-full grid grid-cols-3 gap-4 border-b-2 pb-4 border-gray-400'>

                <section className='flex flex-col'>
                    <label className='text-sm'>Installation Space</label>
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
                    <label className='text-sm'>{t('installationSpace')}</label>
                    <input 
                    type="text"
                    placeholder="Type Here"
                    className='border-black border-[1px] rounded-md p-2 mt-1'
                    onChange={(e)=>{
                        setInstallatingSpaceEnclouser(e.target.value)
                    }}
                    />
                </section>

                <section className='flex flex-col'>
                    <label className='text-sm'>{t('surfaceArea')}</label>
                    <input
                    type="text"
                    placeholder="Type Here"
                    className='border-black border-[1px] rounded-md p-2 mt-1'
                    onChange={(e)=>{
                        setSurfaceArea(e.target.value)
                    }}
                    />
                </section>

                <section className='flex flex-col'>
                    <label className='text-sm'>{t('DriveTech')}</label>
                    <input
                    type="text"
                    placeholder="Type Here"
                    className='border-black border-[1px] rounded-md p-2 mt-1'
                    onChange={(e)=>{
                        setDriveTech(e.target.value)
                    }}
                    />
                </section>

                <section className='flex flex-col'>
                    <label className='text-sm'>{t('PrintVolume')}</label>
                    <input
                    type="text"
                    placeholder="Type Here"
                    className='border-black border-[1px] rounded-md p-2 mt-1'
                    onChange={(e)=>{
                        setPrintVolume(e.target.value)
                    }}
                    />
                </section>

                <section className='flex flex-col'>
                    <label className='text-sm'>{t('ZAxisPrintingAccuracy')}</label>
                    <input
                    type="text"
                    placeholder="Type Here"
                    className='border-black border-[1px] rounded-md p-2 mt-1'
                    onChange={(e)=>{
                        setZAxisPrintingAccuracy(e.target.value)
                    }}
                    />
                </section>

                <section className='flex flex-col'>
                    <label className='text-sm'>{t('PrintingAccuracyXYResolution')}</label>
                    <input
                    type="text"
                    placeholder="Type Here"
                    className='border-black border-[1px] rounded-md p-2 mt-1'
                    onChange={(e)=>{
                        setPrintingAccuracyXYResolution(e.target.value)
                    }}
                    />
                </section>

                <section className='flex flex-col'>
                    <label className='text-sm'>{t('PrintBedTechnology')}</label>
                    <input
                    type="text"
                    placeholder="Type Here"
                    className='border-black border-[1px] rounded-md p-2 mt-1'
                    onChange={(e)=>{
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
                    onChange={(e)=>{
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
                    onChange={(e)=>{
                        setPrintSpeed(e.target.value)
                    }}
                    />
                </section>

                <section className='flex flex-col'>
                    <label className='text-sm'>{t('NozzleTempurature')}</label>
                    <input
                    type="text"
                    placeholder="Type Here"
                    className='border-black border-[1px] rounded-md p-2 mt-1'
                    onChange={(e)=>{
                        setNozzleTempurature(e.target.value)
                    }}
                    />
                </section>

                <section className='flex flex-col'>
                    <label className='text-sm'>{t('PrintBedTemperature')}</label>
                    <input
                    type="text"
                    placeholder="Type Here"
                    className='border-black border-[1px] rounded-md p-2 mt-1'
                    onChange={(e)=>{
                        setPrintTempurature(e.target.value)
                    }}
                    />
                </section>

                <section className='flex flex-col'>
                    <label className='text-sm'>{t('PressureChamberTempurature')}</label>
                    <input
                    type="text"
                    placeholder="Type Here"
                    className='border-black border-[1px] rounded-md p-2 mt-1'
                    onChange={(e)=>{
                        setPressureChamberTempurature(e.target.value)
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
                    onChange={(e)=>{
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
                    onChange={(e)=>{
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
                    onChange={(e)=>{
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
                    onChange={(e)=>{
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
                    onChange={(e)=>{
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
                    onChange={(e)=>{
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
                    onChange={(e)=>{
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
                    onChange={(e)=>{
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
                    onChange={(e)=>{
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
                    onChange={(e)=>{
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
                    onChange={(e)=>{
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
                    onChange={(e)=>{
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
                    onChange={(e)=>{
                        setLEDLighting(e.target.value)
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

export default FDMSpecs