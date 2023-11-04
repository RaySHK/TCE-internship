const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const customerModel = require('../models/customermodel');
const {validEmail,validPass} = require ('../validation/valid.js');

const createCustomer = async function(req, res){
    try{
        let customer = req.body;
        let {name, email ,password, age, gender, mobile, address} = customer;

        if(!validEmail) return res.send({message: "Please enter a valid email"});
        if(!validPass) return res.send({message: "Please enter a valid password"});

        if(!name || !email || !password || !age|| !gender ||  !mobile || !address) {
            return res.send({message: "Please fill all fields"});
        }

        let createCus = await customerModel.create(customer);
        return res.status(201).send({ status: true, message: "Customer created", data: createCus });
        // return res.send({status: true, message: createCus , data: createCus});
    }
    catch(err){
        console.log("server error",err);
    }
}

//Login api

let loginCustomer = async (req, res) => {
    try{
        let data = req.body;
        let {email, password} = data;
        if(!email || !password ) {
            return res.status(400).send({message: "Please fill email and password"});
        }


        let matchCustomer = await customerModel.findOne({email, password});
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
const updateCustomer = async (req, res) => {
    try {
        const customerId = req.params._id; // Assuming you pass the customer ID in the URL.
        const updatedData = req.body; // Assuming you send the updated customer data in the request body.
        const result = await customerModel.findOneAndUpdate(customerId, updatedData, {
            new: true,
          });
        // Check if the customer ID is provided.
        if (!result) {
            return res.status(400).json({ message: "Customer ID not found" });
        }
        res.json(result);
        // Update the customer data in the database.
    } catch (err) {
        console.error("Error updating",err);
        return res.status(500).json({ message: "Internal server error" });
    }
};

//delete api
const deleteCustomer = async (req, res) => {
    try {
        const customerId = req.params._id; 
        // Delete the customer from the database.
        const deletedCustomer = await customerModel.findOneAndDelete(customerId);

        if (!deletedCustomer) {
            return res.status(404).json({ message: "Customer not found" });
        }

        return res.status(200).json({ message: "Customer deleted successfully" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
};

  



module.exports = {createCustomer,loginCustomer,getCustomer,updateCustomer,deleteCustomer};