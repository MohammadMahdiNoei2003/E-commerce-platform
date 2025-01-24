export interface Product {
    id: number;
    name: string;
    description?: string | null;
    price: number;
    stock: number;
    isActive: boolean;
    isDelete: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export class ProductModel implements Product {
    id: number;
    name: string;
    description?: string | null;
    price: number;
    stock: number;
    isActive: boolean;
    isDelete: boolean;
    createdAt: Date;
    updatedAt: Date;

    constructor(data: Partial<Product>) {
        this.id = data.id!;
        this.name = data.name!;
        this.description = data.description ?? null;
        this.price = data.price!;
        this.stock = data.stock!;
        this.isActive = data.isActive ?? true;
        this.isDelete = data.isDelete ?? false;
        this.createdAt = data.createdAt ?? new Date();
        this.updatedAt = data.updatedAt ?? new Date();
    }
}