import React from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { useState,useEffect } from 'react';
import { set } from 'mongoose';
import usegetConversations from '../../hooks/usegetConversations';
import useConversation from '../../zustand/useConversations';
import toast from "react-hot-toast";

const SearchButton = () => {
  const [searchConvo,setsearchConvo]=useState('');
  const {Conversations,setConversations}=usegetConversations();
  const {setFilteredConvos,filteredConvos}=useConversation();

  useEffect(() => {
    setFilteredConvos(Conversations); // Initially set all conversations to be displayed
}, [Conversations, setFilteredConvos]);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchConvo !== '') {
      const filteredArray = Conversations.filter((item) => item.fullName.includes(searchConvo.toLowerCase().trim()));
      if (filteredArray.length===0){return toast.error('No user found');}
      setFilteredConvos(filteredArray);
    } else {
      setFilteredConvos(Conversations);
    }
  };

  const handlecancel=()=>{
    setFilteredConvos(Conversations); 
    setsearchConvo('');
  };
    
  return (
    <>
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
      <div className=' relative '>
      <input onChange={(e)=>{setsearchConvo(e.target.value)}} value={searchConvo} type='text' placeholder='Search by name' className='input input-bordered rounded-full' ></input>
       <div onClick={handlecancel} className=' hover:scale-105 absolute top-2 right-3 cursor-pointer'><svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="m330-288 150-150 150 150 42-42-150-150 150-150-42-42-150 150-150-150-42 42 150 150-150 150 42 42ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"/></svg></div>
      </div>
 			
 			<button type='submit' className='btn btn-circle w-12 h-12  bg-[#689FA5] text-white'>
 				<IoSearchSharp className='w-5 h-5 outline-none' />
 			</button>
 		</form>
      
    </>
  )
};

export default SearchButton
