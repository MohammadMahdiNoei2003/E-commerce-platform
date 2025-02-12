import { CartRepository } from "../../data/repositories/Cart.Repository";
import { Cart, CartItem, Prisma } from "@prisma/client";

export class CartService {
    private cartRepository: CartRepository;

    constructor() {
        this.cartRepository = new CartRepository();
    }

    async getCart(userId: number): Promise<Cart | null> {
        return await this.cartRepository.getCart(userId);
    }

    async addItem(userId: number, productId: number, quantity: number): Promise<CartItem> {
        if (quantity <= 0) {
            throw new Error("Quantity must be grater than Zero.");
        }
        
        return await this.cartRepository.addItem(userId, productId, quantity);
    }

    async updateItemQuantity(userId: number, productId: number, quantity: number): Promise<CartItem> {
        if (quantity <= 0) {
            throw new Error("Quantity must be grater than Zero.");
        }

        return await this.cartRepository.updateItemQuantity(userId, productId, quantity);
    }

    async removeItem(cartItemId: number): Promise<void> {
        await this.cartRepository.removeItem(cartItemId);
    }

    async clearCart(userId: number): Promise<void> {
        await this.cartRepository.clearCart(userId);
    }
}