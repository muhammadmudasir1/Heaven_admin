import React, { useEffect, useState } from 'react';
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom"

const Tabbar = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const [isOpen, setisOpen] = useState(false);

  const toggleDropdown = () => {
    setisOpen(!isOpen)
  }

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
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);




  return (
    <div className={isDesktop ? ` bg-white py-6 shadow-md shadow-slate-300 w-full cursor-pointer relative ${isSticky ? 'fixed w-full top-[70px] z-30' : ''}` : 'hidden'}>
      {isDesktop ? (
        <div className='w-full h-full'>
          <ul className='flex justify-evenly items-center gap-x-6  w-full relative'>
            <Link 
            to={'/'}  
            className='z-10 relative active:underline active:underline-offset-8 decoration-blue-600 decoration-4'>Startseite </Link>
            <a href="">Beste Liste</a>
            <div className='flex justify-center items-center gap-3 relative'>
              <Link to={'../Review'} className='active:underline active:underline-offset-8 decoration-blue-600 decoration-4'>3D Druckers</Link>
              <MdOutlineArrowDropDown onClick={toggleDropdown} size={30} />
              {isOpen && (
                <div className='absolute top-9 right-2 flex flex-col items-start justify-evenly bg-slate-500 w-full  py-8'>
                  <Link className='hover:bg-slate-600 w-full pl-2'>option 1</Link>
                  <Link className='hover:bg-slate-600 w-full pl-2 gap-y-3'>option 2</Link>
                </div>
              )}
            </div>
            <Link>Laser</Link>
            <Link>Scanner</Link>
            <Link>Filamente</Link>
            <Link>Ratgeber</Link>
            <Link>News</Link>
          </ul>

        </div>
      ) : ('')}
    </div>
  );
};

export default Tabbar;
