import { useState } from "react";
import InputUser from "../InputUser/InputUser";
import MultipleChatBoxes from "../MultipleChatBoxes/MultipleChatBoxes";

const MainPage = ({setMessages,setUserChatData}) => {
    const [isTyping , setIsTyping] = useState();

    return (
        <>
        <InputUser setMessages={setMessages} setUserChatData={setUserChatData}/>
        <MultipleChatBoxes setIsTyping={setIsTyping} isTyping={isTyping} setMessages={setMessages}/>
        </>
    )
}

export default MainPage;