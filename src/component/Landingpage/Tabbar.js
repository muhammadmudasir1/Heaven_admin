import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../../customStyle.css";


const Tabbar = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const [isOpen, setisOpen] = useState(false);
  const [pageOnPrinter, setPageOnPrinter] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();
  
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

  useEffect(() => {
    if (location.hash === "#topFive") {
      const topUser = document.getElementById('topFive')
      const rect = topUser.getBoundingClientRect();
      window.scrollTo({
        top: rect.top -200,
        behavior: 'smooth'
      });
    }
    else {

      window.scrollTo(0, 0);
    }

  }, [location])

  return (
    <div className={isDesktop ? ` bg-white shadow-md shadow-slate-300 w-full cursor-pointer relative ${isSticky && location.pathname !== "/comparision" ? 'fixednav w-full top-[8vh] lg:top-[10vh] z-20' : ''}` : 'hidden'}>
      {isDesktop ? (
        <div className='w-full h-full flex items-center'>
          <ul className='flex justify-evenly items-center gap-x-6  w-full relative'>
            <NavLink
              to={'/'}
              className='z-10 relative py-4 px-4 flex items-center text-neutral-800
              text-xl
              font-light
              font-[Roboto] hover:text-white hover:bg-customBlue transition ease-linear duration-300'>{t("HomePage")} </NavLink>
            <Link to={'/#topFive'} className='text-neutral-800 text-xl font-light font-[Roboto] py-4 px-4 hover:text-white hover:bg-customBlue transition ease-linear duration-300  h-full'>{t('Bestlist')}</Link>
            <div className=' relative  '>
              <div className='flex justify-center items-center '>
                < p className={`py-4 flex items-center text-neutral-800 text-xl font-light font-[Roboto] hover:text-white hover:bg-customBlue transition ease-linear duration-300 px-4 ${pageOnPrinter ? 'active' : ''}`}
                  onClick={toggleDropdown}
                >{t("3dprinters")}
                  <span>
                    {!isOpen ? <MdOutlineArrowDropDown size={30} /> : <MdOutlineArrowDropUp size={30} />}

                  </span>
                </p>
              </div>
              {isOpen && (
                <div className='absolute top-12 right-0 flex flex-col items-start justify-evenly bg-white w-48 shadow-md shadow-slate-400'>
                  <NavLink to={'/product/fdm'}
                    onClick={(e) => {
                      setisOpen(false)
                      setPageOnPrinter(true)
                    }}
                    className='hover:bg-[#EEEEEE] w-full p-3 text-neutral-700 text-xl font-light font-[Roboto]'>
                    {t('fdm')}
                  </NavLink>
                  <NavLink to={'/product/sla'}
                    onClick={(e) => {
                      setisOpen(false)
                      setPageOnPrinter(true)
                    }}
                    className='hover:bg-[#EEEEEE] w-full p-3 text-neutral-700 text-xl font-light font-[Roboto]'>
                    {t('SLA')}
                  </NavLink>
                </div>
              )}
            </div>
            <NavLink to={'/product/cutter'}
              onClick={(e) => {
                setisOpen(false)
                setPageOnPrinter(false)
              }}
              className='py-4 px-4 flex items-center text-neutral-800 text-xl font-light font-[Roboto] hover:text-white hover:bg-customBlue transition ease-linear duration-300'>{t('laserCutter')}</NavLink>
            <NavLink to={'/product/scanner'}
              onClick={(e) => {
                setisOpen(false)
                setPageOnPrinter(false)
              }}
              className='py-4 px-4 flex items-center text-neutral-800 text-xl font-light font-[Roboto] hover:text-white hover:bg-customBlue transition ease-linear duration-300'>{t('3DScanner')}</NavLink>
            <NavLink to={'/filament'}
              onClick={(e) => {
                setisOpen(false)
                setPageOnPrinter(false)
              }}
              className='py-4 px-4 flex items-center text-neutral-800 text-xl font-light font-[Roboto] hover:text-white hover:bg-customBlue transition ease-linear duration-300'>{t("Filament")}</NavLink>
            <NavLink to={'/ratgaber'}
              onClick={(e) => {
                setisOpen(false)
                setPageOnPrinter(false)
              }}
              className='py-4 px-4 flex items-center text-neutral-800 text-xl font-light font-[Roboto] hover:text-white hover:bg-customBlue transition ease-linear duration-300'>Tutorials</NavLink>
            <NavLink to={'/news'}
              onClick={(e) => {
                setisOpen(false)
                setPageOnPrinter(false)
              }}
              className='py-4 px-4 flex items-center text-neutral-800 text-xl font-light font-[Roboto] hover:text-white hover:bg-customBlue transition ease-linear duration-300'>News</NavLink>
          </ul>

        </div>
      ) : ('')}
    </div>
  );
}

export default Tabbar;
