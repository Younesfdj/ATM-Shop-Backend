"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaClient = void 0;
const express_1 = __importDefault(require("express"));
const test_router_1 = __importDefault(require("./routes/test.router"));
require("dotenv/config");
const client_1 = require("@prisma/client");
const PORT = process.env.PORT || 3000;
exports.prismaClient = new client_1.PrismaClient({
    log: ["query"],
});
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/v1", test_router_1.default);
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
