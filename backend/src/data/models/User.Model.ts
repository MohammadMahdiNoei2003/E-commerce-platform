export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    hashedPassword: string;
    dob: Date;
    isActive: boolean;
    isDelete: boolean;
    profileImage?: string | null;
    phoneNumber?: string | null;
    createdAt: Date;
    updatedAt: Date;
}

export class UserModel implements User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    hashedPassword: string;
    dob: Date;
    isActive: boolean;
    isDelete: boolean;
    profileImage?: string | null;
    phoneNumber?: string | null;
    createdAt: Date;
    updatedAt: Date;

    constructor(data: Partial<User>) {
            this.id = data.id!;
            this.firstName = data.firstName!;
            this.lastName = data.lastName!;
            this.email = data.email!;
            this.hashedPassword = data.hashedPassword!;
            this.dob = data.dob!;
            this.isActive = data.isActive ?? true;
            this.isDelete = data.isDelete ?? false;
            this.profileImage = data.profileImage ?? null;
            this.phoneNumber = data.phoneNumber ?? null;
            this.createdAt = data.createdAt ?? new Date();
            this.updatedAt = data.updatedAt ?? new Date();
        }
}