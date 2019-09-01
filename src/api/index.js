import express from 'express';
import { userRouter } from './resources/user/user.router';

export const restRouter = express.Router();
restRouter.use('/users', userRouter);
