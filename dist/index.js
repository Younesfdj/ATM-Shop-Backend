"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const test_router_1 = __importDefault(require("./routes/test.router"));
require("dotenv/config");
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use("/", test_router_1.default);
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
