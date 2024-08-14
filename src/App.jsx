import { useState } from 'react'
import './App.css'
import RandomValueComponent from './components/RandomValueComponent'



function App() {
  return (
    <div className="App">
      <h1>Random Value Generator</h1>
      <RandomValueComponent /> 
    </div>
  );
}

export default App;