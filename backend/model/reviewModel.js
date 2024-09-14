const mongoose = require("mongoose"); 
const Schema = mongoose.Schema
const ReviewSchema = new  Schema(
    {
        rating:{
            type : String,
            required : true,
            trim : true,
        },
        comment:{
            type : String,
            required : true,
            trim : true,
        },
        reviewDate:{
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
module.exports = mongoose.model('Review',ReviewSchema)