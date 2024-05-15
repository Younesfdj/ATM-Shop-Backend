import { InternalError } from "../../errors/internal-error";
import { prismaClient } from "../../config/prisma";
import { BadRequestError } from "../../errors/bad-request";
import { Order, OrderI } from "../../types/Order";
import { addOrderDetailService } from "./orderDetail.service";
import { log } from "../../utils/logger";

/**
 * @description  Get Order by Id
 * @param OrderId  - number
 * @returns  Error | BadRequestError | Order
 */

export const getOrderService = async (OrderId: number) => {
  try {
    const order = await prismaClient.order.findUnique({
      where: {
        OrderId: OrderId,
      },
    });
    if (!order) {
      return new BadRequestError("Order not found", 4001);
    }
    return order;
  } catch (error: any) {
    return new InternalError("Something went wrong", 1007, error);
  }
};

/**
 * @description  Get Orders
 * @returns  Error | BadRequestError | Order
 */

export const getOrdersService = async () => {
  try {
    const orders = await prismaClient.order.findMany();
    return orders;
  } catch (error: any) {
    return new InternalError("Something went wrong", 1007, error);
  }
};

/**
 * @description  Add an Order
 * @param newOrder  - Order
 * @returns  Error | BadRequestError | Order
 */

export const addOrderService = async (newOrder: Order, userId: number) => {
  try {
    const userExists = await prismaClient.user.findUnique({
      where: {
        UserId: userId,
      },
    });
    if (!userExists) {
      return new BadRequestError("User not found", 1001);
    }
    const order = await prismaClient.order.create({
      data: {
        OrderAdress: newOrder.OrderAdress,
        OrderAmount: newOrder.OrderAmount,
        OrderCity: newOrder.OrderCity,
        OrderEmail: newOrder.OrderEmail,
        OrderPhone: newOrder.OrderPhone,
        OrderStatus: newOrder.OrderStatus,
        OrderUserId: userId,
      },
    });
    return {
      OrderId: order.OrderId,
      OrderAmount: order.OrderAmount,
      OrderPhone: order.OrderPhone,
      OrderEmail: order.OrderEmail,
      OrderDate: order.OrderDate,
      OrderCity: order.OrderCity,
      OrderAdress: order.OrderAdress,
      OrderStatus: order.OrderStatus,
    };
  } catch (error) {
    return new InternalError("Something went wrong", 1007, error);
  }
};

/**
 * @description  Update an Order
 * @param OrderId  - number
 * @param newOrder  - Order
 * @returns  Error | BadRequestError | Order
 */

export const updateOrderService = async (OrderId: number, newOrder: Order) => {
  try {
  } catch (error: any) {
    return new InternalError("Something went wrong", 1007, error);
  }
};

/**
 * @description  Delete an Order
 * @param OrderId  - number
 * @returns  Error | BadRequestError | OrderI
 */

export const deleteOrderService = async (OrderId: number) => {
  try {
    const orderExists = await prismaClient.order.findUnique({
      where: {
        OrderId,
      },
    });
    if (!orderExists) {
      return new BadRequestError("Order not found", 4001);
    }
    const order = await prismaClient.order.delete({
      where: {
        OrderId,
      },
    });
    return {
      OrderId: order.OrderId,
      OrderAmount: order.OrderAmount,
      OrderPhone: order.OrderPhone,
      OrderEmail: order.OrderEmail,
      OrderDate: order.OrderDate,
      OrderCity: order.OrderCity,
      OrderAdress: order.OrderAdress,
      OrderStatus: order.OrderStatus,
    };
  } catch (error: any) {
    return new InternalError("Something went wrong", 1007, error);
  }
};
/**
 * @description  Make an Order
 * @param order  - OrderI
 * @returns  Error | BadRequestError | OrderI
 */
export const makeOrderService = async (order: OrderI) => {
  try {
    const orderResult = await addOrderService(
      order.orderInfo,
      order.orderUserId as number
    );
    if (orderResult instanceof Error) {
      return orderResult;
    }

    for (let index = 0; index < order.orderProducts.length; index++) {
      const element = order.orderProducts[index];
      const orderDetailResult = await addOrderDetailService({
        DetailOrderId: orderResult.OrderId,
        DetailProductId: element.DetailProductId,
        DetailQuantity: element.DetailQuantity,
      });
      if (orderDetailResult instanceof Error) {
        return orderDetailResult;
      }
    }

    return {
      orderInfo: orderResult,
      orderUserId: order.orderUserId,
      orderProducts: order.orderProducts,
    };
  } catch (error: any) {
    return new InternalError("Something went wrong", 1007, error);
  }
};
