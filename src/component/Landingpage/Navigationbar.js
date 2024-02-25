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
import Api from '../../api/Api';
import { useNavigate,useLocation } from 'react-router-dom';

const Navigationbar = () => {
    const [nav, setnav] = useState(false);
    const location=useLocation()
    const [isSticky, setisstickynav] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
    const [Input, setInput] = useState("");
    const [result, setResults] = useState([]);
    const [IsOpen, setIsOpen] = useState(false);
    const [IsTranslated, setIsTranslated] = useState(false);
    const navigate = useNavigate()
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
    const handleSearch=()=>{
        navigate(`/product/search?query=${Input}`)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Api.post('/api/products/search', {
                    query: Input
                })
                console.log(response.data)
                const resultantSearch = response.data.slice(0, 5)
                if (Array.isArray(resultantSearch)) {
                    setResults(resultantSearch)
                }

            } catch (error) {
                console.log(error)
            }

        }
        if (Input.length > 0) {
            fetchData()
        }
    }, [Input])

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
                    <h1 className='text-white lg:text-2xl text-xl font-bold'>3D heavens</h1>
                </div>
                {isMobile ? (
                    <>
                        <div className='flex flex-row justify-between items-center'>
                            {!IsOpen ? ('') : (<div className='ml-4 text-white text-xl'>
                                Best deals
                            </div>)}
                            <div >
                                <PiMagnifyingGlass onClick={SearchMenu} size={20} className='text-white relative z-20 cursor-pointer ml-2' />
                            </div>
                            <div className='absolute left-2 z-30'>
                                {!IsOpen ? (
                                    <div onMouseLeave={SearchMenu} className='relative w-[65vw]'>
                                        <input value={Input} onChange={(e) => setInput(e.target.value)} type='text' placeholder='What are you looking for?'
                                            onBlur={(e) => { setResults(false) }}
                                            className='pl-4 text-neutral-700 text-xl font-light h-full w-full rounded-xl py-3' />
                                        <div className='absolute z-40 bg-slate-50 w-full mt-2 rounded-lg overflow-y-scroll max-h-72'>
                                            {result.length > 0 && result.map((ele) => (
                                                <div key={ele.Id} className='px-4 py-4'>
                                                    {ele.product_name}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ) : ('')}
                            </div>
                            <div onClick={() => handleLanguageChange[setlang('en')]}>
                                <CiGlobe size={20} className='text-white z-20 cursor-pointer ml-2' />
                            </div>
                            <IoIosMenu onClick={handleNav} size={30} className='z-20 ml-2 cursor-pointer text-white' />
                            <div className={nav ? 'w-full h-screen fixed left-0 top-0 flex-col z-10 bg-white/90 ease-in duration-500' : 'absolute top-0 left-[-100%] ease-in duration-500 z-10'}>
                                <ul className='gap-8 flex lg:flex-row flex-col items-center justify-center h-screen w-full'>
                                    <li className='z-20 text-black hover:underline'>
                                        <NavLink to={'/'} >startseite</NavLink>
                                    </li>
                                    <li className='z-20 text-black'>
                                        <Link to={'/#topFive'}>Beste Liste</Link>
                                    </li>
                                    <li className='z-20 text-black relative'>
                                        <NavLink onClick={SearchMenu} to={'/product'} className='flex ml-24 mr-20 text-center'>3D Druckers
                                            {!IsOpen ? <ArrowDownCircleIcon /> : <ArrowUpCircleIcon />}
                                        </NavLink>
                                        {IsOpen && (
                                            <div className='absolute right-0 top-0 bg-white py-2 px-4 z-30'>
                                                <ul>
                                                    <li>
                                                        <NavLink to='/product/sla' className={`z-30`}>SLA</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to='/product/fdm' className={`z-30`}>FDM</NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </li>

                                    <li className='z-20 text-black'>
                                        <NavLink to={'/product/cutter'}>Laser</NavLink>
                                    </li>
                                    <li className='z-20 text-black'>
                                        <NavLink to={'/product/scanner'}>Scanner</NavLink>
                                    </li>
                                    <li className='z-20 text-black'>
                                        <NavLink to={'/filament'}>Filamente</NavLink>
                                    </li>
                                    <li className='z-20 text-black'>
                                        <NavLink to={'/ratgaber'}>Ratgeber</NavLink>
                                    </li>
                                    <li className='z-20 text-black'>
                                        <NavLink to={'/news'}>News</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className='hidden md:flex items-center'>
                        <div onMouseLeave={SearchMenu} className='relative w-[40vw]'>
                            <div className='h-20 w-full p-4 rounded-tl-2xl rounded-bl-2xl border-none items-center grid grid-cols-8'>
                                <input value={Input} onChange={(e) => setInput(e.target.value)} type='text' placeholder='What are you looking for?'
                                    onBlur={(e) => {
                                        setTimeout(() => {
                                            setResults(false)
                                        }, 200)
                                    }}
                                    className='pl-4 text-neutral-700  font-light h-full w-full col-span-7 rounded-tl-xl rounded-bl-xl outline-none' />
                                <div onClick={(e)=>{
                                    handleSearch()
                                }} 
                                className='h-full bg-[#00CED1] flex items-center col-span-1 justify-center rounded-tr-xl rounded-br-xl hover:bg-sky-400 cursor-pointer text-white'>
                                    <FaSearch className=' ' />
                                </div>
                            </div>
                            <div className='absolute z-40 bg-slate-50 w-full mt-2 rounded-lg overflow-y-scroll max-h-72'>
                                {result && result.length > 0 && result.map((ele) => (
                                    <div key={ele.Id} className='px-4 py-4'>
                                        <p className='hover:text-customBlue cursor-pointer'
                                            onClick={(e) => {
                                                navigate(`/productreview/${ele.Id}`)
                                            }}
                                        >{ele.product_name}</p>
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