import { Request, Response } from "express";
import { PaymentService } from "../../business/services/Payment.Service";

export class PaymentController {
    private paymentService: PaymentService;

    constructor() {
        this.paymentService = new PaymentService();
    }

    async createPayment(req: Request, res: Response): Promise<Response> {
        const {userId, orderId, amount, method} = req.body;
        const payment = await this.paymentService.initialPayment(userId, orderId, amount, method);
        return res.status(201).json(payment);
    }

    async verifyPayment(req: Request, res: Response): Promise<Response> {
        const { transactionId } = req.body;
        const paymentId = parseInt(req.params.paymentId, 10);
        const updatedPayment = await this.paymentService.verifyPayment(paymentId, transactionId);
        return res.status(201).json(updatedPayment);
    }
}