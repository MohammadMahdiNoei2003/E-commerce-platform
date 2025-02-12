import { PaymentRepository } from "../../data/repositories/Payment.Repository";
import { PaymentStatus } from "@prisma/client";
import { paymentGatewayConfig } from "../../utils/PaymentConfig";
import ZarinPalCheckout from "zarinpal-checkout";
import axios from "axios";

export class PaymentService {
    private paymentRepository: PaymentRepository;
    private zarinpal: any;

    constructor() {
        this.paymentRepository = new PaymentRepository();
        this.zarinpal = ZarinPalCheckout.create("12345678-abcd-1234-efgh-1234567890ab", true);
    }

    async initialPayment(userId: number, orderId: number, amount: number, method: string) {
        const payment = await this.paymentRepository.createPayment(userId, orderId, amount, method);

        try {
            const response = await axios.post(`${paymentGatewayConfig.providerUrl}/create-payment`, {
                amount,
                method,
                callbackUrl: `http://localhost:3000/payment/callback/${payment.id}`,
                Description: "Purchase Order Payment",
                Email: "test@example.com",
                Mobile: "09120000000",
                apiKey: "12345678-abcd-1234-efgh-1234567890ab"

            });

            if (response.data.status === 100) {
                const gatewayUrl = `https://www.zarinpal.com/pg/StartPay/${response.data.authority}`;
                return { payment, gatewayUrl };
            } else {
                throw new Error("ZarinPal payment request failed.");
            }

        } catch (error) {
            await this.paymentRepository.updatePaymentStatus(payment.id, PaymentStatus.FAILED);
            throw new Error("Payment gateway request failed.");
        }
    }

    async verifyPayment(paymentId: number, authority: string) {
        const payment = await this.paymentRepository.getPaymentById(paymentId);
        if (!payment) {
            throw new Error("Payment not found.");
        }

        try {
            const response = await this.zarinpal.PaymentVerification({
                Amount: payment.amount,
                Authority: authority,
            });

            const status = response.status === 100 ? PaymentStatus.SUCCESS : PaymentStatus.FAILED;
            return this.paymentRepository.updatePaymentStatus(paymentId, status, response.RefID);
        } catch (error) {
            throw new Error("Payment verification failed");
        }
    }
}