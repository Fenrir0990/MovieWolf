import React from 'react';
import {
  Route,
  Routes
} from 'react-router-dom';

import Home from "./Components/Home/Home"
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Card from "./Components/Cards/Card"
import Catalogue from './Components/Catalogue/Catalogue';
import Detail from "./Components/Detail/Detail";
import Spinner from './Components/MinComponents/Spinner/Spinner';

function App() {
  return (
    <div className="App">
      
      <header className='FirtsContained'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/prueba' element = {<Spinner/>}/>
          <Route path='/AllMovies' element={<Catalogue/>}/>
          <Route path='/Detail/:id' element={<Detail/>} />
          <Route path='*' element={<div>this page not exist</div>}/>
        </Routes>
     

      </header>
    </div>
  );
}

export default App;
