import mongoose from "mongoose";
export const dbconnection=()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"Restaurant_Application"
    }).then(()=>{
        console.log("connected to database")
    }).catch((err)=>{
        console.log(`database not connected ${err}`)
    })
}