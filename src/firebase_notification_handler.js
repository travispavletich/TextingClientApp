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
  console.log("Notification received");
  console.log(serverNotificationPayload);
});

// Start service
const senderId = '1043691289922' // <-- replace with FCM sender ID from FCM web admin under Settings->Cloud Messaging
console.log('starting service and registering a client')
ipcRenderer.send(START_NOTIFICATION_SERVICE, senderId)

