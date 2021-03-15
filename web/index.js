// require modules
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
// require models
const Blog = require('./models/blog');
//require routes
const blogRoutes = require('./routes/blogroutes');
// express app
const app = express();

// connect to MongoDB
const dbURI = 'mongodb+srv://void0:Asude2@learnnode.wl7ar.mongodb.net/LearnNode0?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology:true })
    .then((result) => app.listen(process.env.port || 3000))
    .catch((err) => console.log(err));

// declaring static files
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
// sending html page
// app.get('/', (req,res) => { res.sendFile(path.join(__dirname, '/views/index.html')) })



// routes
app.get('/', (req,res) => { res.redirect('/home'); });
app.get('/home', (req,res) => { res.sendFile(path.join(__dirname, '/views/index.html')) });
app.use(blogRoutes);