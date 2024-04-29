"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
const test_service_1 = require("../services/test.service");
const test = (req, res) => {
    const response = (0, test_service_1.testService)();
    res.send(response);
};
exports.test = test;
