import express from 'express';
import userRouter from './routes/userRoute.js';
import chatRouter from './routes/chatRoutes.js'

const app = express();

app.use(express.json());
app.use('/user', userRouter);
app.use('/chat', chatRouter);
app.listen(3000);