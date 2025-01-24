import { ProductRepository } from "../../data/repositories/Product.Repository";
import { Product } from "../../data/models/Product.Model";
import { Prisma } from "@prisma/client";

export class ProductService {
    private productRepository: ProductRepository;

    constructor() {
        this.productRepository = new ProductRepository();
    }

    async getAllProducts(): Promise<Product[]> {
        return await this.productRepository.findAll();
    }

    async getProductById(id: number): Promise<Product | null> {
        return await this.productRepository.findById(id);
    }

    async createProduct(productData: Prisma.ProductCreateInput): Promise<Product> {
        return await this.productRepository.create(productData);
    }

    async updateProduct(id: number, productData: Partial<Product>): Promise<Product> {
        return await this.productRepository.update(id, productData);
    }

    async deleteProduct(id: number): Promise<void> {
        return await this.productRepository.delete(id);
    }

    async softDeleteProduct(id: number): Promise<void> {
        return await this.productRepository.softDelete(id);
    }

    async toggleActiveProductStaus(id: number, isActive: boolean): Promise<Product> {
        return await this.productRepository.toggleActiveStatus(id, isActive);
    }
    
}