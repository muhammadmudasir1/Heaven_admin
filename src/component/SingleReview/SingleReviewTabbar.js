import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import useLanguage from '../../hooks/useLanguage'

const SingleReviewTabbar = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
    const [isSticky, setissticky] = useState(false);
    const {t}=useTranslation();

    const setlang = useLanguage()

    const fixednavbar = () => {
        if (window.scrollY > 0) {
            setissticky(true)
        } else {
            setissticky(false)
        }
    }
    window.addEventListener('scroll', fixednavbar)

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
        <div>
            {
                isDesktop ? (

                    <>
                        <ul className={`py-4 mt-3 flex items-center justify-evenly ${isSticky ? 'fixed w-full z-20 bg-slate-50 top-[126px]' : ''}`}>
                            <li onClick={()=>setlang('en')} className=''>
                                <NavLink >{t('MostImportant')}</NavLink>
                            </li>
                            <li onClick={()=>setlang('en')}>
                                <NavLink >{t('FirstImpression')}</NavLink>
                            </li>
                            <li  onClick={()=>setlang('en')}>
                                <NavLink >{t('TechnicalData')}</NavLink>
                            </li>
                            <li onClick={()=>setlang('en')}>
                                <NavLink >Lieferumfang</NavLink>
                            </li>
                            <li  onClick={()=>setlang('en')}>
                                <NavLink >Hardware/ <br /> Software</NavLink>
                            </li>
                            <li  onClick={()=>setlang('en')}>
                                <NavLink >Fazit</NavLink>
                            </li>
                        </ul>
                        <div class="w-full bg-zinc-100 py-8 px-12">
                            <div class="text-neutral-800 text-xl font-semibold font-['Roboto']">Alle wichtigste</div>
                        </div>
                    </>

                ) : (
                    ''
                )
            }

        </div>
    )
}

export default SingleReviewTabbar