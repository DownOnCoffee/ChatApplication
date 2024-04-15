import React, { useEffect } from 'react';
import Message from './Message';
import usegetMessage from '../../hooks/usegetMessage';

const Messages = () => {
	// const {getMessage}=usegetMessage();
	// console.log('blaaaa');
	// getMessage();
	
  return (
    <>
    <div className='px-4 flex-1 overflow-auto'>
 			<Message />
 			<Message />
 			<Message />
 			<Message />
 			<Message />
 			<Message />
 			<Message />
 			<Message />
 			<Message />
 			<Message />
 			<Message />
 			<Message />
 		</div>
    
      
    </>
  )
}

export default Messages
