import useConversation from "../zustand/useConversations";
import axios from "axios";
import {useState,useEffect } from 'react';

function usegetMessage() {
  const [Loading, setLoading] = useState(false);
  const { selectedConversation, messages, setMessages } = useConversation();
  const storedData= JSON.parse(localStorage.getItem("chat-user"));
  const jwtToken =storedData.token;

  useEffect(() => {
   
      setLoading(true);
      axios
        .get(`http://localhost:8000/api/messages/${selectedConversation._id}`, {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        })
        .then(function (response) {
          const data=response.data;
          setMessages(data);
          setLoading(false);
        })
        .catch(function (error) {
          setLoading(false);
        });
  }, [selectedConversation]);

  return {messages}
  
}
export default usegetMessage;
