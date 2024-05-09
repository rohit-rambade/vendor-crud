import { Router } from "express";
import { googleLogin } from "../controllers/authController.GoogleLogin.js";

const router = Router();

router.post("/google-login", googleLogin);

export default router;
