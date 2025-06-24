import { client } from "../../../db/prisma";


export const getMessages = async (req, res) => {

    const messages = await client.message.findMany({
        where: {
            roomId: roomId
        },
        orderBy: {
            createdAt: 'desc'
        },
        take: 100,
        include: {
            sender: {
                select: {
                    id: true,
                    name: true,
                    profileImage: true
                }
            }
        }
    });

    return messages;
}