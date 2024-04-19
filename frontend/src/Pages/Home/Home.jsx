import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import MessageContainer from '../../components/messages/MessageContainer';

function Home() {
  return (
    <>
    <div className='rounded-3xl overflow-hidden flex p-3 sm:h-[450px] md:h-[500px]  bg-gray-900 bg-clip-padding backdrop-filter '>
			<Sidebar />
			<MessageContainer />
		</div>

   
      
    </>
  )
}

export default Home
