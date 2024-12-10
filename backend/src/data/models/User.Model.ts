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
    phoneNumber: string;
    createAt: Date;
    updateAt: Date;
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
    phoneNumber: string;
    createAt: Date;
    updateAt: Date;

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
            this.phoneNumber = data.phoneNumber!;
            this.createAt = data.createAt ?? new Date();
            this.updateAt = data.updateAt ?? new Date();
        }
}