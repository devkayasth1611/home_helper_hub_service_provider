const mongoose = require("mongoose"); 
const Schema = mongoose.Schema
const UserSchema = new  Schema(
    {
        // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        fullName:{
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
            type : String,
            required : true,
            trim : true,
        },
        confirmPassword:{
            type : String,
            required : true,
            trim : true,
        },
        phoneNumber:{
            type : Number,
            required : true,
            trim : true,
        },
        address:{
            type : String,
            required : true,
            trim : true,
        },
        // userType:{
        //     type : String,
        //     required : true,
        //     trim : true,
        // },
        // userProfilePicture:{
        //     type : String,
        //     required : true,
        //     trim : true,
        // },
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
module.exports = mongoose.model('User',UserSchema)