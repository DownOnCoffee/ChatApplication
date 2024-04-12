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
        .get("http://localhost:8000/api/users/",{
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        })
        .then(function (response) {
          const data = response.data;
          // console.log(data, "dataaaaaa");
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

  return { Conversations, Loading };
}
export default usegetConversations;
