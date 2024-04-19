import React from 'react';
import Searchinput from './SearchButton';
import PeopleChats from './PeopleChats';
import LogoutButton from './LogoutButton';
import DeleteButton from './DeleteButton';

const Sidebar = () => {
  return (
    <>
    <div className='border-r border-slate-500 p-4 flex flex-col'>
 			<Searchinput />
 			<div className='divider px-3'></div>
 			<PeopleChats />
      <div className='space-x-4 p-2 flex flex-row items-center'>
        <LogoutButton />
        <DeleteButton />
      </div>
 			
 		</div>

      
    </>
  )
}

export default Sidebar
