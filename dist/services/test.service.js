"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testService = void 0;
const __1 = require("..");
const testService = async () => {
    const test = await __1.prismaClient.testtable.findMany();
    return test;
};
exports.testService = testService;
