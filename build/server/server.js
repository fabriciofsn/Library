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
const path = require("path");
server.use(express.static(path.join(__dirname, "../../client/build")));
server.use("/", routers_1.default);
server.use("/cadastrar", routers_1.default);
server.use("/login", routers_1.default);
