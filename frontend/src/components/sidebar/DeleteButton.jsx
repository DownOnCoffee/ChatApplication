import React from 'react';
import { BiLogOut } from "react-icons/bi";
import useDelete from "../../hooks/useDelete";

function DeleteButton() {
    const {handleDelete}=useDelete();
  return (
    <div>
        <button onClick={handleDelete} className=" text-red-500 border-2 border-red-500 hover:bg-red-500 hover:text-white btn-error text-[10px] p-[3px] px-2 rounded-md ">Delete Account</button>
    </div>
  )
}

export default DeleteButton
