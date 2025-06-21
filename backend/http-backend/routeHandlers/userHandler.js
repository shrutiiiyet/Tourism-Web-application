import client from "../../../db/prisma/index.js";
import { hashPassword, verifyPassword } from '../utils/bcrypt.js';
import { generateToken } from "../utils/jwt.js";
import { CreateUserSchema } from "../utils/zodValidation.js";


export const signup = async(req, res) => {

    const result = await CreateUserSchema.safeParse(req.body);

    if(!result.success) {
        res.status(403).json ({
            message: res.error.message
        })
        return;
    }

    const email = req.body.email;
    const password = req.body.password;

    const hashedPassword = await hashPassword(password);

    let user = await client.user.create ({
        data: {
            email: email,
            password: hashedPassword
        }
    })

    res.json({
        message: "user created succesfully!",
        id: user.id
    })
}


export const signin = async(req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    let user = await client.user.findFirst({
        where: {
            email: email
        }
    });

    if(!user) {
        res.status(404).json({
            message: "User does not exist"
        })
        return;
    }

    const validity = verifyPassword(password, user.password);

    if(!validity) {
        res.json({
            message: "Incorrect credentials"
        })
        return;
    }

    const token = await generateToken(user.id);

    res.json({
        token: token
    })
}