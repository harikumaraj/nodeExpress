import {userUpdate, userFindById} from '../../../dbActions/users';

export default (req, res, next) => {

    const { body } = req;

    const userObject = {};

    Object.keys(body).forEach(key => {
        userObject[`${key}`] = body[key];
    });

    userUpdate(body._id, userObject)
        .then(result => {
            userFindById(body._id).then(data => {
                res.status(200).json(data);
            })
                .catch(error => {
                    next(error);
                });
        })
        .catch(error => {
            next(error);
        });
}