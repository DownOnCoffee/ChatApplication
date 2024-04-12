import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import useConversation from "../zustand/useConversations";

function usesendMessage() {
  // const [Loading,setLoading]=useState(true);
  const { messages, setMessages, selectedConversation } = useConversation();
  const storedData = JSON.parse(localStorage.getItem("chat-user"));
  const jwtToken = storedData.token;

  const sendMessage = async (messageToBeSent) => {
    // setLoading(true);

    await axios
      .post(
        `http://localhost:8000/api/messages/send/${selectedConversation._id}`,
        { message: messageToBeSent }, // This is the payload
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`, // Correctly placed headers
          },
        }
      )
      .then(function (response) {
        // console.log(response);
        const data = response.data;
        // setLoading(false);
      })
      .catch(function (error) {
        const errorMessage =
          error.response?.data?.error ||
          error.error ||
          "An unknown error occurred";
        console.log(errorMessage);
        // toast.error(errorMessage);
        // setLoading(false);
      });
  };

  return { sendMessage };
}
export default usesendMessage;
