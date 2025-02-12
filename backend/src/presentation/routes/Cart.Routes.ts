import { Router } from "express";
import { CartController } from "../controllers/Cart.Controller";
import { asyncHandler } from "../../middlewares/asyncHandler";

const router = Router()
const cartController = new CartController();

router.get('/:userId', asyncHandler(cartController.getCart.bind(cartController)));
router.post('/add', asyncHandler(cartController.addItem.bind(cartController)));
router.put('/update-item', asyncHandler(cartController.updateItemQuantity.bind(cartController)));
router.delete('/remove/:cartItemId', asyncHandler(cartController.removeItem.bind(cartController)));
router.delete('/clear/:userId', asyncHandler(cartController.clearCart.bind(cartController)));

export default router;