import express, { Request, Response } from "express";
const router = express.Router();

router.get("/", (req: Request, res: Response) => {});
router.get("/:productID", (req: Request, res: Response) => {});
router.get("/filtered", (req: Request, res: Response) => {});
router.patch("/:productID/edit", (req: Request, res: Response) => {});
router.delete("/:productID", (req: Request, res: Response) => {});
router.post("/", (req: Request, res: Response) => {});

export default router;
