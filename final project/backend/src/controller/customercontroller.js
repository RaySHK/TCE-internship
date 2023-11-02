const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const customerModel = require('../models/customermodel');
const {validEmail,validPass} = require ('../validation/valid.js');

const createCustomer = async function(req, res){
    try{
        let customer = req.body;
        let {fname, lname, username, age, gender, email, password, mobile, address} = customer;

        if(!validEmail) return res.send({message: "Please enter a valid email"});
        if(!validPass) return res.send({message: "Please enter a valid password"});

        if(!fname  || !username || !email || !password || !mobile || !address) {
            return res.send({message: "Please fill all fields"});
        }

        let createCus = await customerModel.create(customer);
        return res.send({message: createCus});
    }
    catch(err){
        console.log("server error",err);
    }
}

//Login api

let loginCustomer = async (req, res) => {
    try{
        let data = req.body;
        let {username, password} = data;
        if(!username || !password ) {
            return res.status(400).send({message: "Please fill email and password"});
        }


        let matchCustomer = await customerModel.findOne({username, password});
        if(!matchCustomer){
            return res.status(200).send({message:  "Invalid credentials"});
        }
        const token = jwt.sign({
            customerId: matchCustomer._id.toString(),   
        },"mernStack", {expiresIn: '12000sec'});
        return res.status(200).send({status:true, message: "Login successful", data: token});
    }
    catch(err){
        return res.status(500).send({ message: "Server error"});    
    }
}

//get api
let getCustomer = async (req, res) => {
        try {
          const customers = await customerModel.find();
          res.status(200).send(customers);
        } 
        catch (error) {
          res.status(500).send({ message: 'Internal server error' });
        }
    
};

//put api
// let updateCustomer = ('/customers/:_id', async (req, res) => {
//     try {
//         const id = req.params._id;
//         const update = req.body;
    
//         const updateResult = await customerModel.update( {id : _id}, update);
    
//         if (updateResult.nModified === 0) {
//           return res.status(404).json({ message: 'Customer not found' });
//         }
    
//         return res.json({ message: 'Customer updated successfully' });
//     } catch (error) {
//         return res.status(500).json({ message: 'Error updating customer', error: error.message });
//     }
// });



// const updateCustomer = async function (req, res) {
//     try {
//         const  customerId  = req.params;
//         const { fname, lname, username, age, gender, email, password, mobile, address } = req.body;
//         const updateFields = {};

//         const customer = await customerModel.findOneAndUpdate(
//             { _id: customerId, isDeleted: false },
//             { $set: { fname, lname, username, age, gender, email, password, mobile, address } },
//             { new: true }
//         );

//         if (!customer) {
//             return res.send({ status: false, message: "student not found" });
//         }
//         return res.send({ status: true, message: "Student data updated Successfully", data: customer });
//     }
//     catch (err) {
//         console.log(err);
//         res.status(500).json({ status: false, message: "Internal server error" });
//     }
// };

let updateCustomer = async (req, res) => {
    try {
      const id="6541de5e377d98875ab2d7f7";
      
    //   const { fname, lname, username, age, gender, email, password, mobile, address } = req.body;
     let username="ryanbvc";
      const updatedItem = await Item.findByIdAndUpdate(id, { username }, { new: true });
  
      if (!updatedItem) {
        return res.status(404).json({ message: 'Item not found' });
      }
  
      res.json(updatedItem);
    } catch (error) {
      res.status(500).json({ message: 'Error updating item', error: error.message });
    }
  };



//delete api
// let deleteCustomer = ('/customers/:username', async ( req, res) => {
//     try {
//         const username = req.params.username;
    
//         const deleteResult = await Customer.delete({ username });
    
//         if (deleteResult.deletedCount === 0) {
//           return res.status(404).json({ message: 'Customer not found' });
//         }
    
//         return res.json({ message: 'Customer deleted successfully' });
//     } catch (error) {
//         return res.status(500).json({ message: 'Error deleting customer', error: error.message });
//     }
// });
  



module.exports = {createCustomer,loginCustomer,getCustomer, updateCustomer};