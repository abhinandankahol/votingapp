const mongoose = require('mongoose');
const mongoDbUrl = 'mongodb+srv://abhinandankahol2002:m4guMN7UbjM3hKl0@abhinandankahol.g2dclxh.mongodb.net/userinfo?retryWrites=true&w=majority'

mongoose.connect(mongoDbUrl,{
    tls: true,
     tlsAllowInvalidCertificates: false

})

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
