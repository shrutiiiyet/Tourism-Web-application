import { WebSocket } from "ws";

export const broadcastMessage = async(savedMessage, parsedMessage, liveMap, socket) => {
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

    liveMap.forEach((roomMap, currUserId) => {
        if (roomMap.has(parsedMessage.roomId)) {
            const socketSet = roomMap.get(parsedMessage.roomId);

            socketSet.forEach(currSocket => {
                if (currSocket !== socket && currSocket.readyState === WebSocket.OPEN) {
                    currSocket.send(JSON.stringify(broadcasting));
                }
            });
        }
    });
}