import express from "express";
import dotenv from "dotenv";


dotenv.config();
import ConnectToDb from "./db/ConnectToDb.js";
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes  from './routes/user.routes.js';
import cookieParser from "cookie-parser";
import cors from 'cors';

const app=express();
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
    origin: 'http://localhost:3000', // this should match your front-end URL
    credentials: true, // this is important to send cookies
};
console.log(corsOptions);
app.use(cors(corsOptions));

app.get('/',(req,res)=>{
    res.send('hiii')
});

// app.use((req, res, next) => {
//     console.log('Cookies receivedd:',res.cookies);
//     next();
// });
//Whenever api/auth route is there we call authRoutes middleware function

app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);
app.use('/api/users',userRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{console.log(`Server started at port ${PORT} `)});
