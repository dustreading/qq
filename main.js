const WebSocket = require('ws');
const fs = require('fs');
const ws = new WebSocket('ws://localhost:49632/');
let content = '';

fs.readFile('./draft.xml', function(err, data) {
  content = data.toString();
});

ws.on('message', data => {
  data = JSON.parse(data);
  console.log(data);
  ws.send(JSON.stringify({
    "method": "sendMessage",
    "params": {
      "type": 1,
      "group": "",
      "qq": data.params.qq,
      "content": content
    }
  }));
  console.log('success!');
});
