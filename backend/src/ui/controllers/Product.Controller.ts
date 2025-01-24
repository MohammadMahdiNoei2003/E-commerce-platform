import { Request, Response } from "express";
import { ProductService } from "../../business/services/Product.Service";

export class ProductController {
    private productService: ProductService;

    constructor() {
        this.productService = new ProductService();
    }

    async getProducts(req: Request, res: Response): Promise<Response> {
        const products = await this.productService.getAllProducts();
        return res.status(200).json(products);
    }

    async getProduct(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        const product = await this.productService.getProductById(Number(id));
        return res.status(200).json(product);
    }

    async createProduct(req: Request, res: Response): Promise<Response> {
        const newProduct = await this.productService.createProduct(req.body);
        return res.status(201).json(newProduct);
    }

    async updateProduct(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        const updatedProduct = await this.productService.updateProduct(Number(id), req.body);
        return res.status(200).json(updatedProduct);
    }

    async deleteProduct(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        await this.productService.deleteProduct(Number(id));
        return res.status(204).json(`Product with id ${id} deleted successfully.`);
    }
}