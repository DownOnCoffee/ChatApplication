
import { useState } from 'react';
import { Link } from "react-router-dom";
import useSignup from '../../hooks/useSignup';


const Signup = () => {
  const [signupInfo,setsignupInfo]=useState({
    fullName:'',
    userName:'',
    password:'',
    confirmPassword:'',
  });
  const [loading, setLoading] = useState(false);

  const handleSignUp = useSignup();  //useSignup is a hook which has handlesignup a function inside it

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp(signupInfo,setLoading); // Pass signupInfo to the custom hook
  };
  
  return (
    <>
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
 			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
 				<h1 className='text-3xl font-bold text-center text-white'>
 					Sign Up 
                    {/* <span className='text-[#689FA5]'> ChatApp</span> */}
 				</h1>

 				<form onSubmit={handleSubmit}  className='p-3 mt-3 flex flex-col gap-5 '>
                 
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" fill="currentColor"  className="opacity-70 font-bold" width="19 "><path d="M360-390q-21 0-35.5-14.5T310-440q0-21 14.5-35.5T360-490q21 0 35.5 14.5T410-440q0 21-14.5 35.5T360-390Zm240 0q-21 0-35.5-14.5T550-440q0-21 14.5-35.5T600-490q21 0 35.5 14.5T650-440q0 21-14.5 35.5T600-390ZM480-160q134 0 227-93t93-227q0-24-3-46.5T786-570q-21 5-42 7.5t-44 2.5q-91 0-172-39T390-708q-32 78-91.5 135.5T160-486v6q0 134 93 227t227 93Zm0 80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-54-715q42 70 114 112.5T700-640q14 0 27-1.5t27-3.5q-42-70-114-112.5T480-800q-14 0-27 1.5t-27 3.5ZM177-581q51-29 89-75t57-103q-51 29-89 75t-57 103Zm249-214Zm-103 36Z"/></svg>
                        <input onChange={(e) => setsignupInfo({ ...signupInfo, fullName: e.target.value })}  type="text" className="grow" placeholder="Full name" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input onChange={(e) => setsignupInfo({ ...signupInfo, userName: e.target.value })}  type="text" className="grow" placeholder="Username" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                        <input onChange={(e) => setsignupInfo({ ...signupInfo, password: e.target.value })} type="password" className="grow" placeholder="Password"  />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                        <input onChange={(e) => setsignupInfo({ ...signupInfo, confirmPassword: e.target.value })}  type="password" className="grow" placeholder="Confirm password"  />
                    </label>

 				   

 				    <Link to ='/login' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-white' >
 						Already have an account?
 				    </Link>

                     <div className='flex justify-center items-center'>
                        <button type='submit' className="btn btn-wide btn-info bg-[#689FA5] border-[#689FA5] ">Signup</button>
					</div>
 				</form>
 			</div>
 		</div>
      
    </>
  )
}

export default Signup
