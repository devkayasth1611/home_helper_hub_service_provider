const mongoose = require("mongoose"); 
const Schema = mongoose.Schema

const PainterSchema = new  Schema(
    {
        roomName:{
            type : String,
            required : true,
            trim : true,
        },
        areaSize:{
            type : Number,
            required : true,
            trim : true,
        },
        paintType:{
            type : String,
            required : true,
            trim : true,
        },
        wallColors:{
            type : String,
            required : true,
            trim : true,
        },
        noOfCoats:{
            type : Number,
            required : true,
            trim : true,
        },
        paintFinish:{
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
module.exports = mongoose.model('Painter',PainterSchema)