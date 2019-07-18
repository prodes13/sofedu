import React from 'react'
import logo from '../../imagini/logo.png';
import logoName from '../../imagini/logoName.png';
import './Logare.css';

const Logare = () => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-6 col-md-3">
                    <form className="form-container">
                        <div className="form-group text-center">
                            <img className="logo-logare" src={logo} alt='Logo-ul paginii' />
                        </div>
                        <div className="form-group text-center">
                            <img className="logoName1" src={logoName} alt='Text cu logo-ul' />
                        </div>
                        <div className="form-group">
                            <label for="nume">Creaza un profil local!</label>
                            <input type="text" id="nume" className="form-control form-control-lg" placeholder="Numele tau aici ..." />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block">Start</button>
                        </div>
                    </form>  
                </div>
            </div>
        </div>
    )
}

export default Logare
