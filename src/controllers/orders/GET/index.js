import {orderFindAll} from '../../../dbActions/orders';

export default (req, res, next) => {
    orderFindAll()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(error => {
            next(error);
        });
};
