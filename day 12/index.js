// const express = require('express');
// var http = require('http');
// const app = express();


// http.createServer(function (req, res) {
//   res.end('Hello World!');
// }).listen(8080)

// console.log('Server is running')

const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());

const PORT = 8080;
mongoose.connect("mongodb://localhost:27017/AIDS")
.then(() => { console.log('Connected to database')})
.catch(() => { console.log(error)})
app.listen(PORT, () => {
  console.log(`Server is running`);
});