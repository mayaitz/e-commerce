import express, { NextFunction, Request, Response } from "express";
import controller from "../Controllers/OrderController";
const router = express.Router();

router.get("/:orderID", (req: Request, res: Response, next: NextFunction) => {
    controller.getDetailedOrder(req, res, next);
});
router.post("/", (req: Request, res: Response, next: NextFunction) => {
  controller.createOrder(req, res, next);
});
router.post("/:orderID/retrieve", (req: Request, res: Response, next: NextFunction) => {
  controller.retreiveOrder(req, res, next);
});
router.get("/:orderID/status", (req: Request, res: Response, next: NextFunction) => {
  controller.getOrderStatus(req, res, next);
});
router.patch("/:orderID/status/:status", (req: Request, res: Response, next: NextFunction) => {
  controller.updateOrderStatus(req, res, next);
});

export default router;
