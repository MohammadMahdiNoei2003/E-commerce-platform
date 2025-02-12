import { Request, Response } from "express";
import { CartService } from "../../business/services/Cart.Service";

export class CartController {
    private cartService: CartService;

    constructor() {
        this.cartService = new CartService();
    }

    async getCart(req: Request, res: Response): Promise<Response> {
        const userId = req.params.userId;
        const cart = await this.cartService.getCart(Number(userId));
        return res.status(200).json(cart);
    }

    async addItem(req: Request, res: Response): Promise<Response> {
        const { userId, productId, quantity } = req.body;
        const updatedCart = await this.cartService.addItem(userId, productId, quantity);
        return res.status(201).json(updatedCart);
    }

    async updateItemQuantity(req: Request, res: Response): Promise<Response> {
        const { userId, productId, quantity } = req.body;
        const updateItemCart = await this.cartService.updateItemQuantity(userId, productId, quantity);
        return res.status(201).json(updateItemCart);
    }

    async removeItem(req: Request, res: Response): Promise<Response> {
        const cartItemId = req.params.cartItemId;
        await this.cartService.removeItem(Number(cartItemId));
        console.log(`Item with id ${cartItemId} removed from cart`);
        return res.status(204).send();
    }

    async clearCart(req: Request, res: Response): Promise<Response> {
        const userId = req.params.userId;
        await this.cartService.clearCart(Number(userId));
        console.log(`Cart for user with id ${userId} cleared`);
        return res.status(204).send();
    }
}