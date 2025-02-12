import prisma from "./prisma/prismaClient";

export class AddressRepository {
    async createAddress(userId: number, cityId: number, address: string, postalCode: string) {
        return await prisma.address.create({
            data: { userId, cityId, address, postalCode }
        });
    }

    async getUserAddress(userId: number) {
        return await prisma.address.findMany({
            where: { userId: userId },
            include: {
                city: {
                    include: {
                        state: true
                    }
                }
            }
        });
    }

    async updateAddress(addressId: number, data: { address?: string, postalCode?: string }) {
        return await prisma.address.update({
            where: { id: addressId },
            data,
        });
    }

    async deleteAddress(addressId: number) {
        return await prisma.address.delete({
            where: { id: addressId }
        });
    }

    async getStates() {
        return await prisma.state.findMany();
    }

    async getCitiesByState(stateId: number) {
        return await prisma.city.findMany({
            where: { stateId: stateId }
        });
    }
}

