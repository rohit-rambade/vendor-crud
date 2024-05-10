import { Router } from "express";
import {
  createVendor,
  deleteVendor,
  getVendors,
  updateVendor,
} from "../controllers/vendor.controller.js";
import { vendorValidation } from "../utils/validationUtil.js";

const router = Router();

router.post("/", vendorValidation(), createVendor);
router.get("/", getVendors);
router.put("/:id", vendorValidation(), updateVendor);
router.delete("/:id", deleteVendor);
export default router;
