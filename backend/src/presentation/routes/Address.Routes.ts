import { Router } from "express";
import { AddressController } from "../controllers/Address.Controller";
import { asyncHandler } from "../../middlewares/asyncHandler";

const router = Router();
const addressController = new AddressController();

router.post('/', asyncHandler(addressController.createAddress.bind(addressController)));
router.get('/:userId', asyncHandler(addressController.getAddress.bind(addressController)));
router.put('/:addressId', asyncHandler(addressController.updateAddress.bind(addressController)));
router.delete('/:addressId', asyncHandler(addressController.deleteAddress.bind(addressController)));

router.get('/states/all', asyncHandler(addressController.getStates.bind(addressController)));
router.get('/states/:stateId/cities', asyncHandler(addressController.getCities.bind(addressController)));

export default router;