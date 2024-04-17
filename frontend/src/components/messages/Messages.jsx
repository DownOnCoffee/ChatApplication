import React, { useEffect ,useRef} from "react";
import Message from "./Message";
import usegetMessage from "../../hooks/usegetMessage";

const Messages = () => {
  const { messages} = usegetMessage();

  const messagesEndRef = useRef(null);
    if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' }); //to scroll down to the latest message
    }

  return (
    <>
      {messages.length === 0 ? (
		<div className="px-4 flex-1 overflow-auto">
			 <p className="text-center mt-3">Send a message to start the conversation</p>

		</div>
       
      ) : (
        <div className="px-4 flex-1 overflow-auto">
          {messages.map((message) => (
            <Message content={message}></Message>
          ))}
          <div ref={messagesEndRef} />
        </div>
      )}
    </>
  );
};

export default Messages;
