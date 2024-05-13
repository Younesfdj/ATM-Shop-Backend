/*
  Warnings:

  - The `OrderStatus` column on the `Order` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'SHIPPING', 'DELIVERED');

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "OrderStatus",
ADD COLUMN     "OrderStatus" "OrderStatus" NOT NULL DEFAULT 'PENDING';
