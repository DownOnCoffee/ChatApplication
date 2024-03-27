import React from 'react';
import { BsSend } from "react-icons/bs";

const MessageInput = () => {
  return (
    <>
    <form className='px-4 my-1'>
 			<div className='w-full relative'>
 				{/* <input
 					type='text'
 					className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
 					placeholder='Send a message'
 				/> */}
                <input type="text" placeholder="Send a message" className="w-full border-white input block input-bordered input-warning " />
 				<button type='submit' className='absolute top-4 right-0 flex items-center pe-3'>
 					<BsSend />
 				</button>
 			</div>
 		</form>
      
    </>
  )
}

export default MessageInput
