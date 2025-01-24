import express from 'express';

import userRouter from './presentation/routes/User.Routes';
import authRouter from './presentation/routes/Auth.Routes';
import productRouter from './presentation/routes/Product.Routes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(express.json());

app.use('/users', userRouter);
app.use('/auth', authRouter);
app.use('/product', productRouter);

app.use(errorHandler);

export default app;


