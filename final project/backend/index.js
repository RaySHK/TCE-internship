

const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
app.use(express.json());
const route = require('./src/routes/routes');
const PORT = 4500;
app.use(cors());


mongoose.connect("mongodb+srv://RaySHK:emfdysi@cluster0.r5zup1e.mongodb.net/")
.then(() => { console.log('Connected to database')})
.catch(() => { console.log('error')})
app.use('/', route);
app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});