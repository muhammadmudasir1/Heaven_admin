import React from 'react';

const Result = ({ selectedCards }) => {
  return (
    <div>
      <h1>Comparison Result</h1>
      {/* Render the selected cards */}
      {selectedCards.map((card) => (
        <div key={card.Index}>
          <h2>{card.title}</h2>
          {/* Render other card details as needed */}
          <img src={card.img} alt={card.title} />
          <p>Volume: {card.volume}</p>
          <p>Speed: {card.Speed}</p>
          {/* Include other card details as needed */}
        </div>
      ))}
    </div>
  );
};

export default Result;
