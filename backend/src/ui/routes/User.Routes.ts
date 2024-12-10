import { Router } from 'express';
import { UserController } from '../controllers/User.Controller';
import { asyncHandler } from '../../middlewares/asyncHandler';

const router = Router();
const userController = new UserController();

router.get('/', asyncHandler(userController.getUsers.bind(userController)));
router.get('/:id', asyncHandler(userController.getUser.bind(userController)));
router.post('/', asyncHandler(userController.createUser.bind(userController)));
router.put('/:id', asyncHandler(userController.updateUser.bind(userController)));
router.delete('/:id', asyncHandler(userController.deleteUser.bind(userController)));

export default router;
