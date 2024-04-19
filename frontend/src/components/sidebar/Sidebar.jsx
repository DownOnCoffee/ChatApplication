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
 			<LogoutButton />
      <DeleteButton />
 		</div>

      
    </>
  )
}

export default Sidebar
