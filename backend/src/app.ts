import express from 'express';

import userRouter from './presentation/routes/User.Routes';
import authRouter from './presentation/routes/Auth.Routes';
import productRouter from './presentation/routes/Product.Routes';
import categoryRouter from './presentation/routes/Category.Routes';
import addressRouter from './presentation/routes/Address.Routes';
import cartRouter from './presentation/routes/Cart.Routes';
import orderRouter from "./presentation/routes/Order.Routes";
import paymentRouter from "./presentation/routes/Payment.Routes";
import shippingRouter from "./presentation/routes/Shipping.Routes";

import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(express.json());

app.use('/users', userRouter);
app.use('/auth', authRouter);
app.use('/product', productRouter);
app.use('/category', categoryRouter);
app.use('/address', addressRouter);
app.use('/cart', cartRouter);
app.use('/order', orderRouter);
app.use('/payment', paymentRouter);
app.use('/shipping', shippingRouter);

app.use(errorHandler);

export default app;


