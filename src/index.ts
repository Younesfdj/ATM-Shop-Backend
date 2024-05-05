import express from "express";
import testRouter from "./routes/test.router";
import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import productRouter from "./routes/products.router";

const PORT = process.env.PORT || 3000;
export const prismaClient = new PrismaClient({
  log: ["query"],
});

const app = express();
app.use(express.json());
app.use("/api/v1", testRouter);
app.use("/api/v1", productRouter);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
