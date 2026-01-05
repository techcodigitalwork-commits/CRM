import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import roleMiddleware from "../middlewares/role.middleware.js";

import {
  getLeads,
  createLead,
  createBooking
} from "../controllers/sales.controller.js";

const router = express.Router();

// 🔐 ADMIN + USER
router.use(authMiddleware, roleMiddleware("admin", "user"));

router.get("/leads", getLeads);
router.post("/leads", createLead);
router.post("/bookings", createBooking);

export default router;
