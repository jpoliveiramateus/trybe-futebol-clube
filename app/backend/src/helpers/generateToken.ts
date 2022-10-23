import { Secret, sign } from 'jsonwebtoken';

const { JWT_SECRET = 'jwt_secret' } = process.env;

export default function generateToken(id: number, role: string): string {
  const payload = { id, role };
  const token = sign(payload, JWT_SECRET as Secret);
  return token;
}
