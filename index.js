// module import
const process = require('process');

const express = require('express');
const bodyParser = require('body-parser');
// initialisation

// -> Express

let app   = express();
let port  = process.env.port ? process.env.port : 8080;

app.use(bodyParser.urlencoded({extended: true}));
require('./app/routes')(app);

app.listen(port);