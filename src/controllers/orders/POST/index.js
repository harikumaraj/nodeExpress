import {orderSave} from '../../../dbActions/orders';

export default (req, res, next) => {

    const { body } = req;

    const payload = {
        ...body,
        product: body.product._id,
    };
    /**
     * @see
     * bad practice, used to search product id while
     * saving and replacing it with product object
     * right while creating, but seems to be ok if you
     * don't want to hit database every time you call
     * the order object
     */
    // productFindById(body.product._id)
    //     .then(product => {
    //         const payload = {
    //             _id: Types.ObjectId(),
    //             ...body,
    //             product,
    //         };
    //         let entity = null;
    //         if (product) {
    //             entity = orderSave(payload);
    //         }
    //         return entity;
    //     })
    //     .then(result => {
    //         res.status(201).json(result);
    //     })
    orderSave(payload)
        .then(result => {
            res.status(201).json(result);
        })
        .catch(error => {
            next(error);
        });
}