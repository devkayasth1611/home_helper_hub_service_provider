const mongoose = require("mongoose"); 
const Schema = mongoose.Schema
const CategorySchema = new  Schema(
    {
        categoryName:{
            type : String,
            required : true,
            trim : true,
        },
        description:{
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
module.exports = mongoose.model('Category',CategorySchema)