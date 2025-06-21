import express from 'express';
import {signin, signup, getMessages } from "../routeHandlers/userHandler.js"
import { middleware } from './middleware.js';

let userRouter = express.Router();

userRouter.post('/signup', signup);
userRouter.post('/signin', signin);

userRouter.use(middleware);


export default userRouter;