import React from 'react';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome.js';
import Home from './components/Home/Home.js';

const App = () => {
    return (
     <div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path="/Welcome" element={<Welcome />}></Route>
        </Routes>
    </div>
 )
}

export default App;