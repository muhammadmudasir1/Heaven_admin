import React, { useState, useEffect } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const SingleReviewTabbar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedName,setSelectedName]=useState("Alle Wichtigste")
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
    return (
        <>
            {!isMobile ? (
                <div className='m-4 flex justify-center'>
                    <ul className=' w-3/4'>
                        <li className='flex  items-center justify-around '>
                            <button
                                className='text-neutral-800 text-xl font-normal'
                                onClick={() => {
                                    const comp = document.getElementById('alle')
                                    const rect = comp.getBoundingClientRect();
                                    window.scrollTo({
                                        top: rect.top - 300,
                                        behavior: 'smooth'
                                    });
                                }}
                            >
                                Alle Wichtigste
                            </button>
                            <button
                                className='text-neutral-800 text-xl font-normal'
                                onClick={() => {
                                    const comp = document.getElementById('prosAndCons')
                                    const rect = comp.getBoundingClientRect();
                                    window.scrollTo({
                                        top: rect.top - 300,
                                        behavior: 'smooth'
                                    });
                                }}
                            >
                                Pros & Cons
                            </button>
                            <button
                                className='text-neutral-800 text-xl font-normal'
                                onClick={() => {
                                    const comp = document.getElementById('purchaselinks')
                                    const rect = comp.getBoundingClientRect();
                                    window.scrollTo({
                                        top: rect.top - 300,
                                        behavior: 'smooth'
                                    });
                                }}
                            >
                                Purchase Links
                            </button>
                            <button
                                className='text-neutral-800 text-xl font-normal'
                                onClick={() => {
                                    const comp = document.getElementById('review')
                                    const rect = comp.getBoundingClientRect();
                                    window.scrollTo({
                                        top: rect.top - 300,
                                        behavior: 'smooth'
                                    });
                                }}
                            >
                                Review
                            </button>
                            <button
                                className='text-neutral-800 text-xl font-normal'
                                onClick={() => {
                                    const comp = document.getElementById('specs')
                                    const rect = comp.getBoundingClientRect();
                                    window.scrollTo({
                                        top: rect.top - 300,
                                        behavior: 'smooth'
                                    });
                                }}
                            >
                                Specs
                            </button>
                        </li>
                    </ul>
                </div>
            ) : (
                <div className={`flex items-center justify-center py-8 bg-white w-full z-[99] ${isSticky?"fixed top-14 ":"relative"}`}>
                    <div onClick={handleToggle} className='flex border-2 border-black items-center justify-between w-64 px-1 py-2 rounded-lg bg-white'>
                        {selectedName}
                        <div onClick={handleToggle} className=''>
                            {isOpen ? <IoIosArrowUp size={20} color='#00CED1' /> : <IoIosArrowDown size={20} color='#00CED1' />}
                        </div>
                        <div className='absolute top-20 bg-white w-64 z-10 rounded-lg'>
                            {isOpen && (
                                <div className='flex flex-col w-full'>
                                    <button
                                        className='text-neutral-800 text-xl font-normal'
                                        onClick={() => {
                                            const comp = document.getElementById('alle')
                                            handleNameSelect('Alle Wichtigste')
                                            const rect = comp.getBoundingClientRect();
                                            window.scrollTo({
                                                top: rect.top - 200,
                                                behavior: 'smooth'
                                            });
                                        }}
                                    >
                                        Alle Wichtigste
                                    </button>
                                    <button
                                        className='text-neutral-800 text-xl font-normal'
                                        onClick={() => {
                                            const comp = document.getElementById('prosAndCons')
                                            handleNameSelect('Pros & Cons')
                                            const rect = comp.getBoundingClientRect();
                                            window.scrollTo({
                                                top: rect.top - 200,
                                                behavior: 'smooth'
                                            });
                                        }}
                                    >
                                        Pros & Cons
                                    </button>
                                    <button
                                        className='text-neutral-800 text-xl font-normal'
                                        onClick={() => {
                                            const comp = document.getElementById('purchaselinks')
                                            handleNameSelect('Purchase Links')
                                            const rect = comp.getBoundingClientRect();
                                            window.scrollTo({
                                                top: rect.top - 200,
                                                behavior: 'smooth'
                                            });
                                        }}
                                    >
                                        Purchase Links
                                    </button>
                                    <button
                                        className='text-neutral-800 text-xl font-normal'
                                        onClick={() => {
                                            const comp = document.getElementById('review')
                                            handleNameSelect('Review')
                                            const rect = comp.getBoundingClientRect();
                                            window.scrollTo({
                                                top: rect.top - 200,
                                                behavior: 'smooth'
                                            });
                                        }}
                                    >
                                        Review
                                    </button>
                                    <button
                                        className='text-neutral-800 text-xl font-normal'
                                        onClick={() => {
                                            const comp = document.getElementById('specs')
                                            handleNameSelect('Specs')
                                            const rect = comp.getBoundingClientRect();
                                            window.scrollTo({
                                                top: rect.top - 200,
                                                behavior: 'smooth'
                                            });
                                        }}
                                    >
                                        Specs
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SingleReviewTabbar;
