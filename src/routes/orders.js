import express from 'express';

import checkAuth from '../middlewares/o-auth/userAuth';

import {
    getController,
    postController,
    patchController,
    getByIdController,
    deleteController
} from '../controllers/orders';

console.log();

const router = express.Router();

router.get('/', checkAuth, getController);

router.post('/', checkAuth, postController);

router.get('/:orderId', checkAuth, getByIdController);

router.patch('/', checkAuth, patchController);

router.delete('/:orderId', checkAuth, deleteController);

export default router;
