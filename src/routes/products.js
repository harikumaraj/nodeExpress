import express from 'express';

import {
    productFindAll,
    productFindById,
    productSave,
    productUpdate,
    productDelete,
} from '../dbActions/products';

import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './images');
    },
    filename: (req, file, cb) => {
        cb(null, `${new Date().toISOString()}-${file.originalname}`);
    },
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(new Error('file not valid'), false);
    }
};

const upload = multer({
    storage,
    fileFilter,
    limits: 1024 * 1024 * 5,
});

const router = express.Router();

router.get('/', (req, res, next) => {
    productFindAll()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(error => {
            next(error);
        });
});

router.post('/', upload.single('image'), (req, res, next) => {

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
});

router.get('/:productId', (req, res, next) => {
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
});

router.patch('/', (req, res, next) => {

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
});

router.delete('/:productId', (req, res, next) => {

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
});

export default router;
