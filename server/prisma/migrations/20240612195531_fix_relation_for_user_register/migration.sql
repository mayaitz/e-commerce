/*
  Warnings:

  - You are about to drop the column `addressID` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `creditID` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "addressID",
DROP COLUMN "creditID";
