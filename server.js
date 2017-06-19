// FCC Request Header Parser Microservice
// https://www.freecodecamp.com/challenges/request-header-parser-microservice
// Returns the IP, preferred language and the operating system in JSON format
// to any request to path /api/whoami


var express = require('express');

var app = express();

app.get('/api/whoami/', (req, res) => {
    var reqIP = (req.header('x-forwarded-for') || req.connection.remoteAddress);
    var langs = req.acceptsLanguages();
    var operSys =  req.headers['user-agent'].substr(req.headers['user-agent'].indexOf('(') + 1, req.headers['user-agent'].indexOf(')') - req.headers['user-agent'].indexOf('(') - 1)
    var returnObj = {'ip' : reqIP, 'language' : langs[0], 'browser' : operSys}
    res.end(JSON.stringify(returnObj));
})

app.get('/*', (req,res) => {
    res.end('You must use the path /api/whoami');
})

app.listen(process.env.PORT || 3000 || 8080);