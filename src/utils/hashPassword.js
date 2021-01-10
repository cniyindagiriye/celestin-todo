import bcrypt from 'bcrypt';

export default function hashPassword(password) {
  return bcrypt.hashSync(password, 12);
}
