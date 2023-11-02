const express = require('express');

const { createCustomer,loginCustomer,getCustomer,updateCustomer } = require('../controller/customercontroller');
// const { createCourse,getCourse } = require('../controller/coursecontroller');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.post('/createCustomer', createCustomer);
router.post('/loginCustomer', loginCustomer);
router.get('/getCustomer', getCustomer);
router.get('/deleteCustomer', updateCustomer);
// router.post('/createCourse', createCourse);
// router.get('/getCourse', getCourse);

module.exports = router;
