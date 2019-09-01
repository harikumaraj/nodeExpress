import {userSave} from '../../../dbActions/users';

export default (req, res, next) => {

    const { body } = req;

    const payload = {
        ...body,
    };
    userSave(payload)
        .then(result => {
            res.status(201).json(result);
        })
        .catch(error => {
            next(error);
        });
}