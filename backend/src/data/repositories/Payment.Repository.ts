import { Payment, PaymentStatus } from "@prisma/client";
import prisma from "./prisma/prismaClient";

export class PaymentRepository {
    async createPayment(userId: number, orderId: number, amount: number, method: string): Promise<Payment> {
        return prisma.payment.create({
            data: {
                userId,
                orderId,
                amount,
                method: method as any,
                status: PaymentStatus.PENDING,
            },
        });
    }

    async updatePaymentStatus(paymentId: number, status: PaymentStatus, transactionId?: string): Promise<Payment> {
        return prisma.payment.update({
            where: { id: paymentId },
            data: { status, transactionId },
        });
    }

    async getPaymentById(paymentId: number): Promise<Payment | null> {
        return prisma.payment.findUnique({
            where: { id: paymentId }
        });
    }
}