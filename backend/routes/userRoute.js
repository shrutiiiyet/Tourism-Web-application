import express, { Router } from express;
import {signin, signup} from '../routeHandlers/userHandler';

let userRouter = Router();

userRouter.post('signup', signup());
userRouter.post('signin', signin());

export default userRouter;