var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello word');
});
app.listen(3000, function () {
  console.log('Hello word app listening on port 3000!');
});
