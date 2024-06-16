import express, { NextFunction, Request, Response } from "express";
import controller from "../Controllers/UserController";
const router = express.Router();

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Register a new user
 *     description: Creates a new user with optional credit card and address details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: The first name of the user.
 *               lastName:
 *                 type: string
 *                 description: The last name of the user.
 *               email:
 *                 type: string
 *                 description: The email address of the user (must be unique).
 *               password:
 *                 type: string
 *                 description: The password for the user account.
 *               phoneNumber:
 *                 type: integer
 *                 description: The phone number of the user (optional).
 *               profileURL:
 *                 type: string
 *                 description: URL of the user's profile picture (optional).
 *               creditCard:
 *                 type: object
 *                 properties:
 *                   cvc:
 *                     type: integer
 *                     description: The CVC number of the credit card.
 *                   creditNumber:
 *                     type: integer
 *                     description: The credit card number.
 *                   experationDate:
 *                     type: string
 *                     format: date-time
 *                     description: The expiration date of the credit card.
 *                 description: Optional credit card details.
 *               address:
 *                 type: object
 *                 properties:
 *                   country:
 *                     type: string
 *                     description: The country of the user's address.
 *                   city:
 *                     type: string
 *                     description: The city of the user's address.
 *                   street:
 *                     type: string
 *                     description: The street name of the user's address.
 *                   houseNumber:
 *                     type: integer
 *                     description: The house number of the user's address.
 *                   floor:
 *                     type: integer
 *                     description: The floor number of the user's address (optional).
 *                   apartment:
 *                     type: integer
 *                     description: The apartment number of the user's address (optional).
 *                 description: Optional address details.
 *     responses:
 *       '201':
 *         description: User registered successfully.
 *       '500':
 *         description: Internal server error.
 */
router.post("/register", (req: Request, res: Response, next: NextFunction) => {
  controller.register(req, res, next);
});


/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Login user
 *     description: Authenticates a user based on email and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The email address of the user.
 *               password:
 *                 type: string
 *                 description: The password for the user account.
 *     responses:
 *       '200':
 *         description: User authenticated successfully.
 *       '400':
 *         description: Invalid email or password.
 */
router.post("/login", (req: Request, res: Response, next: NextFunction) => {
  controller.login(req, res, next);
});


/**
 * @swagger
 * /users/{userID}/edit:
 *   patch:
 *     summary: Edit user information
 *     description: Updates user information such as name, email, phone number, etc.
 *     parameters:
 *       - in: path
 *         name: userID
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the user to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: The first name of the user.
 *               lastName:
 *                 type: string
 *                 description: The last name of the user.
 *               email:
 *                 type: string
 *                 description: The email address of the user (must be unique).
 *               phoneNumber:
 *                 type: integer
 *                 description: The phone number of the user (optional).
 *               profileURL:
 *                 type: string
 *                 description: URL of the user's profile picture (optional).
 *     responses:
 *       '200':
 *         description: User information updated successfully.
 *       '500':
 *         description: Internal server error.
 */
router.patch(
  "/:userID/edit",
  (req: Request, res: Response, next: NextFunction) => {
    controller.editUser(req, res, next);
  }
);

/**
 * @swagger
 * /users/{userID}/orders:
 *   get:
 *     summary: Get user orders
 *     description: Retrieves a list of orders placed by the user.
 *     parameters:
 *       - in: path
 *         name: userID
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the user whose orders to retrieve.
 *     responses:
 *       '200':
 *         description: A list of orders placed by the user.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 *       '500':
 *         description: Internal server error.
 */
router.get(
  "/:userID/orders",
  (req: Request, res: Response, next: NextFunction) => {
    controller.getUserOrders(req, res, next);
  }
);

/**
 * @swagger
 * /users/{userID}/cart:
 *   get:
 *     summary: Get user cart
 *     description: Retrieves the contents of the user's shopping cart.
 *     parameters:
 *       - in: path
 *         name: userID
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the user whose cart to retrieve.
 *     responses:
 *       '200':
 *         description: The user's shopping cart.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CartItem'
 *       '500':
 *         description: Internal server error.
 */
router.get(
  "/:userID/cart",
  (req: Request, res: Response, next: NextFunction) => {
    controller.getCart(req, res, next);
  }
);

/**
 * @swagger
 * /users/cart:
 *   post:
 *     summary: Add product to user cart
 *     description: Adds a product to the user's shopping cart.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userID:
 *                 type: integer
 *                 description: The ID of the user.
 *               productID:
 *                 type: integer
 *                 description: The ID of the product to add.
 *               quantity:
 *                 type: integer
 *                 description: The quantity of the product to add.
 *               note:
 *                 type: string
 *                 description: Optional note for the product.
 *     responses:
 *       '201':
 *         description: Product added to cart successfully.
 *       '500':
 *         description: Internal server error.
 */
router.post("/cart", (req: Request, res: Response, next: NextFunction) => {
  controller.addProductToCart(req, res, next);
});


/**
 * @swagger
 * /users/{userID}/cart/{itemID}:
 *   delete:
 *     summary: Remove product from user cart
 *     description: Removes a product from the user's shopping cart.
 *     parameters:
 *       - in: path
 *         name: userID
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the user.
 *       - in: path
 *         name: itemID
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the cart item to remove.
 *     responses:
 *       '200':
 *         description: Product removed from cart successfully.
 *       '500':
 *         description: Internal server error.
 */
router.delete(
  "/:userID/cart/:itemID",
  (req: Request, res: Response, next: NextFunction) => {
    controller.removeProductFromCart(req, res, next);
  }
);

/**
 * @swagger
 * /users/{userID}/credit:
 *   get:
 *     summary: Get user credit card information
 *     description: Retrieves the credit card information associated with the user.
 *     parameters:
 *       - in: path
 *         name: userID
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the user whose credit card information to retrieve.
 *     responses:
 *       '200':
 *         description: The user's credit card information.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreditCard'
 *       '500':
 *         description: Internal server error.
 */
router.get(
  "/:userID/credit",
  (req: Request, res: Response, next: NextFunction) => {
    controller.getCreditCard(req, res, next);
  }
);

/**
 * @swagger
 * /users/{userID}/address:
 *   get:
 *     summary: Get user address information
 *     description: Retrieves the address information associated with the user.
 *     parameters:
 *       - in: path
 *         name: userID
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the user whose address information to retrieve.
 *     responses:
 *       '200':
 *         description: The user's address information.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Address'
 *       '500':
 *         description: Internal server error.
 */
router.get(
  "/:userID/address",
  (req: Request, res: Response, next: NextFunction) => {
    controller.getAddress(req, res, next);
  }
);

export default router;
