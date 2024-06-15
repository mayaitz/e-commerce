import { PrismaClient } from "@prisma/client";
import CustomError from "../Middlewares/CustomError";

const prisma = new PrismaClient();
export default {
  register: async (newUser: any) => {
    return await prisma.user.create({
      include: {
        creditCard: true,
        address: true,
      },
      data: {
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        creditCard: {
          create: { ...newUser.creditCard },
        },
        address: {
          create: { ...newUser.address },
        },
        email: newUser.email,
        password: newUser.password,
        profileURL: newUser.profileURL,
        phoneNumber: newUser.phoneNumber,
      },
    });
  },

  login: async (email: string, password: string) => {
    try {
      return await prisma.user.findUniqueOrThrow({
        where: {
          email: email,
          password: password,
        },
      });
    } catch (error) {
      throw new CustomError("email or password incorrect:( ", 400);
    }
  },

  editUser: async (userId: number, user: any) => {
    return await prisma.user.update({
      where: {
        id: userId,
      },
      data: { ...user },
    });
  },

  getUserOrders: async (userID: number) => {
    try {
      return await prisma.order.findMany({
        where: {
          buyerID: userID,
        },
        include: {
          items: true,
        },
      });
    } catch (error) {
      throw error;
    }
  },

  getCart: async (userID: number) => {
    try {
      return await prisma.user.findUniqueOrThrow({
        where: {
          id: userID,
        },
        select: {
          cartItems: {
            select: {
              productID: true,
            },
          },
        },
      });
    } catch (error) {
      throw error;
    }
  },

  addProductToCart: async (newItem: any) => {
    try {
      await prisma.cartItem.create({
        data: { ...newItem },
      });
    } catch (error) {
      throw error;
    }
  },

  deleteCartItem: async (productID: number, userID: number) => {
    try {
      await prisma.cartItem.delete({
        where: {
          userID_productID: {
            productID: productID,
            userID: userID,
          },
        },
      });
    } catch (error) {
      throw error;
    }
  },

  getCreditCart: async (userID: number) => {
    try {
      return await prisma.user.findUniqueOrThrow({
        where: {
          id: userID,
        },
        select: {
          creditCard: true,
        },
      });
    } catch (error) {
      throw error;
    }
  },

  getAddress: async (userID: number) => {
    try {
      return await prisma.user.findUniqueOrThrow({
        where: {
          id: userID,
        },
        select: {
          address: true,
        },
      });
    } catch (error) {
      throw error;
    }
  },
};
