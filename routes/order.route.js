import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import { getOrders, createOrder} from "../controllers/order.controller.js";

const router = express.Router();

router.get("/", verifyToken, getOrders);
router.post("/:gigId", verifyToken, createOrder);

export default router;
