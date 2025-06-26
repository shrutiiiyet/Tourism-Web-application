import express from 'express';
import {getMyRooms, signin, signup } from "../routeHandlers/userHandler.js"
import { middleware } from './middleware.js';

let userRouter = express.Router();

userRouter.post('/signup', signup);
userRouter.post('/signin', signin);

userRouter.use(middleware);
userRouter.get('/rooms', getMyRooms);


export default userRouter;