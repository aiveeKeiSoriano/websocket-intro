// const Websocket = require('ws')

const PORT = 3030;
// const server = new Websocket.Server({
//     port: PORT
// })

// server.on('connection', (socket) => {
//     console.log('Someone connected')
//     socket.on('message', (data) => {
//         console.log(data)
//         socket.send("It's very effective")
//     })
// })

const http = require("http").createServer();

const socket = require("socket.io");

const io = socket(http, { cors: { origin: "*" } });

io.on("connection", (socket) => {
    console.log("connected", socket.id);
    socket.on('message', (data) => {
        io.emit('message', `${socket.id.substr(0, 4)}:${data}`)
    })
});

http.listen(PORT, () => console.log("Listening"));
