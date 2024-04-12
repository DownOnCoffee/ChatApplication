import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
import useConversations from '../../zustand/useConversations';
import { useEffect } from "react";

const MessageContainer = () => {
  const { selectedConversation, setselectedConversation} = useConversations();

  //refresh or on logout
  useEffect(() => {
    setselectedConversation(null);
  }, []);
  
  return (
    <>

    {/* If chat is selected then open chat if not, welcome chat page */}
      {selectedConversation? (
        <div className="md:min-w-[450px] flex flex-col p-3">
          {/* <header></header> */}
          <div className="bg-[#689FA5] rounded-2xl px-4 py-2 mb-2">
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
//   const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 John doe ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

export default MessageContainer;
