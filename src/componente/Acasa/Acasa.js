import React from 'react'
import './Acasa.css';
import film from '../../film/film.mov';

const Acasa = () => {
    return (
        <div className="acasa container-acasa">
            <div className="fullscreen-video-wrap">
                <video src={film} autoPlay={true} loop={true}></video>
            </div>
            <div className="overlay">
            </div>
            <div className="acasa-content">
                <h1>Bine ai venit pe platforma noastra de teste online!</h1>
                <p>Acest proiect este la inceput, pe viitor aici vei gasi o multitudine de teste educationale!</p>
            </div>
        </div>
    )
}

export default Acasa;
