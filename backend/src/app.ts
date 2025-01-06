import express from 'express';

import userRouter from './ui/routes/User.Routes';
import authRouter from './ui/routes/Auth.Routes';
import productRouter from './ui/routes/Product.Routes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(express.json());

app.use('/users', userRouter);
app.use('/auth', authRouter);
app.use('/product', productRouter);

app.use(errorHandler);

export default app;


