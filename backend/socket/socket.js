import { Server } from "socket.io";
import http from "http";
import express from "express";


const app = express();

const server = http.createServer(app); //creating http server

const io = new Server(server, {               //socket server
	cors: {
		origin: ["http://localhost:3000"],
		methods: ["GET", "POST"],
	},
});

export const getReceiverSocketId = (receiverId) => {        //adding reciever id to usersocketmap
	return userSocketMap[receiverId];
};

const userSocketMap = {}; // {userId: socketId}             //object of user id with their socket id

io.on("connection", (socket) => {                           //io.on is the socket connection to the server with socket as a parameter which represents the individual connection
	console.log("a user connected", socket.id);             
	const userId = socket.handshake.query.userId;
	if (userId != "undefined") userSocketMap[userId] = socket.id;          
	io.emit("getOnlineUsers", Object.keys(userSocketMap));      //its an event that gets all the online users using usersocketmap object. getonlineusers is event name

	socket.on("disconnect", () => {
		console.log("user disconnected", socket.id);            //if the individual disconnects..
		delete userSocketMap[userId];
		io.emit("getOnlineUsers", Object.keys(userSocketMap));
	});
});

export { app, io, server };