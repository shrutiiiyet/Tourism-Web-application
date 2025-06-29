import { addMessage } from "../../../db/prisma/services/messageService";


export const SendMessage = async(parsedMessage) => {

    const { userId, roomId, content } = parsedMessage;
    const savedMessage = addMessage(roomId, userId, content);
    return savedMessage;
}