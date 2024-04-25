import useConversation from "../zustand/useConversations";
import axios from "axios";
import { useState, useEffect } from "react";

function usegetMessage() {
  const [Loading, setLoading] = useState(false);
  const { selectedConversation, messages, setMessages } = useConversation();
  const storedData = JSON.parse(localStorage.getItem("chat-user"));
  const jwtToken = storedData.token;

  useEffect(() => {
    const getMessages = () => {
      setLoading(true);
      axios
        .get(`/api/messages/${selectedConversation._id}`, {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        })
        .then(function (response) {
          const data = response.data;
          setMessages(data);
          setLoading(false);
        })
        .catch(function (error) {
          setLoading(false);
        });
    };
    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);

  return { messages,Loading };
}
export default usegetMessage;
