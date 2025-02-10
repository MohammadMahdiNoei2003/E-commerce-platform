import { AddressRepository } from "../../data/repositories/Address.Repository";

export class AddressService {
    private addressRepository: AddressRepository;

    constructor() {
        this.addressRepository = new AddressRepository()
    }

    async addAddress(userId: number, cityId: number, address: string, postalCode: string) {
        return await this.addressRepository.createAddress(userId, cityId, address, postalCode);
    }

    async getAddresses(userId: number) {
        const addresses = await this.addressRepository.getUserAddress(userId);
        return addresses.map((address) => ({
            id: address.id,
            fullAddress: `${address.address}, ${address.city.name}, ${address.city.state.name}, Postal Code: ${address.postalCode}`
        }));
    }

    async editAddress(addressId: number, data: {address?: string, postalCode?: string}) {
        return await this.addressRepository.updateAddress(addressId, data);
    }

    async removeAddress(addressId: number) {
        return await this.addressRepository.deleteAddress(addressId);
    }

    async getAllStates() {
        return await this.addressRepository.getStates();
    }

    async getCitiesForState(stateId: number) {
        return await this.addressRepository.getCitiesByState(stateId);
    }
}