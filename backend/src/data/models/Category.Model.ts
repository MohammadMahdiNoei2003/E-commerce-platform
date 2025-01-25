export interface Category {
    id: number;
    name: string;
    description?: string | null;
    isActive: boolean;
    isDelete: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export class CategoryModel implements Category {
    id: number;
    name: string;
    description?: string | null;
    isActive: boolean;
    isDelete: boolean;
    createdAt: Date;
    updatedAt: Date;

    constructor(data: Partial<Category>) {
        this.id = data.id!;
        this.name = data.name!;
        this.description= data.description ?? null;
        this.isActive = data.isActive! ?? true;
        this.isDelete = data.isDelete! ?? false;
        this.createdAt = data.createdAt ?? new Date();
        this.updatedAt = data.updatedAt ?? new Date();
    }
}