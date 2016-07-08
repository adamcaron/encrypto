var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Encrypto listening on port 3000!')
})

// Up and running via https://expressjs.com/en/starter/hello-world.html