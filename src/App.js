import React from 'react'
import './App.css';
import PokeSearch from './PokeSearch'
import TypeData from './TypeData'
import CheckTypeEffect from './TypeData';


function App() {
  return (
    <div className="App">
      <h1>Welcome to the PokeTypeChecker</h1>
      <PokeSearch />
      <TypeData />
    </div>
  );
}

export default App;
