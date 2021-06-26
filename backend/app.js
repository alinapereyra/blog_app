const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// app.get('/', (req, res) => {
//   res.send("Hello World");
// });

// app.get('/employees', (req,res) => {
//   res.sent('Employees');
// });

const connectDB = require('./config/db');
// Load Config
dotenv.config({path: './config/config.env'});

connectDB();

// Routes
app.use('/', require('./routes/index'));

app.listen(3000);