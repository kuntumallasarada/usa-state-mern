import express from 'express';
import { createCard , getCards, updateCard, deleteCard } from '../controllers/recordsC.js';

const router = express.Router();

//routes 
 router.get('/', getCards);
router.post('/', createCard);
router.patch('/:id', updateCard);
router.delete('/:id', deleteCard);

export default router;
