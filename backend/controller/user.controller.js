import mongoose from 'mongoose';
import express from 'express';
import Conversation from "../models/conversation.model.js";
import User from "../models/user.model.js";
import Message from "../models/message.model.js";

const getChats=async(req,res)=>{

    try{
        const yourOwnId=req.user._id;
        const filteredUsers=await User.find({_id:{$ne:yourOwnId}}).select('-password');
        return res.status(200).json(filteredUsers);


    }catch(err){
        const errorMessage=err.messsage;
        res.status(500).json({ error: errorMessage });
    }

};
export default getChats;


