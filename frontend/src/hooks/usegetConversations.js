import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";


function usegetConversations() {
  const [Conversations, setConversations] = useState([]);
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      const storedData = JSON.parse(localStorage.getItem('chat-user'));
      const jwtToken = storedData.token;
      
      await axios
        .get("/api/users/",{
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        })
        .then(function (response) {
          const data = response.data;
          setConversations(data);
         
        })
        .catch(function (error) {
          console.error("Request failed with status code", error.response.status);
          console.error("Error response data:", error.response.data);
          setLoading(false);
        })
        
    };
    getConversations();
  }, []);

  return {Conversations, Loading,setConversations };
}
export default usegetConversations;
