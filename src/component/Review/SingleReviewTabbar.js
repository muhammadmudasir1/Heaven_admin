import { useState, useEffect } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useTranslation } from 'react-i18next';

const ReviewTabbar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedName,setSelectedName]=useState('coreData')
    const [isSticky, setIsSticky] = useState(false);
    const {t}=useTranslation()

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
                                {t('coreData')}
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
                                {t('purchaseLinks')}
                            </button>
                            <button
                                className='text-neutral-800 text-xl font-normal'
                                onClick={() => {
                                    const comp = document.getElementById('review')
                                    const rect = comp && comp.getBoundingClientRect();
                                    rect && window.scrollTo({
                                        top: rect.top - 300,
                                        behavior: 'smooth'
                                    });
                                }}
                            >
                                {t('review')}
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
                            {t('TechnicalData')}
                            </button>
                        </li>
                    </ul>
                </div>
            ) : (
                <div className={`flex items-center justify-center py-2 bg-white w-full z-[99] ${isSticky?"fixed top-12 ":"relative"}`}>
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
                                            handleNameSelect(t('coreData'))
                                            const rect = comp.getBoundingClientRect();
                                            window.scrollTo({
                                                top: rect.top - 200,
                                                behavior: 'smooth'
                                            });
                                        }}
                                    >
                                        {t('coreData')}
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
                                            handleNameSelect(t('purchaseLinks'))
                                            const rect = comp.getBoundingClientRect();
                                            window.scrollTo({
                                                top: rect.top - 200,
                                                behavior: 'smooth'
                                            });
                                        }}
                                    >
                                        {t('purchaseLinks')}
                                    </button>
                                    <button
                                        className='text-neutral-800 text-xl font-normal'
                                        onClick={() => {
                                            const comp = document.getElementById('review')
                                            handleNameSelect(t('review'))
                                            const rect = comp && comp.getBoundingClientRect();
                                            rect && window.scrollTo({
                                                top: rect.top - 200,
                                                behavior: 'smooth'
                                            });
                                        }}
                                    >
                                    {t('review')}
                                    </button>
                                    <button
                                        className='text-neutral-800 text-xl font-normal'
                                        onClick={() => {
                                            const comp = document.getElementById('specs')
                                            handleNameSelect(t('TechnicalData'))
                                            const rect = comp.getBoundingClientRect();
                                            window.scrollTo({
                                                top: rect.top - 200,
                                                behavior: 'smooth'
                                            });
                                        }}
                                    >
                                        {t('TechnicalData')}
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

export default ReviewTabbar;
