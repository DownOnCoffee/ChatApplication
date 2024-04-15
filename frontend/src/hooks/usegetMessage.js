import useConversation from "../zustand/useConversations";
import axios from "axios";

function usegetMessage() {
  const [Loading, setLoading] = useState(false);
  const { selectedConversation, messages, setMessages } = useConversation();
  const jwtToken=JSON.parse(localStorage.getItem('chat-user').token);
  console.log(jwtToken,"blaaaaaa");

  const getMessage = async () => {
    useEffect(() => {
      setLoading(true);

      axios
        .get(`http://localhost:8000/api/messages/${id}`, {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        })
        .then(function (response) {

        })
        .catch(function (error) {
          setLoading(false);
        });
    }, []);
  };
  return { getMessage };
}
export default usegetMessage;
