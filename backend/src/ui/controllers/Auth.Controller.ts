import { Request, Response } from "express";
import { AuthService } from "../../business/services/Auth.Service";

export class AuthController {
    private authService = new AuthService();

    async register(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body;
        try {
            const token = await this.authService.registerUser({ email, password });
            return res.status(201).json({ token });
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }

    async login(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body;
        try {
            const token = await this.authService.loginUser(email, password);
            return res.status(200).json({ token });
        } catch (error: any) {
            return res.status(401).json({ error: error.message });
        }
    }
}