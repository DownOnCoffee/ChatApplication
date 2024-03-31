import React from 'react';
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
const LogoutButton = () => {
  const { Loading,  handleLogout } = useLogout();
  return (
    <>
   <div className='mt-auto'>
			{!Loading ? (
				<BiLogOut className='w-6 h-6 text-white cursor-pointer' onClick={  handleLogout} />
			) : (
				<span className='loading loading-spinner'></span>
			)}
		</div>
      
    </>
  )
}

export default LogoutButton
