import React from 'react';
import Result from '../component/ComparisonResult/Result'; // Import the Result component
import Tabbar from './Landingpage/Tabbar';

const CompareResult = () => {
  // Assuming you have the selectedCards in the state or props
  const selectedCards = []; // Replace this with your actual selectedCards

  return (
    <>
    <Tabbar/>
    <div>
      {/* You can include other content related to CompareResult here */}
      <Result selectedCards={selectedCards} />
    </div>
    </>
  );
};

export default CompareResult;
