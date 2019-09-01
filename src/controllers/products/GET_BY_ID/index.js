import {productFindById} from '../../../dbActions/products';

export default (req, res, next) => {
    const { params: { productId } } = req;
    productFindById(productId)
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