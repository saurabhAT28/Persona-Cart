// For connecting the database

import mongoose from "mongoose";


export const connectDB = async () => {

    // try {
    //     console.log("Entering try")
    //     mongoose.connection.on('connected', () => {
    //         console.log("DB Connected");
    //     })
    //     await mongoose.connect(`${process.env.MONGODB_URI}/persona-cart`)
    // } catch (error) {
    //     console.log("FAILED")
    //     console.log(error);
    // }

    mongoose.connection.on('connected', () => {
        console.log("DB Connected");
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/persona-cart`)


}

export default connectDB;