import React, { Component } from 'react';
import './TestTragere.css';

class TestTragere extends Component {
    state = {
        mesaj: "",
        marimi: [
        {
            nume: "Lungime",
            categorie: "fundamentale",
            bgcolor: "pink",
            clasa: "draggable olinie",
            corect: "fundamental"
        }, 
        {
            nume: "Masa",
            categorie: "enumerare",
            bgcolor: "orange",
            clasa: "draggable olinie",
            corect: "fundamental"
        }, 
        {
            nume: "Timp",
            categorie: "enumerare",
            bgcolor: "aqua",
            clasa: "draggable olinie",
            corect: "fundamental"
        }, 
        {
            nume: "Intensitatea curentului electric",
            categorie: "enumerare",
            bgcolor: "aquamarine",
            clasa: "draggable",
            corect: "fundamental"
        }, 
        {
            nume: "Temperatura termodinamica",
            categorie: "derivate",
            bgcolor: "darksalmon",
            clasa: "draggable",
            corect: "fundamental"
        }, 
        {
            nume: "Cantitatea de substanta",
            categorie: "enumerare",
            bgcolor: "gainsboro",
            clasa: "draggable",
            corect: "fundamental"
        }, 
        {
            nume: "Forta",
            categorie: "derivate",
            bgcolor: "khaki",
            clasa: "draggable olinie",
            corect: "derivat"
        }, 
        {
            nume: "Presiune",
            categorie: "enumerare",
            bgcolor: "lightcoral",
            clasa: "draggable olinie",
            corect: "derivat"
        }, 
        {
            nume: "Lucru mecanic",
            categorie: "derivate",
            bgcolor: "lightskyblue",
            clasa: "draggable olinie",
            corect: "derivat"
        }, 
        {
            nume: "Putere",
            categorie: "enumerare",
            bgcolor: "skyblue",
            clasa: "draggable olinie",
            corect: "derivat"
        }
        ]
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDragStart = (ev, id) =>{
        ev.dataTransfer.setData("id", id);
    }

    onDrop = (ev, cat) => {
        let id = ev.dataTransfer.getData("id");

        let marimi = this.state.marimi.filter((task) => {
            if(task.nume === id) {
                task.categorie = cat;
            }
            return task;
        });

        this.setState({
            ...this.state,
            marimi
        });
    }

    render() {
// Vectori pentru a muta casutele
        var marimi = {
            fundamentale: [],
            derivate: [],
            enumerare: []
        }
// Verificam daca marimile fundamentale au ca parinte .. raspunsul corect!
        this.verificare = (e) => {
            e.preventDefault();
            if(document.getElementById("Lungime").parentElement.classList[0] === "fundamentale" &&
            document.getElementById("Masa").parentElement.classList[0] === "fundamentale" &&
            document.getElementById("Timp").parentElement.classList[0] === "fundamentale" &&
            document.getElementById("Intensitatea curentului electric").parentElement.classList[0] === "fundamentale" &&
            document.getElementById("Temperatura termodinamica").parentElement.classList[0] === "fundamentale" &&
            document.getElementById("Cantitatea de substanta").parentElement.classList[0] === "fundamentale" &&
            marimi.enumerare.length === 0
            ) {
                this.setState({
                    mesaj: "Bravo, ai identificat corect marimile fizice!"
                });
            } else {                
                this.setState({
                    mesaj: "Reincearca!"
                });
            }
        }

        this.state.marimi.forEach((t) => {
            marimi[t.categorie].push(
                <div key={t.nume}
                    onDragStart = {(e) => this.onDragStart(e, t.nume)}
                    draggable
                    id={t.nume}
                    className={t.clasa}
                    style={{backgroundColor: t.bgcolor}}
                    >
                        {t.nume}
                    </div>
            );
        });

        return ( 
        <div className = "container-drag" >
            <h2 className="header">Identifica marimile fizice in cele doua categorii, folosind drag and drop.</h2>
            <div className="fundamentale"
                onDragOver={(e) => this.onDragOver(e)}
                onDrop = {(e) => this.onDrop(e, "fundamentale")}
            >
                <span className="task-header  color-orange">
                    Marimi fizice fundamentale
                </span>
                {marimi.fundamentale}
            </div>            
            <div className="enumerare"
                onDragOver={(e) => this.onDragOver(e)}
                onDrop = {(e) => this.onDrop(e, "enumerare")}
            >
                <span className="task-header color-blue">Marimi fizice</span>
                {marimi.enumerare}
            </div>
            <div className="droppable" 
                onDragOver={(e) => this.onDragOver(e)}
                onDrop = {(e) => this.onDrop(e, "derivate")}
                >
                <span className="task-header  color-red">Marimi fizice derivate</span>
                {marimi.derivate}
            </div>
            <div className="clear-float"></div>
            <form className="panou-butoane">
                <button type="submit" className="button">Resetare</button>
                <button className="button" onClick={(e) => this.verificare(e)}>Verifica</button>
            </form>
            <p className={(this.state.mesaj.length < 12) ? "raspuns gresit" : "raspuns corect"}>{this.state.mesaj}</p>
        </div>
        )
    }
}

export default TestTragere;