import React, { useState } from 'react';
import Button from './Button';  

function RandomValueComponent() {
  
  const [randomValue, setRandomValue] = useState("Click a button to generate a value!");

  
  const randomValues = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Strawberry"];

  
  const generateRandomValue = () => {
    const randomIndex = Math.floor(Math.random() * randomValues.length);
    setRandomValue(randomValues[randomIndex]);
  };

  
  const resetValue = () => {
    setRandomValue("Click a button to generate a value!");
  };

  return (
    <div>
      <h2>Random Value: {randomValue}</h2>
      <Button onClick={generateRandomValue} text="Generate Random Value" />
      <Button onClick={resetValue} text="Reset Value" />
    </div>
  );
}

export default RandomValueComponent;
