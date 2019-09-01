import {userFindById} from '../../../dbActions/users';

export default (req, res, next) => {
    const { params: { userId } } = req;
    userFindById(userId)
        .then(result => {
            res.status(200).json(result);
        })
        .catch(error => {
            res.status(404).json({
                message: 'Not found',
            });
            throw new Error(error);
        });
}