import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect,useState } from 'react';
import cardsList from './cardsList.json';
import imges from '../../imges/EBay_logo.png'
import Table from './Table';

const Result = () => {
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);

  const setQuery = () => {
    const Query = new URLSearchParams(location.search);
    console.log(Query.get('cp1'));
    console.log(Query.get('cp2'));
    console.log(Query.get('cp3'));
    console.log(Query.get('cp4'));
  };

  useEffect(() => {
    setQuery();
    console.log('location here: ');
    console.log(location);
  }, [location]);


  const fixedTabbar = () => {
    if (window.scrollY > 0) {
      setIsSticky(true)
    } else {
      setIsSticky(false)
    }
  }
  window.addEventListener('scroll', fixedTabbar)

  return (
    <>
      <div className={`flex items-center justify-center w-full bg-white ${isSticky && "fixed top-[8vh] lg:top-[10vh] "}`} >
        <div className='flex my-4'>
          {cardsList.map((item, i) => (
            <div key={i}
              className='flex flex-col items-center rounded-lg mx-5 py-4 h-[300px] w-[250px] px-2'
              style={{ boxShadow: '-8px 0 15px rgba(203,213,225,0.5), 0 8px 15px rgba(203,213,225,0.5)' }} >
              <div className='px-4 py-4 w-full h-32 bg-customBlue '>

              </div>
              <h1 className='text-neutral-800 text-xl font-semibold line-clamp-2 text-center'>{item.title}</h1>
              <h1 className='line-through text-neutral-800 text-lg font-semibold'>{item['Offical Price']}</h1>
              <div className='flex justify-around  w-full pt-3'>

                <div className='flex flex-col outline outline-[#026CC4] rounded-lg px-3'>
                  <div className='w-full flex justify-center'>
                    <img src={imges} alt="" className='h-5' />
                  </div>
                  <h1 className=' text-lg font-semibold'>{item.price}</h1>
                </div>

                <div className='flex flex-col outline outline-[#026CC4] rounded-lg px-3'>
                  <div className='w-full flex justify-center'>
                    <img src={imges} alt="" className='h-5' />
                  </div>
                  <h1 className=' text-lg font-semibold'>{item.price}</h1>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
      <Table />
    </>
  );
};

export default Result;
