import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config({path: '../.env'});
const JWT_SECRET = process.env.JWT_SECRET;

export const verifyToken = async(token) => {
    return jwt.verify(token, JWT_SECRET);
}
