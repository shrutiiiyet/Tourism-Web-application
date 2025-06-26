import express from 'express';
import { getMessages, connectPeople } from "../routeHandlers/chatHandler.js"
import { middleware } from './middleware.js';

const chatRouter = express.Router();

chatRouter.use(middleware);

chatRouter.get('/:roomId', getMessages);
chatRouter.post('/connect', connectPeople); //to add in the group

export default chatRouter;