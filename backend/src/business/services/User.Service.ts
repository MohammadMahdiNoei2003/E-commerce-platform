import { UserRepository } from "../../data/repositories/User.Repository";
import { UserRules } from "../rules/User.Rules";
import { User } from "../../data/models/User.Model";
import { Prisma } from "@prisma/client";

export class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async getAllUsers(): Promise<User[]> {
        return await this.userRepository.findAll();
    }

    async getUserById(id: number): Promise<User | null> {
        return await this.userRepository.findById(id);
    }

    async createUser(userData: Prisma.UserCreateInput): Promise<User> {
        UserRules.validate(userData);
        return await this.userRepository.create(userData);
    }

    async updateUser(id: number, userData: Partial<User>): Promise<User> {
        return await this.userRepository.update(id, userData);
    }

    async deleteUser(id: number): Promise<void> {
        return await this.userRepository.delete(id);
    }
}