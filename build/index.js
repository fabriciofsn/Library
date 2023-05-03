"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
const express = require("express");
server_1.server.use(express.json());
server_1.server.listen(3030, () => console.log("Server started"));
