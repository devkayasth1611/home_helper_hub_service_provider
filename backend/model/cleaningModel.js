const mongoose = require("mongoose"); 
const Schema = mongoose.Schema

const CleaningSchema = new  Schema(
    {
        serviceType:{
            type : String,
            required : true,
            trim : true,
        },
        roomType:{
            type : String,
            required : true,
            trim : true,
        },
        areaSize:{
            type : Number,
            required : true,
            trim : true,
        },
        noOfRooms:{
            type : Number,
            required : true,
            trim : true,
        },
        // date:{
        //     type : String,
        //     required : true,
        //     trim : true,
        // },
        // time:{
        //     type : String,
        //     required : true,
        //     trim : true,
        // },
        cleaningType:{
            type : String,
            required : true,
            trim : true,
        },
        frequency:{
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
module.exports = mongoose.model('Cleaning',CleaningSchema)