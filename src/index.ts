import express from "express";

import testRouter from "./routes/test.router";
import authRouter from "./routes/auth.router";
import productRouter from "./routes/products.router";
import categoryRouter from "./routes/category.route";
import errorHandler from "./middlewares/errors";
import "dotenv/config";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use("/api/v1", testRouter);

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/category", categoryRouter);
app.use(errorHandler);

app.use(errorHandler);
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
