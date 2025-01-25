import { Request, Response } from "express";
import { CategoryService } from "../../business/services/Category.Service";

export class CategoryController {
    private categoryService: CategoryService;

    constructor() {
        this.categoryService = new CategoryService();
    }

    async getCategories(req: Request, res: Response): Promise<Response> {
        const categories = await this.categoryService.getAllCategories();
        return res.status(200).json(categories);
    }

    async getCategoryById(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        const category = await this.categoryService.getCategoryById(Number(id));
        return res.status(200).json(category);
    }

    async createCategory(req: Request, res: Response): Promise<Response> {
        const newCategory = await this.categoryService.createCategory(req.body);
        return res.status(201).json(newCategory);
    }

    async updateCategory(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        const updatedCategory = await this.categoryService.updateCategory(Number(id), req.body);
        return res.status(200).json(updatedCategory);
    }

    async deleteCategory(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        await this.categoryService.deleteCategory(Number(id));
        return res.status(204).json(`Category with id ${id} deleted successfully.`);
    }

    async softDeleteCategory(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        await this.categoryService.softDeleteCategory(Number(id));
        return res.status(200).json(`Category with id ${id} deleted successfully.`);
    }
}