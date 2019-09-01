import {orderDelete} from '../../../dbActions/orders';

export default (req, res, next) => {

    const { params: { orderId } } = req;

    orderDelete(orderId)
        .then(result => {
            if (result.deletedCount > 0) {
                res.status(200).json({
                    message: 'success',
                });
            } else {
                res.status(404).json({
                    message: 'Not Found',
                });
            }
        })
        .catch(error => {
            res.status(404).json({ error });
            throw new Error(error);
        });
}