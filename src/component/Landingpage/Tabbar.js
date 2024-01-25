import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MdOutlineArrowDropDown } from "react-icons/md";
import { MdOutlineArrowDropUp } from "react-icons/md";
import { NavLink } from "react-router-dom"
const Tabbar = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const [isOpen, setisOpen] = useState(false);
  const {t} = useTranslation();

  const toggleDropdown = () => {
    setisOpen(!isOpen)
  }

  const [isSticky, setIsSticky] = useState(false);

  const fixedTabbar = () => {
    if (window.scrollY > 0) {
      setIsSticky(true)
    } else {
      setIsSticky(false)
    }
  }
  window.addEventListener('scroll', fixedTabbar)
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className={isDesktop ? ` bg-white shadow-md shadow-slate-300 w-full cursor-pointer relative ${isSticky ? 'fixednav w-full top-[70px] z-20' : ''}` : 'hidden'}>
      {isDesktop ? (
        <div className='w-full h-full flex items-center pt-2'>
          <ul className='flex justify-evenly items-center gap-x-6  w-full relative'>
            <NavLink
              to={'/'}
              className='z-10 relative py-4 px-4 flex items-center text-neutral-800
              text-xl
              font-light
              font-[Roboto]'>{t("HomePage")} </NavLink>
            <NavLink to={"*"} className='text-neutral-800 text-xl font-light font-[Roboto]'>{t('Bestlist')}</NavLink>
            <div className=' relative'>
              <div className='flex justify-center items-center'>
                <NavLink to={'../Review'} className='py-4 flex items-center text-neutral-800 text-xl font-light font-[Roboto]'>{t("3dprinters")} </NavLink>
                {!isOpen ? <MdOutlineArrowDropDown onClick={toggleDropdown} size={30} /> : <MdOutlineArrowDropUp onClick={toggleDropdown} size={30} />}
              </div>
              {isOpen && (
                <div className='absolute top-12 right-0 flex flex-col items-start justify-evenly bg-white w-40 shadow-md shadow-slate-400'>
                  <NavLink to={'scanner'}
                    className='hover:bg-[#EEEEEE] w-full p-3 text-neutral-700 text-xl font-light font-[Roboto]'>
                    SLA printer
                  </NavLink>
                  <NavLink to={'LaserCutter'}
                    className='hover:bg-[#EEEEEE] w-full p-3 text-neutral-700 text-xl font-light font-[Roboto]'>
                    SLA printer
                  </NavLink>
                </div>
              )}
            </div>
            <NavLink to={'Baloch'} className='py-4 px-4 flex items-center text-neutral-800 text-xl font-light font-[Roboto]'>Laser</NavLink>
            <NavLink to={'Osama'} className='py-4 px-4 flex items-center text-neutral-800 text-xl font-light font-[Roboto]'>Scanner</NavLink>
            <NavLink to={'Ali'} className='py-4 px-4 flex items-center text-neutral-800 text-xl font-light font-[Roboto]'>{t("Filament")}</NavLink>
            <NavLink to={'Ahsan'} className='py-4 px-4 flex items-center text-neutral-800 text-xl font-light font-[Roboto]'>Ratgeber</NavLink>
            <NavLink to={'Benazir'} className='py-4 px-4 flex items-center text-neutral-800 text-xl font-light font-[Roboto]'>News</NavLink>
          </ul>

        </div>
      ) : ('')}
    </div>
  );
}

export default Tabbar;
