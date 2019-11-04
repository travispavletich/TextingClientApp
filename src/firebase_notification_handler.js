// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const { ipcRenderer } = require ('electron')
const request = require('request')


const {
  START_NOTIFICATION_SERVICE,
  NOTIFICATION_SERVICE_STARTED,
  NOTIFICATION_SERVICE_ERROR,
  NOTIFICATION_RECEIVED,
  TOKEN_UPDATED,
} = require ('electron-push-receiver/src/constants')



// Listen for service successfully started
ipcRenderer.on(NOTIFICATION_SERVICE_STARTED, (_, token) => {
  
  let url = "http://localhost:5000/client/token";

  var paramsObject = {token: token};

  console.log(paramsObject);

  request({url: url, qs:paramsObject}, function (err, response, body) {
	  console.log(body);
  });
  
  console.log('service successfully started', token)
  request('http://localhost:5000/Client/Token', function (error, response, body) {
  });
  startUp();
})

// Handle notification errors
ipcRenderer.on(NOTIFICATION_SERVICE_ERROR, (_, error) => {
  console.log('notification error', error)
})

// Send FCM token to backend
ipcRenderer.on(TOKEN_UPDATED, (_, token) => {
  console.log('token updated', token)
})

// Display notification
ipcRenderer.on(NOTIFICATION_RECEIVED, (_, serverNotificationPayload) => {
  // check to see if payload contains a body string, if it doesn't consider it a silent push
  if(serverNotificationPayload.data.NotificationType === "MessageList"){
    var messages = JSON.parse(serverNotificationPayload.data.Messages);
    console.log(messages);
    var i;
    for (i = 0; i < messages.length; i++) {
      var container = document.createElement('div');
      var header = document.createElement('h3');
      var node = document.createTextNode(messages[i].Sender);
      header.appendChild(node);
      container.appendChild(header);
      var body = document.createElement('p');
      var node2 = document.createTextNode(messages[i].MessageBody);
      body.appendChild(node2);
      container.appendChild(body);

      var messageArea = document.getElementById("messageArea");
      messageArea.appendChild(container);
    }
    
  }
  else if(serverNotificationPayload.data.NotificationType === "ConversationList"){
    getConversationList();
  }
  else if(serverNotificationPayload.data.NotificationType === "RetrieveMessageList"){
    getMessageList();
  }
  else if(serverNotificationPayload.data.NotificationType === "NewMessageRecieved"){
    var message = JSON.parse(serverNotificationPayload.data.Message);
    console.log(message);
    addNewMessage(message);
  }
  else{
    console.log(serverNotificationPayload.data.NotificationType);
  }
  console.log("Notification received");
  console.log(serverNotificationPayload);
});

// Start service
const senderId = '1043691289922' // <-- replace with FCM sender ID from FCM web admin under Settings->Cloud Messaging
console.log('starting service and registering a client')
ipcRenderer.send(START_NOTIFICATION_SERVICE, senderId)

function startUp(){
  //console.log("start-up");
  requestConversationList();
}
function requestConversationList(){
  request('http://localhost:5000/Client/RetrieveConversations', function (error, response, body) {});
}
function requestInitialMessages(){
  request('http://localhost:5000/Client/RetrieveMessageList?conversationID=1', function (error, response, body) {});
}
function getConversationList(){
  request('http://localhost:5000/Client/ConversationList', function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.

    console.log(JSON.parse(body));
    var conversations = JSON.parse(body).data.Conversations;
    window.updateConversations(conversations);
    requestInitialMessages();
  });
}
function getMessageList(){
  request('http://localhost:5000/Client/MessageList?conversationID=1', function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.

    var messages = JSON.parse(body).data.Messages;
    console.log(JSON.parse(body));
    window.updateMessages(messages);
  });
}
function addNewMessage(message){
  console.log(message);
  window.recieveNewMessage(message);
}