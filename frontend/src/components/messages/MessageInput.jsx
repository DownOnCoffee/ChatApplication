import React from 'react';
import { BsSend } from "react-icons/bs";
import { useState } from 'react';
import usesendMessage from '../../hooks/usesendMessage';


const MessageInput = () => {
	const [messageToBeSent,setmessageToBeSent]=useState('');
	const {sendMessage}=usesendMessage();
	
	const handleclick=async (e)=>{
		e.preventDefault();
		await sendMessage(messageToBeSent);
		setmessageToBeSent("");
	}
	
  return (
    <>
    <form className='px-4 my-1'>
 			<div className='w-full relative'>
 				
                <input type="text" onChange={(e)=>{setmessageToBeSent(e.target.value)}} placeholder="Send a message" value={messageToBeSent} className="w-full border-white input block input-bordered input-warning " />
 				<button type='submit' onClick={handleclick} className='absolute top-4 right-0 flex items-center pe-3'>
 					<BsSend />
 				</button>
 			</div>
 		</form>
      
    </>
  )
}

export default MessageInput
