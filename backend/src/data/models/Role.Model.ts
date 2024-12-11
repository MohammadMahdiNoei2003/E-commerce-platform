export interface Role {
    id: number;
    name: string;
    description?: string;
    isActive: boolean;
    isDelete: boolean;
    createdAt: Date;
    updatedAt: Date;
}

