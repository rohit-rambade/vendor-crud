import { Router } from "express";
import {
  createVendor,
  deleteVendor,
  getVendors,
  updateVendor,
} from "../controllers/vendor.controller.js";

const router = Router();

router.post("/", createVendor);
router.get("/", getVendors);
router.put("/:id", updateVendor);
router.delete("/:id", deleteVendor);
export default router;
