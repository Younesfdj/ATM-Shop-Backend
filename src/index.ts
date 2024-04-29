import express from "express";
import testRouter from "./routes/test.router";
import "dotenv/config";

const PORT = process.env.PORT || 3000;

const app = express();
app.use("/", testRouter);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
