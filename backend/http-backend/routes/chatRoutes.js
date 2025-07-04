import express from 'express';
import { getMessages } from "../routeHandlers/chatHandler.js"
import { middleware } from '../utils/middleware.js';

const chatRouter = express.Router();

chatRouter.use(middleware);

chatRouter.get('/:roomId', getMessages);

export default chatRouter
