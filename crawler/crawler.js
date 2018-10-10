const WebSocket = require('ws');
const fs = require('fs');
const ws = new WebSocket('ws://localhost:49632/');
ws.on('message', data => {
    data = JSON.parse(data);
    if(data.event === 'message') {
        ws.send(JSON.stringify({
            method: 'sendMessage',
            params: {...data.params}
        }));
    }
    let content = data.params.content;
    console.log(content);
    fs.writeFile('./crawler/crawler.xml', content, function(err) {});
});
