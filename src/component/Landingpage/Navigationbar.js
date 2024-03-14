import React, { useState, useEffect } from 'react'
import { RxCross2 } from "react-icons/rx";
import { FaSearch } from 'react-icons/fa';
import { PiMagnifyingGlass } from "react-icons/pi";
import { NavLink, Outlet, Link } from 'react-router-dom';
import StickyFooter from './StickyFooter';
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
import { useNavigate, useLocation } from 'react-router-dom';

const Navigationbar = () => {
    const [nav, setnav] = useState(false);
    const location = useLocation()
    const [isSticky, setisstickynav] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
    const [Input, setInput] = useState("");
    const [result, setResults] = useState([]);
    const [IsOpen, setIsOpen] = useState(true);
    const [dropDownOpen, setDropDownOpen] = useState(false)
    const [IsTranslated, setIsTranslated] = useState(false);
    const navigate = useNavigate()
    const [language, setLanguage] = useState('DE');
    const { t } = useTranslation();

    const setlang = useLanguage()

    const handleLanguageChange = (lang) => {
        setlang(lang)
        setLanguage(lang.toUpperCase());
        setTimeout(() => {
            setIsTranslated(false);
        }, 200)

    };

    const dropDown = () => {
        setIsTranslated(!IsTranslated)
    }

    const SearchMenu = () => {
        setIsOpen(!IsOpen)
    }
    const handleSearch = () => {
        navigate(`/product/search?query=${Input}`)
    }

    const handlePrinterDropDown = () => {
        setDropDownOpen((prev) => {
            return !prev
        })
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
        setIsOpen(true)
        setDropDownOpen(false)

        setnav(!nav);
    };

    const closeDashboard = () => {
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
                    <a href='/' className='text-white lg:text-2xl text-lg font-bold'>3DHeaven</a>
                </div>
                {isMobile ? (
                    <>
                        <div className='flex flex-row justify-between items-center'>
                            {!IsOpen ? ('') : (<div className='ml-4 text-white text-base '>
                                Best deals
                            </div>)}
                            <div >
                                <PiMagnifyingGlass onClick={SearchMenu} size={20} className='text-white relative z-20 cursor-pointer ml-2' />
                            </div>
                            <div className='absolute left-2 z-30'>
                                {!IsOpen ? (
                                    <div onMouseLeave={SearchMenu} className='relative w-[65vw]'>
                                        <input value={Input} onChange={(e) => setInput(e.target.value)} type='text' placeholder={t("search")}
                                            onBlur={(e) => {
                                                setTimeout(() => {
                                                    setResults(false)
                                                }, 200)
                                                setIsOpen(false)
                                                setIsOpen(false)
                                            }}

                                            className='pl-4 text-neutral-700 md:text-xl text-base font-light h-full w-full md:rounded-xl rounded-full md:py-3 py-1' />
                                        <div className='absolute z-40 bg-slate-50 w-full mt-2 rounded-lg overflow-y-scroll max-h-72'>
                                            {result.length > 0 && result.map((ele) => (
                                                <div key={ele.Id} className='px-4 py-4'
                                                    onClick={(e) => {
                                                        navigate(`/productreview/${ele.product_name}/${ele.Id}`)
                                                    }}
                                                >
                                                    {ele.product_name}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ) : ('')}
                            </div>
                            {/* working */}
                            <div className='relative' >
                                <CiGlobe size={20} className='text-white z-20 cursor-pointer ml-2' 
                                onClick={(e)=>{
                                    dropDown()
                                }}
                                />
                                {
                                    IsTranslated &&
                                    <div className='absolute top-6 h-[70px] w-[60px] p-1 bg-white rounded-md z-[1000] shadow-sm'>
                                        <div className='flex items-center p-1'
                                        onClick={() => handleLanguageChange('de')}
                                        ><img src={germanflag} alt="" className='w-6 h-3' /><p className='px-2'>DE</p></div>
                                        <div className='flex items-center p-1'
                                        onClick={() => handleLanguageChange('en')}
                                        ><img src={ukflag} alt="" className='w-6 h-3' /><p className='px-2'>EN</p></div>
                                    </div>
                                }
                            </div>
                            <IoIosMenu onClick={handleNav} size={30} className='z-20 ml-2 cursor-pointer text-white' />
                            <div className={nav ? 'z-[100000] w-full h-screen fixed left-0 top-0 flex-col bg-white/90 ease-in duration-500' : 'absolute top-0 left-[-100%] ease-in duration-500 z-10'}>
                                {
                                    nav &&
                                    <RxCross2 className='text-2xl fixed top-5 right-5 ease-in duration-500' onClick={(e) => {
                                        handleNav()
                                    }} />
                                }
                                <ul className='gap-8 flex lg:flex-row flex-col items-center justify-center h-screen w-full '>
                                    <li className='z-20 text-black hover:underline'>
                                        <NavLink to={'/'} onClick={closeDashboard} className={'text-xl font-normal'}>{t('HomePage')}</NavLink>
                                    </li>
                                    <li className='z-20 text-black'>
                                        <Link to={'/#topFive'} className={'text-xl font-normal'} onClick={closeDashboard}>{t('BestDeals')}</Link>
                                    </li>
                                    <li className='z-20 text-black relative'>
                                        <p onClick={(e) => {
                                            console.log("is clicked")
                                            handlePrinterDropDown()
                                        }} className='flex text-xl ml-24 mr-20 text-center'>{t('3dprinters')}
                                            {dropDownOpen ? <ArrowDownCircleIcon /> : <ArrowUpCircleIcon />}
                                        </p>
                                        {dropDownOpen && (
                                            <div className='absolute right-0 top-0 bg-white py-2 px-4 z-30'>
                                                <ul>
                                                    <li>
                                                        <NavLink to='/product/fdm' onClick={closeDashboard} className={`z-30`}>{t('fdm')}</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink onClick={closeDashboard} to='/product/sla' className={`z-30`}>{t('SLA')}</NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </li>

                                    <li className='z-20 text-black'>
                                        <NavLink to={'/product/cutter'} className={'text-xl font-normal'} onClick={closeDashboard}>{t('laserCutter')}</NavLink>
                                    </li>
                                    <li className='z-20 text-black'>
                                        <NavLink to={'/product/scanner'} className={'text-xl font-normal'} onClick={closeDashboard}>{t('3DScanners')}</NavLink>
                                    </li>
                                    <li className='z-20 text-black'>
                                        <NavLink to={'/filament'} className={'text-xl font-normal'} onClick={closeDashboard}>{t('Filament')}</NavLink>
                                    </li>
                                    <li className='z-20 text-black'>
                                        <NavLink to={'/ratgaber'} className={'text-xl font-normal'} onClick={closeDashboard}>Tutorials</NavLink>
                                    </li>
                                    <li className='z-20 text-black'>
                                        <NavLink to={'/news'} onClick={closeDashboard} className={'text-xl font-normal'}>News</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className='hidden md:flex items-center'>
                        <div onMouseLeave={SearchMenu} className='relative w-[40vw]'>
                            <div className='h-20 w-full p-4 rounded-tl-2xl rounded-bl-2xl border-none items-center grid grid-cols-8'>
                                <input value={Input} onChange={(e) => setInput(e.target.value)} type='text' placeholder={t("search")}
                                    onBlur={(e) => {
                                        setTimeout(() => {
                                            setResults(false)
                                        }, 200)
                                    }}
                                    className='pl-4 text-neutral-700  font-light h-full w-full col-span-7 rounded-tl-xl rounded-bl-xl outline-none' />
                                <div onClick={(e) => {
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
                                                navigate(`/productreview/${ele.product_name}/${ele.Id}`)
                                            }}
                                        >{ele.product_name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Link to={'/ComparisonPage'} className='ml-4 text-white text-xl font-light font-[Roboto]'>
                            ⚡️{t("BestDeals")}
                        </Link>
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
                                <div className='bg-white absolute top-6 right-0 flex flex-col items-center justify-center  z-30 mt-2 shadow-md shadow-slate-400 rounded-xl overflow-hidden'>
                                    <button
                                        onClick={() => handleLanguageChange('de')}
                                        className=' text-xl font-light font-[Roboto] hover:bg-gray-200 py-2 px-2'
                                    >
                                        <div className='flex items-center justify-center'>
                                            <img src={germanflag} alt="" className='h-10 w-12 pr-2' />
                                            DE
                                        </div>
                                    </button>
                                    <button
                                        onClick={() => handleLanguageChange('en')}
                                        className=' text-xl font-light font-[Roboto] hover:bg-gray-200 py-2 px-2'
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