const express = require("express");
import router from "../routers/routers";

const server = express();

server.use("/", router);

export { server };
