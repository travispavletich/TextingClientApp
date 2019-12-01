import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { colors } from "../vars_colors"
import "../scss/Convo.scss"


export class Convo extends Component {
    handleClick(){
        // this.setState(state =>({
        //     this.props.convo.active= !
        // }

        // ))
    }

    requestMessageList = () => {
        var id = this.props.convo.id;
        const request = require('request');
        if(id != window.activeConversationId){
            window.loadingMessages();
            var reqURL = 'http://localhost:5000/Client/RetrieveMessageList?conversationID='+id;
            //console.log(reqURL);
            request(reqURL, function (error, response, body) {
                //console.log(body);
                //console.log(response.resultMessage);
                if(response.resultMessage === "Successfully retrieved messages from server"){
                    console.log("testing");
                    //window.updateActiveConversation(id);
                }
                
            });
        }
    }

    render() {
        const { sender, preview, active } = this.props.convo;
        let convoStyle = '';
    
        // set style based on active or not
        if (active) { convoStyle += 'active'; }
        else { convoStyle += 'inactive'; }        

        return (
            <div className={convoStyle} onClick={(e) => this.requestMessageList(e)} >
                <p style = {{ fontWeight: '300' }}>
                    { sender }
                </p>
                <div style={{ fontWeight: 'normal'}}>
                    { preview } 
                </div>
            </div>
        )
    }
}

// PropTypes
Convo.propTypes = {
    convo: PropTypes.object.isRequired
}

export default Convo;
