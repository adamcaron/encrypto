var app = require('express')()
var server = require('http').Server(app)
var io = require('socket.io')(server)

server.listen(3000, function () {
  console.log('Encrypto listening on port 3000!')
})

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
})

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' })
  socket.on('my other event', function (data) {
    console.log(data)

    // Crypto
    var SHA256 = require("crypto-js/sha256")
    var message = "Hi, there."
    console.log('Message: %s; Encrypted: %s', message, SHA256(message))
  })
})

/*
  Up and running via https://expressjs.com/en/starter/hello-world.html
  Serving files via https://scotch.io/tutorials/use-expressjs-to-deliver-html-files
  Setup sockets via http://socket.io/docs/
    and http://stackoverflow.com/questions/24526166/socketio-err-connection-refused
*/