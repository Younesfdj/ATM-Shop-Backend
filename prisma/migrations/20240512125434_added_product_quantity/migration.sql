/*
  Warnings:

  - A unique constraint covering the columns `[ProductSKU]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ProductQuantity` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "ProductQuantity" INTEGER NOT NULL,
ALTER COLUMN "ProductCategoryId" SET DEFAULT 1;

-- CreateIndex
CREATE UNIQUE INDEX "Product_ProductSKU_key" ON "Product"("ProductSKU");
