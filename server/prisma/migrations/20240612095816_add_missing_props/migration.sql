/*
  Warnings:

  - A unique constraint covering the columns `[userID]` on the table `Address` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userID]` on the table `CreditCard` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `imageURL` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressID` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `creditID` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_userID_fkey";

-- DropForeignKey
ALTER TABLE "CartItem" DROP CONSTRAINT "CartItem_productID_fkey";

-- DropForeignKey
ALTER TABLE "CartItem" DROP CONSTRAINT "CartItem_userID_fkey";

-- DropForeignKey
ALTER TABLE "CreditCard" DROP CONSTRAINT "CreditCard_userID_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_orderID_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_productID_fkey";

-- AlterTable
ALTER TABLE "CartItem" ALTER COLUMN "note" DROP NOT NULL;

-- AlterTable
ALTER TABLE "OrderItem" ALTER COLUMN "note" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "imageURL" TEXT NOT NULL,
ADD COLUMN     "title" VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "addressID" INTEGER NOT NULL,
ADD COLUMN     "creditID" INTEGER NOT NULL,
ADD COLUMN     "profileURL" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Address_userID_key" ON "Address"("userID");

-- CreateIndex
CREATE UNIQUE INDEX "CreditCard_userID_key" ON "CreditCard"("userID");

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CreditCard" ADD CONSTRAINT "CreditCard_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderID_fkey" FOREIGN KEY ("orderID") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_productID_fkey" FOREIGN KEY ("productID") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_productID_fkey" FOREIGN KEY ("productID") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
