
import {useState} from 'react';
import axios from 'axios';
import toast from "react-hot-toast";

function useSignUp() {
    const handleSignUp = ({fullName,password,confirmPassword,userName},setLoading) => {
        
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

      setLoading(true);

      axios.post('http://localhost:8000/api/auth/signup', {
        fullName:fullName,
        username: userName,
        password:password,
        confirmPass:confirmPassword,
        gender:"female"
      })
      .then(function (response) {
        console.log(response);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });

    };
  
    return handleSignUp; 
}
  
export default useSignUp;