import { hashSync, compareSync } from "bcryptjs";

const hashPassword = (password: string): string => {
  return hashSync(password, 10);
};

const comparePassword = (password: string, hashedPassword: string): boolean => {
  return compareSync(password, hashedPassword);
};

export { hashPassword, comparePassword };
