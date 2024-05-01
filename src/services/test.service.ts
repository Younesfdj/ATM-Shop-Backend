import { prismaClient } from "..";

export const testService = async () => {
  const test = await prismaClient.testtable.findMany();
  return test;
};
