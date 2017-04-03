var express = require('express');

var app = express();


app.get('/api/whoami/', (req, res) => {
    var reqIP = (req.header('x-forwarded-for') || req.connection.remoteAddress);
    var langs = req.acceptsLanguages();
    var operSys =  req.headers['user-agent'].substr(req.headers['user-agent'].indexOf('(') + 1, req.headers['user-agent'].indexOf(')') - req.headers['user-agent'].indexOf('(') - 1)
    var returnObj = {'ip' : reqIP, 'language' : langs[0], 'browser' : operSys}
    res.end(JSON.stringify(returnObj));
})

app.listen(process.env.PORT || 3000 || 8080);