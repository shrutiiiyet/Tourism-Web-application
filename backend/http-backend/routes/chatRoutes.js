import express from 'express';
import {signin, signup, getMessages } from "../routeHandlers/userHandler.js"
import { middleware } from './middleware.js';

const chatRouter = express.Router();

chatRouter.use(middleware);

chatRouter.get(':roomId', getMessages);