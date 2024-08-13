const mongoose = require("mongoose"); 
const Schema = mongoose.Schema
const ServiceSchema = new  Schema(
    {
        serviceName:{
            type : String,
            required : true,
            trim : true,
        },
        description:{
            type : String,
            required : true,
            trim : true,
        },
        price:{
            type : String,
            required : true,
            trim : true,
        },
        duration:{
            type :String,
            require : true,
        },
        serviceImage:{
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
module.exports = mongoose.model('Service',ServiceSchema)