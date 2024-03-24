
import express from "express";
import jwtAuthMiddleware from '../utils/jwtAuthMiddleware.js';
const router=express.Router();
import sendMessage from '../controller/message.controller.js';


router.post('/send/:id',jwtAuthMiddleware,sendMessage);    //protectRoute is a authentication middleware to verify the user is logged in or not
// router.post('/recieve/:id',protectRote,recieveMessage);

export default router;