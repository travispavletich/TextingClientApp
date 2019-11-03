import React, {Component} from "react";
import './InputSection.css'
import { runInNewContext } from "vm";

class InputSection extends Component{
    
    sendMessage(){
        const request = require('request');
        const uuidv1 = require('uuid/v1');
        var url = "hhtp://localhost:5000/Client/SendMessage";
        var message = document.getElementById("inputMessage").value;
        var guid = uuidv1();
        var data = {
            "Message": message,
            "Recipients": ["1234567890"],
            "MessageId": guid
        }

        request.post({url: url, qs:data}, function(err, response, body){

        });
        window.sendNewMessage(message);
    }

    render() {
        return(
            <div className="footer">
                <input id="inputMessage"></input>
                <button onClick={this.sendMessage.bind(null)}>Send</button>
            </div>
        )
    }
}

export default InputSection