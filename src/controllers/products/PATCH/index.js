import {productUpdate, productFindById} from '../../../dbActions/products';

export default (req, res, next) => {

    const { body } = req;

    const productObject = {};

    Object.keys(body).forEach(key => {
        productObject[`${key}`] = body[key];
    });

    productUpdate(body._id, productObject)
        .then(result => {
            productFindById(body._id).then(data => {
                res.status(200).json(data);
            })
                .catch(error => {
                    next(error);
                });
        })
        .catch(error => {
            next(error);
        });
}