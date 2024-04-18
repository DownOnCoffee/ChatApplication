import React from 'react';
import { useEffect } from "react";
import { useSocketContext } from "../contexts/SocketContext";
import useConversation from "../zustand/useConversations";

const useListenMessage = () => {
    const { socket } = useSocketContext();
	const { messages, setMessages } = useConversation();
    console.log('1');
    useEffect(()=>{
        console.log('2');
        socket?.on("newMessage",(newMessage)=>{
            // console.log('New message received:', newMessage);
            
            setMessages([...messages,newMessage]);
        });
        return()=>{
            console.log('Cleaning up message listener');
            socket?.off("newMessage");
        }
    },[socket,setMessages,messages]);
  
}

export default useListenMessage;
