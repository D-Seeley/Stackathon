const path = require('path');
const express = require('express');
const app = express();
const socketio = require('socket.io');
const port = process.env.port || 1337;



// app.listen() returns an http.Server object
// http://expressjs.com/en/4x/api.html#app.listen
const server = app.listen(port, function () {
    console.log(`Listening on http://localhost:${port}`);
});

const io = socketio(server);

io.on('connection', socket => {
  console.log('A new client has connected!');
  console.log(socket.id);

  socket.on('click', (message) => {
    console.log(message);
    socket.broadcast.emit('clickReceived', message)
  
  });

  socket.on('disconnect', function () {
    console.log('Goodbye, ', socket.id, ' :(');
  });
});

app.use(express.static(path.join(__dirname, '../public')));
console.log(path.join(__dirname, '../public'));

