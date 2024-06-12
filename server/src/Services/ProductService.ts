import { PrismaClient, Product } from "@prisma/client";

const prisma = new PrismaClient();
export default {
  getProductsList: async () => {
    return prisma.product.findMany({});
  },

  getProductByID: async (productID: number) => {
    return prisma.product.findUniqueOrThrow({
      where: {
        id: productID,
      },
    });
  },

  getFilteredList: async (searchPhrase: string) => {
    return prisma.product.findMany({
      where: {
        OR: [
          {
            title: {
              contains: searchPhrase,
            },
          },
          {
            description: {
              contains: searchPhrase,
            },
          },
        ],
      },
    });
  },

  updateStock: async (productID: number, newStock: number) => {
    try {
      await prisma.product.update({
        where: {
          id: productID,
        },
        data: {
          stock: newStock,
        },
      });
    } catch (error) {
      throw error;
    }
  },

  deleteProduct: async (productID: number) => {
    try {
      await prisma.product.delete({
        where: {
          id: productID,
        },
      });
    } catch (error) {
      throw error;
    }
  },

  addProduct: async (newProduct: any) => {
    try {
      await prisma.product.create({
        data: { ...newProduct },
      });
    } catch (error) {
      throw error;
    }
  },
};
