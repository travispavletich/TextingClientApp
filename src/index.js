import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';

import App from './App';
import uuid from 'uuid';

const request = require('request');
const TopMostParent = ReactDOM.render(<App />, document.getElementById('root'));
/*
window.requestMessageList = (conversationID) => {
    if(conversationID != window.activeConversationId){
        var reqURL = 'http://localhost:5000/Client/RetrieveMessageList?conversationID='+conversationID;
        request(reqURL, function (error, response, body) {
            window.activeConversationId = conversationID;
        });
    }
}*/
window.setToken = (t) => {
    TopMostParent.setState({token: t});
}

window.connect = () => {
    var token = TopMostParent.state.token;
    
	let url = "http://localhost:5000/client/token";

	var paramsObject = {token: token};


	request({url: url, qs:paramsObject}, function (err, response, body) {
        window.activeConversationId = 0;
        window.requestMessages = 1;
        window.firstLoad = 1;
        window.loading();
        request('http://localhost:5000/Client/RetrieveConversations', function (error, response, body) {});
	});
    /*
    var paramsObject = {token: token};
    console.log(paramsObject);
    request({url: url, qs:paramsObject}, function (err, response, body) {
        console.log(body);
        window.activeConversationId = 0;
        window.requestMessages = 1;
        window.firstLoad = 1;
        window.loading();
        request('http://localhost:5000/Client/RetrieveConversations', function (error, response, body) {});
    });
   	 
    
	/*let url = "http://localhost:5000/client/token";

	var paramsObject = {token: token};

	console.log(paramsObject);

	request({url: url, qs:paramsObject}, function (err, response, body) {
		console.log(body);
	});
    console.log('service successfully started', token);
   /*
	request('http://localhost:5000/Client/Token?token='+token, function (error, response, body) {
    console.log(response);  
    console.log(body);
	*/
    window.activeConversationId = 0;
    window.requestMessages = 1;
    window.firstLoad = 1;
    window.loading();
    
}

window.updateActiveConversation = (id) => {
    var convos = []
    var conversationList = TopMostParent.state.convos;
    var i;
    for(i=0; i<conversationList.length; i++){
        var c = conversationList[i];
        c.active = false;
        if(c.id == id){
            c.active = true;
			//console.log("NAMES:" + c.names);
            TopMostParent.setState({names: c.names});
            TopMostParent.setState({numbers: c.numbers});
            window.updateHeader();
        }
        convos.push(c);
    }
    //this.props.convo.active = true;
    window.activeConversationId = id;
    TopMostParent.setState({convos: convos});
}

window.requestInitialMessages = () => {
    var reqURL = 'http://localhost:5000/Client/RetrieveMessageList?conversationID='+window.activeConversationId;
    console.log(reqURL);
    //window.setTimeout(console.log("waiting"), 5000);
    request(reqURL, function (error, response, body) {
    });
}

window.getMessageList = () => {
    var reqURL = 'http://localhost:5000/Client/MessageList?conversationID='+window.activeConversationId;
    console.log(reqURL);
    request(reqURL, function (error, response, body) {
      console.error('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); 
  
      var messages = JSON.parse(body).data.Messages;
      console.log(JSON.parse(body));
      window.updateMessages(messages);
    });
}

window.updateMessages = (messages) => {
    var i;
    var messageList = [];
    //console.log(TopMostParent.state.numbers);
    for(i=0; i<messages.length; i++){
        var name = window.findName(messages[i].sender);
        var m = {
            "id": uuid.v4(),
            "sender": name,
            "text": messages[i].messageBody,
            "number": messages[i].sender,
            "self": messages[i].isSender,
            "sent": messages[i].sentSuccessfully
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
            "sender": conversations[i].contacts[0],
            "preview": conversations[i].mostRecent,
            "names": conversations[i].contacts,
            "numbers": conversations[i].participants,
            "active": false
        }
        if(i==0 && window.firstLoad==1){
            c.active = true;
            window.activeConversationId = cid;
            TopMostParent.setState({names: conversations[i].contacts});
            TopMostParent.setState({numbers: conversations[i].participants});
            window.updateHeader();
        }
        else if(cid == window.activeConversationId){
            c.active = true;
        }
        conversationList.push(c);
    }
    window.firstLoad = 0;
    TopMostParent.setState({convos: conversationList});
    if(window.requestMessages == 1){
        window.requestInitialMessages();
    }
    else{
        window.getMessageList();
    }
}

window.loading = () => {
    TopMostParent.setState({convos: []});
    window.loadingMessages();
}

window.loadingMessages = () => {
    var loadMessages = [];
    var load = {
        "id": uuid.v4(),
        "sender": "loading",
        "text": "Loading...",
        "number": "loading",
        "self": true
    }
    loadMessages.push(load);
    TopMostParent.setState({messages: loadMessages});
}

window.updateHeader = () => {
    var header = document.getElementById("heading");
    /*
    var convos = TopMostParent.state.convos;
    var activeConvoNum = window.activeConvo();
    console.log(activeConvoNum);
    var names = convos[activeConvoNum].names;*/
    var names = TopMostParent.state.names;
    var participants = "";
    console.log(names);
    participants += names[0];
    var i;
    for(i=1;i<names.length;i++){
      participants += ", ";
      participants += names[i];
    }
    header.innerHTML = participants;
}

window.findName = (number) => {
    var names = TopMostParent.state.names;
    var numbers = TopMostParent.state.numbers;
    var i;
    var name = "me";
    for(i=0;i<names.length;i++){
        if(numbers[i] === number){
            name = names[i];
            return name;
        }
    }
    return name;
}

window.activeConvo = () => {
    var convos = TopMostParent.state.convos;
    console.log(convos);
    var num = -1;
    var i;
    for(i=0; i<convos.length; i++){
        //console.log(convos[i]);
        if(convos[i].id === window.activeConversationId){
            num = i;
            return num;
        }
    }
    return num;
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
