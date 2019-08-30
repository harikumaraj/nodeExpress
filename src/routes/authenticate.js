import express from 'express';
import { sign } from 'jsonwebtoken';

import { userFind, userSave } from '../dbActions/users';

import User from '../models/users';

const router = express.Router();

router.post('/signup', (req, res, next) => {

    const { body } = req;

    User.find({ email: body.email }).then((users) => {
        if (users.length > 0) {
            res.status(404).json({ message: 'Email already exists' });
        }
        const payload = {
            ...body,
            username: `${body.firstName}${body.lastName}`,
        };
        return userSave(payload)
            .then(result => {
                res.status(200).json(result);
            });
    })
        .catch(error => {
            next(error);
        });
});

router.post('/login', (req, res, next) => {

    const { body } = req;

    userFind(body)
        .then(result => {
            const token = sign(
                {
                    email: result.email,
                    _id: result._id,
                },
                process.env.JWT_KEY,
                {
                    expiresIn: '1h',
                }
            );
            res.status(200).json({token, ...result});
        })
        .catch(error => {
            next(error);
        });
});

export default router;
