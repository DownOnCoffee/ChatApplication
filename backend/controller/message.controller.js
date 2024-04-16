  import express from "express";
  import Conversation from "../models/conversation.model.js";
  import User from "../models/user.model.js";
  import Message from "../models/message.model.js";

  const sendMessage = async (req, res) => {
    try {
      const {message} = req.body;
      const {id:receiverId} = req.params; //in database _id is stored as an object type
      const senderId = req.user._id; //this comes from the middleware function jwtAuthMiddleware


      let conversation = await Conversation.findOne({
        participants: { $all: [senderId, receiverId] },
      });

      if (!conversation) {
        conversation = new Conversation({
          participants: [senderId, receiverId],
        });
      }
      const newMessage = new Message({
        message: message,
        senderId: senderId,
        receiverId: receiverId,
      });
      await newMessage.save();

      if (newMessage) {
        conversation.messages.push(newMessage._id);
      }
      await conversation.save();
      // console.log('msg uploaded'); 
      return res.status(201).json({newMessage});

    } catch (err) {
        console.log(err);
        const errorMessage=err.message;
        return res.status(500).json({ error: errorMessage });
    }
  };

  const getMessage=async (req,res)=>{
    try{
      const {id:getChatOfId}=req.params;
      const senderId=req.user._id;
    
      const conversation=await Conversation.findOne({
        participants:{$all:[senderId,getChatOfId]},
      }).populate({path:'messages',populate:{path:'senderId',select:'fullName username profilePic'}});

      if (!conversation){
        return res.status(200).json([]);  //if no conversation is there between the users
      }
      
      return res.status(200).json(conversation.messages); 

    }catch(err){
      const errorMessage=err.message;
      return res.status(500).json({ error: errorMessage });

    }
  };

  export {sendMessage,getMessage};
