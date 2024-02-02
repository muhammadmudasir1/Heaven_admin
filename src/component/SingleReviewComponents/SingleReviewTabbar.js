import React, { useState } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const SingleReviewTabbar = () => {
    const [isFixed,setIsFixed]=useState(false);

    const handleFixedTabbar=()=>{
        if(window.scrollY >0){
            setIsFixed(true)
        }else{
            setIsFixed(false)
        }
    }
    window.addEventListener('scroll',handleFixedTabbar)

    const [currentHeading, setCurrentHeading] = useState('Alle Wichtigste');

    return (
        <div className='mt-4'>
            {/* <ul className={`${isFixed? 'fixed top-32 w-full z-20 bg-white py-8' : ''} `}> */}
            <ul>
                <li className='flex gap-24 items-center justify-center'>
                    <NavLink
                        to={`/productreview/${1}/allmostimportant`}
                        className='text-neutral-800 text-xl font-normal'
                        onClick={() => setCurrentHeading('Alle Wichtigste')}
                    >
                        Alle Wichtigste
                    </NavLink>
                    <NavLink
                        to={'/fdm' }
                        className='text-neutral-800 text-xl font-normal'
                        onClick={() => setCurrentHeading('Erster Eindruck')}
                    >
                        Erster Eindruck
                    </NavLink>
                    <NavLink
                        to={{ pathname: '/sla' }}
                        className='text-neutral-800 text-xl font-normal'
                        onClick={() => setCurrentHeading('Technichen Daten')}
                    >
                        Technichen Daten
                    </NavLink>
                    <NavLink
                        to={{ pathname: '/scanner' }}
                        className='text-neutral-800 text-xl font-normal'
                        onClick={() => setCurrentHeading('Hardware/Software')}
                    >
                        Hardware/Software
                    </NavLink>
                    <NavLink
                        to={{ pathname: '/cutter' }}
                        className='text-neutral-800 text-xl font-normal'
                        onClick={() => setCurrentHeading('Fazit')}
                    >
                        Fazit
                    </NavLink>
                </li>
            </ul>
            <div className='mt-14'>
                <h1 class="w-full py-8 bg-zinc-100 flex items-center px-20 text-neutral-800 text-[32px] font-semibold">
                    {currentHeading}</h1>
            </div>
        </div>
    );
};

export default SingleReviewTabbar;
