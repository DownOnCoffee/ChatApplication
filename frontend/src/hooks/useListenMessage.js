import React from 'react';
import { useEffect } from "react";
import { useSocketContext } from "../contexts/SocketContext";
import useConversation from "../zustand/useConversations";
import notificationSound from '../assets/sound/notification.mp3';

const useListenMessage = () => {
    const { socket } = useSocketContext();
	const { messages, setMessages } = useConversation();

    useEffect(()=>{
        socket?.on("newMessage",(newMessage)=>{
            newMessage.bounce=true;
            const sound=new Audio(notificationSound); //Notification sound will ring when new message is sent
            sound.play();
            setMessages([...messages,newMessage]);
        });
        return()=> socket?.off("newMessage");  //to run the event only once
        
    },[socket,setMessages,messages]);
  
}

export default useListenMessage;
