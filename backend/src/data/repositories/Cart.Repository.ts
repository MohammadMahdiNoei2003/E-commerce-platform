import { Cart, CartItem } from "@prisma/client";
import prisma from "./prisma/prismaClient";

export class CartRepository {
    async getCart(userId: number): Promise<Cart | null> {
        return await prisma.cart.findFirst({
            where: { userId },
            include: {
                cartItems: {
                    select: {
                        quantity: true,
                        product: {
                            select: {
                                id: true,
                                name: true,
                                description: true,
                                price: true,
                            }
                        }
                    }
                }
            }
        });
    }

    async getCartItemsByUserId(userId: number): Promise<CartItem[]> {
        const cart = await prisma.cart.findUnique({
            where: { userId },
            include: { cartItems: { include: { product: true } } }
        });
    
        if (!cart) return []; 
        console.log(cart.cartItems);
    
        return cart.cartItems;
    }

    async addItem(userId: number, productId: number, quantity: number): Promise<CartItem> {
        let cart = await prisma.cart.findUnique({ where: { userId } });

        if (!cart) {
            cart = await prisma.cart.create({
                data: { userId, isActive: true, isDelete: false }
            });
        }

        return await prisma.cartItem.upsert({
            where: {
                cartId_productId: {
                    cartId: cart.id,
                    productId
                }
            },
            update: {
                quantity: { increment: quantity }
            },
            create: {
                cartId: cart.id,
                productId,
                quantity
            },
        });
    }

    async updateItemQuantity(userId: number, productId: number, quantity: number): Promise<CartItem> {
        const cart = await prisma.cart.findUnique({ where: { userId } });

        if (!cart) {
            throw new Error("Cart not found.");
        }

        return await prisma.cartItem.update({
            where: {
                cartId_productId: {
                    cartId: cart.id,
                    productId
                }
            },
            data: { quantity }
        });
    }

    async removeItem(cartItemId: number): Promise<void> {
        await prisma.cartItem.delete({ where: { id: cartItemId } });
    }

    async clearCart(userId: number): Promise<void> {
        await prisma.cart.delete({ where: { userId } });
    }
}