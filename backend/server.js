import express from "express";
import ConnectToDb from "./db/ConnectToDb.js";
import dotenv from "dotenv";
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import cookieParser from "cookie-parser";
const app=express();

app.use(express.json());
app.use(cookieParser());

dotenv.config();
const PORT=process.env.PORT || 5000;

//Whenever api/auth route is there we call authRoutes middleware function

app.get('/',(req,res)=>{
    res.send('hi ')
})
app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);


app.listen(PORT,()=>{console.log(`Server started at port ${PORT} `)});
