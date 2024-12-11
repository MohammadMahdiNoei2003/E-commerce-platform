import bcrypt from 'bcrypt';

export class HashService {
    private saltRounds = 10;

    async hashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, this.saltRounds);
    }

    async comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
        return await bcrypt.compare(password, hashedPassword);
    }
}