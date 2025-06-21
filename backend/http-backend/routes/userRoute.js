import express from 'express';
import {signin, signup} from "../routeHandlers/userHandler.js"

let userRouter = express.Router();

userRouter.post('/signup', signup);
userRouter.post('/signin', signin);

export default userRouter;