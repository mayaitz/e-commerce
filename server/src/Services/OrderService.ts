import { Response } from "express";
import { PrismaClient, Status } from "@prisma/client";

const prisma = new PrismaClient();

export default {
  createOrder: async (userID: number) => {
    await prisma.order.create({
      data: {
        buyerID: userID,
        items: {
          create: await prisma.cartItem.findMany({
            where: {
              userID: userID,
            },
            select: {
              quantity: true,
              productID: true,
              product: true,
              note: true,
            },
          }),
        },
      },
    });

    await prisma.cartItem.deleteMany({
      where: {
        userID: userID,
      },
    });
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
