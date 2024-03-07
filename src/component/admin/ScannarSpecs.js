import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const ScannarSpecs = (props) => {
    const { saveData, oldData, update } = props
    const [scanningPrecision, setScanningPrecision] = useState('')
    const [scanAccuracy, setScanAccuracy] = useState('')
    // const [scanningArea, setScanningArea] = useState('')
    // const [scanningDistance, setScanningDistance] = useState('')
    const [scanSpeed, setScanSpeed] = useState('')
    // const [objectDimension_handScan, setObjectDimensionHandScan] = useState('')
    // const [objectDimension_turnTable, setObjectDimensionTurnTable] = useState('')
    const [lightSource, setLightSource] = useState('')
    const [camera, setCamera] = useState('')
    const [standardPackage, setStandardPackage] = useState('')
    const [premiumPackage, setPremiumPackage] = useState('')
    const [scanMinimumSize, setScanMinimumSize] = useState('')
    const [scanQuality, setScanQuality] = useState('')
    const [scanMaximumSize, setScanMaximumSize] = useState('')
    const [workspaceScanWindow, setWorkspaceScanWindow] = useState('')
    const [imageCaptureRate, setImageCaptureRate] = useState('')
    const [minimumObjectSize_handScan, setMinimumObjectSize_handScan] = useState('')
    const [minimumObjectSize_turnTable, setMinimumObjectSize_turnTable] = useState('')
    const [maximumObjectSize, setMaximumObjectSize] = useState('')
    const [portableBattery, setPortableBattery] = useState('')
    const [accesories, setAccesories] = useState('')
    const [specsId, setSpecsId] = useState(null)


    const { t } = useTranslation()

    useEffect(() => {
        if (oldData) {
            setCamera(oldData.camera)
            setLightSource(oldData.lightSource)
            // setObjectDimensionHandScan(oldData.objectDimension_handScan)
            // setObjectDimensionTurnTable(oldData.objectDimension_turnTable)
            setPremiumPackage(oldData.premiumPackage)
            setScanAccuracy(oldData.scanAccuracy)
            setScanMaximumSize(oldData.scanMaximumSize)
            setScanMinimumSize(oldData.scanMinimumSize)
            setScanQuality(oldData.scanQuality)
            setScanSpeed(oldData.scanSpeed)
            // setScanningArea(oldData.scanningArea)
            // setScanningDistance(oldData.scanningDistance)
            setScanningPrecision(oldData.scanningPrecision)
            setStandardPackage(oldData.standardPackage)
            setWorkspaceScanWindow(oldData.workspaceScanWindow)
            setImageCaptureRate(oldData.imageCaptureRate)
            setMinimumObjectSize_handScan(oldData.minimumObjectSize_handScan)
            setMinimumObjectSize_turnTable(oldData.minimumObjectSize_turnTable)
            setMaximumObjectSize(oldData.maximumObjectSize)
            setPortableBattery(oldData.portableBattery)
            setAccesories(oldData.accesories)
            setSpecsId(oldData.id)
        }
        console.log(oldData)
    }, [oldData])

    const handleSave = () => {
        const data = {
            scanningPrecision,
            scanAccuracy,
            // scanningArea,
            // scanningDistance,
            scanSpeed,
            // objectDimension_handScan,
            // objectDimension_turnTable,
            lightSource,
            camera,
            standardPackage,
            premiumPackage,
            scanMinimumSize,
            scanQuality,
            scanMaximumSize,
            workspaceScanWindow,
            imageCaptureRate,
            minimumObjectSize_handScan,
            minimumObjectSize_turnTable,
            maximumObjectSize,
            portableBattery,
            accesories
        }
        saveData(data)

    }

    const handleUpdate = async () => {
        const data = {
            scanningPrecision,
            scanAccuracy,
            // scanningArea,
            // scanningDistance,
            scanSpeed,
            // objectDimension_handScan,
            // objectDimension_turnTable,
            lightSource,
            camera,
            standardPackage,
            premiumPackage,
            scanMinimumSize,
            scanQuality,
            scanMaximumSize,
            workspaceScanWindow,
            imageCaptureRate,
            minimumObjectSize_handScan,
            minimumObjectSize_turnTable,
            maximumObjectSize,
            portableBattery,
            accesories

        }
        console.log(data)
        await update(oldData.product, 4, specsId, data)
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
                            value={scanningPrecision}
                            onChange={(e) => {
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
                            value={scanAccuracy}
                            onChange={(e) => {
                                setScanAccuracy(e.target.value)
                            }}
                        />

                    </section>


                    <section className='flex flex-col'>
                        <label className='text-sm'>{t('workspaceScanWindow')}</label>
                        <input
                            type="text"
                            placeholder="Type Here"
                            className='border-black border-[1px] rounded-md p-2 mt-1'
                            value={workspaceScanWindow}
                            onChange={(e) => {
                                setWorkspaceScanWindow(e.target.value)
                            }}
                        />

                    </section>

                    <section className='flex flex-col'>
                        <label className='text-sm'>{t('scanSpeed')}</label>

                        <input
                            type="text"
                            placeholder="Type Here"
                            className='border-black border-[1px] rounded-md p-2 mt-1'
                            value={scanSpeed}
                            onChange={(e) => {
                                setScanSpeed(e.target.value)
                            }}
                        />

                    </section>

                    <section className='flex flex-col'>
                        <label className='text-sm'>{t('imageCaptureRate')}</label>
                        <input
                            type="text"
                            placeholder="Type Here"
                            className='border-black border-[1px] rounded-md p-2 mt-1'
                            value={imageCaptureRate}
                            onChange={(e) => {
                                setImageCaptureRate(e.target.value)
                            }}
                        />

                    </section>
                    <section className='flex flex-col'>
                        <label className='text-sm'>{t('minimumObjectSize_handScan')}</label>
                        <input
                            type="text"
                            placeholder="Type Here"
                            className='border-black border-[1px] rounded-md p-2 mt-1'
                            value={minimumObjectSize_handScan}
                            onChange={(e) => {
                                setMinimumObjectSize_handScan(e.target.value)
                            }}
                        />

                    </section>
                    <section className='flex flex-col'>
                        <label className='text-sm'>{t('minimumObjectSize_turnTable')}</label>
                        <input
                            type="text"
                            placeholder="Type Here"
                            className='border-black border-[1px] rounded-md p-2 mt-1'
                            value={minimumObjectSize_turnTable}
                            onChange={(e) => {
                                setMinimumObjectSize_turnTable(e.target.value)
                            }}
                        />

                    </section>
                    <section className='flex flex-col'>
                        <label className='text-sm'>{t('maximumObjectSize')}</label>
                        <input
                            type="text"
                            placeholder="Type Here"
                            value={maximumObjectSize}
                            className='border-black border-[1px] rounded-md p-2 mt-1'
                            onChange={(e) => {
                                setMaximumObjectSize(e.target.value)
                            }}
                        />

                    </section>
                    <section className='flex flex-col'>
                        <label className='text-sm'>{t('camera')}</label>
                        <input
                            type="text"
                            placeholder="Type Here"
                            className='border-black border-[1px] rounded-md p-2 mt-1'
                            value={camera}
                            onChange={(e) => {
                                setCamera(e.target.value)
                            }}
                        />

                    </section>

                    <section className='flex flex-col'>
                        <label className='text-sm'>{t('lightSource')}</label>
                        <input
                            type="text"
                            placeholder="Type Here"
                            className='border-black border-[1px] rounded-md p-2 mt-1'
                            value={lightSource}
                            onChange={(e) => {
                                setLightSource(e.target.value)
                            }}
                        />

                    </section>

                    <section className='flex flex-col'>
                        <label className='text-sm'>{t('portableBattery')}</label>
                        <input
                            type="text"
                            placeholder="Type Here"
                            className='border-black border-[1px] rounded-md p-2 mt-1'
                            value={portableBattery}
                            onChange={(e) => {
                                setPortableBattery(e.target.value)
                            }}
                        />

                    </section>

                    <section className='flex flex-col'>
                        <label className='text-sm'>{t('accesories')}</label>
                        <input
                            type="text"
                            placeholder="Type Here"
                            className='border-black border-[1px] rounded-md p-2 mt-1'
                            value={accesories}
                            onChange={(e) => {
                                setAccesories(e.target.value)
                            }}
                        />

                    </section>

                    {/* <section className='flex flex-col'>
                        <label className='text-sm'>{t('scanQuality')}</label>

                        <input
                            type="text"
                            placeholder="Type Here"
                            className='border-black border-[1px] rounded-md p-2 mt-1'
                            value={scanQuality}
                            onChange={(e) => {
                                setScanQuality(e.target.value)
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

export default ScannarSpecs