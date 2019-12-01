import React, {Component} from "react";

import MessageList from './components/MessageList';
import Convo from './components/Convo';
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
        active: true
      },
      {
        id: uuid.v4(),
        sender: 'al capone',
        preview: 'give me your pizza',
        active: false
      },
      {
        id: uuid.v4(),
        sender: 'al calzone',
        preview: 'are you italian my man',
        active: false
      },
      {
        id: uuid.v4(),
        sender: 'al lasagna',
        preview: 'I think you still owe me from Costco bro',
        active: false
      }
    ],
    numbers: ["4321"],
    names: ["Alan Kang"],
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

  componentDidMount() {
    var matches = document.querySelectorAll(".active");
    // matches.forEach(
    //   onClick(
    //       console.log('test')
    //   )
    // )
  }

  makeConvoList = () => {
    const { selected, convos } = this.state;
    return convos.map(convo => {
      const background = selected === convo ? "yellow" : "green";
      return (
        <div
          style={{ background, border: "1px solid black" }}
          onClick={() => this.setState({ selected: convo })}
        >
          {convo}
        </div>
      );
    });
  };

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div>
            <h1 className="heading" style={{ marginLeft: ".4em"}}>Messages</h1>
            <ConvoList convos={this.state.convos} />
          </div>
          
          <div>
            <h1 id="heading" className="heading">Recipients</h1>
            <div className="messageList">
              <MessageList messages={this.state.messages} />
            </div>
            <SendMessage sendMessage={this.sendMessage} />
          </div>
        </div>
      </div>
		);
  }
}

export default App
