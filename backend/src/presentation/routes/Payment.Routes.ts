import { Router } from "express";
import { PaymentController } from "../controllers/Payment.controller";
import { asyncHandler } from "../../middlewares/asyncHandler";

const router = Router();
const paymentController = new PaymentController();

router.post('/create', asyncHandler(paymentController.createPayment.bind(paymentController)));
router.post('/callback/:paymentId', asyncHandler(paymentController.verifyPayment.bind(paymentController)));

export default router;