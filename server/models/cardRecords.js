import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
    name : String,
    capital : String,
    nickname : String,
    abbreviation : String,
    createdAt : {
        type : Date,
        default : new Date(),
    }
})

// const userSchema = mongoose.Schema({
//     name: String,
//     password: String,
// })

const CardRecord = mongoose.model('CardRecord', cardSchema);
// const UserRecord = mongoose.model('UserRecord', userSchema);


export default CardRecord;
// export default {
//     CardRecord,
//     UserRecord
// }
