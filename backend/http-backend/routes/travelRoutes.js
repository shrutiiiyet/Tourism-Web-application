import express from 'express'
import getTravelPlans from '../routeHandlers/travelHandler';
import { middleware } from './middleware';
import { CreateRoom, joinRoom, leaveRoom } from '../routeHandlers/roomHandler.js';

const travelRouter = express.Router();

travelRouter.get('/:filter', getTravelPlans);

travelRouter.use(middleware);

userRouter.post('/create', CreateRoom);
userRouter.post('/join', joinRoom);
userRouter.post('/leave', leaveRoom);

export default travelRouter