/*const path = require('path');
const express = require('express');
const app = express();

// If an incoming request uses
// a protocol other than HTTPS,
// redirect that request to the
// same url but with HTTPS
const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(['https://', req.get('Host'), req.url].join(''));
    }
    next();
  }
}

// Instruct the app
// to use the forceSSL
// middleware
app.use(forceSSL());

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist/igeo-app'));

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/igeo-app/index.html'));
});

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 443);*/
var express = require('express');
var app = express();
app.get('/',function(res,req){
  res.send('Hello world(test2)!\n');
})
var port = 80;
app.listen(port);
console.log('Listening on port', port);