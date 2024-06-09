import express from "express";
const router = express.Router()

router.get("/", (req, res) => {});
router.get("/:productID", (req, res) => {});
router.get("/filtered", (req, res) => {});

export default router;