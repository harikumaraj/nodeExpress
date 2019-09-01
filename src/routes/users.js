import express from 'express';

import {
    getController,
    postController,
    patchController,
    getByIdController,
    deleteController
} from '../controllers/users';

const router = express.Router();

router.get('/', getController);

router.post('/', postController);

router.get('/:userId', getByIdController);

router.patch('/', patchController);

router.delete('/:userId', deleteController);

export default router;
