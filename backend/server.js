	
/*jshint esversion: 6 */

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var messages =[ {text: 'some text', owner: 'owner1'}, {text: 'some text2', owner: 'owner2'}];
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With, Content-Type, Accept");
    next();
});

var api = express.Router();

api.get('/messages', (req, res) => {
    res.json(messages);
});

api.post('/message', (req, res) => {
    console.log(req.body);
    messages.push(req.body);
    res.json(req.body);
});

app.use('/api', api);
app.listen(63145);