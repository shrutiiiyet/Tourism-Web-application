import express from 'express'
import { getTravelPlans } from '../routeHandlers/travelHandler.js';
import { middleware } from '../utils/middleware.js';
import { CreateRoom, joinRoom, leaveRoom } from '../routeHandlers/roomHandler.js';

const travelRouter = express.Router();

travelRouter.get('/:filter', getTravelPlans);

travelRouter.use(middleware);

travelRouter.post('/create', CreateRoom);
travelRouter.post('/join', joinRoom);
travelRouter.post('/leave', leaveRoom);

export default travelRouter