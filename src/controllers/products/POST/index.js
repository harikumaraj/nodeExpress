import {productSave} from '../../../dbActions/products';

export default (req, res, next) => {

    const { body, file } = req;

    const payload = {
        ...body,
        image: file.path,
    };
    productSave(payload)
        .then(result => {
            res.status(201).json(result);
        })
        .catch(error => {
            next(error);
        });
}