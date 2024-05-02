import { PrismaClient } from "@prisma/client";
import { products } from "./data";

async function main(prisma: PrismaClient) {
  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }
}

export default main;
