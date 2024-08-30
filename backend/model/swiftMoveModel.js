const mongoose = require("mongoose"); 
const Schema = mongoose.Schema

const SwiftMoveSchema = new  Schema(
    {
        typeOfMove:{
            type : String,
            required : true,
            trim : true,
        },
        estimatedWeight:{
            type : Number,
            required : true,
            trim : true,
        },
        numberOfRooms:{
            type : Number,
            required : true,
            trim : true,
        },
        additionalService:{
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
module.exports = mongoose.model('SwiftMove',SwiftMoveSchema)