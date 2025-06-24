import { client } from "../../../db/prisma";


export const getMessages = async (req, res) => {

    try {
        const roomId = req.params.roomId;
        const userId = req.id;
        const messages = await client.message.findMany({
            where: {
                roomId: roomId
            },
            orderBy: {
                createdAt: 'desc'
            },
            take: 100,
            include: {
                id: userId,
            }
        });

        res.json({
            messages: messages
        })
    }
    catch(e) {
        res.status(500).json ({
            message: "error fetching messages",
            error: e
        })
    }
}

export const connectPeople = async(req, res) => {

    try {
        const userId = req.id;
        const travelPlanId = req.body.travelPlanId;

        let room = await client.ConnectionRoom.findFirst ({
            where: {
                travelPlanId,
            }
        })

        if(!room) {
            room = await client.connectionRoom.create ({
                data: {
                    travelPlanId
                }
            })
        }

        const existingMember = await client.connectionMember.findFirst ({
            where: {
                userId: userId,
                roomId: room.id
            }
        })

        if(!existingMember) {
            await client.connectionMember.create({
                data: {
                    userId,
                    roomId: room.id
                }
            })
        }

        res.status(200).json ({
            roomId: room.id,
            message: "Connected to travel plan successfully!"
        })
    }
    catch(e) {
        res.status(500).json({
            message: "Something went wrong!",
            error: e
        })
    }
}