import {useContext, useEffect, useState } from 'react';
import './Chatbox.css'
import Message from '../Message/Message';
import { formatAMPM } from '../../Helpers/General';
import { ChatsContext } from '../../Contexts/ChatContext';

const ChatBox = ({data, setMessages,setIsTyping, isTyping}) => {
    const {messages} = useContext(ChatsContext);
    const [currentMsg , setCurrentMsg] = useState();

    const takeMsg = (e,name) => {
        setCurrentMsg(e.target.value);
        setIsTyping({bool : true,name});
    }

    useEffect(() => {
        const id = setTimeout(() => {
            setIsTyping(false)
        }, 3000)

        return () => {
            clearTimeout(id)
        }
    },[setIsTyping,currentMsg])

    const saveMsg = () => {
        const date = new Date();
        const timeStamp = formatAMPM(date)
        const newMessagesObject = [
            ...messages,
            {
                from: data.name,
                time : timeStamp,
                text: currentMsg
            }
        ]
        sessionStorage.setItem('messages',JSON.stringify(newMessagesObject))
        setMessages(newMessagesObject)
    }

    return (
        <div className="Chatbox">
            <div className='chatUserTitle'>{data.name}</div>
            <div id='chatMessages' className='chatMessages'>
                {messages.map((msg,index) => {
                    return (
                        <div key={`msg_${index}`}>
                            <Message
                                msgText={msg.text}
                                sender={msg.from}
                                time={msg.time}
                                currentSender={data.name}
                            />
                        </div>
                    )
                })}
            </div>
            {(isTyping) && (
                <>
                    <div id='isTyping' className='typing'>
                    {isTyping.bool && 
                    data.name !== isTyping.name ? 
                    `${isTyping.name} Typing...` : ''
                    }
                    </div>
                </>
            )}
            <div id='inputMsg' className='sendMsg'>
                <input onChange={(e)=>{takeMsg(e,data.name)}} className='inputMsg' type='text'/>
                <button onClick={saveMsg} style={{marginLeft: '5px'}}>Send</button>
            </div>
        </div>
    )
}

export default ChatBox;