import {userFindAll} from '../../../dbActions/users';

export default (req, res, next) => {
    userFindAll()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(error => {
            next(error);
        });
}