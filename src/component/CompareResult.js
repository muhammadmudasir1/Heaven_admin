import React from 'react';
import Result from '../component/ComparisonResult/Result'; // Import the Result component
import Tabbar from './Landingpage/Tabbar';

const CompareResult = () => {

  return (
    <>
    <Tabbar/>
    <div>
      <Result />
    </div>
    </>
  );
};

export default CompareResult;
