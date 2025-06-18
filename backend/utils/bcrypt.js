import bcrypt from bcrypt;

const hashPassword = (password) => {
    return bcrypt.hash(password, 5);
}

const verifyPassword = (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
}

export default {hashPassword, verifyPassword};