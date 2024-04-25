import path from "path";
import express from "express";
import dotenv from "dotenv";


import ConnectToDb from "./db/ConnectToDb.js";
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes  from './routes/user.routes.js';
import cookieParser from "cookie-parser";
import cors from 'cors';
import { app, server } from "./socket/socket.js";

const PORT=process.env.PORT || 5000;

const __dirname = path.resolve();

dotenv.config();

app.use(express.json());
app.use(cookieParser());

// const corsOptions = {
//     origin: 'http://localhost:3000', // this should match your front-end URL
//     credentials: true, // this is important to send cookies
// };

// app.use(cors(corsOptions));

// app.use((req, res, next) => {
//     console.log('Cookies receivedd:',res.cookies);
//     next();
// });
//Whenever api/auth route is there we call authRoutes middleware function

app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);
app.use('/api/users',userRoutes);
   
app.use(express.static(path.join(__dirname, "/frontend/dist")));    //all frontend videos pics html files audios are made static files . dist is a folder in frontend which is made when you run npm run build , and it has all the JS code debundled.
app.get("*", (req, res) => {                                        //this lets you run the backend server and frontend code on one port
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke.');
});


server.listen(PORT,()=>{console.log(`Server started at port ${PORT} `)});
