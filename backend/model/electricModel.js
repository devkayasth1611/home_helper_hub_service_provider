const mongoose = require("mongoose"); 
const Schema = mongoose.Schema

const ElectricSchema = new  Schema(
    {
        serviceType:{
            type : String,
            required : true,
            trim : true,
        },
        applianceType:{
            type : String,
            required : true,
            trim : true,
        },
        noOfOutlets:{
            type : Number,
            required : true,
            trim : true,
        },
        noOfSwitches:{
            type : Number,
            required : true,
            trim : true,
        },
        wiringType:{
            type : String,
            required : true,
            trim : true,
        },
        voltageRequirements:{
            type : String,
            required : true,
            trim : true,
        },
        date:{
            type : String,
            required : true,
            trim : true,
        },
        time:{
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
module.exports = mongoose.model('Electric',ElectricSchema)