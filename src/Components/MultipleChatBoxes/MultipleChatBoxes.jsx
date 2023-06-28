import { useContext } from "react";
import ChatBox from "../Chatbox/Chatbox";
import { ChatsContext } from "../../Contexts/ChatContext";
import './MultipleChatBoxes.css'

const MultipleChatBoxes = ({setMessages,isTyping,setIsTyping}) => {
    const {userChatData} = useContext(ChatsContext);

    return (
        <div className='chatBoxes'>
          {userChatData.map((user, index) => {
            return (
              <div key={`user_${index}`}>
              <ChatBox setMessages={setMessages} data={user} setIsTyping={setIsTyping} isTyping={isTyping}/>
              </div>
            )
          })}
      </div>
    )
}

export default MultipleChatBoxes;