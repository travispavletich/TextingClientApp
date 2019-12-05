import React, {Component} from "react";

import MessageList from './components/MessageList';
import ConvoList from './components/ConvoList';
import SendMessage from './SendMessage';

import uuid from 'uuid';

import './scss/Main.scss';
import "./scss/Convo.scss"
import { thisTypeAnnotation } from "@babel/types";


class App extends Component{
  state = {
    messages:[],
	convos:[],
    connected: false,
    token: '',
    names: [],
    numbers: [],
    selected: undefined
  }

  // Send a new message
  sendMessage = (text) => {
    var guid = uuid.v4();
    var url = "http://localhost:5000/Client/SendMessage";
    var message = text;
    console.log(window.activeConversationId);
    var data = {
      "Message": message,
      "Recipients": this.state.numbers,
      "MessageID": guid,
      "ConversationID": window.activeConversationId
    }
    const request = require('request');
    request.post({url: url, qs:data}, function(err, response, body){});
    var newMessage = {
      id: guid,
      sender: 'me',
      text: message,
      number: '1234',
      self: true,
      sent: false
    }
    this.setState( {messages: [...this.state.messages, newMessage]});
  }

  setConnected = (c) => {
    this.setState({connected: c});
  }

  /*participants(){
    var participants = "";
    console.log(this.state.names);
    participants += this.state.names[0];
    var i;
    for(i=0;i<this.state.names.length;i++){
      participants += ", ";
      participants += this.state.names[i];
    }
    return participants;
  }*/

  componentDidUpdate() {
    var el = this.refs.update;
    el.scrollTop = el.scrollHeight;
  }

  render() {
    return (
      
        <div className="wrapper">
            <div className="headerL"><h1>Messages</h1></div>
            <div className="convos"><ConvoList convos={this.state.convos} /></div>
            <div className="headerR"><h1 id="heading">Recipients</h1></div>
            <div ref="update" className="messageList"><MessageList messages={this.state.messages} /></div>
            <div className="sendMessage"><SendMessage sendMessage={this.sendMessage} 
            connected={this.state.connected} setConnected={this.setConnected}/></div>
        </div>
		);
  }
}

export default App
