import React, {Component} from "react";
import './Messages';
import Top from './Top';
import InputSection from './InputSection';
import './App.css';


class App extends Component{
  constructor(){
    super();
    this.state = [
      {
        avatar: 'alan',
        message: 'oh my lord',
      },
      {
        avatar: 'me',
        message: 'honhonhon'
      }
    ]
  }

  render() {
    return(
      <div className="container">
        <Top />
        <messages messages={this.state.messages}/>
        <InputSection />
      </div>
    )
  }
}

export default App
