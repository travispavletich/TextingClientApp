import React, {Component} from "react";
import MessageList from './components/MessageList';
import ConvoList from './components/ConvoList';
import SendMessage from './SendMessage';

import './App.css';


class App extends Component{
  state = {
    messages:[
      {
        id: 1,
        sender: 'alan',
        text: 'oh my lord',
        number: '6098889999',
        self: false
      },
      {
        id: 2,
        sender: 'me',
        text: 'honhonhon',
        number: '1112223333',
        self: true
      },
      {
        id: 3,
        sender: 'me',
        text: 'skrtskrt',
        number: '1112223333',
        self: true
      },
      {
        id: 4,
        sender: 'alan',
        text: 'N O !',
        number: '6098889999',
        self: false
      },
    ],
    convos: [
      {
        id: 11,
        sender: 'alan',
        preview: 'N O !',
        active: true
      },
      {
        id: 12,
        sender: 'al capone',
        preview: 'give me your pizza',
        active: false
      },
      {
        id: 13,
        sender: 'al calzone',
        preview: 'are you italian my man',
        active: false
      },
      {
        id: 14,
        sender: 'al lasagna',
        preview: 'I think you still owe me from Costco',
        active: false
      }
    ]
  }

  // Send a new message
  sendMessage = (text) => {
    const newMessage = {
      id: 8,
      sender: 'me',
      text,
      number: '1112223333',
      self: true
    }
    this.setState( {messages: [...this.state.messages, newMessage]})
  }


  render() {
    const style_MessageList = {
      maxHeight: '100px',
      maxWidth: '95%',
      overflowY: 'scroll'
    };

    return (
      <div className="App">
        <div className="wrapper">
          <div>
            <h1>Convo List</h1>
            <ConvoList convos={this.state.convos} />
          </div>
          
          <div>
            <h1>This WOULD be alan's name</h1>
            <div style={style_MessageList}>
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
