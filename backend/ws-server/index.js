import { WebSocketServer, WebSocket } from "ws";
import { ConnectAction, SendMessage, updateMap } from "./handling/functions";

const liveMap = new Map();
const wss = new WebSocketServer({port: 8080});

wss.on("connection", (socket) => {
  
    
    socket.on("message", async (e) => {

        const parsedMessage = JSON.parse(e);

        if(parsedMessage.type == "Connect") {
            ConnectAction(liveMap, parsedMessage, socket);
        }

        else if(parsedMessage.type == "Send_Message") {

            const savedMessage = SendMessage(parsedMessage);
            const broadcasting = {
                message: {
                    type: "New_Message",
                    id: savedMessage.id,
                    content: (await savedMessage).content,
                    senderId: (await savedMessage).senderId,
                    roomId: (await savedMessage).roomId,
                    createdAt: (await savedMessage).createdAt
                }
            }

            liveMap.forEach((ids, currSocket) => {
                if(ids.roomId == parsedMessage.roomId &&  currSocket != socket && currSocket.readyState === WebSocket.OPEN) {
                    currSocket.send(JSON.stringify(broadcasting));
                }
            });
        }
    })
})