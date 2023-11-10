const express = require('express');
const app = express();
const cors = require('cors');
const router = express.Router();
const mongoose = require('mongoose');
const { createCustomer,loginCustomer ,getCustomer,updateCustomer,deleteCustomer } = require('../controller/customercontroller');
app.use(cors());


router.post('/createCustomer', createCustomer);
router.post('/loginCustomer', loginCustomer);
router.get('/getCustomer', getCustomer);
router.delete('/deleteCustomer/:customerId', deleteCustomer);
router.put('/updateCustomer/:customerId',updateCustomer);


module.exports = router;