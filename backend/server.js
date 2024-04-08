import express from "express";
import ConnectToDb from "./db/ConnectToDb.js";
import dotenv from "dotenv";
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes  from './routes/user.routes.js';
import cookieParser from  "cookie-parser";
import cors from 'cors';
const app=express();

app.use(express.json());
// app.set('trust proxy', 1);
dotenv.config();

const corsOptions = {
    origin: 'http://localhost:3000', // this should match your front-end URL
    credentials: true, // this is important to send cookies
};
  
app.use(cors(corsOptions));
app.use(cookieParser());

const PORT=process.env.PORT || 5000;

//Whenever api/auth route is there we call authRoutes middleware function

app.get('/',(req,res)=>{
    res.send('hiii')
});
app.use((req, res, next) => {
    console.log('Cookies receivedd:',res.cookie);
    next();
});
app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);
app.use('/api/users',userRoutes);

app.listen(PORT,()=>{console.log(`Server started at port ${PORT} `)});
