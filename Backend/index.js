const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const aiRoutes = require('./routes/AiRoutes');
const businessRoutes = require('./routes/businessRoutes');
const DSRoutes = require('./routes/DataScienceRoutes');
const educationRoutes = require('./routes/EducationRoutes');
const ICRoutes = require('./routes/ICRoutes')
const combinedRoutes = require('./routes/CombinedRoutes')

dotenv.config({ path: './config.env' });

const app = express();
app.use(express.json());
const http = require('http').Server(app)

const socketIO = require('socket.io')(http, {
  cors: {
    origin: "*"
  }
})

app.use('/', userRoutes);
app.use('/ai', aiRoutes);
app.use('/business', businessRoutes);
app.use('/datascience', DSRoutes);
app.use('/education', educationRoutes);
app.use('/IC', ICRoutes);
app.use('/combined', combinedRoutes)

mongoose.set("strictQuery", false);

socketIO.on('connection', (socket) => {
  console.log('connected');
  socket.on('message', (data) => {
    socket.broadcast.emit('message', data);
  });

  socket.on('newUser', (data) => {
    //Adds the new user to the list of users
    users.push(data);
    // console.log(users);
    //Sends the list of users to the client
    socketIO.emit('newUserResponse', users);
  });

  // socket.on('disconnect', () => {
  //     console.log('🔥: A user disconnected');
  // });
});

const DB = process.env.URL.replace('<PASSWORD>', process.env.PASSWORD);
mongoose.connect(DB).then(() => console.log('Database Connection formed..')).catch(err => console.log('No Database Connection...'))

const port = process.env.PORT;
http.listen(port, () => {
  console.log(`Database is running on ${port}`);
})