import { sign } from 'jsonwebtoken';
import {JWT_KEY} from '../../../constants';

import {userFind} from '../../../dbActions/users';

export default (req, res, next) => {

    const { body } = req;

    userFind(body)
        .then(result => {
            const token = sign(
                {
                    _id: result._id
                },
                JWT_KEY,
                {
                    expiresIn: '1h',
                }
            );
            res.status(200)
            .header('Authorisation', `Bearer ${token}`)
            .json(result);
        })
        .catch(error => {
            next(error);
        });
}