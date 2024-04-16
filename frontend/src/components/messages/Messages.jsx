import React, { useEffect } from "react";
import Message from "./Message";
import usegetMessage from "../../hooks/usegetMessage";

const Messages = () => {
  const { messages } = usegetMessage();

  // console.log(messages,'msgesssss');
  return (
    <>
      {messages.length === 0 ? (
		<div className="px-4 flex-1 overflow-auto">
			 <p className="text-center mt-3">Send a message to start the conversation</p>

		</div>
       
      ) : (
        <div className="px-4 flex-1 overflow-auto">
          {messages.map((message) => (
            <Message key={message._id} content={message}></Message>
          ))}
        </div>
      )}
    </>
  );
};

export default Messages;
