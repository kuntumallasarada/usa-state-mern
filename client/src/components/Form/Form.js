import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { createCard, updateCard } from '../../actions/cards.js';
import './Form.css';

const Form = ({ currentId, setCurrentId}) => {
   
    const [cardData, setCardData ] = useState({
        name : "",
        capital : "",
        nickname : "",
        abbreviation : "",
    });

    const card = useSelector((state) => currentId ? state.cards.find((c) => c._id === currentId) : null)
    const dispatch = useDispatch();

    useEffect(() => {
       if(card)
        setCardData(card);
    },[card])

    
    const clear = () => {
        setCurrentId(null);
        setCardData({
          name:"",
          capital:"",
          nickname:"",
          abbreviation:""
        })
    }   
  
   
    const handleSubmit = (event) => {
         
        event.preventDefault(); //doesn't reload the page
         
         if(currentId){
           dispatch(updateCard(currentId, cardData));
         } else {
            dispatch(createCard(cardData));
         }
         
         clear();
    
   }


  return (
     <div>
     <h1 className="label createCard"> {currentId? 'EDIT' : 'CREATE'}  A STATE CARD</h1>
     <form className = "form" >
       <label for="stname">Name :</label> 
       <input type = "text" id="stname" name="name" value={cardData.name} onChange={(e)=> setCardData({...cardData, name:e.target.value})}/>
       <label for="stcapital">Capital:</label> 
       <input type = "text" id="stcapital" name="capital" value={cardData.capital} onChange={(e)=> setCardData({...cardData, capital:e.target.value})}/>
       <label for="stnick">Nick Name :</label> 
       <input type = "text" id="stnick" name="nickname" value={cardData.nickname} onChange={(e)=> setCardData({...cardData, nickname:e.target.value})}/>
       <label for="stabb">Abbreviation :</label> 
       <input type = "text" id="stabb" name="abbreviation" value={cardData.abbreviation} onChange={(e)=> setCardData({...cardData, abbreviation:e.target.value})}/>
       <div className='button-div'>
       <button onClick = {handleSubmit}>SUBMIT</button>
       <button onClick={clear}>CLEAR</button>
       </div>

     </form>
     </div>
    
  );
}

export default Form;