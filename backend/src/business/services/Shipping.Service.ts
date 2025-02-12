import { ShippingStatus } from "@prisma/client";
import { ShippingRepository } from "../../data/repositories/Shipping.Repository";

export class ShippingService {
    private shippingRepository: ShippingRepository;

    constructor() {
        this.shippingRepository = new ShippingRepository();
    }

    async createShipping(orderId: number, addressId: number) {
        return await this.shippingRepository.createShipping(orderId, addressId);
    }

    async getShippingById(shippingId: number) {
        return await this.shippingRepository.getShippingById(shippingId);
    }

    async getShippingByOrderId(orderId: number) {
        return await this.shippingRepository.getShippingByOrderId(orderId);
    }

    async updateShippingStatus(shippingId: number, status: ShippingStatus) {
        return await this.shippingRepository.updateShippingStatus(shippingId, status);
    }

    async updateTrackingNumber(shippingId: number, trackingNumber: string) {
        return await this.shippingRepository.updateTrackingNumber(shippingId, trackingNumber);
    }

    async deleteShipping(shippingId: number) {
        return await this.shippingRepository.deleteShipping(shippingId);
    }
}