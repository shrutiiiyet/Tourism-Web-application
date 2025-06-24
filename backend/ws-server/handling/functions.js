import { client } from "../../../db/prisma";
import { WebSocket } from "ws";

export const SendMessage = async(parsedMessage) => {

    const { userId, roomId, content } = parsedMessage;
    const savedMessage = await client.Message.create({
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

    return savedMessage;
}


export const ConnectAction = (liveMap, parsedMessage, socket) => {

    const { userId, roomId } = parsedMessage;
    if (!liveMap.has(userId)) {
        liveMap.set(userId, new Map());
    }

    const userRooms = liveMap.get(userId);

    if (!userRooms.has(roomId)) {
        userRooms.set(roomId, new Set());
    }

    userRooms.get(roomId).add(socket);
    
    liveMap.forEach((roomMap, currUser) => {
     
        if (roomMap.has(roomId)) {
            const socketSet = roomMap.get(roomId);

            socketSet.forEach(currSocket => {
                if (currSocket !== socket && currSocket.readyState === WebSocket.OPEN) {
                    currSocket.send(JSON.stringify({
                        type: 'USER_JOINED',
                        userId 
                    }));
                }
            });
    }
    });
}