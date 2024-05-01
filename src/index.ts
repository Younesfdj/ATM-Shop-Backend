import express from "express";
import testRouter from "./routes/test.router";
import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const PORT = process.env.PORT || 3000;
export const prismaClient = new PrismaClient({
  log: ["query"],
});

const app = express();
app.use(express.json());
app.use("/api/v1", testRouter);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
