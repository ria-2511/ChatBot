import { useContext, useEffect, useState } from 'react';
import './InputUser.css'
import { ChatsContext } from '../../Contexts/ChatContext';

const InputUser = ({setUserChatData,setMessages}) => {
    const {userChatData } = useContext(ChatsContext);
    const [activeUserName, setActiveUserName]= useState('');

    const getNameValue = (e) => {
        setActiveUserName(e.target.value)
    }

    const addChatBox = () => {
        const newUserChatData = [
            ...userChatData,
            {name : activeUserName}
        ]
        sessionStorage.setItem('userChatData', JSON.stringify(newUserChatData));
        setUserChatData(newUserChatData)
    }

    useEffect(() => {
        // set from storage
        if(sessionStorage.getItem('messages')){
            const storageMessages = sessionStorage.getItem('messages')
            setMessages(JSON.parse(storageMessages))
        }
        if(sessionStorage.getItem('userChatData')){
            const storageChatData = sessionStorage.getItem('userChatData')
            setUserChatData(JSON.parse(storageChatData))
        }
    },[setMessages, setUserChatData])

    return(
        <div>
            <div className='inputIcon'>
                <input onChange={getNameValue} placeholder="name" type="text"/>
                <div onClick={addChatBox} id="plusIcon" className="plusIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16"> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/> </svg>
                </div>
            </div>
        </div>
    )
}

export default InputUser;