SLAimport React, { useState } from 'react'
import { useEffect } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const SLADetail = () => {
    const [isOpen, setIsOpen] = useState(true);

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

    useEffect(() => {
        // Check if it's the first time opening
        const isFirstTime = localStorage.getItem('isFirstTime') === null;

        // If it's the first time, set isOpen to true
        if (isFirstTime) {
            setIsOpen(true);
            localStorage.setItem('isFirstTime', 'false');
        }
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            {!isMobile ? (
                <div className='w-full'>

                </div>
            ) : (
                <>
                    
                    <div className='w-full'>
                        
                    </div>

                </>

            )}
        </>
    )
}

export default SLADetail
