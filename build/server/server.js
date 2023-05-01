"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express = require("express");
const routers_1 = __importDefault(require("../routers/routers"));
const server = express();
exports.server = server;
server.use("/", routers_1.default);
