// We will store images in cloudinary cloud storage.

import {v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

const connectCloudinary=async()=>{
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,

        // cloud_name: "dqkcu2fsk",
        // api_key: "471897843111353",
        // api_secret: "9l6aOzFpow-Az4QTInI9xwTPzXE"
    });
}



export default connectCloudinary;