import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import uuid from 'uuid';

const TopMostParent = ReactDOM.render(<App />, document.getElementById('root'));

window.updateMessages = (messages) => {
    var i;
    var messageList = [];
    for(i=0; i<messages.length; i++){
        var m = {
            "id": uuid.v4(),
            "sender": messages[i].sender,
            "text": messages[i].messageBody,
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
        var cid = conversations[i].conversationID;
        var c = {
            "id": cid,
            "sender": conversations[i].participants[1],
            "preview": conversations[i].mostRecent,
            "active": false
        }
        if(i==0){
            c.active = true;
            window.activeConversationId = cid
        }
        conversationList.push(c);
    }
    TopMostParent.setState({convos: conversationList});
}

window.sendNewMessage = (message) => {
    var messageList = TopMostParent.state.messages;
    var newMessage = {
        "id": uuid.v4(),
        "sender": "me",
        "text": message,
        "number": 6108830941,
        "self": true
    }
    messageList.push(newMessage);
    TopMostParent.setState({messages: messageList});
}

window.recieveNewMessage = (newMessage) => {
    console.log("active convo:" + window.activeConversationId);
    var conversationList = TopMostParent.state.convos;
    var messageList = TopMostParent.state.messages;
    var i;
    for(i=0; i<conversationList.length; i++){
        if(conversationList[i].id == newMessage.ConversationID){
            conversationList[i].preview = newMessage.Message;
        }
    }
    if(newMessage.ConversationID == window.activeConversationId){
        var m = {
            "id": uuid.v4(),
            "sender": newMessage.Sender,
            "text": newMessage.Message,
            "number": newMessage.Sender,
            "self": newMessage.Self
        }
        messageList.push(m)
    }
    TopMostParent.setState({messages: messageList,
        convos: conversationList});
}
