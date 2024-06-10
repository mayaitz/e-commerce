import express, { Request, Response} from "express";
import controller from "../Controllers/OrderController";
const router = express.Router();

router.get("/:orderID", (req: Request, res: Response) => {
    controller.getDetailedOrder(req, res)
});
router.post("/", (req: Request, res: Response) => {
    controller.createOrder(req, res)
});
router.post("/:orderID/retrieve", (req: Request, res: Response) => {
    controller.retreiveOrder(req, res)
});
router.get("/:orderID/status", (req: Request, res: Response) => {
    controller.getOrderStatus(req, res)
});
router.patch("/:orderID/status/:status", (req: Request, res: Response) => {
    controller.updateOrderStatus(req, res)
});

export default router;
