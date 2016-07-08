var express = require('express')
var app = express()
var path = require('path')

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(3000, function () {
  console.log('Encrypto listening on port 3000!')
})

// Up and running via https://expressjs.com/en/starter/hello-world.html
// Serving files via https://scotch.io/tutorials/use-expressjs-to-deliver-html-files