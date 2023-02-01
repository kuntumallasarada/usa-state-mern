import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import cardRoutes from './routes/recordsR.js';


const app = express();
dotenv.config();
app.use(cors());

//setting up bodyParser to properly send our requests
app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));

//all routes in posts will be set to localhost:5000/cards instead of localhost:5000
app.use('/cards', cardRoutes);

//DB Connection
const CONNECTION_URL = 'mongodb+srv://SaradaN:test1234@sei.on8vwme.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.set('strictQuery', true);
//mongoose.set('useFindAndModify', false);
mongoose.connect(CONNECTION_URL, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
})
 //if connection is successful
 .then(() => app.listen(PORT, () => console.log(`Server running on port : ${PORT}`)))
 .catch((error) => console.log(error.message));

 
