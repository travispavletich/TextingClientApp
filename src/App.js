import React, {Component} from "react";

import MessageList from './components/MessageList';
import ConvoList from './components/ConvoList';
import SendMessage from './SendMessage';

import uuid from 'uuid';

import './scss/Main.scss';
import "./scss/Convo.scss"


class App extends Component{
  state = {
    messages:[
      {
        id: uuid.v4(),
        sender: 'alan',
        text: 'oh my lord bruuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuh why tho',
        number: '6098889999',
        self: false
      },
      {
        id: uuid.v4(),
        sender: 'me',
        text: 'honhonhon',
        number: '1112223333',
        self: true
      },
      {
        id: uuid.v4(),
        sender: 'me',
        text: 'honhonhon',
        number: '1112223333',
        self: true
      },
      {
        id: uuid.v4(),
        sender: 'me',
        text: 'honhonhon',
        number: '1112223333',
        self: true
      },
      {
        id: uuid.v4(),
        sender: 'me',
        text: 'honhonhon',
        number: '1112223333',
        self: true
      },
      {
        id: uuid.v4(),
        sender: 'me',
        text: 'honhonhon',
        number: '1112223333',
        self: true
      },
      {
        id: uuid.v4(),
        sender: 'me',
        text: 'honhonhon',
        number: '1112223333',
        self: true
      },
      {
        id: uuid.v4(),
        sender: 'me',
        text: 'honhonhon',
        number: '1112223333',
        self: true
      },
      {
        id: uuid.v4(),
        sender: 'me',
        text: 'honhonhon',
        number: '1112223333',
        self: true
      },
      {
        id: uuid.v4(),
        sender: 'me',
        text: 'honhonhon',
        number: '1112223333',
        self: true
      },
      {
        id: uuid.v4(),
        sender: 'me',
        text: 'honhonhon',
        number: '1112223333',
        self: true
      },
      {
        id: uuid.v4(),
        sender: 'me',
        text: 'skrtskrt',
        number: '1112223333',
        self: true
      },
      {
        id: uuid.v4(),
        sender: 'alan',
        text: 'N O !',
        number: '6098889999',
        self: false
      },
      {
        id: uuid.v4(),
        sender: 'alan',
        text: 'N O !',
        number: '6098889999',
        self: false
      },
      {
        id: uuid.v4(),
        sender: 'alan',
        text: 'N O !',
        number: '6098889999',
        self: false
      },
      {
        id: uuid.v4(),
        sender: 'alan',
        text: 'N O !',
        number: '6098889999',
        self: false
      },
    ],
    convos: [
      {
        id: uuid.v4(),
        sender: 'alan',
        preview: 'N O !',
        names: ['Travis'],
        numbers: ['0123456789'],
        active: true
      },
      {
        id: uuid.v4(),
        sender: 'al capone',
        preview: 'give me your pizza',
        names: ['Travis'],
        numbers: ['0123456789'],
        active: false
      },
      {
        id: uuid.v4(),
        sender: 'al capone',
        preview: 'give me your pizza',
        names: ['Travis'],
        numbers: ['0123456789'],
        active: false
      },
      {
        id: uuid.v4(),
        sender: 'al capone',
        preview: 'give me your pizza',
        names: ['Travis'],
        numbers: ['0123456789'],
        active: false
      },
      {
        id: uuid.v4(),
        sender: 'al capone',
        preview: 'give me your pizza',
        names: ['Travis'],
        numbers: ['0123456789'],
        active: false
      },
      {
        id: uuid.v4(),
        sender: 'al capone',
        preview: 'give me your pizza',
        names: ['Travis'],
        numbers: ['0123456789'],
        active: false
      },
      {
        id: uuid.v4(),
        sender: 'al capone',
        preview: 'give me your pizza',
        names: ['Travis'],
        numbers: ['0123456789'],
        active: false
      },
      {
        id: uuid.v4(),
        sender: 'al capone',
        preview: 'give me your pizza',
        names: ['Travis'],
        numbers: ['0123456789'],
        active: false
      },
      {
        id: uuid.v4(),
        sender: 'al calzone',
        preview: 'are you italian my man',
        names: ['Travis'],
        numbers: ['0123456789'],
        active: false
      },
      {
        id: uuid.v4(),
        sender: 'al lasagna',
        preview: 'I think you still owe me from Costco bro',
        names: ['Travis'],
        numbers: ['0123456789'],
        active: false
      }
    ],
    names: ['Alan Kang'],
    numbers: ['4321'],
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
      "Recipients": ["6108830941"],
      "MessageId": guid,
      "ConversationID": window.activeConversationId
    }
    const request = require('request');
    request.post({url: url, qs:data}, function(err, response, body){});
    var newMessage = {
      id: guid,
      sender: 'me',
      text: message,
      number: '1234',
      self: true
    }
    this.setState( {messages: [...this.state.messages, newMessage]});
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
            <div className="headerR"><h1>Recipients</h1></div>
            <div ref="update" className="messageList"><MessageList messages={this.state.messages} /></div>
            <div className="sendMessage"><SendMessage sendMessage={this.sendMessage} /></div>
        </div>
		);
  }
}

export default App
