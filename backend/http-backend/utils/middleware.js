import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

export const middleware = (req, res, next) => {
    const token = req.headers.authorization;

    let verification = jwt.verify(token, process.env.JWT_SECRET);
    
    if(verification) {
        req.id = verification.id;
        next();
    }
    else {
        res.json({
            message: "Unauthorized access"
        })
    }
}