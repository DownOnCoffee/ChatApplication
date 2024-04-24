
import { useState } from "react";
import axios from "axios";
import {useAuthContext} from "../contexts/AuthContext";
import toast from "react-hot-toast";


function useLogin(){
    const [Loading,setLoading]=useState(false);
    const {setAuthUser}=useAuthContext();

    const handleLogin=async ({username,password})=>{
        setLoading(true);

        if (!username || !password){
            toast.error("Please fill in all fields");
            return;
        }
        
        await axios.post('http://localhost:8000/api/auth/login', {
        username: username,
        password:password,
      })
      .then(function (response) {
       
        const data=response.data;
        localStorage.setItem("chat-user",JSON.stringify(data)); //after user logs in , his details are stored in local storage
        setAuthUser(data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        toast.error("Invalid username or password");
      });

    }
    return {handleLogin,Loading};
};
export default useLogin;