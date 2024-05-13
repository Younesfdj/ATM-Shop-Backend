import { InternalError } from "../errors/internal-error";
import { prismaClient } from "../config/prisma";
import { BadRequestError } from "../errors/bad-request";
import { OrderDetail } from "../types/OrderDetail";
import { log } from "../utils/logger";

/**
 * @description  Get Order Detail by Id
 * @param DetailId  - number
 * @returns  Error | BadRequestError | OrderDetail
 */

export const getOrderDetailService = async (DetailId: number) => {
  try {
  } catch (error: any) {
    return new InternalError("Something went wrong", 1007, error);
  }
};

/**
 * @description  Get Orders Detail
 * @returns  Error | BadRequestError | OrderDetail
 */

export const getOrdersDetailService = async () => {
  try {
  } catch (error: any) {
    return new InternalError("Something went wrong", 1007, error);
  }
};

/**
 * @description  Add an Order Detail
 * @param newOrderDetail  - OrderDetail
 * @returns  Error | BadRequestError | OrderDetail
 */

export const addOrderDetailService = async (
  newOrderDetail: OrderDetail,
  userId: number
) => {
  try {
  } catch (error) {
    return new Error("Internal Server Error");
  }
};

/**
 * @description  Update an Order Detail
 * @param DetailId  - number
 * @param newOrderDetail  - Order
 * @returns  Error | BadRequestError | Order
 */

export const updateOrderDetailService = async (
  DetailId: number,
  newOrderDetail: OrderDetail
) => {
  try {
  } catch (error: any) {
    return new InternalError("Something went wrong", 1007, error);
  }
};

/**
 * @description  Delete an Order Detail
 * @param DetailId  - number
 * @returns  Error | BadRequestError | Order
 */

export const deleteOrderDetailService = async (DetailId: number) => {
  try {
  } catch (error: any) {
    return new InternalError("Something went wrong", 1007, error);
  }
};
