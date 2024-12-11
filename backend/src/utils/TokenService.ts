import jwt from 'jsonwebtoken';

export class TokenService {
    private secretKey = process.env.JWT_SECRET || 'my_secret_key';
    private expireIn = process.env.JWT_EXPIRED_TIME || '1h';

    generateToken(payload: object): string {
        return jwt.sign(payload, this.secretKey, {expiresIn: this.expireIn});
    }

    verifyToken(token: string): Object | null {
        try {
            return jwt.verify(token, this.secretKey);
        } catch {
            return null;
        }
    }
}