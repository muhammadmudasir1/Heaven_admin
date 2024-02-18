import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const ScannarSpecs = (props) => {
    const { saveData, oldData, update } = props
    const [scanningPrecision, setScanningPrecision] = useState('')
    const [scanAccuracy, setScanAccuracy] = useState('')
    const [scanningArea, setScanningArea] = useState('')
    const [scanningDistance, setScanningDistance] = useState('')
    const [scanSpeed, setScanSpeed] = useState('')
    const [objectDimension_handScan, setObjectDimensionHandScan] = useState('')
    const [objectDimension_turnTable, setObjectDimensionTurnTable] = useState('')
    const [lightSource, setLightSource] = useState('')
    const [camera, setCamera] = useState('')
    const [standardPackage, setStandardPackage] = useState('')
    const [premiumPackage, setPremiumPackage] = useState('')
    const [scanMinimumSize, setScanMinimumSize] = useState('')
    const [scanQuality, setScanQuality] = useState('')
    const [scanMaximumSize, setScanMaximumSize] = useState('')
    const [specsId, setSpecsId] = useState(null)

    const { t } = useTranslation()

    useEffect(() => {
        if (oldData) {
            setCamera(oldData.camera)
            setLightSource(oldData.lightSource)
            setObjectDimensionHandScan(oldData.objectDimension_handScan)
            setObjectDimensionTurnTable(oldData.objectDimension_turnTable)
            setPremiumPackage(oldData.premiumPackage)
            setScanAccuracy(oldData.scanAccuracy)
            setScanMaximumSize(oldData.scanMaximumSize)
            setScanMinimumSize(oldData.scanMinimumSize)
            setScanQuality(oldData.scanQuality)
            setScanSpeed(oldData.scanSpeed)
            setScanningArea(oldData.scanningArea)
            setScanningDistance(oldData.scanningDistance)
            setScanningPrecision(oldData.scanningPrecision)
            setStandardPackage(oldData.standardPackage)
            setSpecsId(oldData.id)
        }
        console.log(oldData)
    }, [oldData])

    const handleSave = () => {
        const data = {
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

    const handleUpdate = async () => {
        const data = {
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
        console.log(data)
        await update(oldData.product, 2, specsId, data)
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
                        <label className='text-sm'>{t('scaningArea')}</label>

                        <input
                            type="text"
                            placeholder="Type Here"
                            className='border-black border-[1px] rounded-md p-2 mt-1'
                            value={scanningArea}
                            onChange={(e) => {
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
                            value={scanningDistance}
                            onChange={(e) => {
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
                            value={scanSpeed}
                            onChange={(e) => {
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
                            value={objectDimension_handScan}
                            onChange={(e) => {
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
                            value={objectDimension_turnTable}
                            onChange={(e) => {
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
                            value={lightSource}
                            onChange={(e) => {
                                setLightSource(e.target.value)
                            }}
                        />

                    </section>
                    <section className='flex flex-col'>
                        <label className='text-sm'>{t('camera')}</label>

                        <input
                            type="text"
                            placeholder="Type Here"
                            value={camera}
                            className='border-black border-[1px] rounded-md p-2 mt-1'
                            onChange={(e) => {
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
                            value={standardPackage}
                            onChange={(e) => {
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
                            value={premiumPackage}
                            onChange={(e) => {
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
                            value={scanMinimumSize}
                            onChange={(e) => {
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
                            value={scanMaximumSize}
                            onChange={(e) => {
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
                            value={scanQuality}
                            onChange={(e) => {
                                setScanQuality(e.target.value)
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

export default ScannarSpecs