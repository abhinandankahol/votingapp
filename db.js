const mongoose = require('mongoose');
const mongoDbUrl = 'mongodb://localhost:27017/votingapplication?retryWrites=true&w=majority';

mongoose.connect(mongoDbUrl)

const db = mongoose.connection;

db.on('connected', () => {
    console.log('MongoDB connected');
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

module.exports = db;
