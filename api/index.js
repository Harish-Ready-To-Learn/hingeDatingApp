const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const crypto = require('crypto');

const app = express();
const port = 8080;
const cors = require('cors');

const http = require('http').createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "http://10.0.2.2:3000/",
  },
});

app.use(cors());
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(express.json());

const jwt = require('jsonwebtoken');

mongoose
  .connect('mongodb+srv://harish:harish@cluster0.j3itmav.mongodb.net/')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.log('Error while connecting to MongoDB : ', error);
  });

app.listen(port, () => {
  console.log('Server is running in port ', port);
});

const User = require('./models/user');

app.get('/', (req, res) => {
  console.log('GHEre');
  res.send('Hello World!');
});

// Backend Route to Create User and Generate Token
app.post('/register', async (req, res) => {
  console.log('Hello');
  try {
    // Extract user data from the request body
    const userData = req.body;

    // Create a new user using the User model
    const newUser = new User(userData);

    await newUser.save();

    const secretKey = crypto.randomBytes(32).toString('hex');

    // Generate a token for the new user (you may use JWT or any other token generation mechanism)
    const token = jwt.sign({userId: newUser._id}, secretKey);
    // Return the new user data along with the token
    res.status(200).json({token});
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({error: 'Internal Server Error'});
  }
});
