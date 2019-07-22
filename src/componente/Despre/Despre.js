import React from 'react';
import './Despre.css';
import home from '../../imagini/home.PNG';
import teorie from '../../imagini/teorie.PNG';
import teste from '../../imagini/teste.PNG';

const Despre = () => {
    return (
        <div className="container_teorie alineat">
            <h2>Despre acest proiect</h2>
            <p>În contextul societăţii actuale, în care noile tehnologii informaţionale ocupă un loc tot mai important în vieţile noastre, se încearcă înţelegerea modului în care utilizarea acestor instrumente ajută la dezvoltarea sistemului educaţional, în detrimentul instrumentelor clasice (manual, tablă, explicaţiile profesorului etc.).
            </p>
            <img className="despre-img" src={home} alt="home presentation"/>
            <p>Desigur că posibilitatea de a vizualiza pe un ecran TV anumite conţinuturi ştiinţifice, de a le prezenta într-o manieră mai detaliată şi de o calitate superioară sau de a învăţa într-un mod distractiv ecuaţii, formule matematice reprezintă o cale care facilitează înţelegerea şi asimilarea informaţiilor de către elevi. Mai mult, tehnologiile actuale, care permit conectarea la o reţea de internet, constituie o manieră de a exploata sutele de resurse online, în vederea aprofundării semnficaţiilor conceptelor studiate. Astfel, se fundamentează o serie de activităţi de învăţare bazate pe interactivitate şi interdisciplinaritate.</p>
            <img className="despre-img" src={teorie} alt="teorie presentation"/>
            <p>Interacţiunea reprezintă un factor deosebit de important în procesul de înţelegere a conţinutului de noutate. Pe când simpla predare ajută la transmiterea informaţiilor, noile tehnologii oferă posibilitatea de a crea informaţia, cu scopul de a pătrunde în profunzimea acesteia. De exemplu, softurile educaţionale prezinta avantajul de a-i determina pe elevi să creeze exemple sau modele ale ideilor predate, experimentând cu acestea. În plus, Internetul le conferă oportunitatea de a descoperi părerile specialiştilor într-un anumit domeniu şi, pe lângă latura informativă, tinerii pot dezvolta o pasiune pentru domeniu.</p>
            <img className="despre-img" src={teste} alt="teste presentation"/>
            <p>Cei care combat utilizarea acestor noi tehnologii informaţionale şi mizează pe un proces instructiv-educativ tradiţional consideră că softurile educaţionale sunt configurate de o aşa manieră, incât ele semplifică informaţia până la pragul în care intervenţia elevului este lipsită de orice efort. În plus, Internetul este cuprins de articole sau documente lipsite de documentaţie sau referinţe, ceea ce conduce la o informare eronată a elevilor. Există riscul ca informaţia să fie incompletă sau chiar greşită, iar din această perspectivă noile tehnologii nu sunt agreate ca mijloace de învăţare.</p>
            <p className="text-edu">Sursa: https://www.edusoft.ro/noile-tehnologii-informationale/</p>
        </div>
    )
}

export default Despre
