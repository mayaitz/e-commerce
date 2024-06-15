import express, { NextFunction, Request, Response } from "express";
import controller from "../Controllers/UserController";
const router = express.Router();

router.post("/register", (req: Request, res: Response, next: NextFunction) => {
  controller.register(req, res, next);
});
router.post("/login", (req: Request, res: Response, next: NextFunction) => {
  controller.login(req, res, next);
});
router.patch(
  "/:userID/edit",
  (req: Request, res: Response, next: NextFunction) => {
    controller.editUser(req, res, next);
  }
);
router.get(
  "/:userID/orders",
  (req: Request, res: Response, next: NextFunction) => {
    controller.getUserOrders(req, res, next);
  }
);
router.get(
  "/:userID/cart",
  (req: Request, res: Response, next: NextFunction) => {
    controller.getCart(req, res, next);
  }
);
router.post("/cart", (req: Request, res: Response, next: NextFunction) => {
  controller.addProductToCart(req, res, next);
});
router.delete(
  "/:userID/cart/:itemID",
  (req: Request, res: Response, next: NextFunction) => {
    controller.removeProductFromCart(req, res, next);
  }
);
router.get(
  "/:userID/credit",
  (req: Request, res: Response, next: NextFunction) => {
    controller.getCreditCard(req, res, next);
  }
);
router.get(
  "/:userID/address",
  (req: Request, res: Response, next: NextFunction) => {
    controller.getAddress(req, res, next);
  }
);

export default router;
