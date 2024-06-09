import express from "express";
const router = express.Router();

router.get("/", (req, res) => {});
router.get("/:productID", (req, res) => {});
router.get("/filtered", (req, res) => {});
router.patch("/:productID/edit", (req, res) => {});
router.delete("/:productID", (req, res) => {});
router.post("/", (req, res) => {});

export default router;
