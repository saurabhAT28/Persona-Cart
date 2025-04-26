import express from "express";
import cors from "cors";
import 'dotenv/config';
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoutes.js";
import orderRouter from "./routes/orderRoute.js";
import fabricRouter from "./routes/fabricRoute.js";


// App Config
const app = express();
const port=process.env.PORT || 4000;
connectDB();
connectCloudinary();

// Middleware
app.use(express.json());
app.use(cors());

// API Endpoints
app.use('/api/user',userRouter);
app.use('/api/product',productRouter);
app.use('/api/fabric',fabricRouter);
app.use('/api/cart',cartRouter);
app.use('/api/order',orderRouter);

app.get("/",(req,res)=>{
    res.send("API is Working");
})

// Error Handler
app.use((err,req,res,next)=>{
    res.status(500).json({ message: process.env.NODE_ENV === "production" ? "Internal Server Error" :err.message });
});

// Server Listener
app.listen(port, () => {
    console.log("Server is running on port " + port);
})



