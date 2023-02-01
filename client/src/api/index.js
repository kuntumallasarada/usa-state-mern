import axios from 'axios';

const url = "https://usa-states-flashcards.onrender.com/cards";

export const createCard = (newCard) => axios.post(url, newCard);
export const fetchCards = () => axios.get(url);
export const updateCard = (id, updatedCard) => axios.patch(`${url}/${id}`, updatedCard);
export const deleteCard = (id) => axios.delete(`${url}/${id}`);
