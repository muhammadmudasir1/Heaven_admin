import React from 'react'
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";


const FDMTabbar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 800);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [isOpen, setIsOpen] = useState(false);
    const [selectedName, setSelectedName] = useState('Alle Wichtigste');

    const names = ["osama", "baloch", "dadi amma", "lunda"];

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleNameSelect = (name) => {
        setSelectedName(name);
        setIsOpen(false);
    };

    return (
        <>
            {!isMobile ? (
                <div className='pt-7 pb-[76px]'>

                    <ul>
                        <li className='flex gap-24 items-center justify-center'>
                            <NavLink to={{ pathname: '/product/all3dprinter' }} className='text-neutral-800 text-xl font-normal'>All 3D Printers</NavLink>
                            <NavLink to={{ pathname: '/product/fdm' }} className='text-neutral-800 text-xl font-normal'>FDM</NavLink>
                            <NavLink to={{ pathname: '/product/sla' }} className='text-neutral-800 text-xl font-normal'>SLA</NavLink>
                            <NavLink to={{ pathname: '/product/scanner' }} className='text-neutral-800 text-xl font-normal'>Scanner</NavLink>
                            <NavLink to={{ pathname: '/product/cutter' }} className='text-neutral-800 text-xl font-normal'>Cutter</NavLink>
                        </li>
                    </ul>

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
    )
}

export default FDMTabbar;