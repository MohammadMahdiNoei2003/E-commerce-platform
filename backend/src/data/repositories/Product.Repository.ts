import prisma from "./prisma/prismaClient";
import { Product } from "../models/Product.Model";
import { Prisma } from "@prisma/client";

export class ProductRepository {
    async findAll(): Promise<Product[]> {
        return await prisma.product.findMany();
    }

    async findById(id: number): Promise<Product | null> {
        return await prisma.product.findUnique({ where: { id } });
    }

    async create(productData: Prisma.ProductCreateInput): Promise<Product> {
        return await prisma.product.create({ data: productData });
    }

    async update(id: number, productData: Partial<Product>): Promise<Product> {
        return await prisma.product.update({ where: { id }, data: productData });
    }

    async delete(id: number): Promise<void> {
        await prisma.product.delete({ where: { id } });
    }

    async toggleActiveStatus(id: number, isActive: boolean): Promise<Product> {
        return await prisma.product.update({
            where: { id },
            data: { isActive }
        });
    }

    async searchProducts(filter: Partial<Prisma.ProductWhereInput>): Promise<Product[]> {
        return await prisma.product.findMany({ where: filter });
    }

    async softDelete(id: number): Promise<void> {
        await prisma.product.update({
            where: { id },
            data: { isDelete: true }
        });
    }

    async findDeletedProducts(): Promise<Product[]> {
        return await prisma.product.findMany({ where: { isDelete: true } });
    }

    async findActiveProducts(): Promise<Product[]> {
        return await prisma.product.findMany({ where: { isActive: true } });
    }

    async countProducts(filter: Prisma.ProductWhereInput): Promise<number> {
        return await prisma.product.count({where: filter});
    }
} 