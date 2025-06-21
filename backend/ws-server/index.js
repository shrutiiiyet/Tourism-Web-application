import { WebSocketServer, WebSocket } from "ws";

let allSockets = [];

const wss = new WebSocketServer({port: 8080});

// inputs {
    // type : "join"/"chat",
    // payload: {
    //     "roomId"/"message"
    // }
//}
wss.on("connection", (socket) => {
  
    
    socket.on("message", (e) => {

        const parsedMessage = JSON.parse(e);

        if(parsedMessage.type == "connect") {
            allSockets.push ({
                socket,
                room: parsedMessage.payload.roomId
            })
        }

        if(parsedMessage.type == "chat") {

            let currentUserRoom = null;
             currentUserRoom = allSockets.find((x) => x.socket == socket).room;

            allSockets.forEach((x) => {
                if(x.room == currentUserRoom) {
                    x.socket.send(parsedMessage.payload.message);
                }
            })
        }
    })
})