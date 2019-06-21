import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import logoNavbar from '../../assets/img/logoNavbar.png'
import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <img src={logoNavbar} className="navbar-brand navBrand ml-2" href="/" alt="Logo"></img>
                <div>
                    <a href="/criar-anuncio" className="createAdLink mr-5">Criar Anúncio</a>
                    <FontAwesomeIcon className="person-icon justify-content-end" icon={faUser} />
                    <a className="homeLoginLink ml-2 mr-2" href="/login">Login</a>
                </div>
            </nav>
        );
    }
}
export default Navbar;