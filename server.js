var express = require('express');
var app = express();

// New call to compress content
app.use(express.compress());
app.user(express.favicon());
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});