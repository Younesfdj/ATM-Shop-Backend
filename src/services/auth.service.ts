import { prismaClient } from "..";
import { BadRequestError } from "../errors/bad-request";
import { generateToken, verifyToken } from "../utils/jwt";
const registerUserService = async (
  UserEmail: string,
  UserName: string,
  UserPassword: string,
  UserPhone: string
) => {
  try {
    const userExist = await prismaClient.user.findFirst({
      where: {
        UserEmail,
      },
    });
    if (userExist) {
      return new BadRequestError("User already exist", 1002);
    }
    const result = await prismaClient.user.create({
      data: {
        UserEmail,
        UserName,
        UserPassword,
        UserPhone,
      },
    });
    const token = generateToken({
      UserId: result.UserId,
      UserRole: result.UserRole,
    });
    return {
      data: {
        id: result.UserId,
        UserEmail: result.UserEmail,
        UserName: result.UserName,
        UserPhone: result.UserPhone,
        UserRole: result.UserRole,
      },
      token,
    };
  } catch (error) {
    return new Error("Internal server error");
  }
};

const loginUserService = async (email: string, password: string) => {
  console.log(email, password);
};
const registerAdminService = async (
  UserEmail: string,
  UserName: string,
  UserPassword: string,
  UserPhone: string
) => {
  const result = await prismaClient.user.create({
    data: {
      UserEmail,
      UserName,
      UserPassword,
      UserPhone,
      UserRole: "ADMIN",
    },
  });
  return result;
};

export { registerUserService, loginUserService, registerAdminService };
