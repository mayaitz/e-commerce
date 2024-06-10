import { Request, Response } from "express";
import service from "../Services/OrderService";
import { Status } from "@prisma/client";

export default {
  createOrder: async (req: Request, res: Response) => {
    try {
      await service.createOrder(req.body.userID);
      res.status(201).send("order created");
    } catch (error) {
      res.status(400).send("error while creating order");
    }
  },

  getDetailedOrder: async (req: Request, res: Response) => {
    try {
      res.status(200).send(await service.getDetailedOrder(+req.params.orderID));
    } catch (error) {
      res.status(404).send("not found");
    }
  },

  retreiveOrder: async (req: Request, res: Response) => {
    try {
      await service.retreiveOrder(+req.params.orderID);
      res.status(200).send("deleted.");
    } catch (error) {
      res.status(404).send("not found");
    }
  },

  getOrderStatus: async (req: Request, res: Response) => {
    try {
      res.status(200).send(await service.getOrderStatus(+req.params.orderID));
    } catch (error) {
      res.status(404).send("not found");
    }
  },

  updateOrderStatus: async (req: Request, res: Response) => {
    try {
      await service.updateOrderStatus(+req.params.orderID, <Status>req.params.status);
      res.status(200).send("updated successfully");
    } catch (error) {
      res.status(404).send("error");
    }
  },
};
