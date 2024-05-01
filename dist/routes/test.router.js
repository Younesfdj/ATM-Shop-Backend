"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const test_controller_1 = require("../controllers/test.controller");
const testRouter = (0, express_1.Router)();
testRouter.get("/test", test_controller_1.test);
exports.default = testRouter;
