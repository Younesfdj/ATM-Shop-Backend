import { prismaClient } from "../config/prisma";

export const testService = async () => {
  const t = await prismaClient.testtable.create({
    data: {
      testCol: 20,
    },
  });
  const test = await prismaClient.testtable.findMany();
  return test;
};
