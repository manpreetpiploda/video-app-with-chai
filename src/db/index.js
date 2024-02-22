// import mongoose from "mongoose";
const mongoose = require('mongoose');
const DB_NAME = require("../constants")
// import { DB_NAME } from "../constants"


exports.connectDB =async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MOngoDB connected DB host : ${connectionInstance.connection.host}`);
        // console.log("connection Instance data : ", connectionInstance);
    }catch(error){
        console.log("MONGODB connection error ", error);
        process.exit(1);
    }
}

// export default connectDB