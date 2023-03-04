// requiring express server;
const express = require('express');

const port = 3323;

const path = require('path');

// seting up express app
const app = express();

// getting the router
const router = require('./routes');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', router);

// setting up ejs engine
app.set('view engine', 'ejs');
app.set('views','./views');

app.listen(port, () => { console.log("Server is up and Running on port", 3323) });