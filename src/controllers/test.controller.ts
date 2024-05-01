import { Request, Response } from "express";
import { testService } from "../services/test.service";

export const test = async (req: Request, res: Response) => {
  const response = await testService();
  console.log(response);
  res.status(200).json(response);
};
