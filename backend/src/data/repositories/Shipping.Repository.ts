import { Shipping, ShippingStatus } from "@prisma/client";
import prisma from "./prisma/prismaClient";

export class ShippingRepository {
    async createShipping(orderId: number, addressId: number): Promise<Shipping> {
        return await prisma.shipping.create({
            data: {
                orderId,
                addressId,
                status: "PENDING",
            },
        });
    }

    async getShippingById(shippingId: number): Promise<Shipping | null> {
        return await prisma.shipping.findUnique({
            where: {id: shippingId},
            include: { order: true, address: true}
        });
    }

    async getShippingByOrderId(orderId: number): Promise<Shipping | null> {
        return await prisma.shipping.findUnique({
            where: { orderId },
            include: { order: true, address: true },
        });
    }

    async updateShippingStatus(shippingId: number, status: ShippingStatus): Promise<Shipping | null> {
        return await prisma.shipping.update({
            where: { id: shippingId },
            data: { status },
        });
    }

    async updateTrackingNumber(shippingId: number, trackingNumber: string): Promise<Shipping | null> {
        return await prisma.shipping.update({
            where: { id: shippingId },
            data: { trackingNumber },
        });
    }

    async deleteShipping(shippingId: number): Promise<Shipping | null> {
        return await prisma.shipping.delete({
            where: { id: shippingId },
        });
    }
}