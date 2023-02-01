import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card/Card.js';
import './Cards.css';

const Cards = ({ setCurrentId }) => {
  const cards = useSelector((state) => state.cards);
  
  return (
    <div className="cards-fullgrid">
    {cards.map((card) =>(
        <Card card={card} setCurrentId = {setCurrentId} />
    ))}
    </div>
  )
}

export default Cards;
