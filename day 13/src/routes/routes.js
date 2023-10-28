const express = require('express');

const { createStudent } = require('../controller/studentcontroller');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.post('/create', createStudent);

module.exports = router;
