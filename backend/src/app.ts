import express from 'express';

import userRouter from './ui/routes/User.Routes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(express.json());

app.use('/users', userRouter);

app.use(errorHandler);

export default app;


