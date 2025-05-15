import ErrorHandler from "../error/error.js";
import {Reservation} from '../models/reservationSchema.js'

export const sendReservation=async (req,res,next) => {
    const  { firstName, lastName, email,  phone, time, date}=req.body;
    if (!firstName|| !lastName || !email|| !phone|| !time|| !date) {
        return next(new ErrorHandler("Please fill full Reservation form!",400))
    }
    try {
        const existingReservation=await Reservation.findOne({email});
        if (existingReservation) {
            return next(new ErrorHandler("User already reserved with this email !",400))
            
        }
        await Reservation.create({firstName, lastName, email, phone, time, date})
        res.status(200).json({
            success:true,
            message:"Reservation sent Successfully",
        })
    } catch (error) {
        if (error.name==='ValidationError') {
            const ValidationErrors= Object.values(error.errors).map(
                (err)=>err.message
            );
            
            
            return next(new ErrorHandler(ValidationErrors.join(","),400))
        }
        
    }
}