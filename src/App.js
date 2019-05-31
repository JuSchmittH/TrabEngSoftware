import React from 'react';
import { Navbar } from './components/Navbar';
import homeLogo from '../src/assets/img/homeLogo.PNG'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
        <div className="container">
        <img src={homeLogo}></img>
        </div>
    </div>
  );
}

export default App;
