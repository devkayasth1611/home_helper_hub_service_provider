const mongoose = require("mongoose"); 
const Schema = mongoose.Schema

const CarpenterSchema = new  Schema(
    {
        serviceType:{
            type : String,
            required : true,
            trim : true,
        },
        materialType:{
            type : String,
            required : true,
            trim : true,
        },
        projectSize:{
            type : Number,
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
module.exports = mongoose.model('Carpenter',CarpenterSchema)