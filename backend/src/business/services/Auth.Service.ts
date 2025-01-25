import { UserRepository } from "../../data/repositories/User.Repository";
import { HashService } from "../../utils/HashService";
import { TokenService } from "../../utils/TokenService";

export class AuthService {
    private userRepository = new UserRepository();
    private hashService = new HashService();
    private tokenService = new TokenService();

    async registerUser(userData: {email: string, password: string}): Promise<string> {
        const existingUser = await this.userRepository.findByEmail(userData.email);
        if (existingUser) {
            throw new Error('User already exists.');
        }

        const hashedPassword = await this.hashService.hashPassword(userData.password);
        const newUser = await this.userRepository.create({
            email: userData.email,
            hashedPassword,
            firstName: "",
            lastName: "",
            dob: new Date(0),
            isActive: true,
            isDelete: false,
            phoneNumber: null,
        });
        return this.tokenService.generateToken({ id: newUser.id, email: newUser.email });
    }

    async loginUser(email: string, password: string): Promise<string> {
        const user = await this.userRepository.findByEmail(email);
        if (!user || !(await this.hashService.comparePasswords(password, user.hashedPassword))) {
            throw new Error('Invalid credentials');
        }
        return this.tokenService.generateToken({ id: user.id, email: user.email });
    }

    async logoutUser(token: string): Promise<void> {
        await this.tokenService.invalidateToken(token);
    }

    async resetPassword(email: string, newPassword: string): Promise<void> {
        const user = await this.userRepository.findByEmail(email);
        if (!user) {
            throw new Error('User not found');
        }

        const hashedPassword = await this.hashService.hashPassword(newPassword);
        await this.userRepository.updatePassword(user.id, hashedPassword);
    }
}