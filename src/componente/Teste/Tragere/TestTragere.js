import React, { Component } from 'react';
import './TestTragere.css';

class TestTragere extends Component {
    state = {
        marimi: [
        {
            nume: "Lungime",
            categorie: "fundamentale",
            bgcolor: "pink"
        }, 
        {
            nume: "Masa",
            categorie: "enumerare",
            bgcolor: "orange"
        }, 
        {
            nume: "Timp",
            categorie: "enumerare",
            bgcolor: "skyblue"
        }, 
        {
            nume: "Intensitatea curentului electric",
            categorie: "enumerare",
            bgcolor: "skyblue"
        }, 
        {
            nume: "Temperatura termodinamica",
            categorie: "derivate",
            bgcolor: "skyblue"
        }, 
        {
            nume: "Cantitatea de substanta",
            categorie: "enumerare",
            bgcolor: "skyblue"
        }, 
        {
            nume: "Forta",
            categorie: "derivate",
            bgcolor: "skyblue"
        }, 
        {
            nume: "Presiune",
            categorie: "enumerare",
            bgcolor: "skyblue"
        }, 
        {
            nume: "Lucru mecanic",
            categorie: "derivate",
            bgcolor: "skyblue"
        }, 
        {
            nume: "Putere",
            categorie: "enumerare",
            bgcolor: "skyblue"
        }
        ]
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDragStart = (ev, id) =>{
        console.log('dragstart: ', id);
        ev.dataTransfer.setData("id", id);
    }

    onDrop = (ev, cat) => {
        let id = ev.dataTransfer.getData("id");

        let marimi = this.state.marimi.filter((task) => {
            if(task.nume == id) {
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
        var marimi = {
            fundamentale: [],
            derivate: [],
            enumerare: []
        }

        this.state.marimi.forEach((t) => {
            marimi[t.categorie].push(
                <div key={t.nume}
                    onDragStart = {(e) => this.onDragStart(e, t.nume)}
                    draggable
                    className="draggable"
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
                <span className="task-header">
                    Marimi fizice fundamentale
                </span>
                {marimi.fundamentale}
            </div>
            <div className="droppable" 
                onDragOver={(e) => this.onDragOver(e)}
                onDrop = {(e) => this.onDrop(e, "derivate")}
                >
                <span className="task-header">Marimi fizice derivate</span>
                {marimi.derivate}
            </div>
            <div className="enumerare"
                onDragOver={(e) => this.onDragOver(e)}
                onDrop = {(e) => this.onDrop(e, "enumerare")}
            >
                <span className="task-header">Marimi fizice</span>
                {marimi.enumerare}
            </div>
            <div className="panou-butoane">
                <button className="button">Resetare</button>
                <button className="button">Verifica</button>
            </div>
        </div>
        )
    }
}

export default TestTragere

// https://electronicaaplicata.wordpress.com/2015/02/21/cele-7-marimi-fundamentale/

// 
// https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.qreferat.com%2Ffiles%2Ftehnica-mecanica%2F174_poze%2Fimage008.gif&imgrefurl=http%3A%2F%2Fwww.qreferat.com%2Freferate%2Fmecanica%2FUNITATI-DE-MASURA-SISTEMUL-INT231.php&docid=PVNH4DOIq2PjWM&tbnid=QC4ao90VI_-lZM%3A&vet=10ahUKEwjupeDs-b3jAhVCzYUKHW7bB4UQMwhJKAcwBw..i&w=532&h=284&client=firefox-b-d&bih=899&biw=1282&q=marimile%20fizice%20fundamentale&ved=0ahUKEwjupeDs-b3jAhVCzYUKHW7bB4UQMwhJKAcwBw&iact=mrc&uact=8#h=284&imgdii=448qh0C-slo67M:&vet=10ahUKEwjupeDs-b3jAhVCzYUKHW7bB4UQMwhJKAcwBw..i&w=532
// https://www.google.com/search?q=marimile+fizice+fundamentale&client=firefox-b-d&tbm=isch&tbs=rimg:CUAuGqPdFSP_1IjhldLGd1r9nTL96KksO3G2u448qh0C-slrJ-Wp7GNE5C1QP0N5h4Fw9q0j4_1QookQrZmQnxZSfFDyoSCWV0sZ3Wv2dMEW3JHUAM_1vIPKhIJv3oqSw7cba4RX9AoTRiQQIYqEgnjjyqHQL6yWhE9U0fgM4irYyoSCcn5ansY0TkLEQoH5q3VmvhvKhIJVA_1Q3mHgXD0RPVNH4DOIq2MqEgmrSPj9CiiRChEVbpffzj3UgCoSCdmZCfFlJ8UPESSW7vGr34Xv&tbo=u&sa=X&ved=2ahUKEwiah6Hw-b3jAhWBI1AKHWeXCfYQ9C96BAgBEBs&biw=1282&bih=899&dpr=1#imgrc=2ZkJ8WUnxQ9xQM: