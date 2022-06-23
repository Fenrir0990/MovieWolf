import React from 'react';
import {
  Route,
  Routes
} from 'react-router-dom';

import Home from "./Components/Home/Home"
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Card from "./Components/Cards/Card"

function App() {
  return (
    <div className="App">
      
      <header className='FirtsContained'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/prueba' element = {<Card/>}/>
          <Route path='*' element={<div>this page not exist</div>}/>
        </Routes>
     

      </header>
    </div>
  );
}

export default App;
