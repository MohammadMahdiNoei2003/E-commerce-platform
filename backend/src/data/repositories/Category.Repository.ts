import prisma from "./prisma/prismaClient";
import { Category } from "../models/Category.Model";
import { Prisma } from "@prisma/client";

export class CategoryRepository {
    async findAll(): Promise<Category[]> {
        return await prisma.category.findMany();
    }

    async findById(id: number): Promise<Category | null> {
        return await prisma.category.findUnique({ where: { id } })
    }

    async create(categoryData: Prisma.CategoryCreateInput): Promise<Category> {
        return await prisma.category.create({ data: categoryData });
    }

    async update(id: number, categoryData: Partial<Category>): Promise<Category> {
        return await prisma.category.update({ where: { id }, data: categoryData });
    }

    async delete(id: number): Promise<void> {
        await prisma.category.delete({ where: { id } });
    }

    async toggleActiveStatus(id: number, isActive: boolean): Promise<Category> {
        return await prisma.category.update({ where: { id }, data: { isActive } });
    }

    async searchCategory(filter: Partial<Prisma.CategoryWhereInput>): Promise<Category[]> {
        return await prisma.category.findMany({ where: filter });
    }

    async softDelete(id: number): Promise<void> {
        await prisma.category.update({ where: { id }, data: { isDelete: true } });
    }

    async findDeletedCategories(): Promise<Category[]> {
        return await prisma.category.findMany({ where: { isDelete: true } });
    }

    async findActiveProducts(): Promise<Category[]> {
        return await prisma.category.findMany({ where: { isActive: true } });
    }

    async countCategory(filter: Partial<Prisma.CategoryWhereInput>): Promise<number> {
        return await prisma.category.count({ where: filter });
    }
}