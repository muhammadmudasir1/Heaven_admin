import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const SLASingleReviewTabbar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedName, setSelectedName] = useState('Alle Wichtigste');

    const names = ["osama", "baloch", "dadi amma", "lunda"];

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 800);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleNameSelect = (name) => {
        setSelectedName(name);
        setIsOpen(false);
    };

    const [currentHeading, setCurrentHeading] = useState('Alle Wichtigste');
    return (
        <>
            {!isMobile ? (
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
            ) : (
                <div className='flex items-center justify-center py-8 relative'>
                    <div onClick={handleToggle} className='flex border-2 border-black items-center justify-between w-64 px-1 py-2 rounded-lg '>
                        {selectedName}
                        <div onClick={handleToggle} className=''>
                            {isOpen ? <IoIosArrowUp size={20} color='#00CED1' /> : <IoIosArrowDown size={20} color='#00CED1' />}
                        </div>
                        <div className='absolute top-20 bg-white w-64 z-10 rounded-lg'>
                            {isOpen && (
                                <ul className='w-full '>
                                    {names.map((name, index) => (
                                        <li key={index} onClick={() => handleNameSelect(name)} className='py-2 hover:bg-[#00CED1] w-full flex flex-col items-center justify-center'>{name}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SLASingleReviewTabbar;
