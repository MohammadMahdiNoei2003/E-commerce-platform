import { Router } from "express";
import { OrderController } from "../controllers/Order.Controller";
import { asyncHandler } from "../../middlewares/asyncHandler";

const router = Router();
const orderController = new OrderController();

router.post("/:userId", asyncHandler(orderController.createOrder.bind(orderController)));
router.get("/:orderId", asyncHandler(orderController.getOrderById.bind(orderController)));
router.get("/", asyncHandler(orderController.getAllOrders.bind(orderController)));
router.put("/:orderId", asyncHandler(orderController.updateOrderStatus.bind(orderController)));
router.delete("/:orderId", asyncHandler(orderController.deleteOrder.bind(orderController)));
router.delete("/:orderItemId", asyncHandler(orderController.deleteOrderItem.bind(orderController)));

export default router;