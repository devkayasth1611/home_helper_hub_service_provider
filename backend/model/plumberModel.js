const mongoose = require("mongoose"); 
const Schema = mongoose.Schema

const PlumberSchema = new  Schema(
    {
        serviceType:{
            type : String,
            required : true,
            trim : true,
        },
        fixtureType:{
            type : String,
            required : true,
            trim : true,
        },
        urgency:{
            type : String,
            required : true,
            trim : true,
        },
        areaSize:{
            type : Number,
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
module.exports = mongoose.model('Plumber',PlumberSchema)