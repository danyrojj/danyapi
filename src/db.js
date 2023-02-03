const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017',{ useNewUrlParser: true },(e)=>console.log('error:', e))


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB using Mongoose!');
});
module.exports = mongoose;