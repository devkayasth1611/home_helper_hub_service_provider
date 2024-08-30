const mongoose = require("mongoose"); 
const Schema = mongoose.Schema

const MasonSchema = new  Schema(
    {
        structureType:{
            type : String,
            required : true,
            trim : true,
        },
        areaSize:{
            type : Number,
            required : true,
            trim : true,
        },
        materialType:{
            type : String,
            required : true,
            trim : true,
        },
        workType:{
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
module.exports = mongoose.model('Mason',MasonSchema)