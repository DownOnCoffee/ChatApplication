import axios from "axios";
import { useState } from "react";
import {useAuthContext} from "../contexts/AuthContext";
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";

function useDelete() {
  const { setAuthUser,authUser } = useAuthContext();
  const [Loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    const id=authUser._id;
    
    await axios
      .delete(`/api/auth/delete/${id}`)
      .then(function (response) {
        const data=response.data;
        toast.success(data.message);
        localStorage.removeItem("chat-user"); 
        setAuthUser(null);
        setLoading(false);
        // navigate('/login');
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  };
  return {handleDelete};
};
export default useDelete;
