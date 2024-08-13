const mongoose = require("mongoose"); 
const Schema = mongoose.Schema
const ServiceProviderSchema = new  Schema(
    {
        companyName:{
            type : String,
            required : true,
            trim : true,
        },
        rating:{
            type : String,
            required : true,
            trim : true,
        },
        biography:{
            type : String,
            required : true,
            trim : true,
        },
        experience:{
            type :Number,
            require : true,
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
module.exports = mongoose.model('ServiceProvider',ServiceProviderSchema)