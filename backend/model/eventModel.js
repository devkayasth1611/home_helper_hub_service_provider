const mongoose = require("mongoose"); 
const Schema = mongoose.Schema

const EventSchema = new  Schema(
    {
        eventType:{
            type : String,
            required : true,
            trim : true,
        },
        noOfGuest:{
            type : Number,
            required : true,
            trim : true,
        },
        vanueLocation:{
            type : String,
            required : true,
            trim : true,
        },
        date:{
            type : String,
            required : true,
            trim : true,
        },
        additionalDetails:{
            type : String,
            required : true,
            trim : true,
        },
        createdAt:{
            type : Date,
            default : Date.now,
        },
        updatedAt:{
            type : Date,
            default : Date.now,
        }
    },
    {
        timeStamps : true,
    }
)
module.exports = mongoose.model('Event',EventSchema)