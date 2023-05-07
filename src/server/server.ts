import router from "../routers/routers";
const bodyParser = require("body-parser");
const express = require("express");
const server = express();

const path = require("path");

server.use(express.static(path.join(__dirname, "../../client/build")));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(bodyParser.json());

server.use("/", router);
server.use("/cadastrar", router);
server.use("/cadastrar/usuario", router);
server.use("/login", router);

export { server };
