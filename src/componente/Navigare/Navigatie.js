import React from 'react';
import logo from '../../imagini/logo.png';
import logoName from '../../imagini/logoName.png';
import './Navigatie.css';
import { Link } from 'react-router-dom';

const Navigatie = () => {
    return (
        <nav className="navigare">
            <Link className="brand" to="/">
                <img className="logo" src={logo} alt='Logo-ul paginii' />
                <img className="logoName" src={logoName} alt='Text cu logo-ul' />
            </Link>
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link to="/">Acasa</Link>
            </li>
            <li className="nav-item">
                <Link to="/teorie">Teorie</Link>
            </li>
            <li className="nav-item">
                <Link to="/test2">Teste</Link>
            </li>
            <li className="nav-item">
                <Link to="/despre">Despre</Link>
            </li>
            <li className="nav-item">
                <Link to="/contact">Contact</Link>
            </li>
            </ul>
        </nav>
    )
}

export default Navigatie
