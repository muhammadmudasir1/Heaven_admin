import React from 'react';
import ComparisonTable from './ComparisonTable.json';

const Table = () => {
  return (
    <div className='py-8'>
      {ComparisonTable.map((item, i) => (
        <div key={i} className='px-16'>
          <h1 className='text-neutral-800 text-2xl font-semibold'>{item.heading1 || item.heading2 || item.heading3 || item.heading4 || item.heading5 || item.heading6 || item.heading7 || item.heading8 || item.heading9 || item.heading10 || item.heading11}</h1>
          <div className='w-full h-[1px] bg-black' />
          <div className='flex items-center justify-around py-16 text-neutral-800 text-xl font-normal'>
            <h1 className='px-4'>{item['h1 comparingRow1']}</h1>
            <h1 className='px-4'>{item['h1 comparingRow2']}</h1>
            <h1 className='px-4'>{item['h1 comparingRow3']}</h1>
            <h1 className='px-4'>{item['h1 comparingRow4']}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;
