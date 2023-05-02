"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const Connection = new sequelize_1.Sequelize("library", "postgres", "xtm440", {
    dialect: "postgres",
    host: "localhost",
    port: 5432,
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        Connection.sync().then(() => {
            console.log("Connected to the database");
        });
    }
    catch (error) {
        console.log(`There was an error ${error}`);
    }
}))();
exports.default = Connection;
