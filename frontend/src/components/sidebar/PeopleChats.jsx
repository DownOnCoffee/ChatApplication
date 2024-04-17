import React from "react";
import Conversation from "./Conversation";
import usegetConversations from "../../hooks/usegetConversations";
import useConversation from "../../zustand/useConversations";


const PeopleChats = () => {
  const { Conversations , Loading} = usegetConversations();
  const {filteredConvos}=useConversation();
  // const displayConversation=filteredConvos.length>1?filteredConvos:Conversations;

  return (
    <>
      <div className="py-2 flex flex-col overflow-auto">
	
         {filteredConvos.map((convo) => (
          <Conversation key={convo._id} conversation={convo}></Conversation>
        ))}
		{/* {Loading ? <span className='loading loading-spinner mx-auto'></span> : null}  */}
      </div>
    </>
  );
};

export default PeopleChats;
