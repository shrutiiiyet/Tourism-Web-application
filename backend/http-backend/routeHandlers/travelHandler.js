import { filterByDate, 
    filterByDateAndDestination, 
    filterByDateAndTime, 
    filterByDestination, 
    filterByTimeAndDestination, 
    filterByTimeDateDestination, 
    filterByTimeSlot
 } from "../../../db/prisma/services/roomService";

export const getTravelPlans = async(req, res) => {

    const destination = req.params.destination;
    const timeSlot = req.params.timeSlot;
    const date = req.params.date;

    if(destination && !timeSlot && !date) {
        const plans = filterByDestination(destination);
        res.json({
            plans
        })
        return;
    }

    if(timeSlot && !destination && !date) {
        let plans = filterByTimeSlot(timeSlot)

        res.status(200).json({
            plans: plans
        })
        return;
    }

    if(!destination && !timeSlot && date) {
        let plans = filterByDate(date);

        res.json({
            plans: plans
        })
        return;
    }

    if(destination && timeSlot && !date) {
        let plans = filterByTimeAndDestination(timeSlot, destination);

        res.json({
            plans: plans
        })
        return;
    }

    if(!destination && timeSlot && date) {
        let plans = filterByDateAndTime(date, timeSlot)

        res.json({
            plans: plans
        })
        return;
    }

    if(destination && !timeSlot && date) {
        let plans = filterByDateAndDestination(date, destination);

        res.json({
            plans: plans
        })
        return;
    }

    if(destination && timeSlot && date) {
        let plans = filterByTimeDateDestination(timeSlot, date, destination);

        res.json({
            plans: plans
        })
        return;
    }
}