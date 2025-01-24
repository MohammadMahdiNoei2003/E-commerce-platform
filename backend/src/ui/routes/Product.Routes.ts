import { Router } from "express";
import { ProductController } from "../controllers/Product.Controller";
import { asyncHandler } from "../../middlewares/asyncHandler";

const router = Router();
const productController = new ProductController();

router.get('/', asyncHandler(productController.getProducts.bind(productController)));
router.get('/:id', asyncHandler(productController.getProduct.bind(productController)));
router.post('/', asyncHandler(productController.createProduct.bind(productController)));
router.put('/:id', asyncHandler(productController.updateProduct.bind(productController)));
router.delete('/:id', asyncHandler(productController.deleteProduct.bind(productController)));

export default router;