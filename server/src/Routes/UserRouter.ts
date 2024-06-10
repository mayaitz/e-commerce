import express, { Request, Response } from "express";
const router = express.Router();

router.post("/register", (req: Request, res: Response) => {});
router.get("/login", (req: Request, res: Response) => {});
router.patch("/:userID/edit", (req: Request, res: Response) => {});
router.get("/:userID/orders", (req: Request, res: Response) => {});
router.get("/cart", (req: Request, res: Response) => {});
router.post("/cart", (req: Request, res: Response) => {});
router.delete("/cart/:itemID", (req: Request, res: Response) => {});
router.post("/:userID/credit", (req: Request, res: Response) => {});
router.post("/:userID/address", (req: Request, res: Response) => {});
router.delete("/userID/credit", (req: Request, res: Response) => {});
router.delete("/userID/address", (req: Request, res: Response) => {});

export default router;
