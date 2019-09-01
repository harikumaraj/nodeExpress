import express from 'express';

import uploadFile from '../middlewares/fileUpload';

import {
    getController,
    postController,
    patchController,
    getByIdController,
    deleteController
} from '../controllers/products';

const router = express.Router();

router.get('/', getController);

router.post('/', uploadFile().single('image'), postController);

router.get('/:productId', getByIdController);

router.patch('/', patchController);

router.delete('/:productId', deleteController);

export default router;
