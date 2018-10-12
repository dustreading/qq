var WebSocketClient = require('websocket').client;

var client = new WebSocketClient();

client.on('connectFailed', function (err) {
  console.log('Connect Error: ' + err.toString());
});

client.on('connect', function (connection) {
  console.log('WebSocket Client Connected');
  connection.on('err', function (err) {
    console.lod('Connection Error: ' + err.toString());
  });
  connection.on('close', function () {
    console.log('echo-protocol Connection Closed');
  });
  connection.on('message', function (message) {
    if (message.type === 'utf8') {
      console.log("Received: '" + message.utf8Data + "'");
    }else{
      console.log("Received: '" + message.toString() + "'");
    }
  });

  function sendNumber() {
    if (connection.connected) {
      var number = Math.round(Math.random() * 0xFFFFFF);
      connection.sendUTF(number.toString());
      setTimeout(sendNumber, 1000);
    }
  }
  //sendNumber();
});

client.connect('ws://localhost:49632/');
