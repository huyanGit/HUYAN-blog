const express = require('express');
const configs = require('./configs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const middlewares = require('./middlewares');
const controllers = require('./controllers');
const app = express();

app.use(middlewares.response);
app.use(middlewares.list);
app.use(bodyParser.json());
app.use(middlewares.auth.authorization);
app.use(controllers);
app.use('/upload', express.static('uploads'));
app.use(middlewares.errorHeadling);

const env = process.env.NODE_ENV || 'development';
if(env === 'development'){
	mongoose.connect('mongodb://localhost/my-blog');
}else{
	mongoose.connect(configs.mongodb);
}

app.listen(configs.port);
console.log('Server start on ' + configs.port);