import {productDelete} from '../../../dbActions/products';

export default (req, res, next) => {

    const { params: { productId } } = req;

    productDelete(productId)
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