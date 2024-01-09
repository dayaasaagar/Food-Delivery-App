const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://dkrishna54:1IJGG0N5hh1Hwyz3@cluster0.koecot6.mongodb.net/gofood?retryWrites=true&w=majority'

const mongoDB = async() => {

    try { 
       await mongoose.connect(mongoURI,{ useUnifiedTopology: true});
        console.log('connected to MongoDB');
        const fetched_data = await mongoose.connection.db.collection("food_items");
        const data = await fetched_data.find({}).toArray();
        console.log(data);
       }
       catch(error)
      {
        console.log('MongoDB connection error',error.message);
      }

    };

module.exports = mongoDB;