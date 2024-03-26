
import express from "express";
import jwtAuthMiddleware from '../utils/jwtAuthMiddleware.js';
const router=express.Router();
import {sendMessage , getMessage} from '../controller/message.controller.js';


router.post('/send/:id',jwtAuthMiddleware,sendMessage);    //protectRoute is a authentication middleware to verify the user is logged in or not
router.get('/:id',jwtAuthMiddleware,getMessage)
// router.post('/recieve/:id',protectRote,recieveMessage);

export default router;