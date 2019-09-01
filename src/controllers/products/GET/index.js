import {productFindAll} from '../../../dbActions/products';

export default (req, res, next) => {
    productFindAll()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(error => {
            next(error);
        });
}