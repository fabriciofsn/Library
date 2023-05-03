import { server } from "./server/server";
const express = require("express");

server.use(express.json());

server.listen(3030, () => console.log("Server started"));
