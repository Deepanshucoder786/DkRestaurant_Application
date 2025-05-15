import mongoose  from "mongoose";
import validator from 'validator'

const reservationSchema= new mongoose.Schema({
    firstName:{
        type: String,
        required:true,
        minLength:[3,"First name must contain at least 3 character! "],
        maxLength:[10,"First name can not extend  10 character! "],

    },
     lastName:{
        type: String,
        required:true,
        minLength:[3,"Last name must contain at least 3 character! "],
        maxLength:[10,"Last name can not extend  10 character! "],

    },
    email:{
        type:String,
        required:true,
        validator:[validator.isEmail, "Provide a valid Email"]

    },
    phone:{
        type:String,
        required:true,
        minLength:[10,"Phone number must contain only 10 Digites "],
        maxLength:[10,"Phone number must contain only 10 Digites "],
    },
    time:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    }
})

export const Reservation = mongoose.model("Reservation",reservationSchema );