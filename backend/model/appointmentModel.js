const mongoose = require("mongoose"); 
const Schema = mongoose.Schema
const AppointmentSchema = new  Schema(
    {
        appointmentDate:{
            type : Date,
            required : true,
            trim : true,
        },
        status:{
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
module.exports = mongoose.model('Appointment',AppointmentSchema)