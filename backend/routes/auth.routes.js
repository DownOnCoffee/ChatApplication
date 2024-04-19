import express from 'express';
const router=express.Router();
import {signup,login,logout, logininfo,deleteAccount} from '../controller/auth.controller.js';


router.post('/signup',signup);
router.post('/login',login);
router.get('/login',logininfo);
router.post('/logout',logout);
router.delete('/delete/:id',deleteAccount);

export default router;

