import client from "../../../db/prisma"

export const getTravelPlans = async(req, res) => {

    const destination = req.params.destination;
    const timeSlot = req.params.timeSlot;
    const date = req.params.date;

    if(destination && !timeSlot && !date) {
        let plans = await client.travelPlan.findMany({
            where: {
                destination
            }
        })

        res.json({
            plans: plans
        })
        return;
    }

    if(timeSlot && !destination && !date) {
        let plans = await client.travelPlan.findMany({
            where: {
                timeSlot: timeSlot
            }
        })

        res.status(200).json({
            plans: plans
        })
        return;
    }

    if(!destination && !timeSlot && date) {
        let plans = await client.travelPlan.findMany({
            where: {
                date
            }
        })

        res.json({
            plans: plans
        })
        return;
    }

    if(destination && timeSlot && !date) {
        let plans = await client.travelPlan.findMany({
            where: {
                destination,
                timeSlot
            }
        })

        res.json({
            plans: plans
        })
        return;
    }

    if(destination && !timeSlot && date) {
        let plans = await client.travelPlan.findMany({
            where: {
                destination,
                date
            }
        })

        res.json({
            plans: plans
        })
        return;
    }

    if(!destination && timeSlot && date) {
        let plans = await client.travelPlan.findMany({
            where: {
                timeSlot,
                date
            }
        })

        res.json({
            plans: plans
        })
        return;
    }

    if(destination && timeSlot && date) {
        let plans = await client.travelPlan.findMany({
            where: {
                destination,
                timeSlot,
                date
            }
        })

        res.json({
            plans: plans
        })
        return;
    }
}
export default getTravelPlans 