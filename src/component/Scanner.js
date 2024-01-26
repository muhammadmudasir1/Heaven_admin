import React from 'react'
import Tabbar from './Landingpage/Tabbar'
import ScannerTabbar from './SCANNERComponents/ScannerTabbar'
import ScannerView from './SCANNERComponents/ScannerView'
const FDM = () => {
    return (
        <>
            <Tabbar />
            <div className='bg-gray-300 my-8 w-full h-full flex flex-row items-center justify-between'>
                <div>
                    <h1 className='text-neutral-800 lg:text-5xl text-3xl font-normal font-[Avenir] ml-12 py-20 '> Reviews from our <br /> 3D expert</h1>
                </div>
                <div className='lg:mr-12 mr-2'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZd8IFhFAzVB_AdUsDwZMmRzafOAhzsQ_JlQ&usqp=CAU" alt="" className='lg:w-60 lg:h-60 w-24 h-24 rounded-full ' />
                </div>

            </div>
            <ScannerTabbar />
            <ScannerView/>
        </>
    )
}

export default FDM
