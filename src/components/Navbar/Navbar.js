import React, { Component } from 'react';
import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <a className="navbar-brand navBrand ml-2" href="/">DellinhoGameplays</a>
            </nav>
        );
    }
}
export default Navbar;