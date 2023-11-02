import React, { useState } from 'react';

function CounterComponent() {
  const [results, setResults] = useState([0, 0, 0]);
  const prices = [20, 20, 20];
  let totalprice = 0;

  const updateResult = (index, increment) => {
    const updatedResults = [...results];
    updatedResults[index] += increment;
    totalprice += prices[index] * increment;
    setResults(updatedResults);
  };

  return (
    <div>
      <div>
        <button onClick={() => updateResult(0, 1)}>Increment Result 1</button>
        <button onClick={() => updateResult(0, -1)}>Decrement Result 1</button>
        <span>Result 1: {results[0]}</span>
      </div>
      <div>
        <button onClick={() => updateResult(1, 1)}>Increment Result 2</button>
        <button onClick={() => updateResult(1, -1)}>Decrement Result 2</button>
        <span>Result 2: {results[1]}</span>
      </div>
      <div>
        <button onClick={() => updateResult(2, 1)}>Increment Result 3</button>
        <button onClick={() => updateResult(2, -1)}>Decrement Result 3</button>
        <span>Result 3: {results[2]}</span>
      </div>
      <div>
        <span>Total Amount: {totalprice}</span>
      </div>
    </div>
  );
}

export default CounterComponent;