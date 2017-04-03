var express = require('express');

var app = express();


app.get('/api/whoami/', (req, res) => {
    console.log(req.header('x-forwarded-for') || req.connection.remoteAddress);
    var langs = req.acceptsLanguages();
    console.log(langs[0]);
 //   console.log(req.headers['user-agent']);
 console.log(req.headers)
 console.log(req.headers['user-agent'])
})

app.listen(process.env.PORT || 3000 || 8080);