var mongoose= require('mongoose')
const express = require('express')

const message_schema = new mongoose.Schema({
    name : {type : String },
    message : {type : String},
    time : {type : String} ,
    recieved : {type : Boolean}

})

const message = mongoose.model('message',message_schema)

module.exports = message