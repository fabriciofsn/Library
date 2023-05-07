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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../database/user"));
const express = require("express");
const path = require("path");
const bcrypt_1 = require("bcrypt");
const router = express.Router();
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});
router.get("/cadastrar", (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});
router.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});
router.post("/cadastrar/usuario", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { nome, email, senha } = req.body;
    const hashPassword = yield (0, bcrypt_1.hash)(senha, 8);
    const verificaEmail = yield user_1.default.findOne({ where: { email } });
    if (!verificaEmail) {
        try {
            yield user_1.default.create({
                nome,
                email,
                senha: hashPassword,
            });
            res.redirect("/login");
        }
        catch (error) {
            res.json(`There was an error -> ${error}`);
        }
    }
    else {
        res.json("Email já cadastrado");
    }
}));
exports.default = router;
