import React, { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useTranslation } from 'react-i18next';

const NavigationForAddForm = () => {
    const [scroll,setScroll]=useState(false)
    const {auth}=useAuth()
    const {id}=useParams()
    const {t}=useTranslation()

    useEffect(() => {

        const handleScroll = () => {

          if (window.scrollY > 50) {
            setScroll(true);
          } else {
            setScroll(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    <div id='productFormNavigation' className='h-screen flex flex-col  overflow-hidden '>
        <div className={` w-full bg-gray-200 z-[9999] shadow-md  grid grid-cols-6 `} >
            <div className=''>

            </div>
            <div className='col-span-4 flex justify-between'>

            <NavLink 
            className='py-4 px-2 2xl:py-6 2xl:px-3 text-lg hover:bg-customBlue hover:text-white'
            to={id?`/dashboard/updateproduct/${id}`:'/dashboard/addproduct'}
            >{t("coreData")}</NavLink>
            {
                id ?
                <>
                <NavLink to={`/dashboard/addspecs/${id}`} className='py-4 px-2 2xl:py-6 2xl:px-3 text-lg hover:bg-customBlue hover:text-white '>{t('TechnicalData')}</NavLink>
                <NavLink to={`/dashboard/addpurchaselinks/${id}`} className='py-4 px-2 2xl:py-6 2xl:px-3 text-lg hover:bg-customBlue hover:text-white'>{t('affiliateLinks')}</NavLink>
                <NavLink to={`/dashboard/addreview/${id}`} className='py-4 px-2 2xl:py-6 2xl:px-3 text-lg hover:bg-customBlue hover:text-white'>{t('review')}</NavLink>
                </>
                :
                <>
                <p className='text-gray-500 cursor-not-allowed py-4 px-2 2xl:py-6 2xl:px-3 text-lg'>{t('TechnicalData')}</p>
                <p className='text-gray-500 cursor-not-allowed py-4 px-2 2xl:py-6 2xl:px-3 text-lg'>{t('affiliateLinks')}</p>
                <p className='text-gray-500 cursor-not-allowed py-4 px-2 2xl:py-6 2xl:px-3 text-lg'>{t('review')}</p>
                </>
            }
            </div>
            <div className=''></div>
        </div>
        <div className='w-full flex-grow overflow-hidden '>
        <Outlet/>
        {/* <div className='h-[2000px] w-full bg-purple-400'></div> */}

        </div>
    </div>
    
  )
}

export default NavigationForAddForm