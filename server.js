var express = require('express');

var app = express();


app.get('/api/whoami/', (req, res) => {
    var reqIP = (req.header('x-forwarded-for') || req.connection.remoteAddress);
    var langs = req.acceptsLanguages();
    var returnObj = {'ip' : reqIP, 'language' : langs, 'browser' : req.headers['user-agent']}
    res.end(JSON.stringify(returnObj));
    //console.log(langs[0]);
 //   console.log(req.headers['user-agent']);
 //console.log(req.headers)
 //console.log(req.headers['user-agent'])
})

app.listen(process.env.PORT || 3000 || 8080);