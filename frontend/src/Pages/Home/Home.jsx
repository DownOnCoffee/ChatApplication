import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import useConversation from '../../zustand/useConversations';
import MessageContainer from '../../components/messages/MessageContainer';

function Home() {
  const {selectedConversation,setselectedConversation}=useConversation();
  const isMobile=window.innerWidth<=800;
  return (
    <>
    {!isMobile && <div className='rounded-3xl overflow-hidden flex p-3 sm:h-[450px] md:h-[500px]  bg-gray-900 bg-clip-padding backdrop-filter '>
			<Sidebar />
			<MessageContainer />
		</div>}

    {isMobile && <div className='rounded-3xl h-[500px] overflow-hidden flex p-3 bg-gray-900 bg-clip-padding backdrop-filter'>
      {selectedConversation==null?<Sidebar></Sidebar>:<MessageContainer></MessageContainer>}

    </div>
    }

   
      
    </>
  )
}

export default Home
