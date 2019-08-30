import express from 'express';

import {
    orderFindAll,
    orderFindById,
    orderSave,
    orderUpdate,
    orderDelete,
} from '../dbActions/orders';

const router = express.Router();

router.get('/', (req, res, next) => {
    orderFindAll()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(error => {
            next(error);
        });
});

router.post('/', (req, res, next) => {

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
});

router.get('/:orderId', (req, res, next) => {
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
});

router.patch('/', (req, res, next) => {
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
});

router.delete('/:orderId', (req, res, next) => {

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
});

export default router;
