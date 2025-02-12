import prisma from "../../data/repositories/prisma/prismaClient";
import { OrderRepository } from "../../data/repositories/Order.Repository";
import { CartRepository } from "../../data/repositories/Cart.Repository";
import { Order, OrderItem, OrderStatus } from "@prisma/client";

export class OrderService {
    private orderRepository: OrderRepository;
    private cartRepository: CartRepository;

    constructor() {
        this.orderRepository = new OrderRepository();
        this.cartRepository = new CartRepository();
    }

    async createOrderFromCart(userId: number): Promise<Order | null> {
        const cartItems = await this.cartRepository.getCartItemsByUserId(userId);
    
        if (cartItems.length === 0) {
            throw new Error("Cart is empty.");
        }
    
        const cartItemsWithProducts = await Promise.all(
            cartItems.map(async (item) => {
                const product = await prisma.product.findUnique({
                    where: { id: item.productId },
                });
    
                if (!product) {
                    throw new Error(`Product with ID ${item.productId} not found.`);
                }
    
                return { ...item, product };
            })
        );
    
        const totalAmount = cartItemsWithProducts.reduce((sum, item) =>
            sum + item.quantity * (item.product?.price || 0),
        0);
    
        const newOrder = await this.orderRepository.createOrder(userId, totalAmount, "PENDING");
    
        for (const cartItem of cartItemsWithProducts) {
            await this.orderRepository.addOrderItem(
                newOrder.id, 
                cartItem.productId, 
                cartItem.quantity, 
                cartItem.product.price 
            );
        }
    
        await this.cartRepository.clearCart(userId);
        return newOrder;
    }

    async getOrderById(orderId: number): Promise<Order | null> {
        return await this.orderRepository.getOrderById(orderId);
    }

    async getAllOrders(): Promise<Order[]> {
        return await this.orderRepository.getAllOrders();
    }

    async updateOrderStatus(orderId: number, status: OrderStatus): Promise<Order | null> {
        return await this.orderRepository.updateOrderStatus(orderId, status);
    }

    async deleteOrder(orderId: number): Promise<void> {
        await this.orderRepository.removeAllOrderItems(orderId)
    }

    async deleteOrderItem(orderItemId: number): Promise<OrderItem | null> {
        return await this.orderRepository.removeOrderItem(orderItemId);
    }
    
}