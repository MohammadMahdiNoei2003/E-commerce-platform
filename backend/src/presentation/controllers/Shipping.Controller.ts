import { Request, Response } from "express";
import { ShippingService } from "../../business/services/Shipping.Service";

export class ShippingController {
    private shippingService: ShippingService;

    constructor() {
        this.shippingService = new ShippingService();
    }

    async createShipping(req: Request, res: Response): Promise<Response> {
        try {
            const { orderId, addressId } = req.body;
            const shipping = await this.shippingService.createShipping(orderId, addressId);
            return res.status(201).json(shipping);
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getShippingById(req: Request, res: Response): Promise<Response> {
        try {
            const { shippingId } = req.params;
            const shipping = await this.shippingService.getShippingById(Number(shippingId));
            if (!shipping) {
                return res.status(404).json({ message: "Shipping not found" });
            }
            return res.json(shipping);
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getShippingByOrderId(req: Request, res: Response): Promise<Response> {
        try {
            const { orderId } = req.params;
            const shipping = await this.shippingService.getShippingByOrderId(Number(orderId));
            if (!shipping) {
                return res.status(404).json({ message: "Shipping not found for this order" });
            }
            return res.json(shipping);
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }

    async updateShippingStatus(req: Request, res: Response): Promise<Response> {
        try {
            const { shippingId } = req.params;
            const { status } = req.body;
            const updatedShipping = await this.shippingService.updateShippingStatus(Number(shippingId), status);
            if (!updatedShipping) {
                return res.status(404).json({ message: "Shipping not found" });
            }
            return res.json(updatedShipping);
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }

    async assignTrackingNumber(req: Request, res: Response): Promise<Response> {
        try {
            const { shippingId } = req.params;
            const { trackingNumber } = req.body;
            const updatedShipping = await this.shippingService.updateTrackingNumber(Number(shippingId), trackingNumber);
            if (!updatedShipping) {
                return res.status(404).json({ message: "Shipping not found" });
            }
            return res.json(updatedShipping);
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }

    async deleteShipping(req: Request, res: Response): Promise<Response> {
        try {
            const { shippingId } = req.params;
            const deletedShipping = await this.shippingService.deleteShipping(Number(shippingId));
            if (!deletedShipping) {
                return res.status(404).json({ message: "Shipping not found" });
            }
            return res.json({ message: "Shipping deleted successfully" });
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }
}