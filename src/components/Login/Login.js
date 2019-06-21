import React, { Component } from 'react';
import './Login.css';
import { Navbar } from '../Navbar'
import homeLogo from '../../assets/img/homeLogo.PNG';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            loginName: '',
            loginPassword: ''
        }

    }

    onChangeEmail = async (event) => {
        await this.setState({ loginName: event.target.value });
    }

    onChangePassword = async (event) => {
        await this.setState({ loginPassword: event.target.value });
    }

    onSubmitForm = (event) => {
        event.preventDefault();
        //-------FIXME: Verificar no banco de dados se é um login válido
        // const alertMessage = <p>Desculpe, ocorreu um erro. Tente novamente.</p>;
        // ReactDOM.render(alertMessage, document.getElementById("warningMessage"));
    }

    render() {
        return(
            <div>
                <Navbar />
                <div className="container">
                    <div className="login-block">
                        <img 
                            className="login-logo"
                            src={homeLogo}
                            alt="DellinhoGameplays Logo">
                        </img>
                        <form className="justify-content-center my-4">
                            <p className="login-phrase">Please, Log In!</p>
                            <div className="form-group">
                                <input 
                                    className="form-control email-input"
                                    type="email"
                                    placeholder="Enter email"
                                    value={this.state.loginName}
                                    onChange={this.onChangeEmail}
                                    aria-describedby="emailHelp">
                                </input>
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control password-input"
                                    type="password"
                                    placeholder="Enter password"
                                    value={this.state.loginPassword}
                                    onChange={this.onChangePassword}
                                    aria-label="Search">
                                </input>
                            </div>
                            <button
                                className="login-button btn-dark my-3 px-5 py-1 my-sm-0"
                                onSubmit={this.onSubmitForm}
                                type="submit">
                                    Login
                                </button>
                            <div className="warningMessage" id="warningMessage" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;