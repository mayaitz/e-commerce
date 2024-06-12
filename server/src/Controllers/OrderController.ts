import { NextFunction, Request, Response } from "express";
import service from "../Services/OrderService";
import { Status } from "@prisma/client";
import CustomError from "../Middlewares/CustomError";

export default {
  createOrder: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await service.createOrder(req.body.userID);
      res.status(201).send("order created");
    } catch (error) {
      if (error instanceof Error)
        next(
          new CustomError("error while creating order: " + error.message, 500)
        );
      next(error);
    }
  },

  getDetailedOrder: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const order = await service.getDetailedOrder(+req.params.orderID);
      res.status(200).send(order);
    } catch (err) {
      const customError: CustomError = new CustomError("Order not found.", 404);
      next(customError);
    }
  },

  retreiveOrder: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await service.retreiveOrder(+req.params.orderID);
      res.status(200).send("deleted.");
    } catch (error) {
      const customError: CustomError = new CustomError("Order not found.", 404);
      next(customError);
    }
  },

  getOrderStatus: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).send(await service.getOrderStatus(+req.params.orderID));
    } catch (error) {
      const customError: CustomError = new CustomError("Order not found.", 404);
      next(customError);
    }
  },

  updateOrderStatus: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      await service.updateOrderStatus(
        +req.params.orderID,
        <Status>req.params.status
      );
      res.status(200).send("updated successfully");
    } catch (error) {
      const customError: CustomError = new CustomError("Order not found.", 404);
      next(customError);
    }
  },
};
