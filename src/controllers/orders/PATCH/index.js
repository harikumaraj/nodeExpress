import {orderUpdate} from '../../../dbActions/orders';

export default (req, res, next) => {
    const { body } = req;

    const orderObject = {};

    Object.keys(body).forEach(key => {
        orderObject[`${key}`] = body[key];
    });

    orderUpdate(body._id, orderObject)
        .then(result => {
            orderFindById(body._id).then(data => {
                res.status(200).json(data);
            });
        })
        .catch(error => {
            next(error);
        });
}