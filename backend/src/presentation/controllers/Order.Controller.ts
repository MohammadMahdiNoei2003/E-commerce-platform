import { Request, Response } from "express";
import { OrderService } from "../../business/services/Order.Service";
import { OrderStatus } from "@prisma/client";

export class OrderController {
    private orderService: OrderService;

    constructor() {
        this.orderService = new OrderService();
    }

    async createOrder(req: Request, res: Response): Promise<Response> {
        const userId = req.params.userId;
        const newOrder = await this.orderService.createOrderFromCart(Number(userId));
        return res.status(201).json(newOrder);
    }

    async getOrderById(req: Request, res: Response): Promise<Response> {
        const orderId = req.params.orderId;
        const order = await this.orderService.getOrderById(Number(orderId));
        if (!order) {
            return res.status(404).json({ error: "Order not found" });
        }
        return res.status(200).json(order);
    }

    async getAllOrders(req: Request, res: Response): Promise<Response> {
        const orders = await this.orderService.getAllOrders();
        if (!orders) {
            return res.status(404).json({ error: "Order not found" });
        }
        return res.status(200).json(orders);
    }

    async updateOrderStatus(req: Request, res: Response): Promise<Response> {
        const orderId = req.params.orderId;
        const status  = req.body;
        if (!Object.values(OrderStatus).includes(status)) {
            return res.status(400).json({ error: "Invalid order status" });
        }
        const updatedOrder = await this.orderService.updateOrderStatus(Number(orderId), status);
        if (!updatedOrder) {
            return res.status(404).json({ error: "Order not found" });
        }
        return res.status(201).json(updatedOrder);
    }

    async deleteOrder(req: Request, res: Response): Promise<Response> {
        const orderId = req.params.orderId;
        await this.orderService.deleteOrder(Number(orderId));
        return res.status(204).send();
    }

    async deleteOrderItem(req: Request, res: Response): Promise<Response> {
        const orderItemId = req.params.orderItemId;
        const deletedItem = await this.orderService.deleteOrderItem(Number(orderItemId));
        if (!deletedItem) {
            return res.status(404).json({ error: "Order item not found" });
        }
        return res.json(deletedItem);
    }
}