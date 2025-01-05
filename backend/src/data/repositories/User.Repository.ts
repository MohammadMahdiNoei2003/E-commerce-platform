import prisma from './prisma/prismaClient';
import { User } from '../models/User.Model';
import { Prisma } from '@prisma/client';

export class UserRepository {
    async findAll(): Promise<User[]> {
        return await prisma.user.findMany();
    }

    async findById(id: number): Promise<User | null> {
        return await prisma.user.findUnique({ where: { id } });
    }

    async findByEmail(email: string): Promise<User | null> {
        return await prisma.user.findUnique({ where: { email } });
    }

    async findByPhoneNumber(phoneNumber: string): Promise<User | null> {
        return await prisma.user.findUnique({ where: { phoneNumber } });
    }

    async findRoleByUserId(id: number): Promise<string[]> {
        const userWithRoles = await prisma.user.findUnique({
            where: { id },
            include: {
                roles: {
                    include: { role: true }
                }
            }
        });
        if (!userWithRoles) return [];
        return userWithRoles.roles.map((ur) => ur.role.name);
    }

    async create(userDate: Prisma.UserCreateInput): Promise<User> {
        return await prisma.user.create({ data: userDate });
    }

    async update(id: number, userData: Partial<User>): Promise<User> {
        return await prisma.user.update({ where: { id }, data: userData });
    }

    async updatePassword(id: number, hashedPassword: string): Promise<void> {
        const user = await this.findById(id);
        if (!user) {
            throw new Error('User not found');
        }
        user.hashedPassword = hashedPassword;
    }

    async delete(id: number): Promise<void> {
        await prisma.user.delete({ where: { id } });
    }

    async toggleActiveStatus(id: number, isActive: boolean): Promise<User> {
        return await prisma.user.update({
            where: { id },
            data: { isActive },
        });
    }

    async searchUsers(filter: Partial<Prisma.UserWhereInput>): Promise<User[]> {
        return await prisma.user.findMany({ where: filter });
    }

    async softDelete(id: number): Promise<void> {
        await prisma.user.update({
            where: { id },
            data: { isDelete: true },
        });
    }

    async findDeletedUsers(): Promise<User[]> {
        return await prisma.user.findMany({
            where: { isDelete: true }
        });
    }

    async findActiveUsers(): Promise<User[]> {
        return await prisma.user.findMany({
            where: { isActive: true },
        });
    }

    async countUsers(filter: Prisma.UserWhereInput): Promise<number> {
        return await prisma.user.count({
            where: filter,
        });
    }

    async addLoginTimestamp(userId: number): Promise<void> {
        await prisma.loginTimestamp.create({
            data: {
                userId,
                timestamp: new Date(),
            },
        });
    }

    async getLoginTimestampsByUserId(userId: number): Promise<{timestamp: Date}[]> {
        return await prisma.loginTimestamp.findMany({
            where: {userId},
            select: {timestamp: true}
        });
    }
}