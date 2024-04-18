import React from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import useConversation from "../../zustand/useConversations";
import { extractTime } from "../../utils/extractTime";

const Message = ({content}) => {
  const {authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  
  const fromMe = content.senderId === authUser._id;  //to check if sender id is equal to logged in account
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const timeAndDate= extractTime(content.createdAt);
  const bounceClass=content.bounce?'animate-bounce-3-times':'';
 
  return (
    <>
      <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="profile pic icon"
              // src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              src={profilePic}
            />
          </div>
        </div>
        <div className="chat-header">
        
        </div>
        <div className={`chat-bubble ${bubbleBgColor } ${bounceClass}  text-white `}>{content.message}</div>
        <time className=" ml-2 text-xs opacity-50">{timeAndDate}</time>
        {/* <div className="chat-footer opacity-50">Delivered</div> */}
      </div>
      
    </>
  );
};

export default Message;
