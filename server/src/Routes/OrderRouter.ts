import express from "express";
import controller from "../Controllers/OrderController";
const router = express.Router();

router.get("/:orderID", (req, res) => {
    controller.getDetailedOrder(req, res)
});
router.post("/", (req, res) => {
    controller.createOrder(req, res)
});
router.post("/:orderID/retrieve", (req, res) => {
    controller.retreiveOrder(req, res)
});
router.get("/:orderID/status", (req, res) => {
    controller.getOrderStatus(req, res)
});
router.patch("/:orderID/status/:status", (req, res) => {
    controller.updateOrderStatus(req, res)
});

export default router;
