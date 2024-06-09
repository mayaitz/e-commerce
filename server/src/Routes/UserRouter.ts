import express from "express";
const router = express.Router();

router.post("/register", (req, res) => {});
router.get("/login", (req, res) => {});
router.patch("/:userID/edit", (req, res) => {});
router.get("/:userID/orders", (req, res) => {});
router.get("/cart", (req, res) => {});
router.post("/cart", (req, res) => {});
router.delete("/cart/:itemID", (req, res) => {});
router.post("/:userID/credit", (req, res) => {});
router.post("/:userID/address", (req, res) => {});
router.delete("/userID/credit", (req, res) => {});
router.delete("/userID/address", (req, res) => {});

export default router;
