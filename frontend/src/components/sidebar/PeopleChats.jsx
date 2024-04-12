import React from "react";
import Conversation from "./Conversation";
import usegetConversations from "../../hooks/usegetConversations";


const PeopleChats = () => {
  const { Conversations , Loading} = usegetConversations();
  console.log(Conversations,"convoooo");


  return (
    <>
      <div className="py-2 flex flex-col overflow-auto">
	
         {Conversations.map((convo) => (
          <Conversation key={convo._id} conversation={convo}></Conversation>
        ))}
		{Loading ? <span className='loading loading-spinner mx-auto'></span> : null} 
      </div>
    </>
  );
};

export default PeopleChats;
