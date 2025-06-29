import { WebSocketServer } from "ws";
import { SendMessage } from "./handling/sendMessage";
import { ConnectAction } from "./handling/connection";
import { broadcastMessage } from "./handling/broadcasting";

const liveMap = new Map(); //Map<userId, Map<roomId, Set<socketId>>
const wss = new WebSocketServer({port: 8080});

wss.on("connection", (socket) => {
  
    
    socket.on("message", async (e) => {

        const parsedMessage = JSON.parse(e);

        if(parsedMessage.type === "Connect") {
            ConnectAction(liveMap, parsedMessage, socket);
        }

        else if(parsedMessage.type == "Send_Message") {

            const savedMessage = SendMessage(parsedMessage);
            broadcastMessage(savedMessage, parsedMessage, liveMap, socket);
            
        }
    })
})