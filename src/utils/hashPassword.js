import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export function hashPassword(password) {
  return bcrypt.hashSync(password, 12);
}

export const jwtToken = {
  createToken({ id, email }) {
    return jwt.sign({ id, email },
      process.env.SECRET_KEY, { expiresIn: '24h' });
  },
};
