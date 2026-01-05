import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import roleMiddleware from "../middlewares/role.middleware.js";

import {
  getDashboard,
  getHRData,
  getInventory
} from "../controllers/admin.controller.js";

const router = express.Router();

// 🔐 ONLY ADMIN
router.use(authMiddleware, roleMiddleware("admin"));

router.get("/dashboard", getDashboard);
router.get("/hr", getHRData);
router.get("/inventory", getInventory);

export default router;
