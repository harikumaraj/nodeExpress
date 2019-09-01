import {orderFindById} from '../../../dbActions/orders';

export default (req, res, next) => {
    const { params: { orderId } } = req;
    orderFindById(orderId)
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