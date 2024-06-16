import express, { NextFunction, Request, Response } from "express";
import controller from "../Controllers/OrderController";
const router = express.Router();

/**
 * @swagger
 * /orders/{orderID}:
 *   get:
 *     summary: Get detailed order information
 *     description: Retrieves detailed information about a specific order.
 *     parameters:
 *       - in: path
 *         name: orderID
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the order to retrieve details for.
 *     responses:
 *       '200':
 *         description: Detailed order information retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID of the order.
 *                 date:
 *                   type: string
 *                   format: date-time
 *                   description: Date and time when the order was created.
 *                 buyerID:
 *                   type: integer
 *                   description: ID of the buyer (user).
 *                 status:
 *                   type: string
 *                   enum: [preparing, readyForDelivery, delivering, reachedDestination]
 *                   description: Current status of the order.
 *       '404':
 *         description: Order not found.
 */
router.get("/:orderID", (req: Request, res: Response, next: NextFunction) => {
    controller.getDetailedOrder(req, res, next);
});

/**
 * @swagger
 * /orders/:
 *   post:
 *     summary: Create a new order
 *     description: Creates a new order based on the provided user ID.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userID:
 *                 type: integer
 *                 description: ID of the user for whom the order is created.
 *                 example: 123
 *     responses:
 *       '201':
 *         description: Order successfully created.
 *       '500':
 *         description: Internal server error.
 */
router.post("/", (req: Request, res: Response, next: NextFunction) => {
  controller.createOrder(req, res, next);
});

/**
 * @swagger
 * /orders/{orderID}/retrieve:
 *   post:
 *     summary: Retrieve an order
 *     description: Deletes or retrieves an order based on the provided order ID.
 *     parameters:
 *       - in: path
 *         name: orderID
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the order to retrieve.
 *     responses:
 *       '200':
 *         description: Order successfully retrieved.
 *       '404':
 *         description: Order not found.
 */
router.post("/:orderID/retrieve", (req: Request, res: Response, next: NextFunction) => {
  controller.retreiveOrder(req, res, next);
});

/**
 * @swagger
 * /orders/{orderID}/status:
 *   get:
 *     summary: Get order status
 *     description: Retrieves the status of a specific order based on the provided order ID.
 *     parameters:
 *       - in: path
 *         name: orderID
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the order to retrieve status for.
 *     responses:
 *       '200':
 *         description: Order status retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   enum: [preparing, readyForDelivery, delivering, reachedDestination]
 *                   description: Current status of the order.
 *       '404':
 *         description: Order not found.
 */
router.get("/:orderID/status", (req: Request, res: Response, next: NextFunction) => {
  controller.getOrderStatus(req, res, next);
});

/**
 * @swagger
 * /orders/{orderID}/status/{status}:
 *   patch:
 *     summary: Update order status
 *     description: Updates the status of a specific order based on the provided order ID and new status.
 *     parameters:
 *       - in: path
 *         name: orderID
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the order to update status for.
 *       - in: path
 *         name: status
 *         required: true
 *         schema:
 *           type: string
 *         description: New status to set for the order.
 *     responses:
 *       '200':
 *         description: Order status updated successfully.
 *       '404':
 *         description: Order not found.
 */
router.patch("/:orderID/status/:status", (req: Request, res: Response, next: NextFunction) => {
  controller.updateOrderStatus(req, res, next);
});

export default router;
