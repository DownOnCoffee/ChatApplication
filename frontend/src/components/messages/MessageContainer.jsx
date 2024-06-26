import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
import useConversations from '../../zustand/useConversations';
import { useEffect } from "react";
import { AuthContext, useAuthContext } from "../../contexts/AuthContext";

const MessageContainer = () => {
  const { selectedConversation, setselectedConversation} = useConversations();
  const isMobile=window.innerWidth<=800;

  const handleClick=()=>{
    setselectedConversation(null);
  }

  //refresh or on logout
  if (isMobile==false){
     useEffect(() => {
        setselectedConversation(null);
    }, []);

  }
 
  return (
    <>

    {/* If chat is selected then open chat if not, welcome chat page */}
      {selectedConversation? (
        <div className="md:min-w-[450px] w-[350px] flex flex-col p-3">
          {/* <header></header> */}
          <div className="bg-[#689FA5] flex flex-row items-center space-x-1 rounded-2xl px-4 py-2 mb-2">
            {isMobile && (
              <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" height="22" fill="#ffffff" viewBox="0 -960 960 960" width="22"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
            )}
            <span className="label-text text-white">To : </span>{" "}
            <span className="text-gray-900 font-bold">{selectedConversation.fullName}</span>
          </div>
          <Messages></Messages>
          <MessageInput></MessageInput>
        </div>
      ) : (
        <NoChatSelected></NoChatSelected>
      )}
      
    </>
  );
};

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>{`Welcome 👋 ${authUser.fullName} ❄`}</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

export default MessageContainer;
