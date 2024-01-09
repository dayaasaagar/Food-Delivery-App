const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://dkrishna54:1IJGG0N5hh1Hwyz3@cluster0.koecot6.mongodb.net/?retryWrites=true&w=majority'

const mongoDB = () => {
mongoose.connect(mongoURI,()=> {
    console.log('connected');
});

}

module.exports = mongoDB;