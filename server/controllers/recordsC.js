import mongoose from 'mongoose';
import CardRecord  from '../models/cardRecords.js';

export const getCards = async (req, res) => {
  try {
        const cardRecords = await CardRecord.find();
        res.status(200).json(cardRecords);
   } catch (error) {
       res.status(404).json({message : error.message});
   }
}

export const createCard= async  (req, res) => {
   const card = req.body;
   const newCard = new CardRecord(card);
   try {
      await newCard.save();
      res.status(201).json(newCard);
   } catch (error) {
      res.status(409).json({ message : error.message});
   }
}

export const updateCard = async (req, res) => {
   const {id : _id } = req.params;
   const card = req.body;
   if(!mongoose.Types.ObjectId.isValid(_id))
     return res.status(404).send("No card with that id");
   const updatedCard = await CardRecord.findByIdAndUpdate(_id, {...card, _id}, {new: true});
   res.json(updatedCard);
}

export const deleteCard = async (req, res) => {
   const { id } = req.params;
   if(!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('No card with that id');
   await CardRecord.findByIdAndRemove(id);
   res.json({message : 'Post deleted successfully'}); 
}

