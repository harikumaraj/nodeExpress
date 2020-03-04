import jwt from "jsonwebtoken";

import {JWT_KEY} from '../../constants';

export default (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, JWT_KEY);
        req.userData = decoded;
        console.log(req.userData);
        next();
    } catch (error) {
        throw new Error('Unauthorised');
    }
};
