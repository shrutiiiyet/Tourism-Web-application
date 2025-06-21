import { client } from "../../../db/prisma";
import { WebSocket } from "ws";

export const SendMessage = async(parsedMessage) => {

    const { userId, roomId, content } = parsedMessage;
            const savedMessage = await client.message.create({
                data: {
                    content,
                    sender: { 
                        connect: { 
                            id: userId 
                        } 
                    },
                    room: { 
                        connect: {
                            id: roomId 
                            } 
                        }
                },
                include: {
                    sender: true
                }
    });
}


export const ConnectAction = (map, parsedMessage, socket) => {

    const { userId, roomId } = parsedMessage;
    liveMap.set(wss, {
        userId,
        roomId
    });
    
    liveMap.forEach((ids, currSocket) => {
        if (ids.roomId === roomId && currSocket !== socket && currSocket.readyState === WebSocket.OPEN) 
        {
            currSocket.send(JSON.stringify({
            type: 'USER_JOINED',
            userId
            }));
        }
    });
}