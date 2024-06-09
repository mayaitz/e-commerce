import express from "express";
const router = express.Router();

router.get("/:orderID", (req, res) => {});
router.post("/", (req, res) => {});
router.post("/:orderID/retrieve", (req, res) => {});
router.get("/:orderID/status", (req, res) => {});
router.patch("/:orderID/status/:status", (req, res) => {});

export default router;
