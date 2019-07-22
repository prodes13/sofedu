import React, { Component } from 'react';
import './Test1.css';

class Test1 extends Component {
    state = {
        metri1: 'm',

    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

render() {
    return (
        <>
            <section className ="container">
                <form>
                    <h2 className="mt-4 mb-4">Completati spatiile libere:</h2>
                    <p>
                        1 km = 1000 <input className="c-putine" value={this.state.metri1} type="text" name="metri1" onChange={this.handleChange} required/> = 10 <input className="c-putine" type="text" required/> = 100 <input className="c-putine" type="text" required/>
                    </p>
                    <p>
                        800 cm = 80 <input className="c-putine" type="text" required/> = 8000 <input className="c-putine" type="text" required/> = 8 <input className="c-putine" type="text" required/>
                    </p>
                    <p>
                        70 = 700 <input className="c-putine" type="text" required/> = 7 <input className="c-putine" type="text" required/> = 7000 mm <input className="c-putine" type="text" required/>
                    </p>
                    <p>
                        30 hm = <input className="c-putine" type="text" required/> m = <input className="c-putine" type="text" required/> km = <input className="c-putine" type="text" required/>  dam
                    </p>
                    <p>
                        40 dm = <input className="c-putine" type="text" required/> cm = <input className="c-putine" type="text" required/> m = <input className="c-putine" type="text" required/> mm
                    </p>
                    <p>
                        <input className="c-putine" type="text" required/> dam = <input className="c-putine" type="text" required/> dm = <input className="c-putine" type="text" required/> hm = 500 m
                    </p>
                    
                    <button type="button" className="btn btn-secondary">Resetare</button>
                    <button type="submit" className="btn btn-primary ml-4">Gata!</button>
                </form>
            </section>
        </>
     )
    }
}

export default Test1
