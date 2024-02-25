import React, { useState, useEffect } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from 'react-icons/fa';
import { PiMagnifyingGlass } from "react-icons/pi";
import { NavLink, Outlet, Link } from 'react-router-dom';
import StickyFooter from './StickyFooter';
import SearchData from './SearchData.json'
import { MdOutlineArrowDropDown } from "react-icons/md";
import { MdOutlineArrowDropUp } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import useLanguage from '../../hooks/useLanguage';
import germanflag from '../../imges/germanflag.png';
import ukflag from '../../imges/ukflag.png'
import { IoIosMenu } from "react-icons/io";
import logo from '../Landingpage/logo.png'
import { CiGlobe } from "react-icons/ci";
import { ArrowDownCircleIcon, ArrowUpCircleIcon } from '@heroicons/react/24/outline';

const Navigationbar = () => {
    const [nav, setnav] = useState(false);
    const [isSticky, setisstickynav] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
    const [Input, setInput] = useState("");
    const [result, setResults] = useState([]);
    const [IsOpen, setIsOpen] = useState(false);
    const [IsTranslated, setIsTranslated] = useState(false);
    const [language, setLanguage] = useState('DE');
    const { t } = useTranslation();

    const setlang = useLanguage()

    const handleLanguageChange = (setlang) => {
        setIsTranslated(false);
        setLanguage(setlang);
    };

    const dropDown = () => {
        setIsTranslated(!IsTranslated)
    }

    const SearchMenu = () => {
        setIsOpen(!IsOpen)
    }

    const filteredResults = SearchData.filter((printer) => {
        return (
            Input &&
            printer &&
            printer.printer &&
            printer.printer.toLowerCase().includes(Input.toLowerCase())
        );
    });

    const handleChangeInput = (value) => {
        setInput(value);
        setResults(filteredResults)
    }

    const fixednavbar = () => {
        if (window.scrollY > 0) {
            setisstickynav(true)
        } else {
            setisstickynav(false)
        }
    }
    window.addEventListener('scroll', fixednavbar)
    const handleNav = () => {
        setnav(!nav);
    };

    const closeDashboard=()=>{
        setnav(false);
    };
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1000);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <nav className={`bg-[#026CC4] h-[8vh] lg:h-[10vh] flex items-center justify-between px-8 z-[9999] ${isSticky ? 'fixed w-full top-0' : ''}`}>
                <div className='z-20 flex items-center'>
                    <img src={logo} alt="" className='lg:w-14 lg:h-14 w-6 h-6' />
                    <h1 className='text-white lg:text-2xl text-lg font-bold'>3D heavens</h1>
                </div>
                {isMobile ? (
                    <>
                        <div className='flex flex-row justify-between items-center'>
                            {!IsOpen ? ('') : (<div className='ml-4 text-white text-lg'>
                                Best deals
                            </div>)}
                            <div >
                                <PiMagnifyingGlass onClick={SearchMenu} size={20} className='text-white relative z-20 cursor-pointer ml-2' />
                            </div>
                            <div className='absolute left-2 z-30'>
                                {!IsOpen ? (
                                    <div onMouseLeave={SearchMenu} className='relative w-[65vw]'>
                                        {/* <div className='h-20 w-full p-4 rounded-tl-2xl rounded-bl-2xl border-none items-center '> */}
                                        <input value={Input} onChange={(e) => handleChangeInput(e.target.value)} type='text' placeholder='What are you looking for?'
                                            onBlur={(e) => { setResults(false) }}
                                            className='pl-4 text-neutral-700 text-xl font-light h-full w-full rounded-xl py-3' />
                                        {/* </div> */}
                                        <div results={result} className='absolute z-40 bg-slate-50 w-full mt-2 rounded-lg overflow-y-scroll max-h-72'>
                                            {result && result.map((printer) => (
                                                <div key={printer.id} className='px-4 py-4'>
                                                    {printer.printer}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ) : ('')}
                            </div>
                            <div onClick={() => handleLanguageChange[setlang('en')]}>
                                <CiGlobe size={20} className='text-white z-20 cursor-pointer ml-2' />
                                {/* {IsTranslated && (
                                    <div className='bg-white absolute top-6 right-0 flex flex-col items-center justify-center p-4 z-30 mt-2 shadow-md shadow-slate-400 rounded-xl'>
                                        <button
                                            onClick={() => handleLanguageChange[setlang('de')]}
                                            className=' text-xl font-light font-[Roboto]'
                                        >
                                            <div className='flex items-center justify-center'>
                                                <img src={germanflag} alt="" className='h-2 w-4 pr-2' />
                                                DE
                                            </div>
                                        </button>
                                        <button
                                            onClick={() => handleLanguageChange[setlang('en')]}
                                            className=' text-xl font-light font-[Roboto]'
                                        >
                                            <div className='flex items-center justify-center py-2'>

                                                <img src={ukflag} alt="" className='h-2 w-4 pr-2' />
                                                EN
                                            </div>
                                        </button>
                                    </div>
                                )} */}
                            </div>
                            <IoIosMenu onClick={handleNav} size={30} className='z-20 ml-2 cursor-pointer text-white' />
                            <div className={nav ? 'w-full h-screen fixed left-0 top-0 flex-col z-10 bg-white/90 ease-in duration-500' : 'absolute top-0 left-[-100%] ease-in duration-500 z-10'}>
                                <ul className='gap-8 flex lg:flex-row flex-col items-center justify-center h-screen w-full'>
                                    <li className='z-20 text-black hover:underline'>
                                        <NavLink to={'/'} onClick={closeDashboard} >startseite</NavLink>
                                    </li>
                                    <li className='z-20 text-black'>
                                        <Link to={'/#topFive'} onClick={closeDashboard}>Beste Liste</Link>
                                    </li>
                                    <li className='z-20 text-black relative'>
                                        <NavLink onClick={SearchMenu}  className='flex ml-24 mr-20 text-center'>3D Druckers
                                            {!IsOpen ? <ArrowDownCircleIcon /> : <ArrowUpCircleIcon />}
                                        </NavLink>
                                        {IsOpen && (
                                            <div className='absolute right-0 top-0 bg-white py-2 px-4 z-30'>
                                                <ul>
                                                    <li>
                                                        <NavLink to='/product/sla' onClick={closeDashboard} className={`z-30`}>SLA</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink onClick={closeDashboard} to='/product/fdm' className={`z-30`}>FDM</NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </li>

                                    <li className='z-20 text-black'>
                                        <NavLink to={'/product/cutter'} onClick={closeDashboard}>Laser</NavLink>
                                    </li>
                                    <li className='z-20 text-black'>
                                        <NavLink to={'/product/scanner'} onClick={closeDashboard}>Scanner</NavLink>
                                    </li>
                                    <li className='z-20 text-black'>
                                        <NavLink to={'/filament'} onClick={closeDashboard}>Filamente</NavLink>
                                    </li>
                                    <li className='z-20 text-black'>
                                        <NavLink to={'/ratgaber'} onClick={closeDashboard}>Ratgeber</NavLink>
                                    </li>
                                    <li className='z-20 text-black'>
                                        <NavLink to={'/news'} onClick={closeDashboard}>News</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className='hidden md:flex items-center'>
                        {/* Add other desktop menu options here */}
                        <div onMouseLeave={SearchMenu} className='relative w-[40vw]'>
                            <div className='h-20 w-full p-4 rounded-tl-2xl rounded-bl-2xl border-none items-center grid grid-cols-8'>
                                <input value={Input} onChange={(e) => handleChangeInput(e.target.value)} type='text' placeholder='What are you looking for?'
                                    onBlur={(e) => { setResults(false) }}
                                    className='pl-4 text-neutral-700 text-xl font-light h-full w-full col-span-7 rounded-tl-xl rounded-bl-xl' />
                                <div className='h-full bg-[#00CED1] flex items-center col-span-1 justify-center rounded-tr-xl rounded-br-xl'>
                                    <FaSearch className=' ' />
                                </div>
                            </div>
                            <div results={result} className='absolute z-40 bg-slate-50 w-full mt-2 rounded-lg overflow-y-scroll max-h-72'>
                                {result && result.map((printer) => (
                                    <div key={printer.id} className='px-4 py-4'>
                                        {printer.printer}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <a href="" className='ml-4 text-white text-xl font-light font-[Roboto] hover:underline'>
                            ⚡️{t("BestDeals")}
                        </a>
                        <div className='px-8 flex items-center relative'>
                            <button
                                onBlur={(e) => { setIsTranslated(false) }}
                                onClick={dropDown}
                                className='text-white text-xl font-light font-[Roboto]'
                            >
                                {language}
                            </button>
                            {!IsTranslated ? (
                                <MdOutlineArrowDropDown
                                    onClick={dropDown}
                                    size={30}
                                    className='text-white'
                                />
                            ) : (
                                <MdOutlineArrowDropUp
                                    onClick={dropDown}
                                    size={30}
                                    className='text-white'
                                />
                            )}
                            {IsTranslated && (
                                <div className='bg-white absolute top-6 right-0 flex flex-col items-center justify-center p-4 z-30 mt-2 shadow-md shadow-slate-400 rounded-xl'>
                                    <button
                                        onClick={() => handleLanguageChange[setlang('de')]}
                                        className=' text-xl font-light font-[Roboto]'
                                    >
                                        <div className='flex items-center justify-center'>
                                            <img src={germanflag} alt="" className='h-10 w-12 pr-2' />
                                            DE
                                        </div>
                                    </button>
                                    <button
                                        onClick={() => handleLanguageChange[setlang('en')]}
                                        className=' text-xl font-light font-[Roboto]'
                                    >
                                        <div className='flex items-center justify-center py-2'>

                                            <img src={ukflag} alt="" className='h-10 w-12 pr-2' />
                                            EN
                                        </div>
                                    </button>
                                </div>
                            )}
                        </div>

                    </div>
                )}
            </nav>
            <Outlet />
            <StickyFooter />
        </>
    )
}

export default Navigationbar