const express = require("express");
import router from "../routers/routers";
const server = express();

const path = require("path");

server.use(express.static(path.join(__dirname, "../../client/build")));

server.use("/", router);
server.use("/cadastrar", router);
server.use("/login", router);

export { server };
