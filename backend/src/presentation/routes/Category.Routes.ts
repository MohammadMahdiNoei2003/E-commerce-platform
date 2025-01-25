import { Router } from "express";
import { CategoryController } from "../controllers/Category.Controller";
import { asyncHandler } from "../../middlewares/asyncHandler";

const router = Router();
const categoryController = new CategoryController();

router.get('/', asyncHandler(categoryController.getCategories.bind(categoryController)));
router.get('/:id', asyncHandler(categoryController.getCategoryById.bind(categoryController)));
router.post('/', asyncHandler(categoryController.createCategory.bind(categoryController)));
router.put('/:id', asyncHandler(categoryController.updateCategory.bind(categoryController)));
router.delete('/:id', asyncHandler(categoryController.deleteCategory.bind(categoryController)));

export default router;
