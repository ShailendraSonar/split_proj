const mongoose = require('mongoose');
const url = require('../utils/env'); // Assuming this exports the MongoDB URL
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; // Disable SSL certificate validation (for testing purposes)

// Connecting to MongoDB with SSL settings
mongoose.connect(url.mongo, {
    ssl: true // SSL is enabled by default, this line can be omitted
})
.then(() => {
    console.log("Connected to MongoDB database");
})
.catch(err => {
    console.error("Error connecting to MongoDB:", err);
});

// MongoDB connection event handlers
mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to the database');
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected from the database');
});

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('Mongoose connection closed due to app termination');
        process.exit(0);
    });
});

module.exports = mongoose;
