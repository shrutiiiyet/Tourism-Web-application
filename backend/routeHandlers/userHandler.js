import express from express;
import client from "../../db/prisma";
import { hashPassword, verifyPassword } from '../utils/bcrypt';
import { CreateUserSchema } from "../utils/zodValidation";
import { z } from "zod";

const signin = async(req, res) => {

    const res = CreateUserSchema.safeParse(req.body);

    if(!res.success) {
        res.status(403).json ({
            message: res.error.message
        })
    }

    const email = req.body.email;
    const password = req.body.password;

    const hashedPassword = hashPassword(password);

    client.user.create({
        data: {
            userName: email,
            password: hashedPassword
        }
    })
}

const signup = async(req, res) => {

}

module.exports = signin, signup;