import { createContext } from "react";

export const ChatsContext = createContext({
    userChatData : [
        {
          name : 'Ria',
        }
      ],
      messages : [
        {
          from : 'Ria',
          time : 0,
          text : 'Hi everyone'
        }
      ]
})