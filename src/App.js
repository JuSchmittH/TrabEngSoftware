import React, { Component } from 'react';
import { Navbar } from './components/Navbar';
import { Link } from 'react-router-dom';
import homeLogo from '../src/assets/img/homeLogo.PNG';
import './App.css';

class App extends Component {


  render() {
    return (
      <div className="App">
        <Navbar />
          <div className="container">
          <img className="home-logo" src={homeLogo} alt="DellinhoGameplays Logo"></img>
          <div className="mt-4">
            <Link className="home-link-login btn-dark mr-3" to="/login">Log In</Link>
            <Link className="home-link-signup btn-dark ml-3" to="/signup">Sign Up</Link>
          </div>
          </div>
      </div>
    );
  }
}

export default App;
