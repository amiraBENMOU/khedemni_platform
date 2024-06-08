const express = require('express');
const mongoose = require('mongoose');
const bodypars = require('body-parser');
require('dotenv').config(); // Load environment variables from .env file
const routesCompany = require('./routes/company');
const routesUser = require('./routes/users');



// Create an express app
const app = express();

// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies (if needed)
app.use(express.urlencoded({ extended: true }));


// Call the routes of the user
app.use('/api/2', routesUser);


// Call the routes of the company
app.use('/api/1', routesCompany);


 




// Connect to the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));


// Connect to the database
dbURI=process.env.MONGODB_URI;
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tls: true,
})
.then(() => {
    console.log('Connected to MongoDB Atlas');
})
.catch(err => {
    console.error('Could not connect to MongoDB', err);
});