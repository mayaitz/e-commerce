import { Response } from "express";
import { PrismaClient, Status } from "@prisma/client";
import CustomError from "../Middlewares/CustomError";

const prisma = new PrismaClient();

export default {
  createOrder: async (userID: number) => {
    try {
      const cartItems = await prisma.cartItem.findMany({
        where: {
          userID: userID,
        },
        select: {
          quantity: true,
          product: {
            select: {
              id: true,
              title: true,
              stock: true,
              price: true,
              description: true,
              imageURL: true,
            },
          },
          note: true,
        },
      });

      if (cartItems.length === 0) {
        throw new CustomError("no items found in cart for user" + userID, 404);
      }

      const order = await prisma.order.create({
        data: {
          buyerID: userID,
          items: {
            create: cartItems.map((cartItem) => ({
              quantity: cartItem.quantity,
              product: { connect: { id: cartItem.product.id } },
              note: cartItem.note,
            })),
          },
        },
        include: {
          items: true,
        },
      });

      await prisma.cartItem.deleteMany({
        where: {
          userID: userID,
        },
      });

      return order;
    } catch (error) {
      throw error;
    }
  },

  getDetailedOrder: async (orderID: number) => {
    return await prisma.order.findUniqueOrThrow({
      where: {
        id: orderID,
      },
    });
  },

  retreiveOrder: async (orderID: number) => {
    //return the total price of the order

    prisma.order.delete({
      where: {
        id: orderID,
      },
    });
  },

  getOrderStatus: async (orderID: number) => {
    return await prisma.order.findUniqueOrThrow({
      where: {
        id: orderID,
      },
      select: {
        status: true,
      },
    });
  },

  updateOrderStatus: (orderID: number, status: Status) => {
    prisma.order.update({
      where: {
        id: orderID,
      },
      data: {
        status: status,
      },
    });
  },
};
