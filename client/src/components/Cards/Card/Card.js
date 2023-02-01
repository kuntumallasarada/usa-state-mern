import React from 'react';
import './Card.css';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../../../actions/cards.js';


const Card = ({ card, setCurrentId }) => {
   const dispatch = useDispatch();

   return (
      <div className="maincontainer-card">
     
       {/* <div className = "card-header">STATE</div> */}
      
      <div className="card-body">
         
         <div className="card-front">
           <h2>{card.name} State</h2>
         </div>

         <div className="card-back">
           <h1>{card.name} Details</h1> 
           <h2>CAPITAL : {card.capital}</h2>
           <h2>NICKNAME : {card.nickname}</h2>
           <h2>ABBREVIATION : {card.abbreviation}</h2>
          <div className="card-footer">
           <button className="btn" onClick = {() => setCurrentId(card._id)}>UPDATE</button>
           <button className="btn" onClick={() => dispatch(deleteCard(card._id))}>DELETE</button>
          </div>
         </div>

         </div>
      </div>
    
  
   )

}

export default Card;