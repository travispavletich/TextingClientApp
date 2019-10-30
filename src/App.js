import React, {Component} from "react";
import MessageList from './components/MessageList';
import Top from './Top';
import InputSection from './InputSection';

import './App.css';


class App extends Component{
  state = {
    messages:[
      {
        sender: 'alan',
        message: 'oh my lord',
      },
      {
        sender: 'me',
        message: 'honhonhon'
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>oop</h1>
        <MessageList messages={this.state.messages} />
      </div>
		);
  }
}

export default App
