const mongoose = require("mongoose"); 
const Schema = mongoose.Schema
const PaymentSchema = new  Schema(
    {
        amount:{
            type : String,
            required : true,
            trim : true,
        },
        paymentMethod:{
            type : String,
            required : true,
            trim : true,
        },
        paymentDate:{
            type : Date,
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
module.exports = mongoose.model('Payment',PaymentSchema)