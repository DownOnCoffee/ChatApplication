import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import useConversation from "../zustand/useConversations";

function usesendMessage() {
  const [Loading, setLoading] = useState(true);
  const { messages, setMessages, addMessage, selectedConversation } = useConversation();
  const storedData = JSON.parse(localStorage.getItem("chat-user"));
  const jwtToken = storedData.token;

  const sendMessage = async (messageToBeSent) => {
    setLoading(true);

    await axios
      .post(
        `http://localhost:8000/api/messages/send/${selectedConversation._id}`,
        { message: messageToBeSent }, // This is the payload
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`, //headers
          },
        }
      )
      .then(function (response) {
        const data = response.data
        addMessage(data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error.error);
        toast.error("The message could not be sent");
        setLoading(false);
      });
  };

  return { sendMessage };
}
export default usesendMessage;
