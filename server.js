var https = require('https');
var fs = require('fs');
var express = require('express');
let port = 8009;

var sslOptions = {
        key: fs.readFileSync('./ssl/key.pem'),
        cert: fs.readFileSync('./ssl/cert.pem'),
        passphrase: 'stark'
};

var app = express();

var server = https.createServer(sslOptions, app).listen(port, function(){
  console.log("Express server listening on port " + port);
});
app.use(express.static('public'));