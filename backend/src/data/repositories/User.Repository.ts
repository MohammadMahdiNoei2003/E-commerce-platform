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

    async create(userDate: Prisma.UserCreateInput): Promise<User> {
        return await prisma.user.create({ data: userDate });
    }

    async update(id: number, userData: Partial<User>): Promise<User> {
        return await prisma.user.update({ where: {id}, data: userData });
    }

    async delete(id: number): Promise<void> {
        await prisma.user.delete({ where: {id} });
    }
}