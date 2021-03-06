import React from 'react';
import './App.css';
import Navigatie from './componente/Navigare/Navigatie';
import Logare from './componente/Logare/Logare';
import Test1 from './componente/Teste/Test1';
import Variante from './componente/Teste/Variante/Variante';
import Test2 from './componente/Teste/Tragere/TestTragere';
import Teorie from './componente/Teorie/Teorie';
import Footer from './componente/Navigare/Footer';
import Acasa from './componente/Acasa/Acasa';
import Contact from './componente/Contact/Contact';
import Despre from './componente/Despre/Despre';
import { Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Route exact path="/login" component={Logare} />
      <Route exact path="/test" component={Test1} />
      <Route path="/" component={Navigatie} />
      <Route exact path="/" component={Acasa} />
      <Route exact path="/test2" component={Test2} />
      <Route exact path="/variante" component={Variante} />
      <Route exact path="/teorie" component={Teorie} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/despre" component={Despre} />
      <Route path="/" component={Footer} />
    </BrowserRouter>
    </>
  );
}

export default App;

//  idei
//  http://www.matematicainteractiva.ro/wp-content/uploads/2015/04/60_s.png
// 
// https://reactjs.org/docs/hooks-intro.html

// https://medium.com/@joshuaaguilar20/create-a-quiz-with-react-6bd826c04f6

// https://www.freecodecamp.org/news/reactjs-implement-drag-and-drop-feature-without-using-external-libraries-ad8994429f1a/

// 