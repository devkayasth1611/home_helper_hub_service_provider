const mongoose = require("mongoose"); 
const Schema = mongoose.Schema
const AddressSchema = new  Schema(
    {
        street:{
            type : String,
            required : true,
            trim : true,
        },
        city:{
            type : String,
            required : true,
            trim : true,
        },
        state:{
            type : String,
            required : true,
            trim : true,
        },
        postalCode:{
            type :String,
            required : true,
        },
        country:{
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
module.exports = mongoose.model('Address',AddressSchema)