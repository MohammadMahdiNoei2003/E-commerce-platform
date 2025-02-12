import { Router } from "express";
import { ShippingController } from "../controllers/Shipping.Controller";
import { asyncHandler } from "../../middlewares/asyncHandler";

const router = Router();
const shippingController = new ShippingController();

router.post('/', asyncHandler(shippingController.createShipping.bind(shippingController)));
router.get('/:shippingId', asyncHandler(shippingController.getShippingById.bind(shippingController)));
router.get('/order/:orderId', asyncHandler(shippingController.getShippingByOrderId.bind(shippingController)));
router.put('/:shippingId/status', asyncHandler(shippingController.updateShippingStatus.bind(shippingController)));
router.put('/:shippingId/tracking', asyncHandler(shippingController.assignTrackingNumber.bind(shippingController)));
router.delete('/:shippingId', asyncHandler(shippingController.deleteShipping.bind(shippingController)));   

export default router;
