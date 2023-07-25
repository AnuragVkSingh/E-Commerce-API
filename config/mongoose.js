const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongoDB = "mongodb://127.0.0.1:27017/tododb";
//const userModel=require('./config/mongoose')
// the set flag to false if we want to ovveride the current strictqury behavior and pre
//prare for the new elease.
mongoose.set("strictQuery", false);


mongoose.connect(mongoDB, {
},).then(() => console.log('connected'))
    .catch((err) => { console.log(err); }); 

//mongodb+srv://anuragvsingh76:Anuragvsingh1107@cluster0.ql1espj.mongodb.net/?retryWrites=true&w=majority
