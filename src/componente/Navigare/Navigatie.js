import React from 'react';
import logo from '../../imagini/logo.png';
import logoName from '../../imagini/logoName.png';
import './Navigatie.css';
import { Link } from 'react-router-dom';

const Navigatie = () => {
    return (
        <nav class="navigare">
            <a class="brand" href="#">
                <img className="logo" src={logo} alt='Logo-ul paginii' />
                <img className="logoName" src={logoName} alt='Text cu logo-ul' />
            </a>
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <Link to="/login">Acasa</Link>
            </li>
            <li class="nav-item">
                <Link to="/teorie">Teorie</Link>
            </li>
            <li class="nav-item">
                <Link to="/test2">Teste</Link>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Despre</a>
            </li>
            </ul>
        </nav>
    )
}

export default Navigatie
