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
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

export default sendMessage;
