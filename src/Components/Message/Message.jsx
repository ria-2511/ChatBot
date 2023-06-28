import './Message.css'

const Message = ({msgText , sender, time, currentSender}) => {
    return (
        <div className='message'>
            <span className='sender'>{sender === currentSender ? 'You' : sender}:</span>
            <span className='msg'>{msgText}</span>
            {time && <span className='time'>{time}</span>}
        </div>
    )
}

export default Message;