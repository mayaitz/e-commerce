import { Request, Response } from "express";
import service from "../Services/OrderService";
import { Status } from "@prisma/client";

export default {
  createOrder: (req: Request, res: Response) => {
    try {
      service.createOrder(req.body.userID);
      res.send("order created").status(201);
    } catch (error) {
      res.send("error while creating order").status(400);
    }
  },

  getDetailedOrder: (req: Request, res: Response) => {
    try {
      res.send(service.getDetailedOrder(+req.params.orderID)).status(200);
    } catch (error) {
      res.send("not found").status(404);
    }
  },

  retreiveOrder: (req: Request, res: Response) => {
    try {
      service.retreiveOrder(+req.params.orderID);
      res.send("deleted.").status(200);
    } catch (error) {
      res.send("not found").status(404);
    }
  },

  getOrderStatus: (req: Request, res: Response) => {
    try {
      res.send(service.getOrderStatus(+req.params.orderID)).status(200);
    } catch (error) {
      res.send("not found").status(404);
    }
  },

  updateOrderStatus: (req: Request, res: Response) => {
    try {
      service.updateOrderStatus(+req.params.orderID, <Status>req.params.status);
      res.send("updated successfully").status(200);
    } catch (error) {
      res.send("error").status(404);
    }
  },
};
