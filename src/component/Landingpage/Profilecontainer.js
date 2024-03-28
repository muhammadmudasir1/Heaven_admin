import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import manu_profile from '../../imges/manu_profile.png'

const Profilecontainer = () => {
    const {t}=useTranslation()
    return (
        <div className='bg-[#00CED1] py-12 flex items-center justify-between p-8  '>
            <div className='flex flex-col justify-start items-start w-9/12'>
                <h1 className='text-neutral-800 lg:text-5xl text-2xl font-bold '>
                    {t('beginnersGuidBannar')}
                </h1>
                <NavLink to={'/ratgaber'} className='text-neutral-800 bg-white rounded-md flex items-center justify-center lg:px-8 px-4 lg:py-4 py-2 lg:mt-14 mt-4 lg:text-2xl font-medium '>
                    {t('Beginner’s_guide')}
                </NavLink>
            </div>

            <div className='flex justify-center'>
            <div className='relative'>
            <img src={manu_profile} alt="" className='rounded-full lg:w-80 lg:h-80 w-30 h-30 relative' />
            <div className='bg-white rounded-full lg:w-20 lg:h-20 w-10 h-10 absolute top-0 left-0'/>

            </div>
                
            </div>
        </div>
    )
}

export default Profilecontainer