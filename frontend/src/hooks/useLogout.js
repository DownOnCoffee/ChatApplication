import axios from "axios";
import { useState } from "react";
import {useAuthContext} from "../contexts/AuthContext";

function useLogout(){
    // const [Loading,setLoading]=useState(true);
    const [Loading, setLoading] = useState(false);
    const {setAuthUser}=useAuthContext();


    const handleLogout=async ()=>{
        setLoading(true);
        await axios.post('http://localhost:8000/api/auth/logout', {
      })
      .then(function (response) {
        console.log(response);
        localStorage.removeItem("chat-user"); 
        setAuthUser(null); //removing authuser from localstorage so that user is navigated to login page
        setLoading(false);
      
      })
      .catch(function (error) {
        console.log(error);
      });
    };
    return { Loading, handleLogout };
};
export default useLogout;