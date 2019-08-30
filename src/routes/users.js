import express from 'express';

import {
    userFindAll,
    userFindById,
    userSave,
    userUpdate,
    userDelete,
} from '../dbActions/users';

const router = express.Router();

router.get('/', (req, res, next) => {
    userFindAll()
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
    };
    userSave(payload)
        .then(result => {
            res.status(201).json(result);
        })
        .catch(error => {
            next(error);
        });
});

router.get('/:userId', (req, res, next) => {
    const { params: { userId } } = req;
    userFindById(userId)
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

    const userObject = {};

    Object.keys(body).forEach(key => {
        userObject[`${key}`] = body[key];
    });

    userUpdate(body._id, userObject)
        .then(result => {
            userFindById(body._id).then(data => {
                res.status(200).json({ data });
            })
                .catch(error => {
                    next(error);
                });
        })
        .catch(error => {
            next(error);
        });
});

router.delete('/:userId', (req, res, next) => {

    const { params: { userId } } = req;

    userDelete(userId)
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
