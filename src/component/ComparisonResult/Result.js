import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import cardsList from './cardsList.json';
import imges from '../../imges/EBay_logo.png'
import Table from './Table';

const Result = () => {
  const location = useLocation();

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

  return (
    <>
      <div className="flex items-center px-20 pt-3 pb-4 shadow-lg shadow-rgb(203 213 225)" >
        {cardsList.map((item, i) => (
          <div key={i} className='flex flex-col items-center rounded-lg mx-5 py-4' style={{ boxShadow: '-8px 0 15px rgb(203 213 225), 0 8px 15px rgb(203 213 225)' }} >
            <div className='px-4 py-4'>
              <img src={item.img} alt="" />
            </div>
            <h1 className='text-neutral-800 text-xl font-semibold'>{item.title}</h1>
            <h1 className='line-through text-neutral-800 text-lg font-semibold'>{item['Offical Price']}</h1>
            <div className='flex px-8 py-4 outline outline-sky-600 rounded-lg my-2'>
              <img src={imges} alt="" className='' />
              <h1>{item.price}</h1>
            </div>
            <div className='flex px-8 py-4 outline outline-sky-600 rounded-lg my-2'>
              <img src={imges} alt="" className='' />
              <h1>{item.price}</h1>
            </div>
          </div>
        ))}
      </div>
      <Table/>
    </>
  );
};

export default Result;
