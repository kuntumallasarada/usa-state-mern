import React, { useState, useEffect } from 'react';
import Form from '../Form/Form.js';
import map from '../../images/mapUSA.jpg';
import { useDispatch } from 'react-redux';
import Cards from '../Cards/Cards.js';
import { getCards } from '../../actions/cards.js';
import './Welcome.css';


const Welcome = () => {
  const [currentId, setCurrentId ] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCards());
  }, [currentId, dispatch]);

   return (
  <div>
    <h1>USA STATES FLASHCARDS</h1>
    <div className="main-container">
      <div className='left-container'>
         <img className="map" src={map} height="325"/>
         <Form currentId={currentId} setCurrentId={setCurrentId} />
      </div>
      <div className="right-container">
        <Cards setCurrentId = { setCurrentId } />
      </div>
    </div>
  </div>
    
   )
}

export default Welcome;