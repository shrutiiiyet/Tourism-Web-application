import express from 'express'
import getTravelPlans from '../routeHandlers/travelHandler';

const travelRouter = express.Router();

travelRouter.get('/:filter', getTravelPlans);

export default travelRouter