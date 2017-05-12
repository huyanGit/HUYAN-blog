const express = require('express');
const configs = require('./configs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const middlewares = require('./middlewares');
const controllers = require('./controllers');
const app = express();

mongoose.connect(configs.mongodb);
app.use(middlewares.response);
app.use(middlewares.list);
app.use(bodyParser.json());
app.use(controllers);
app.use(middlewares.errorHeadling);

app.listen(configs.port);
console.log('Server start on ' + configs.port);