
import {useState} from 'react';
import axios from 'axios';
import toast from "react-hot-toast";
import {useAuthContext} from "../contexts/AuthContext";


function useSignUp() {
    const {setAuthUser}=useAuthContext();

    const handleSignUp = async ({fullName,password,confirmPassword,userName,gender},setLoading) => {
      //validation
      if (!fullName || !userName || !password || !confirmPassword){
        toast.error("Please fill in all fields");
        return;
      }
      
      if (password.length<5){
        toast.error("Password should have a length more than 5");
        return;

      }
      if (password!=confirmPassword){
        toast.error("Password do not match");
        return;
      }
      if (gender=='' || gender===null){
        toast.error("Gender should be selected");
        return
      }

      setLoading(true);

      await axios.post('http://localhost:8000/api/auth/signup', {
        fullName:fullName,
        username: userName,
        password:password,
        confirmPass:confirmPassword,
        gender:gender
      })
      .then(function (response) {
        const data=response.data;
        localStorage.setItem("chat-user",JSON.stringify(data)); //after user signs up , his details are stored in local storage
        setAuthUser(data);
        setLoading(false);
      
      })
      .catch(function (error) {
        console.log(error);
      });

    };
  
    return handleSignUp; 
}
  
export default useSignUp;