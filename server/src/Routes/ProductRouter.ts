import express, { Request, Response, NextFunction } from "express";
import controller from "../Controllers/ProductController";
const router = express.Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  controller.getList(req, res, next);
});
router.get("/:productID", (req: Request, res: Response, next: NextFunction) => {
  controller.getProductByID(req, res, next);
});
router.get(
  "/search/:serachPhrase",
  (req: Request, res: Response, next: NextFunction) => {
    controller.getFilteredList(req, res, next);
  }
);
router.patch(
  "/:productID/stock/:stock",
  (req: Request, res: Response, next: NextFunction) => {
    controller.updateStockForProduct(req, res, next);
  }
);
router.delete(
  "/:productID",
  (req: Request, res: Response, next: NextFunction) => {
    controller.deleteProduct(req, res, next);
  }
);
router.post("/", (req: Request, res: Response, next: NextFunction) => {
  controller.addProduct(req, res, next);
});

export default router;
