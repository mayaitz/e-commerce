import express, { Request, Response, NextFunction } from "express";
import controller from "../Controllers/ProductController";
const router = express.Router();

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get a list of products
 *     description: Retrieves a list of all products.
 *     responses:
 *       '200':
 *         description: A list of products.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The product's ID.
 *                   title:
 *                     type: string
 *                     description: The title of the product.
 *                   stock:
 *                     type: integer
 *                     description: The current stock of the product.
 *                   price:
 *                     type: number
 *                     description: The price of the product.
 *                   description:
 *                     type: string
 *                     description: A description of the product.
 *                   imageURL:
 *                     type: string
 *                     description: URL of the product image.
 */
router.get("/", (req: Request, res: Response, next: NextFunction) => {
  controller.getList(req, res, next);
});


/**
 * @swagger
 * /products/{productID}:
 *   get:
 *     summary: Get a product by ID
 *     description: Retrieves a product by its ID.
 *     parameters:
 *       - in: path
 *         name: productID
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the product to retrieve.
 *     responses:
 *       '200':
 *         description: A single product object.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The product's ID.
 *                 title:
 *                   type: string
 *                   description: The title of the product.
 *                 stock:
 *                   type: integer
 *                   description: The current stock of the product.
 *                 price:
 *                   type: number
 *                   description: The price of the product.
 *                 description:
 *                   type: string
 *                   description: A description of the product.
 *                 imageURL:
 *                   type: string
 *                   description: URL of the product image.
 *       '404':
 *         description: Product not found.
 */
router.get("/:productID", (req: Request, res: Response, next: NextFunction) => {
  controller.getProductByID(req, res, next);
});


/**
 * @swagger
 * /products/search/{searchPhrase}:
 *   get:
 *     summary: Search products by title or description
 *     description: Retrieves a list of products that match the provided search phrase in their title or description.
 *     parameters:
 *       - in: path
 *         name: searchPhrase
 *         required: true
 *         schema:
 *           type: string
 *         description: Phrase to search for in product titles or descriptions.
 *     responses:
 *       '200':
 *         description: A list of products matching the search criteria.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The product's ID.
 *                   title:
 *                     type: string
 *                     description: The title of the product.
 *                   stock:
 *                     type: integer
 *                     description: The current stock of the product.
 *                   price:
 *                     type: number
 *                     description: The price of the product.
 *                   description:
 *                     type: string
 *                     description: A description of the product.
 *                   imageURL:
 *                     type: string
 *                     description: URL of the product image.
 *       '404':
 *         description: No products found matching the search criteria.
 */
router.get(
  "/search/:serachPhrase",
  (req: Request, res: Response, next: NextFunction) => {
    controller.getFilteredList(req, res, next);
  }
);


/**
 * @swagger
 * /products/{productID}/stock/{stock}:
 *   patch:
 *     summary: Update product stock
 *     description: Updates the stock quantity of a product.
 *     parameters:
 *       - in: path
 *         name: productID
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the product to update.
 *       - in: path
 *         name: stock
 *         required: true
 *         schema:
 *           type: integer
 *         description: New stock quantity to set for the product.
 *     responses:
 *       '200':
 *         description: Product stock updated successfully.
 *       '404':
 *         description: Product not found.
 */
router.patch(
  "/:productID/stock/:stock",
  (req: Request, res: Response, next: NextFunction) => {
    controller.updateStockForProduct(req, res, next);
  }
);

/**
 * @swagger
 * /products/{productID}:
 *   delete:
 *     summary: Delete a product
 *     description: Deletes a product by its ID.
 *     parameters:
 *       - in: path
 *         name: productID
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the product to delete.
 *     responses:
 *       '200':
 *         description: Product deleted successfully.
 *       '404':
 *         description: Product not found.
 */
router.delete(
  "/:productID",
  (req: Request, res: Response, next: NextFunction) => {
    controller.deleteProduct(req, res, next);
  }
);

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Add a new product
 *     description: Creates a new product.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the product.
 *               stock:
 *                 type: integer
 *                 description: The initial stock quantity of the product.
 *               price:
 *                 type: number
 *                 description: The price of the product.
 *               description:
 *                 type: string
 *                 description: A description of the product.
 *               imageURL:
 *                 type: string
 *                 description: URL of the product image.
 *     responses:
 *       '201':
 *         description: Product created successfully.
 *       '500':
 *         description: Internal server error.
 */
router.post("/", (req: Request, res: Response, next: NextFunction) => {
  controller.addProduct(req, res, next);
});

export default router;
