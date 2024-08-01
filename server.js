const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (ws) => {
    ws.on('message', (message) => {
        // Skicka meddelandet till alla anslutna klienter
        server.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.send('Välkommen till chatten!');
});

console.log('WebSocket server körs på ws://localhost:8080');
