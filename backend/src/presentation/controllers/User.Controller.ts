import { Request, Response } from "express";
import { UserService } from "../../business/services/User.Service";

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    async getUsers(req: Request, res: Response): Promise<Response> {
        const users = await this.userService.getAllUsers();
        return res.status(200).json(users);
    }

    async getUser(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        const user = await this.userService.getUserById(Number(id));
        return res.status(200).json(user);
    }

    async createUser(req: Request, res: Response): Promise<Response> {
        const newUser = await this.userService.createUser(req.body);
        return res.status(201).json(newUser);
    }

    async updateUser(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        const updatedUser = await this.userService.updateUser(Number(id), req.body);
        return res.status(200).json(updatedUser);
    }

    async deleteUser(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        await this.userService.deleteUser(Number(id));
        return res.status(204).json(`User with id ${id} deleted successfully.`);
    }
}
