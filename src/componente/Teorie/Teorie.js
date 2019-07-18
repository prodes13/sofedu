import React, { Component } from 'react';
import './Teorie.css';
import amper from '../../imagini/amper.jpg';
import candela from '../../imagini/candela.jpg';
import kelvin from '../../imagini/kelvin.jpg';
import kilogram from '../../imagini/kilogram.jpg';
import metru from '../../imagini/metru.jpg';
import mol from '../../imagini/mol.jpg';
import timpul from '../../imagini/timpul.jpg';
import presiune from '../../imagini/presiune.jpg';
import forta from '../../imagini/forta.jpg';

class Teorie extends Component {
    state = {
        marimiFundamentale: [
            {
                nume: 'Lungime',
                notare: 'l',
                imagine: metru,
                unitate: 'metru - m',
                detalii: 'Lungimea (l) cu unitatea de masura in SI, metru (m), un metru este distanta parcursa de lumina prin vid intr-un interval de timp de 1/299792458 dintr-o secunda;'
            },
            {
                nume: 'Masa',
                notare: 'm',
                imagine: kilogram,
                unitate: 'kilograme - kg',
                detalii: 'Masa (m) cu unitatea de masura in SI, kilogram (kg), kilogramul este masa prototipului international al kilogramului confectionat dintr-un aliaj de platina si iridiu (90% – 10%);'
            },
            {
                nume: 'Timp',
                notare: 't',
                unitate: 'secunda - s',
                imagine: timpul,
                detalii: 'Timp (t) cu unitatea de masura in SI, secunda (s), aceasta a fost definita la origine, prin raportarea la durata unei zile, in prezent ea este nici mai mult nici mai putin decat durata a 9192631770 de perioade ale radiatiei ce corespunde tranzitiei dintre cele doua niveluri hiperfine ale starii fundamentale ale atomului de cesiu 133 in repaus la temperatura de zero Kelvin;'
            },
            {
                nume: 'Intensitatea curentului electric',
                notare: 'I',
                unitate: 'amper - A',
                imagine: amper,
                detalii: 'Intensitatea curentului electric (I) cu unitatea de masura in SI, amper (A), amperul este intensitatea unui curent electric constant care, mentinut in doua conductoare paralele si rectilinii de lungime infinita, de sectiune transversala circulara neglijabila si plasate in vid la distanta de un metru unul de celalalt, produce intre aceste conductoare o forta egala cu 2*0,0000007 Newton pe fiecare metru de lungime;'
            },
            {
                nume: 'Temperatura termodinamica',
                notare: 'T',
                unitate: 'kelvin - K',
                imagine: kelvin,
                detalii: 'Temperatura termodinamica (T) cu unitatea de masura in SI, kelvin (K), unitatea de temperatura termodinamica este fractiunea 1/273,16 din temperatura termodinamica a punctului triplu al apei;'
            },
            {
                nume: 'Cantitatea de substanta ',
                notare: 'n',
                unitate: 'mol',
                imagine: mol,
                detalii: 'Cantitatea de substanta (n) cu unitatea de masura in SI, mol (mol), acesta este cantitatea de substanta dintr-un sistem care contine un numar de entitati elementare egal cu numarul de atomi din 12 grame de carbon 12, cand se foloseste aceasta unitate de masura trebuie precizata specia de entitati elementare considerate (molecule, electroni, ioni, atomi, alte particule sau grupuri de particule);'
            },
            {
                nume: 'Intensitatea luminoasa',
                notare: 'Iv',
                unitate: 'candela - cd',
                imagine: candela,
                detalii: 'Intensitatea luminoasa (Iv) cu unitatea de masura in SI, candela (cd), candela este intensitatea luminoasa intr-o directie data, a unei surse care emite o radiatie monocromatica cu frecventa de 540×10 la puterea 12, Hertzi si a carei intensitatea energetica, in aceasta directie este de 1/683 dintr-un watt pe steradian.'
            }
        ],
        marimiDerivate: [
            {
                nume: 'Forta',
                notare: 'F',
                unitate: 'newton - N = 1 kg * m/s2',
                imagine: forta,
                detalii: 'O forță este o mărime fizică ce exprimă cantitativ o acțiune care imprimă unui obiect cu masă o modificare de viteză, de direcție sau de formă (aspect).'
            },
            {
                nume: 'Presiune',
                notare: 'p',
                unitate: 'pascalul (Pa) = N/m2',
                imagine: presiune,
                detalii: 'Presiunea în fizică și tehnică este o mărime fizică derivată scalară, definită prin raportul dintre forță și unitatea de suprafață, forța fiind aplicată în direcție perpendiculară pe suprafața considerată.'
            },
            {
                nume: 'Lucru mecanic',
                notare: 'L',
                unitate: 'joule (J) = N * m',
                imagine: presiune,
                detalii: 'Lucrul mecanic este o mărime fizică definită ca produsul dintre componenta forței care acționează asupra unui corp în direcția deplasării punctului ei de aplicație și mărimea drumului parcurs. E o mărime ce caracterizează schimbarea stării dinamice a sistemului. Lucrul mecanic este o mărime fizică derivată, scalară, extensivă în raport cu drumul, având caracter de mărime de transformare legată de variația mărimii de stare energie.'
            },
            {
                nume: 'Putere',
                notare: 'P',
                unitate: 'watt (W) = J/s',
                imagine: presiune,
                detalii: 'Puterea în fizică este mărimea fizică scalară ce caracterizează schimbul de energie în unitatea de timp. Un watt este puterea mecanică a unei forţe ce efectuează un lucru mecanic de un joule în timp de o secundă. În practică se mai foloseşte pentru puterea mecanică o unitate de măsură numită cal putere (CP).'
            }
        ]
    }
    afisareMarimi = (el) => (
        <div className="card">
        <input type="checkbox" name="" />
        <div className="toggle">?</div>
        <div className="imgBox">
            <h4>{el.nume}</h4>
            <img src={el.imagine} alt="el.nume" />
            <br/>
            <br/>
            <p>{`Notare: ${el.notare}`}</p>
            <p>{`Unitate: ${el.unitate}`}</p>
        </div>
        <div className="details">
            <h2>{el.nume}</h2>
            <p>
            {el.detalii}
            </p>
        </div>
    </div>
    );

    render() {
        return (
            <div className="container_teorie">
                <div>
                    <h2>Marimi fizice</h2>
                    <p>Sistemul international de unitati este un sistem  de unitati de masura si este forma moderna a sistemului metric. Sistemul international cuprinde sapte unitati fundamentale, din acestea pot deriva un numar aproape nelimitat de unitati derivate, care pot acoperi tot domeniul fenomenelor fizice cunoscute. Unitatile fundamentale sunt considerate independente in masura in care permit masurarea marimilor fizice independente. </p>
                    <h3>Cele 7 unitati fundamentale din sistemul international sunt urmatoarele:</h3>
                </div>
                {
                    this.state.marimiFundamentale.map( el => (
                        this.afisareMarimi(el)
                ))
                }
                <div className="clear-float">
                    <h3>Cateva dintre marimile fizice derivate:</h3>
                </div>
                {
                    this.state.marimiDerivate.map( el => (
                        this.afisareMarimi(el)
                ))
                }
                <div className="clear-float">
                </div>
                <div>
                    Mai multe marimi veti gasi pe https://ro.wikipedia.org/wiki/Sistemul_interna%C8%9Bional_de_unit%C4%83%C8%9Bi
                </div>
            </div>
        )
    }
}

export default Teorie
