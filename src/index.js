import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const TopMostParent = ReactDOM.render(<App />, document.getElementById('root'));

window.updateMessages = (messages) => {
    var i;
    var messageList = [];
    for(i=0; i<messages.length; i++){
        var m = {
            "id": i,
            "sender": messages[i].sender,
            "message": messages[i].messageBody,
            "number": messages[i].sender,
            "self": messages[i].isSender
        }
        messageList.push(m);
    }
    TopMostParent.setState({messages: messageList});
};

window.updateConversations = (conversations) => {
    var i;
    var conversationList = [];
    for(i=0; i<conversations.length; i++){
        var c = {
            "id": i,
            "sender": conversations[i].participants[1],
            "preview": conversations[i].mostRecent,
            "active": false
        }
        if(i==1){
            c.active = true;
        }
        conversationList.push(c);
    }
    TopMostParent.setState({convos: conversationList});
}

window.sendNewMessage = (message) => {
    var messageList = TopMostParent.state.messages;
    var newMessage = {
        "id": messageList.length,
        "sender": "me",
        "message": message,
        "number": 1234567890,
        "self": true
    }
    messageList.push(newMessage);
    TopMostParent.setState({messages: messageList});
}

window.recieveNewMessage = (newMessage) => {
    
}