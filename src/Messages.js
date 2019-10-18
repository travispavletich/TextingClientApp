import React, {Component} from "react";

import Message from './Message';

class Messages extends Component{
    render() {
        const messages = this.props.messages.map((message, i) => {
            return (
                <Message
                    key={i}
                    name={message.name}
                    avatar={message.avatar}
                    message={message.message}
                    self={message.self} />
                );
            });

        return (
        <div className='messages' id='messageList'>
            {messages}
        </div>
        );
    }
}

export default Messages;