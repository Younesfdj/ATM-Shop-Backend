import * as jwt from "jsonwebtoken";
import "dotenv/config";

export const generateToken = (payload: JwtPayload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: "30d",
  });
  return token;
};

export const verifyToken = (token: string): JwtPayload => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
  return decoded as JwtPayload;
};
