import React from 'react';
import useConversations from '../../zustand/useConversations';
import { useSocketContext } from '../../contexts/SocketContext';
import { useState } from 'react';

const Conversation = ({conversation}) => {
	// const [OnlineUsers,setOnlineUsers]=useState({});
	const {onlineUsers}=useSocketContext()
	const { selectedConversation, setselectedConversation} = useConversations();
	const selectedBg=(selectedConversation &&  conversation && selectedConversation._id === conversation._id)?'bg-sky-500':'';

	
	// setOnlineUsers(onlineUsers);
	const isOnline=onlineUsers.includes(conversation._id); //to check online user
	const activicy=isOnline?'online':'offline';
  return (
    <>
    <div className={`flex gap-4 items-center rounded p-2 py-1 cursor-pointer ${selectedBg}`} onClick={()=>{setselectedConversation(conversation)}}>
		
          {/* online offline avatar with profile pic */}
 				<div className={`avatar ${activicy}`}>
 					<div className='w-11 rounded-full bg-white'>
 						<img
 							src={conversation.profilePic}
 							alt='user avatar'
 						/>
 					</div>
 				</div>

                {/* username */}
 				<div className=''>
 						<p className='font-bold text-gray-200'>{conversation.fullName}</p>
 				</div>
 			</div>

 			<div className='divider my-0 py-0 h-1' />
    </>
  )
}

export default Conversation
