import React, {Component} from "react";
import MessageList from './components/MessageList';
import ConvoList from './components/ConvoList';
import Top from './Top';
import InputSection from './InputSection';

import './App.css';


class App extends Component{
  state = {
    messages:[
      {
        id: 1,
        sender: 'alan',
        message: 'oh my lord',
        self: false
      },
      {
        id: 2,
        sender: 'me',
        message: 'honhonhon',
        self: true
      },
      {
        id: 3,
        sender: 'me',
        message: 'skrtskrt',
        self: true
      },
      {
        id: 2,
        sender: 'alan',
        message: 'N O !',
        self: false
      },
    ],
    convos: [
      {
        id: 1,
        sender: 'alan',
        preview: 'N O !',
        active: true
      },
      {
        id: 2,
        sender: 'al capone',
        preview: 'give me your pizza',
        active: false
      },
      {
        id: 3,
        sender: 'al calzone',
        preview: 'are you italian my man',
        active: false
      },
      {
        id: 4,
        sender: 'al lasagna',
        preview: 'I think you still owe me from Costco',
        active: false
      }
    ]
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
          </div>
        </div>
      </div>
		);
  }
}

export default App
