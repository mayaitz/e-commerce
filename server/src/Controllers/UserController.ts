import { NextFunction, Request, Response } from "express";
import service from "../Services/UserService";
import CustomError from "../Middlewares/CustomError";

export default {
  register: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(201).send(await service.register(req.body));
    } catch (error) {
      if (error instanceof Error)
        next(
          new CustomError("error while registering user: " + error.message, 500)
        );
      next(error);
    }
  },

  login: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res
        .status(200)
        .send(await service.login(req.body.email, req.body.password));
    } catch (err) {
      next(err);
    }
  },

  editUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res
        .status(200)
        .send(await service.editUser(+req.params.userID, req.body));
    } catch (error) {
      if (error instanceof Error)
        next(
          new CustomError("error while updating user: " + error.message, 500)
        );
      next(error);
    }
  },

  getUserOrders: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).send(await service.getUserOrders(+req.params.userID));
    } catch (error) {
      const customError: CustomError = new CustomError(
        `could not fetch user ${req.params.userID}'s orders`,
        500
      );
      next(customError);
    }
  },

  getCart: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).send(await service.getCart(+req.params.userID));
    } catch (error) {
      if (error instanceof Error)
        next(
          new CustomError(
            `error while fetching cart for user ${req.params.userID}: ` +
              error.message,
            500
          )
        );
      next(error);
    }
  },

  addProductToCart: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await service.addProductToCart(req.body);
      res.status(201).send("product added to cart successfully.");
    } catch (error) {
      if (error instanceof Error)
        next(new CustomError("error while adding item: " + error.message, 500));
      next(error);
    }
  },

  removeProductFromCart: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      await service.deleteCartItem(+req.params.productID, +req.params.userID);
      res.status(200).send("product removed from cart successfully.");
    } catch (error) {
      if (error instanceof Error)
        next(
          new CustomError("error while removing item: " + error.message, 500)
        );
      next(error);
    }
  },

  getCreditCard: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).send(await service.getCreditCart(+req.params.userID));
    } catch (error) {
      if (error instanceof Error)
        next(
          new CustomError(
            `error while fetching credit card for user ${req.params.userID}: ` +
              error.message,
            500
          )
        );
      next(error);
    }
  },

  getAddress: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).send(await service.getAddress(+req.params.userID));
    } catch (error) {
      if (error instanceof Error)
        next(
          new CustomError(
            `error while fetching address for user ${req.params.userID}: ` +
              error.message,
            500
          )
        );
      next(error);
    }
  },
};
