import { CategoryRepository } from "../../data/repositories/Category.Repository";
import { Category } from "../../data/models/Category.Model";
import { Prisma, PrismaPromise } from "@prisma/client";

export class CategoryService {
    private categoryRepository: CategoryRepository;

    constructor() {
        this. categoryRepository = new CategoryRepository();
    }

    async getAllCategories(): Promise<Category[]> {
        return await this.categoryRepository.findAll();
    }

    async getCategoryById(id: number): Promise<Category | null> {
        return await this.categoryRepository.findById(id);
    }

    async createCategory(categoryData: Prisma.CategoryCreateInput): Promise<Category> {
        return await this.categoryRepository.create(categoryData);
    }

    async updateCategory(id: number, categoryData: Partial<Category>): Promise<Category> {
        return await this.categoryRepository.update(id, categoryData);
    }

    async deleteCategory(id: number): Promise<void> {
        await this.categoryRepository.delete(id);
    }

    async softDeleteCategory(id: number): Promise<void> {
        await this.categoryRepository.softDelete(id);
    }

    async toggleActiveCategoryStatus(id: number, isActive: boolean): Promise<Category> {
        return await this.categoryRepository.toggleActiveStatus(id, isActive);
    }
}