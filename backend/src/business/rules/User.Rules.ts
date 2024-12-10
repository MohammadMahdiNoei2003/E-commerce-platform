import { Prisma } from "@prisma/client";
import { User } from "../../data/models/User.Model";

export class UserRules {
    static validate(userData: Prisma.UserCreateInput): void {
        if (!userData.firstName || !userData.lastName || !userData.email || !userData.phoneNumber) {
            throw new Error('User name, email and phone number is required.');
        }
        const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!emailRegex.test(userData.email)) {
            throw new Error('Invalid email format.');
        }
    }
}