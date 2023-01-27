const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/Clandy_Shopping",{useNewUrlParser: true,  useUnifiedTopology: true}, function checkDB(error){
    if(error){
        console.log("err")
    }else{
        console.log("DB Connected!")
    }
});

const corsOptions = {
    origin: "http://localhost:4200",
    Credential: true,
    optionsSuccessStatus: 200
}

// cors
app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);

app.get('/', (req, res) => res.send('hello!'));
  http.listen(9000, () => {
  console.log('listening port on 9000');
});
// chat 
io.on('connection', (socket) => {  
    socket.on('message', (msg) => {
      socket.broadcast.emit('message-broadcast', msg);
     });
  });
