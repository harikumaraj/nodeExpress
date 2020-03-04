import {userFind, userSave} from '../../../dbActions/users';

export default (req, res, next) => {

    const { body } = req;

    userFind(body).then((users) => {
        if (users.length > 0) {
            res.status(404).json({ message: 'Email already exists' });
        }
        // if ()
        return userSave(body)
            .then(result => {
                res.status(200).json(result);
            });
    })
        .catch(error => {
            next(error);
        });
}