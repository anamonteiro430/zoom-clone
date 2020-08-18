const express = require('express');
const app = express();
/* creates a server to be used with socket.io*/
const server = require('http').Server(app);
/* passes it to socket.io*/
/* const io = require('socket.io')('server'); */
/* from uuid, generates roomId */
const { v4: uuidv4 } = require('uuid');

/* view engine, ejs */
app.set('view engine', 'ejs');

/* static folder */
app.use(express.static('public'));

/* creates new room */
app.get('/', (req, res) => {
  res.redirect(`/${uuidv4()}`); /* dynamic URL */
});

app.get('/:room', (req, res) => {
  res.render('room', { roomId: req.params.room });
});

server.listen(3000);
