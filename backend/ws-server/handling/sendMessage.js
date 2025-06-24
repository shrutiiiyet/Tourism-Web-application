import { client } from "../../../db/prisma";


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