const mongoose = require("mongoose"); 
const Schema = mongoose.Schema

const AdminSchema = new  Schema(
    {
        adminName:{
            type : String,
            required : true,
            trim : true,
        },
        email:{
            type : String,
            required : true,
            trim : true,
        },
        password:{
            type : Number,
            required : true,
            trim : true,
        },
        phoneNumber:{
            type : Number,
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
module.exports = mongoose.model('Admin',AdminSchema)