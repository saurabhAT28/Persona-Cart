import validator from "validator";
import 'dotenv/config';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";


const createToke=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET);
}





// Route for user login
const loginUser = async (req, res,next) => {
    try {
        const {email,password } = req.body;

        // Check if User already exist
        const user = await userModel.findOne({ email });

        if(!user){
            return res.json({success:false,message: "User doesn't exist."});
        }

        const isMatch=await bcrypt.compare(password,user.password);

        if (isMatch) {
            const token=createToke(user._id);
            res.json({success:true,token});
        }
        else{
            res.json({success:false,message: "Invalid Credentials."});
        }


    } catch (error) {
        console.log("Error in the callback", error);
        next(error);
    }
}


// Route for user registration
const registerUser = async (req, res,next) => {
    try {
        const { name,email,password } = req.body;

        // Check if User already exist
        const exists = await userModel.findOne({ email });

        if (exists) {
            return res.json({success:false,message: "User already exists"});
        }

        // Validating email and strong password
        if (!validator.isEmail(email)) {
            return res.json({success:false,message: "Please enter valid email."});
        }
        if (password.length<8) {
            return res.json({success:false,message: "Please enter stroong password."});
        }

        // Hashing User Password
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);

        const newUser=new userModel({
            name,
            email,
            password:hashedPassword
        })

        const user=await newUser.save();

        const token=createToke(user._id);

        res.json({success:true,token});


    } catch (error) {
        console.log("Error in the callback", error);
        next(error);
    }
}


// Route for Admin Login
const adminLogin = async (req, res) => {
    try {
        const {email,password } = req.body;
        if(email===process.env.ADMIN_EMAIL && password===process.env.ADMIN_PASSWORD){
            const token=jwt.sign(email+password,process.env.JWT_SECRET);
            res.json({success:true,token});
        }
        else{
            res.json({success:false,message: "Invalid Credentials."});
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
        // next(error);
    }
}


export { loginUser, registerUser,adminLogin }