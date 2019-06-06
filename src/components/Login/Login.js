import React, { Component } from 'react';
import './Login.css';
import { Navbar } from '../Navbar'
import homeLogo from '../../assets/img/homeLogo.PNG';

class Login extends Component {
    render() {
        return(
            <div>
                <Navbar />
                <div className="container">
                    <div className="login-block">
                        <img className="login-logo" src={homeLogo} alt="DellinhoGameplays Logo"></img>
                        <form className="justify-content-center my-4">
                            <p className="login-phrase">Please, Log In!</p>
                            <div className="form-group">
                                <input className="form-control email-input" type="email" placeholder="Enter email" aria-describedby="emailHelp"></input>
                            </div>
                            <div className="form-group">
                                <input className="form-control password-input" type="password" placeholder="Enter password" aria-label="Search"></input>
                            </div>
                            <button className="login-button btn-dark my-3 px-5 py-1 my-sm-0" type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;