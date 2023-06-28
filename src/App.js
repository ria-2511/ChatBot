import { useState } from 'react';
import './App.css';
import { ChatsContext } from './Contexts/ChatContext';
import MainPage from './Components/MainPage/MainPage';

function App() {
  const [userChatData , setUserChatData] = useState([]);
  const [messages, setMessages] = useState([]);

  return (
    <div className='app'>
      <ChatsContext.Provider value={{userChatData,messages}}>
      <MainPage setUserChatData={setUserChatData} setMessages={setMessages}/>
      </ChatsContext.Provider>
    </div>
  );
}

export default App;
