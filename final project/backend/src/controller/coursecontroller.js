const express = require('express');
const mongoose = require('mongoose');
const courseModel = require('../models/coursemodels');
// const {validEmail,validPass} = require ('../validation/valid.js');

const createCourse = async function(req, res){
    try{
    let course = req.body;
    let {corname, corcode, hours} = course;

    // if(!validEmail) return res.send({message: "Please enter a valid email"});
    // if(!validPass) return res.send({message: "Please enter a valid password"});

    if(!corname || !corcode || !hours ) {
        return res.send({message: "Please fill all fields"});
    }

    let createCor = await courseModel.create(course);
    return res.send({message: createCor});
}
catch(err){
    console.log("server error",err);
}
}

let getCourse = async (req, res) => {
    try {
      const courses = await courseModel.find();
      res.status(200).json(courses);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }

};

module.exports = {createCourse,getCourse};