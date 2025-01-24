import { Router } from "express";
import { AuthController } from "../controllers/Auth.Controller";
import { asyncHandler } from "../../middlewares/asyncHandler";

const router = Router();
const authController = new AuthController();

router.post('/register', asyncHandler(authController.register.bind(authController)));
router.post('/login', asyncHandler(authController.login.bind(authController)));

export default router;