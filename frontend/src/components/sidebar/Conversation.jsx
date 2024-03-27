import React from 'react';

const Conversation = () => {
  return (
    <>
    <div className='flex gap-4 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>

          {/* online offline avatar with profile pic */}
 				<div className='avatar online'>
 					<div className='w-11 rounded-full bg-white'>
 						<img
 							src='https:cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'
 							alt='user avatar'
							
 						/>
 					</div>
 				</div>

                {/* username */}
 				<div className=''>
 						<p className='font-bold text-gray-200'>John Doe</p>
 				</div>
 			</div>

 			<div className='divider my-0 py-0 h-1' />
    </>
  )
}

export default Conversation
