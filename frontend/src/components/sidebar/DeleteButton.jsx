import React from 'react';
import { BiLogOut } from "react-icons/bi";
import useDelete from "../../hooks/useDelete";

function DeleteButton() {
    const {handleDelete}=useDelete();
  return (
    <div>
        <button onClick={handleDelete}>delete</button>
    </div>
  )
}

export default DeleteButton
