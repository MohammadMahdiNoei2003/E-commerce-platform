import prisma from "./prisma/prismaClient";
import { Order, OrderStatus, OrderItem } from "@prisma/client";

export class OrderRepository {
    async createOrder(userId: number, totalAmount: number, status: OrderStatus = "PENDING"): Promise<Order> {
        return await prisma.order.create({
            data: { userId, totalAmount, status },
        });
    }

    async getOrderById(orderId: number): Promise<Order | null> {
        return await prisma.order.findUnique({
            where: { id: orderId },
            include: {
                orderItems: {
                    include: { product: true }
                },
                user: true
            },
        });
    }

    async getAllOrders(): Promise<Order[]> {
        return await prisma.order.findMany({
            include: { orderItems: true, user: true },
        });
    }

    async updateOrderStatus(orderId: number, status: OrderStatus): Promise<Order | null> {
        return await prisma.order.update({
            where: { id: orderId },
            data: { status },
        });
    }

    async deleteOrder(orderId: number): Promise<Order | null> {
        return await prisma.order.delete({
            where: { id: orderId }
        });
    }

    async addOrderItem(orderId: number, productId: number, quantity: number, priceAtOrder: number): Promise<OrderItem> {
        return await prisma.orderItem.create({
            data: { orderId, productId, quantity, priceAtOrder }
        });
    }

    async getOrderItemsByOrderId(orderId: number): Promise<OrderItem[]> {
        return await prisma.orderItem.findMany({
            where: { orderId },
            include: { product: true },
        });
    }

    async removeOrderItem(orderItemId: number): Promise<OrderItem | null> {
        return await prisma.orderItem.delete({
            where: { id: orderItemId }
        });
    }

    async removeAllOrderItems(orderId: number): Promise<void> {
        await prisma.orderItem.deleteMany({
            where: { orderId },
        });
    }
}