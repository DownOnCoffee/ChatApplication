import express from "express";
import jwtAuthMiddleware from '../utils/jwtAuthMiddleware.js';
import getChats from "../controller/user.controller.js";


const router=express.Router();
router.get('/',jwtAuthMiddleware,getChats);

export default router;
