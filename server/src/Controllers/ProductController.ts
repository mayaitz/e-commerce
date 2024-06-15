import { NextFunction, Request, Response } from "express";
import service from "../Services/ProductService";
import CustomError from "../Middlewares/CustomError";

export default {
  getList: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res
        .status(200)
        .send(await service.getProductsList());
    } catch (error) {
      if (error instanceof Error)
        next(
          new CustomError("error while getting products: " + error.message, 500)
        );
      next(error);
    }
  },

  getProductByID: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).send(await service.getProductByID(+req.params.productID));
    } catch (err) {
      const customError: CustomError = new CustomError(
        "Product with given id not found.",
        404
      );
      next(customError);
    }
  },

  getFilteredList: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res
        .status(200)
        .send(await service.getFilteredList(req.params.serachPhrase));
    } catch (error) {
      if (error instanceof Error)
        next(
          new CustomError("error while getting products: " + error.message, 500)
        );
      next(error);
    }
  },

  updateStockForProduct: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      res
        .status(200)
        .send(
          await service.updateStock(+req.params.productID, +req.params.stock)
        );
    } catch (error) {
      const customError: CustomError = new CustomError(
        "could not update given product stock.",
        500
      );
      next(customError);
    }
  },

  deleteProduct: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await service.deleteProduct(+req.params.productID);
      res.status(200).send("deleted successfully");
    } catch (error) {
      if (error instanceof Error)
        next(
          new CustomError("error while deleting product: " + error.message, 500)
        );
      next(error);
    }
  },

  addProduct: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await service.addProduct(req.body);
      res.status(201).send("product created successfully.");
    } catch (error) {
      if (error instanceof Error)
        next(
          new CustomError("error while creating product: " + error.message, 500)
        );
      next(error);
    }
  },
};
