"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
const test_service_1 = require("../services/test.service");
const test = async (req, res) => {
    const response = await (0, test_service_1.testService)();
    console.log(response);
    res.status(200).json(response);
};
exports.test = test;
