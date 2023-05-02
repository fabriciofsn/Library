"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize = require("sequelize");
const connection_1 = __importDefault(require("./connection"));
const users = connection_1.default.define("users", {
    nome: {
        type: sequelize.TEXT,
        allowNull: false,
    },
    email: {
        type: sequelize.TEXT,
        allowNull: false,
    },
    senha: {
        type: sequelize.TEXT,
        allowNull: false,
    },
});
exports.default = users;
