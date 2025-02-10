import { Request, Response } from "express";
import { AddressService } from "../../business/services/Address.Service";

export class AddressController {
    private addressService: AddressService;

    constructor() {
        this.addressService = new AddressService();
    }

    async createAddress(req: Request, res: Response): Promise<Response> {
        const { userId, cityId, address, postalCode } = req.body;
        const newAddress = await this.addressService.addAddress(userId, cityId, address, postalCode);
        return res.status(201).json(newAddress);
    }

    async getAddress(req: Request, res: Response): Promise<Response> {
        const { userId } = req.params;
        const addresses = await this.addressService.getAddresses(Number(userId));
        return res.status(200).json(addresses);
    }

    async updateAddress(req: Request, res: Response): Promise<Response> {
        const { addressId } = req.params;
        const { address, postalCode } = req.body;
        const updatedAddress = await this.addressService.editAddress(Number(addressId), { address, postalCode });
        return res.status(200).json(updatedAddress);
    }

    async deleteAddress(req: Request, res: Response): Promise<Response> {
        const { addressId } = req.params;
        await this.addressService.removeAddress(Number(addressId));
        return res.status(204).send();
    }

    async getStates(req: Request, res: Response): Promise<Response> {
        const states = await this.addressService.getAllStates();
        return res.status(200).json(states);
    }

    async getCities(req: Request, res: Response): Promise<Response> {
        const { stateId } = req.params;
        const cities = await this.addressService.getCitiesForState(Number(stateId));
        return res.status(200).json(cities);
    }
}